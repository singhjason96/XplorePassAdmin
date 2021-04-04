import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDumzxkL8mE8-Y7u8Pedg9oNqbLDLVUCyg",
  authDomain: "xplorepassadmin.firebaseapp.com",
  databaseURL: "https://xplorepassadmin-default-rtdb.firebaseio.com",
  projectId: "xplorepassadmin",
  storageBucket: "xplorepassadmin.appspot.com",
  messagingSenderId: "357249137140",
  appId: "1:357249137140:web:7215379169a9bc92bea1a1",
  measurementId: "G-YVJVPTJB3T",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore;
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
}

export default new Firebase();
