import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  ReferenceField,
} from "react-admin";

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        {/* <ReferenceField source="id" reference="users">
          <TextField source="id" />
        </ReferenceField> */}
        <TextField source="tourGuide" />
        <TextField source="host" />
        <TextField source="event" />
        <TextField source="hours" />
      </Datagrid>
    </List>
  );
};

export default UserList;
