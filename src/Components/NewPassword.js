import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import firebase from "../Utils/firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
      marginRight: "auto",
      marginLeft: "auto",
    },
    alignItems: "center",
  },
  titleStyle: {
    textAlign: "center",
    marginBottom: "20%",
    marginTop: "0%",
  },
  formStyle: {
    marginRight: "auto",
    marginLeft: "auto",
    textAlign: "center",
    margin: theme.spacing(1),
    width: "25rem",
    height: "75vh",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: "5px",
    borderColor: "black",
    borderStyle: "solid",
    display: "flex",
    justifyContent: "center",
  },
  buttonStyle: {
    display: "flex",
    justifyContent: "space-evenly",
    marginRight: "auto",
    marginLeft: "auto",
    margin: theme.spacing(1),
    alignItems: "center",
    marginTop: "20%",
  },
}));
/*
const reauthenticate = (currentPassword) => {
  var user = firebase.auth().currentUser;
  var cred = firebase.auth.EmailAuthProvider.credential(
    user.email, currentPassword);
  return user.reauthenticateWithCredential(cred);
} 
*/

const NewPassword = (currentPassword, newPassword) => {
  // const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const classes = useStyles();
  // let history = useHistory();
  async function changePass() {
    if (newPass === confirmPass) {
      await firebase.changePassword(confirmPass);
    }
    else {
      console.log("passwords don't match. please try again");
    }

  }

  return (
    <div className={classes.formStyle}>
      <form className={classes.root}>
        <TextField
          required
          id="standard-required"
          label="Current Password"
          variant="filled"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          required
          id="standard-required"
          label="New Password"
          variant="filled"
          type="password"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
        />
        <TextField
          required
          id="standard-required"
          label="Confirm Password"
          variant="filled"
          type="password"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        <Button variant="contained" color="white" onClick={changePass}>
          Change Password
        </Button>
      </form>
    </div>
  )
}

export default NewPassword;
