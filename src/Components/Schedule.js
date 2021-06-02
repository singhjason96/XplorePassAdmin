import React, { useEffect, useState } from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import config from "../Utils/firebase";
import firebase from "firebase";
import UserList from "./UserList";
import Purchases from "./Purchases";
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";

const Schedule = () => {
  const [userData, setUserData] = useState({});
  const authProvider = FirebaseAuthProvider(config);
  useEffect(() => {
    let app =
      firebase.apps && firebase.apps.length > 0
        ? firebase.apps[0]
        : firebase.initializeApp(config);

    console.log("app", app);

    // app.database().ref("users/").set({
    //   username: "Jase",
    //   email: "bc@123.com",
    // });

    // var db = app.firestore();
    // db.collection("users")
    //   .doc("Event")
    //   .set({
    //     event: "Horseback Riding",
    //     host: "Arnold",
    //     hours: "2pm",
    //     tourGuide: "Smith",
    //   })
    //   .then(() => {
    //     console.log("Document successfully written!");
    //   })
    //   .catch((error) => {
    //     console.error("Error writing document: ", error);
    //   });
  }, []);
  const dataProvider = FirebaseDataProvider(config);

  return (
    <>
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="users" list={UserList} />
        <Resource name="purchases" list={Purchases} />
      </Admin>
    </>
  );
};

export default Schedule;
