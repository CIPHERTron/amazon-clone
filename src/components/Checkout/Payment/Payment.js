import React from "react"
import { useStateValue } from "../../../redux/StateProvider"
import { Link } from "react-router-dom"
import "./Payment.css"

import CheckoutProduct from "../CheckoutProduct/CheckoutProduct"

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue()

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

					<div className='payment-details'></div>
				</div>
			</div>
		</div>
	)
}

export default Payment
