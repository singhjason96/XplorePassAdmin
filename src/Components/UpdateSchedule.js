import React, { useState } from "react";
import firebase from "firebase";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import config from "../Utils/firebase";
import { useHistory } from "react-router-dom";

const UpdateSchedule = () => {
  const [tourGuide, setTourGuide] = useState("");
  const [event, setEvent] = useState("");
  const [host, setHost] = useState("");
  const [hours, setHours] = useState("");

  console.log("all the shit", tourGuide, event, host, hours);
  let history = useHistory();

  let app =
    firebase.apps && firebase.apps.length > 0
      ? firebase.apps[0]
      : firebase.initializeApp(config);

  // push in data
  function writeToCloud() {
    if (tourGuide === "" || event === "" || hours === "" || hours === "") {
      alert("Please do not leave any fields empty");
      return;
    }
    var db = app.firestore();
    db.collection("schedule")
      .doc(`${tourGuide}`)
      .set({
        event: `${event}`,
        host: `${host}`,
        hours: `${hours}`,
        tourGuide: `${tourGuide}`,
      });
    history.push("/schedule#/schedule");
  }

  return (
    <div>
      <form>
        <TextField
          required
          label="Event"
          onChange={(e) => setEvent(e.target.value)}
          value={event}
          variant="filled"
        />
        <TextField
          required
          label="Host"
          onChange={(e) => setHost(e.target.value)}
          value={host}
          variant="filled"
        />
        <TextField
          required
          label="Hours"
          onChange={(e) => setHours(e.target.value)}
          value={hours}
          variant="filled"
        />
        <TextField
          required
          label="Tour Guide"
          onChange={(e) => setTourGuide(e.target.value)}
          value={tourGuide}
          variant="filled"
        />
        <Button onClick={writeToCloud}>Submit</Button>
      </form>
    </div>
  );
};

export default UpdateSchedule;
