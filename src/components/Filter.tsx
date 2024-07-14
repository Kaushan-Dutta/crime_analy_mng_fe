import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
const Filter = () => {
  return (
    <div className=" rounded-lg justify-between flx-row w-60 gap-5">
      
      <TextField label="By Date" select className="w-full h-fit text-sm bg-white"  >
        <MenuItem value="Recent">Recent</MenuItem>
        <MenuItem value="Old">Old</MenuItem>
      </TextField>
      <TextField label="By Date" select className="w-full h-fit text-sm bg-white">
        <MenuItem value="Recent">Recent</MenuItem>
        <MenuItem value="Old">Old</MenuItem>
      </TextField>
    </div>
  );
};

export default Filter;
