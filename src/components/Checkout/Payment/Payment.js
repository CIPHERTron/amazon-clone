import React, { useState, useEffect } from "react";
import { useStateValue } from "../../../redux/StateProvider";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import stripeAPI from "../../../apis/stripe";
import "./Payment.css";

import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { getBasketTotal } from "../../../redux/Reducer";

function Payment() {
	// eslint-disable-next-line
	const [{ basket, user }, dispatch] = useStateValue();

	const history = useHistory();

	const stripe = useStripe();
	const elements = useElements();

	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState(true);

	useEffect(() => {
		const getClientSecret = async () => {
			const response = await stripeAPI({
				method: "post",
				url: `/payments/create?total=${
					getBasketTotal(basket) * 100
				}`,
			});
			setClientSecret(response.data.clientSecret);
		};

		getClientSecret();
	}, [basket]);

	console.log("The client secret is:", clientSecret);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				//paymentIntent = payment confirmation

				setSucceeded(true);
				setError(null);
				setProcessing(false);

				dispatch({
					type: "EMPTY_BASKET",
				});

				history.replace("/orders");
			});
	};

	const handleChange = (event) => {
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};

	return (
		<div className='payment'>
			<div className='payment-container'>
				<h1>
					Checkout (
					<Link to='/checkout'>{basket?.length} items</Link>)
				</h1>
				<div className='payment-section'>
					<div className='payment-title'>
						<h3>Delivery Address</h3>
					</div>

					<div className='payment-address'>
						<p>{user?.email}</p>
						<p>Accorn Drive</p>
						<p>Houston, Texas</p>
					</div>
				</div>

				<div className='payment-section'>
					<div className='payment-title'>
						<h3>Review items and Delivery</h3>
					</div>
					<div className='payment-items'>
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>

				<div className='payment-section'>
					<div className='payment-title'>
						<h3>Payment Method</h3>
					</div>

					<div className='payment-details'>
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />

							<div className='payment__priceContainer'>
								<CurrencyFormat
									renderText={(value) => (
										<h3>Order Total: {value}</h3>
									)}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<button
									disabled={
										processing ||
										disabled ||
										succeeded
									}
								>
									<span>
										{processing ? (
											<p>Processing</p>
										) : (
											"Buy Now"
										)}
									</span>
								</button>
							</div>

							{/* Error message display */}
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
