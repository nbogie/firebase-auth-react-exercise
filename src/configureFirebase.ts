// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration.  
//
// Usually, you need to fastidiously guard API keys (for example, by 
// setting the keys as environment variables); 
// however, API keys for Firebase services are ok to include in code or checked-in config files.
const firebaseConfig = {
    apiKey: "AIzaSyBmBhmTCPNPRZ3k0eS2sy3rplHCIZYw14I",
    authDomain: "auth-demo-live.firebaseapp.com",
    projectId: "auth-demo-live",
    storageBucket: "auth-demo-live.appspot.com",
    messagingSenderId: "411172382560",
    appId: "1:411172382560:web:426bfaa595f8544efca005"
};

// Initialize Firebase as a whole
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

//Other auth providers include github, twitter, apple.
//These must be enabled in your firebase console.
export const googleAuthProvider = new GoogleAuthProvider();
