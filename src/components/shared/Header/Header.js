import React from "react"
import { Search as SearchIcon, ShoppingBasket } from "@material-ui/icons"
import "./Header.css"

import logo from "../../../assets/images/amazon.png"

function Header() {
	return (
		<div className='header'>
			<img className='header_logo' src={logo} alt='Amazon logo' />
			<div className='header_search'>
				<input className='header_searchInput' type='text' />
				<SearchIcon className='header_searchIcon' />
			</div>

			<div className='header_nav'>
				<div className='header_option'>
					<span className='header_option_one'>Hello Guest</span>
					<span className='header_option_two'>Sign In</span>
				</div>
				<div className='header_option'>
					<span className='header_option_one'>Returns</span>
					<span className='header_option_two'>& orders</span>
				</div>
				<div className='header_option'>
					<span className='header_option_one'>Your</span>
					<span className='header_option_two'>Prime</span>
				</div>

				<div className='header_option_basket'>
					<ShoppingBasket />
					<span className='header_option_two header_basket_count'>
						0
					</span>
				</div>
			</div>
		</div>
	)
}

export default Header
