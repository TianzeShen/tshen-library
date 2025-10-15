// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqqcrkXOykfqvkRgQ-MrVGH-2DoE1j16E",
  authDomain: "fit5032-week6-5e239.firebaseapp.com",
  projectId: "fit5032-week6-5e239",
  storageBucket: "fit5032-week6-5e239.appspot.com",
  messagingSenderId: "547272285715",
  appId: "1:547272285715:web:207ca8545f6b67c187a9e6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()
export default db

// function fetchData() {
//   let data = fetch('https://api.example.com/data');
//   return data.json(); 
// }
// fetchData().then(data => console.log(data));