import React from "react";
import CopyAllOutlinedIcon from "@mui/icons-material/CopyAllOutlined";
import { IconButton } from "@mui/material";

const CaseHistory = () => {
  return (
    <div className="text-[17px]  flex-col flex gap-3 font-mono ">
      {[1, 2, 3, 4, 5].map((transaction: any, id: any) => (
        <div
          className="flx-row justify-between gap-5 rounded-md text-md px-5 py-3 leading-5  border"
          key={id}
        >
          <p className="text-left w-2/4">Maheshtala Agency</p>
          <p className="w-1/4">2022-12-09 12:00:12</p>
          <p className=" w-1/4 flx-row gap-1 justify-end">
            {`0x844...0686aF`}
            <IconButton size="small">
              <CopyAllOutlinedIcon className="text-md text-green-600" />
            </IconButton>
          </p>{" "}
        </div>
      ))}
    </div>
  );
};

export default CaseHistory;
