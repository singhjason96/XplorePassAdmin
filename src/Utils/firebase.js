import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCl033Em0O6mvy0Xaw__5tHJL9Xam0ZJ-s",
  authDomain: "reactnativefirebase-4486a.firebaseapp.com",
  databaseURL: "https://reactnativefirebase-4486a-default-rtdb.firebaseio.com",
  projectId: "reactnativefirebase-4486a",
  storageBucket: "reactnativefirebase-4486a.appspot.com",
  messagingSenderId: "670091845133",
  appId: "1:670091845133:web:52826f06e81f7e3b3eff44",
  measurementId: "G-NCPW9L9XT3"
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


  resetPassLink(email) {
    return this.auth.sendPasswordResetEmail(email);
  }

  changePassword(pass) {
    this.auth.currentUser.reauthenticate();
    return this.auth.currentUser.updatePassword(pass);
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
