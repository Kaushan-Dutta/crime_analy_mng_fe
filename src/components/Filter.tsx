import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import { filter } from "@/config/filter";


type FilterProps = {
  props: ("By Date" | "By Status" | "By Time")[];
};
const Filter = ({ props }: FilterProps) => {
  return (
    <div className="rounded-lg flx-row w-96  gap-5">
      {props.map((prop) => (
        <TextField key={prop} label={prop} select className="w-full h-fit text-sm bg-white">
          {filter[prop].map((item, id) => (
            <MenuItem key={id} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      ))}
    </div>
  );
};

export default Filter;
