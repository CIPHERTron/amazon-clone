import React from "react"
import {
	Search as SearchIcon,
	ShoppingBasket,
	LocationOn as LocationIcon,
} from "@material-ui/icons"
import "./Header.css"
import { Link } from "react-router-dom"

import logo from "../../../assets/images/amazon.png"
import { useStateValue } from "../../../redux/StateProvider"

function Header() {
	const [state] = useStateValue()

	return (
		<div className='header'>
			<Link to='/'>
				<img className='header_logo' src={logo} alt='Amazon logo' />
			</Link>
			<LocationIcon style={{ color: "#fff", marginRight: "-12px" }} />
			<div className='header_option'>
				<span className='header_option_one'>Deliver to</span>
				<span className='header_option_two'>India</span>
			</div>
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

				<Link to='/checkout'>
					<div className='header_option_basket'>
						<ShoppingBasket />
						<span className='header_option_two header_basket_count'>
							{state.basket?.length}
							{/* "?" mark in the above statement is optional chaining */}
						</span>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Header
