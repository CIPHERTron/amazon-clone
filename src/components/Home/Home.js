import React from "react"
import "./Home.css"
import Product from "./Product/Product"

function Home() {
	return (
		<div className='home'>
			<div className='home_container'>
				<img
					className='home_image'
					src='https://res.cloudinary.com/pritish007/image/upload/v1625731390/Wallpaperkiss_1476738_ewj2mk.jpg'
					alt='Homepage Cover'
				/>

				<div className='home_row'>
					<Product
						id='12321341'
						title="Puma Ultra 4.2 Fg/Ag Men's Football Boots Shoe"
						price={11.96}
						rating={5}
						image='https://m.media-amazon.com/images/I/818KQaFKEuL._UL1500_.jpg'
					/>
					<Product
						id='49538094'
						title="Puma Men's Future 5.4 Fg Ag Football Shoe"
						price={239.0}
						rating={4}
						image='https://images-na.ssl-images-amazon.com/images/I/819lKjM7%2BgL._UL1500_.jpg'
					/>
				</div>

				<div className='home_row'>
					<Product
						id='4903850'
						title='Nike Unisex-Adult Vapor 12 Club Fg/Mg Football Shoes'
						price={85.99}
						rating={3}
						image='https://images-na.ssl-images-amazon.com/images/I/81QDUdkBkGL._UL1500_.jpg'
					/>
					<Product
						id='23445930'
						title='Nike Unisex-Adult Phantom Gt Club Fg/Mg Football Shoes'
						price={98.99}
						rating={5}
						image='https://images-na.ssl-images-amazon.com/images/I/71vZ-VVMCPL._UL1500_.jpg'
					/>
					<Product
						id='3254354345'
						title="Adidas Men's X Ghosted.4 FxG Football Shoe"
						price={598.99}
						rating={4}
						image='https://images-na.ssl-images-amazon.com/images/I/81FX7hx89ML._UL1500_.jpg'
					/>
				</div>

				<div className='home_row'>
					<Product
						id='4903851'
						title="Nike Men's Superfly 7 Academy MDS Fg/Mg Football Shoes"
						price={85.99}
						rating={3}
						image='https://images-na.ssl-images-amazon.com/images/I/61jPEYTTSKL._UL1000_.jpg'
					/>
					<Product
						id='23445931'
						title='Nike Unisex-Adult Phantom Gt Academy Mg Football Shoes'
						price={98.99}
						rating={5}
						image='https://images-na.ssl-images-amazon.com/images/I/71-BjLY%2BbrL._UL1500_.jpg'
					/>
					<Product
						id='3254354346'
						title="Nike Unisex's Superfly 6 Pro Fg Football Boots"
						price={598.99}
						rating={4}
						image='https://images-na.ssl-images-amazon.com/images/I/81zUlPpdwkL._UL1500_.jpg'
					/>
				</div>

				<div className='home_row'>
					<Product
						id='90829332'
						title='Kids Blue SUPERFLY 7 CLUB FG/MG Mid-Top Football Shoes'
						price={1094.98}
						rating={4}
						image='https://res.cloudinary.com/pritish007/image/upload/v1625730925/nike_1_u70nkf.jpg'
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
