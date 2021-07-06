import React, { useEffect, useState } from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import config from "../Utils/firebase";
import firebase from "firebase";
import UserList from "./UserList";
import Purchases from "./Purchases";
import Scheduler from "./Scheduler";
import Link from "@material-ui/core/Link";
import "./tablestyle.css";

import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";

const Schedule = () => {
  const authProvider = FirebaseAuthProvider(config);

  useEffect(() => {
    let app =
      firebase.apps && firebase.apps.length > 0
        ? firebase.apps[0]
        : firebase.initializeApp(config);

    console.log("app", app);

  }, []);
  const dataProvider = FirebaseDataProvider(config); // calls all the data

  return (
    <>

      <div>
        <Admin dataProvider={dataProvider} authProvider={authProvider}>
          <Resource name="users" list={UserList} />
          <Resource name="purchases" list={Purchases} />
          <Resource name="schedule" list={Scheduler} />
        </Admin>
      </div>
      {/*
      <div>
        <Link href="/newpwd">Change Password</Link>
      </div>
      */}
    </>
  );
};

export default Schedule;



