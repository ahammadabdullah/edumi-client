// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBCqff412_Gwl6uLFL4uIpH0iJOuRqVH8c",
  authDomain: "edumi-453a2.firebaseapp.com",
  projectId: "edumi-453a2",
  storageBucket: "edumi-453a2.appspot.com",
  messagingSenderId: "1017029797037",
  appId: "1:1017029797037:web:561e6c016c24e1f5211224",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
