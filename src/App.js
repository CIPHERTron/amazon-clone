import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./components/Home/Home"
import Header from "./components/shared/Header/Header"
import Footer from "./components/shared/Footer"
import Checkout from "./components/Checkout/Checkout"
import Login from "./components/auth/Login"

function App() {
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
