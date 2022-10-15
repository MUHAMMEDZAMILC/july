const firebaseConfig = {

    apiKey: "AIzaSyARZCA9X2bJbQEOQg2VOQ62H6wzfHYCII4",

    authDomain: "portfolio-867eb.firebaseapp.com",

    databaseURL: "https://portfolio-867eb-default-rtdb.firebaseio.com",

    projectId: "portfolio-867eb",

    storageBucket: "portfolio-867eb.appspot.com",

    messagingSenderId: "947027135270",

    appId: "1:947027135270:web:3d69cfd1fab73b3d260fe7"

  };
// initilize firebase
firebase.initializeApp(firebaseConfig);

// reference your database

const portfolio = firebase.firestore().collection("messages");

document.getElementById("portfolio").addEventListener("submit",subitForm);

function subitForm(e){
    e.preventDefault();
    var fname = getElementVal('fname');
    var email = getElementVal('email');
    var subject = getElementVal('subject');
    var message = getElementVal('message');
    // console.log(fname,email,subject,message);
    saveMessage(fname,email,subject,message);
}

const saveMessage = (fname,email,message,subject)=>{
    // var newContactForm = portfolio.push();
    portfolio.add({
        fname : fname,
        email :email,
        subject : subject,
        message : message,
        'status' : 1,
    });
};

const getElementVal = (id)=>{
    return document.getElementById(id).value;
}