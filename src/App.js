import React, { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { auth } from "./config/firebase"
import { useStateValue } from "./redux/StateProvider"
import "./App.css"

// Stripe imports
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

// Import components
import Home from "./components/Home/Home"
import Header from "./components/shared/Header/Header"
import Footer from "./components/shared/Footer/Footer"
import Checkout from "./components/Checkout/Checkout"
import Payment from "./components/Checkout/Payment/Payment"
import Login from "./components/auth/Login"

const promise = loadStripe(
	"pk_test_51Ik5dOSGm7zaQ1rANEE8PfKwTlgazBbxNpNNdKGnCKrwryTGWRT7eZup0QdRa2fUc1VwopywLEB6UqOaNPAxfUQJ00nsVQqyf8"
)

function App() {
	// eslint-disable-next-line
	const [{ basket }, dispatch] = useStateValue()
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log("The user is ", authUser)

			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				})
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				})
			}
		})
		// eslint-disable-next-line
	}, [])
	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/checkout'>
						<Header />
						<Checkout />
						<Footer />
					</Route>
					<Route exact path='/payment'>
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
						<Footer />
					</Route>
					<Route exact path='/'>
						<Header />
						<Home />
						<Footer />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
