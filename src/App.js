import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./components/Home/Home"
import Header from "./components/shared/Header/Header"
import Checkout from "./components/Checkout/Checkout"

function App() {
	return (
		<Router>
			<div className='app'>
				<Header />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/checkout'>
						<Checkout />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
