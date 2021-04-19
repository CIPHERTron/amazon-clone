import React from "react"
import "./Login.css"

export default function Login() {
	const toggleForm = () => {
		const container = document.querySelector(".container")
		container.classList.toggle("active")
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
						<form action=''>
							<h2>Sign In</h2>
							<input
								type='email'
								name=''
								placeholder='Email Address'
							/>
							<input
								type='password'
								name=''
								placeholder='Password'
							/>
							<input type='submit' name='' value='Login' />
							<p className='signup'>
								Don't have an account ?
								<a href='#' onClick={toggleForm}>
									Sign Up.
								</a>
							</p>
						</form>
					</div>
				</div>
				<div className='user signupBx'>
					<div className='formBx'>
						<form action=''>
							<h2>Welcome to</h2>
							<h2>
								<strong>CODE CANNIBALS</strong>
							</h2>
							<h2>Create an account</h2>
							<input
								type='text'
								name=''
								placeholder='Name'
							/>
							<input
								type='email'
								name=''
								placeholder='Email Address'
							/>
							<input
								type='password'
								name=''
								placeholder='Create Password'
							/>
							<input
								type='password'
								name=''
								placeholder='Confirm Password'
							/>
							<input
								type='submit'
								name=''
								value='Sign Up'
							/>
							<p className='signup'>
								Already have an account ?
								<a
									href='https://google.com'
									onClick={toggleForm}
								>
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
