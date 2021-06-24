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

  const textStyle = {
    height: "40px",
    backgroundColor: "azure",
    fontSize: 10,
    fontFamily: "Arial",
    margin: "20px"
  };

  return (
    <div>
      <form>
        <TextField
          required
          label="Event"
          style={textStyle}
          onChange={(e) => setEvent(e.target.value)}
          value={event}
          variant="filled"
        />
        <TextField
          required
          label="Tour Guide"
          style={textStyle}
          onChange={(e) => setTourGuide(e.target.value)}
          value={tourGuide}
          variant="filled"
        />

        <TextField
          required
          label="Hours"
          style={textStyle}
          onChange={(e) => setHours(e.target.value)}
          value={hours}
          variant="filled"
        />
        <TextField
          required
          label="Host"
          style={textStyle}
          onChange={(e) => setHost(e.target.value)}
          value={host}
          variant="filled"
        />

        <Button
          onClick={writeToCloud}
          style={{ margin: 20, backgroundColor: "#add8e6", textAlign: "center", border: 20 }}
        >Submit</Button>
      </form>
    </div >
  );
};

export default UpdateSchedule;
