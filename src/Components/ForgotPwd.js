import React, { useState } from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  ReferenceField,
  changeLocaleSuccess,
} from "react-admin";
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

const ForgotPwd = () => {
  const [email, setEmail] = useState("");
  const classes = useStyles();

  function resetPass() {
    if (email === "") {
      alert("Please enter an email");
      return null;
    }
    try {
      firebase.resetPassLink(email);
      alert("Email with reset link has been sent. Go back to sign in page.");
    } catch (e) {
      alert(e);
      return null;
    }
  }

  return (
    <div className={classes.formStyle}>
      <form className={classes.root}>
        <h2 className={classes.titleStyle}>Reset Password</h2>
        <input
          required
          id="standard-required"
          type="email"
          placeholder="Enter your email"
          variant="filled"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className={classes.buttonStyle}>
          <Button variant="contained" color="white" onClick={resetPass}>
            Send Reset Link
          </Button>

        </div>
        <div>
          <Link herf="/">Back to sign in page</Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPwd;