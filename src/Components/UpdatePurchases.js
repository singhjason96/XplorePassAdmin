import React, { useState } from "react";
import firebase from "firebase";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import config from "../Utils/firebase";
import { useHistory } from "react-router-dom";

const UpdatePurchases = () => {
  const [name, setName] = useState("");
  const [itemsBought, setItemsBought] = useState("");
  const [time, setTime] = useState("");

  console.log("all the shit", name, itemsBought, time);
  let history = useHistory();

  let app =
    firebase.apps && firebase.apps.length > 0
      ? firebase.apps[0]
      : firebase.initializeApp(config);

  function writeToCloud() {
    var db = app.firestore();
    db.collection("purchases")
      .doc(`${name}`)
      .set({
        itemsBought: `${itemsBought}`,
        time: `${time}`,
        name: `${name}`,
      });
    history.push("/schedule#/purchases");
  }
  return (
    <div>
      <form>
        <TextField
          required
          label='Items Bought'
          onChange={(e) => setItemsBought(e.target.value)}
          value={itemsBought}
          variant='filled'
        />
        <TextField
          required
          label='Time'
          onChange={(e) => setTime(e.target.value)}
          value={time}
          variant='filled'
        />
        <TextField
          required
          label='Name'
          onChange={(e) => setName(e.target.value)}
          value={name}
          variant='filled'
        />
        <Button onClick={writeToCloud}>Submit</Button>
      </form>
    </div>
  );
};

export default UpdatePurchases;
