import React, { useEffect, useState } from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import config from "../Utils/firebase";
import firebase from "firebase";
import UserList from "./UserList";
import Purchases from "./Purchases";
import {
  List,
  Datagrid,
  TextField
} from "react-admin";

const Scheduler = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="event" />
        <TextField source="tourGuide" />
        <TextField source="hours" />
        <TextField source="host" />
      </Datagrid>
    </List>
  );
};

export default Scheduler;

// scheduler.js call data from update schedule
// db.collection("schedules").doc() 