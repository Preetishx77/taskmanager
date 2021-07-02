import firebase from "firebase";

const config = {
  apiKey: "AIzaSyArsW54f5opds8bRyVxix2vJtMIvCImyjI",
    authDomain: "taskmanager-7a00c.firebaseapp.com",
    projectId: "taskmanager-7a00c",
    storageBucket: "taskmanager-7a00c.appspot.com",
    messagingSenderId: "664716616775",
    appId: "1:664716616775:web:7e4b0f03fc833056a8fd62"
};

const fire = firebase.initializeApp(config);
const db = firebase.firestore(fire);
const usersCollection = db.collection("users");

export {usersCollection};


const storage = firebase.storage();
export {storage,firebase,fire as default};
