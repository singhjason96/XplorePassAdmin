import React, { useEffect, useState } from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import config from "../Utils/firebase";
import firebase from "firebase";
import UserList from "./UserList";
import Purchases from "./Purchases";
import UpdateSchedule from "./UpdateSchedule";
import {
  List,
  Datagrid,
  TextField
} from "react-admin";

const Scheduler = (props) => {
  return (
    <div>
      <List {...props}>
        <Datagrid rowClick="edit">
          <TextField source="event" />
          <TextField source="tourGuide" />
          <TextField source="hours" />
          <TextField source="host" />
          <TextField source="bus" />
        </Datagrid>
      </List>

      <div>
        <h3>Add more to schedule</h3>
        <UpdateSchedule />
      </div>
    </div>

  );
};

export default Scheduler;

// scheduler.js call data from update schedule
// db.collection("schedules").doc() 