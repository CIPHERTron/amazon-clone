import React from "react"
import {
	Search as SearchIcon,
	LocationOn as LocationIcon,
	AddShoppingCart,
} from "@material-ui/icons"
import "./Header.css"
import { Link } from "react-router-dom"

import logo from "../../../assets/images/amazon.png"
import { useStateValue } from "../../../redux/StateProvider"
import { auth } from "../../../config/firebase"

function Header() {
	// eslint-disable-next-line
	const [{ basket, user }, dispatch] = useStateValue()

	const handleAuth = () => {
		if (user) {
			auth.signOut()
		}
	}

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
				<Link to={!user && "/login"}>
					<div onClick={handleAuth} className='header_option'>
						<span className='header_option_one'>
							Hello {user ? user.email : "Guest"}
						</span>
						<span className='header_option_two'>
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>

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
						<AddShoppingCart />
						<span className='header_option_two header_basket_count'>
							{basket?.length}
							{/* "?" mark in the above statement is optional chaining */}
						</span>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Header
