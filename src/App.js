import React, { useState, useEffect, useContext } from "react";
import Schedule from "./Components/Schedule";
import Login from "./Components/Login";
import { UserProvider, UserContext } from "./Utils/UserContext";
import firebase from "./Utils/firebase";
import UpdateSchedule from "./Components/UpdateSchedule";
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";
import UserList from "./Components/UserList";
import config from "./Utils/firebase";
import { Admin, Resource, ListGuesser } from "react-admin";
import Dashboard from "./Components/Dashboard";
import EditSchedule from "./Components/EditSchedule";

const App = () => {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  const dataProvider = FirebaseDataProvider(config);
  const authProvider = FirebaseAuthProvider(config);

  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  }, []);
  console.log("firebase", setFirebaseInitialized);

  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={Login}
      dashboard={Dashboard}
      edit={EditSchedule}
    >
      <Resource name="users" list={UserList} create={UpdateSchedule} />
    </Admin>
  );
};

export default App;
