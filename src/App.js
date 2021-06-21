import React, { useState, useEffect, useContext } from "react";
import Schedule from "./Components/Schedule";
import Purchases from "./Components/Purchases";
import Login from "./Components/Login";
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
          <Route exact path="/purchases" component={Purchases} />
          <Route exact path="/updatepurchases" component={UpdatePurchases} />
          <Route exact path="/schedule" component={Schedule} />
          <Route path="/update" component={UpdateSchedule} />
        </Switch>
      </Router>
    </UserProvider>
  );
};

export default App;
