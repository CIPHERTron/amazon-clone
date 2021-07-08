import firebase from "firebase"
const apiKey = "AIzaSyAjdGUdpb5fy8gxenDu071qsbOzMtOLc5I"
const messagingSenderId = "565390277671"
const appId = "1:565390277671:web:83fed398200faae1956202"

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
