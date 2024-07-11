import React from 'react'
import { Button, TextField } from "@mui/material";

const Location:React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
        <TextField
          label="Enter Agency Name"
          variant="outlined"
          size="medium"
          sx={{ width: "100%" }}
        />
        <TextField
          label="Enter your address"
          variant="outlined"
          size="medium"
          sx={{ width: "100%" }}
        />
        
      </div>
  )
}

export default Location