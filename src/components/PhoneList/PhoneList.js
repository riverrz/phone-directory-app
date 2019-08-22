import React from "react";
import "./PhoneList.css";
import Button from "@material-ui/core/Button";

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
    );
  });
  return <ul>{mappedPhoneArray}</ul>;
};

export default PhoneList;
