import React, { useState } from "react"
import "./Login.css"
import { Link, useHistory } from "react-router-dom"
import { auth } from "../../config/firebase"

export default function Login() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	// const [name, setName] = useState("")

	const history = useHistory()

	const toggleForm = () => {
		const container = document.querySelector(".container")
		container.classList.toggle("active")
	}

	const onEmailChange = (e) => {
		setEmail(e.target.value)
	}

	const onPasswordChange = (e) => {
		setPassword(e.target.value)
	}

	const onLoginClick = (e) => {
		e.preventDefault()
		console.log("Login Clicked")

		auth.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				console.log(auth)
				if (auth) {
					history.push("/")
				}
			})
			.catch((err) => console.log(err))
	}

	const onRegisterClick = (e) => {
		e.preventDefault()
		console.log("Register Clicked")

		auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				console.log(auth)
				if (auth) {
					history.push("/")
					// auth.user.displayName = name
				}
			})
			.catch((err) => console.log(err))
	}

	return (
		<section id='main-section'>
			<div className='container'>
				<div className='user signinBx'>
					<div className='imgBx'>
						<img
							src='https://images.unsplash.com/photo-1486546910464-ec8e45c4a137?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1902&q=80'
							alt=''
						/>
					</div>
					<div className='formBx'>
						<form action='' onSubmit={onLoginClick}>
							<Link
								style={{ textDecoration: "none" }}
								to='/'
							>
								<h1 className='brand-heading'>
									NOT AMAZON
								</h1>
							</Link>
							<h2>Sign In</h2>
							<input
								type='email'
								name=''
								value={email}
								onChange={onEmailChange}
								placeholder='Email Address'
							/>
							<input
								type='password'
								name=''
								placeholder='Password'
								value={password}
								onChange={onPasswordChange}
							/>
							<input type='submit' name='' value='Login' />
							<p className='signup'>
								Don't have an account ?
								{/* eslint-disable-next-line */}
								<a href='#' onClick={toggleForm}>
									Sign Up.
								</a>
							</p>
						</form>
					</div>
				</div>
				<div className='user signupBx'>
					<div className='formBx'>
						<form action='' onSubmit={onRegisterClick}>
							<Link
								style={{ textDecoration: "none" }}
								to='/'
							>
								<h1 className='brand-heading'>
									NOT AMAZON
								</h1>
							</Link>
							<h2>Create an account</h2>
							<input
								type='text'
								name=''
								placeholder='Name'
							/>
							<input
								type='email'
								name=''
								value={email}
								onChange={onEmailChange}
								placeholder='Email Address'
							/>
							<input
								type='password'
								name=''
								placeholder='Password'
								value={password}
								onChange={onPasswordChange}
							/>
							<input
								type='submit'
								name=''
								value='Sign Up'
							/>

							<p className='signup'>
								Already have an account ?
								{/* eslint-disable-next-line */}
								<a href='#' onClick={toggleForm}>
									Sign in.
								</a>
							</p>
						</form>
					</div>
					<div className='imgBx'>
						<img
							src='https://images.unsplash.com/photo-1567935850829-e52d7bfe37ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
							alt=''
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
