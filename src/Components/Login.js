import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import firebase from "../Utils/firebase";
import { useHistory } from "react-router-dom";
import Background from "./Background";

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
    color: "black",
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
    marginTop: "0",
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  console.log("password", password);
  let history = useHistory();

  async function login() {
    try {
      await firebase.login(email, password);
      return history.push("/schedule");
    } catch (e) {
      alert(e);
      return null;
    }
  }

  return (
    <Background>
      <div className={classes.formStyle}>
        <form className={classes.root}>
          <h2 className={classes.titleStyle}>XplorePass Admin</h2>
          <TextField
            required
            id='standard-required'
            label='Email Address'
            variant='filled'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            id='standard-required'
            label='Password'
            variant='filled'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={classes.buttonStyle}>
            <Button variant='contained' color='white' onClick={login}>
              Log In
            </Button>
            <Link>Forgot Password?</Link>
          </div>
        </form>
      </div>
    </Background>
  );
};

export default Login;