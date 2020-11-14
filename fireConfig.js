import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyApYgNEj3EoMFh_igBC856SI6PcN_8ICQQ",
  authDomain: "elyes-ec771.firebaseapp.com",
  databaseURL: "https://elyes-ec771.firebaseio.com",
  projectId: "elyes-ec771",
  storageBucket: "elyes-ec771.appspot.com",
  messagingSenderId: "1035005267548",
  appId: "1:1035005267548:web:53cfe8facc33b61957e099"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
