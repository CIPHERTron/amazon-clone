import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"
import CodeIcon from "@material-ui/icons/Code"
import EmailIcon from "@material-ui/icons/Email"
import GitHubIcon from "@material-ui/icons/GitHub"

function Copyright() {
	return (
		<Typography variant='h6' color='textSecondary'>
			{"Copyright © "}
			<Link color='inherit' href='/'>
				Company Name
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	)
}

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		minHeight: "30vh",
		textAlign: "center",
	},
	logo: {
		borderRadius: "40%",
		height: "80px",
	},
	footer: {
		padding: theme.spacing(3, 2),
		marginTop: "auto",
		backgroundColor: "#d6e0f0",
		color: "black",
	},
	footerIcon: {
		margin: "0 20px",
	},
}))

export default function Footer() {
	const classes = useStyles()

	return (
		<div id='footer' className={classes.root}>
			<CssBaseline />
			<footer className={classes.footer}>
				<Container maxWidth='sm'>
					<img
						className={classes.logo}
						src='https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg'
						alt='logo'
					></img>
					<Copyright className={classes.footerIcon} />
					<CodeIcon className={classes.footerIcon} />
					<EmailIcon className={classes.footerIcon} />
					<GitHubIcon className={classes.footerIcon} />
				</Container>
			</footer>
		</div>
	)
}
