import React from "react"
import { useStateValue } from "../../../redux/StateProvider"
import "./Product.css"

function Product({ id, title, image, price, rating }) {
	const [dispatch] = useStateValue() // destructuring basket from state

	const addToBasket = () => {
		// Dispatch ADD_TO_BASKET action(item into data layer)
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		})
	}
	return (
		<div className='product'>
			<div className='product_info'>
				<p>{title}</p>
				<p className='product_price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='product_rating'>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>⭐</p>
						))}
				</div>
			</div>

			<img src={image} alt='' />

			<button onClick={addToBasket}>Add To Basket</button>
		</div>
	)
}

export default Product
