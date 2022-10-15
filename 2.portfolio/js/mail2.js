// Import the functions you need from the SDKs you need
import firebase from "@firebase/app-compat";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARZCA9X2bJbQEOQg2VOQ62H6wzfHYCII4",
  authDomain: "portfolio-867eb.firebaseapp.com",
  databaseURL: "https://portfolio-867eb-default-rtdb.firebaseio.com",
  projectId: "portfolio-867eb",
  storageBucket: "portfolio-867eb.appspot.com",
  messagingSenderId: "947027135270",
  appId: "1:947027135270:web:3d69cfd1fab73b3d260fe7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= new firebase.firestore(firebaseConfig);
const save=document.querySelector("#send");
save.addEventListener("click",function() {
    const names=document.querySelector("#fname");
    const emails=document.querySelector("#email");
    const subjects=document.querySelector("#subject");
    const messages=document.querySelector("#message");
    db.collection("messages").set({
              Name:names,
              Email:emails,
              Subject:subjects,
              Message:messages,


    }).then(function() {

    console.log("Document successfully wriiten!");

})
.catch(function(error) {
  // The document probably doesn't exist.
  console.error("Error writing document: ", error);
});
}); 