import React, { useState } from "react";
import firebase from "firebase";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import config from "../Utils/firebase";
import { useHistory } from "react-router-dom";

const EditSchedule = () => {
  const [tourGuide, setTourGuide] = useState("");
  const [event, setEvent] = useState("");
  const [host, setHost] = useState("");
  const [hours, setHours] = useState("");

  let app =
    firebase.apps && firebase.apps.length > 0
      ? firebase.apps[0]
      : firebase.initializeApp(config);

  function EditSchedule() {
    var db = app.firestore();
    const sfDocRef = db.collection("users").doc(`${tourGuide}`);

    db.runTransaction((t) => {
      return t.get(sfDocRef).then((sfDoc) => {
        if (!sfDoc.exits) {
          throw "Document doesnt exist";
        }

        var newEdit = "Mike";

        t.update(sfDocRef, { host: newEdit });
      });
    })
      .then(() => {
        console.log("donion rings");
      })
      .catch((e) => {
        console.log(e);
      });
  }
};

export default EditSchedule;
