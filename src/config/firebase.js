import firebase from "firebase"
const apiKey = process.env.REACT_APP_API_KEY
const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID
const appId = process.env.REACT_APP_APPID

const firebaseConfig = {
	apiKey: apiKey,
	authDomain: "clone-2d395.firebaseapp.com",
	projectId: "clone-2d395",
	storageBucket: "clone-2d395.appspot.com",
	messagingSenderId: messagingSenderId,
	appId: appId,
}

const Firebase = firebase.initializeApp(firebaseConfig)

const db = Firebase.firestore()
const auth = Firebase.auth()

export { db, auth }
