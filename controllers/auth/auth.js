import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
const app = initializeApp({
    apiKey: "AIzaSyAkcaN_9fBqidX7ubtsY1HApc0cmkGY05k",
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
});
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export async function createUserWithEmail(email, password, name, phoneNo){
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(`error occured with ${errorCode} and message ${errorMessage}`);
    // ..
  })};