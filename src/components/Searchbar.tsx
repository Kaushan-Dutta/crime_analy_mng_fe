import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

const Searchbar: React.FC = () => {
  return (
    <div className="flx-row justify-between h-14 rounded-full shadow-xl px-5 py-1 bg-white">
      <div className="flx-row w-3/4 gap-3">
        <SearchIcon />
        <input type="text" placeholder="Search for the case" className="w-full bg-transparent outline-none"/>
      </div>
      <Button variant="contained" color="error" className="rounded-full">
        Search
      </Button>
    </div>
  );
};

export default Searchbar;
