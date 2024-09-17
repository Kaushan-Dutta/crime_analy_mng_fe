import React from "react";
import { Button, TextField } from "@mui/material";

const Contact= ({pageId}:{pageId:number}) => {
  return (
    <div className="flex flex-col gap-5">
      <TextField
        label="Enter your email"
        variant="outlined"
        size="medium"
        sx={{ width: "100%" }}
      />
      <TextField
        type="number"
        label="Enter your phone number"
        variant="outlined"
        size="medium"
        sx={{ width: "100%" }}
      />
      
    </div>
  );
};

export default Contact;
