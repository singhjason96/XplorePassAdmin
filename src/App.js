import React, { useState, useEffect, useContext } from "react";
import Schedule from "./Components/Schedule";
import Purchases from "./Components/Purchases";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPwd";
import NewPassword from "./Components/NewPassword";
import { UserProvider, UserContext } from "./Utils/UserContext";
import firebase from "./Utils/firebase";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import UpdateSchedule from "./Components/UpdateSchedule";
import UpdatePurchases from "./Components/UpdatePurchases";

const App = () => {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  console.log("firebase");
  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);

    });
  }, []);
  console.log("firebase", setFirebaseInitialized);

  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/newpwd" component={NewPassword} />
          <Route exact path="/forgotpwd" component={ForgotPassword} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/update" component={UpdateSchedule} />
          <Route exact path="/purchases" component={Purchases} />
          <Route exact path="/updatepurchases" component={UpdatePurchases} />
        </Switch>
      </Router>
    </UserProvider>
  );
};

export default App;
