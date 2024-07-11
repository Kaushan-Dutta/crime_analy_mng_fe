import React from "react";
import { Button, TextField } from "@mui/material";

const Contact: React.FC = () => {
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
      <Button
        variant="contained"
        color="success"
        disabled
        sx={{ height: "50px" }}
        className="tracking-widest text-lg font-bold"
      >
        Login
      </Button>
    </div>
  );
};

export default Contact;
