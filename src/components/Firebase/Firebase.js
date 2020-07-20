import React, { Component } from "react";
import app from "firebase";
import "firebase/auth";
import "firebase/database";
import { connect } from "react-redux";
import { loginUserInfo } from "../../redux/UserRdx/UserActions";

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "1:",
  measurementId: "",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.twitterProvider = new app.auth.TwitterAuthProvider();

  }

  signInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);
  signInWithGoogleRedirect = () =>
    this.auth.signInWithRedirect(this.googleProvider);
  signInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);
  signInWithTwitter = () => this.auth.signInWithPopup(this.twitterProvider);
  signOut = () => this.auth.signOut();

  user = (uid) => this.db.ref(`users/${uid}`);
  users = (_) => this.db.ref("users");

  onAuthListener = (next, fallback) => {
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //console.log("Firebase.js Authlistender---->", authUser);
        next(authUser);
      } else {
        fallback();
      }
    });
  };
}



export default Firebase;

 
