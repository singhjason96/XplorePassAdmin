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
        <TextField source="Name" />
        <TextField source="Item Bought" />
        <TextField source="Event Time" />
      </Datagrid>
    </List>
  );
};

export default Purchases;
