import React from "react";
import "./PhoneList.css";
import Button from "@material-ui/core/Button";
// import { List, Paper } from "@material-ui/core";
// import PhoneListItem from "../PhoneListItem/PhoneListItem";

const PhoneList = props => {
  const mappedPhoneArray = props.phoneArray.map((p, i) => {
    return (
      <li key={i}>
        {p}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            return props.deletePhoneNo(i);
          }}
        >
          Delete
        </Button>
      </li>
      // <PhoneListItem
      //   key={i}
      //   phoneNo={p}
      //   onButtonClick={() => props.deletePhoneNo(i)}
      // />
    );
  });
  return (
    // <Paper style={{ margin: 16 }}>
    //   <List style={{ overflow: "auto" }}>
    <ul>
      { mappedPhoneArray }
    </ul>
    /* </List>*/
    /*</Paper> */
  );
};

export default PhoneList;
