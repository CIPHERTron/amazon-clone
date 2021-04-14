import React from "react"
import "./Checkout.css"

function Checkout() {
	return (
		<div className='checkout'>
			<div className='checkout_left'>
				<img
					className='checkout_ad'
					src='https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/banner-ads-examples-amazon.jpg?20fWkG1X2YxnKCdF5DHfO4Lf8pkrHuoh&itok=UrMRpyj_'
					alt='Ad banner'
				/>

				<div>
					<h2 className='checkout_title'>
						Your shopping basket
					</h2>
				</div>
			</div>

			<div className='checkout_right'>
				<h2>The subtotal will go here!</h2>
			</div>
		</div>
	)
}

export default Checkout
