import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  ReferenceField,
} from "react-admin";

const Purchases = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="name" />
        <TextField source="itemsBought" />
        <TextField source="time" />
      </Datagrid>
    </List>
  );
};

export default Purchases;
