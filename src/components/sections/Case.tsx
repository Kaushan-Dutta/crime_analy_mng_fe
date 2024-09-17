"use client";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton, Button, TextField } from "@mui/material";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Image from "next/image";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useAuth } from "@/context/AuthContext";

type CaseType = {
  id: string;
  name: string;
  status: string;
  createdAt: string;
};
interface CaseProps {
  cases: CaseType[] ;
}

const Case: React.FC<CaseProps> = ({ cases }) => {
  const { account } = useAuth();
  console.log("Cases got inside Case.tsx", cases);

  const dateConverter = (timestamp: string) => {
    const date = new Date(parseInt(timestamp));
    return date.toLocaleDateString();
  }
  
  return (
    <div className="text-[17px]  flex-col flex gap-3 font-mono">
      {cases?.map((caseItem: CaseType) => (
        <div key={caseItem.id} className="flx-row justify-between rounded-md text-md px-5 py-3 leading-5 border">
          <p className=" w-1/5">{caseItem.name}</p>

          <p className="  w-1/5">{dateConverter(caseItem.createdAt)}</p>
          <p className="flx-row gap-2  w-1/5 ">
            <span>
              <FiberManualRecordIcon className={`text-sm ${caseItem.status === 'Pending' ? 'text-green-500' : 'text-red-500'}`} />
            </span>
            {caseItem.status}
          </p>
          <Link href="/" className="flx-row gap-2   w-1/5">
            <IconButton>
              <RemoveRedEyeIcon className="text-ascent" />
            </IconButton>
            View
          </Link>

          {account?.role == "agency" && (
            <IconButton
              size="large"
              color="primary"
              aria-label="edit icon"
              className="text-ascent"
            >
              <AddCircleIcon />
            </IconButton>
          )}
        </div>
      ))}
      

      {account?.role == "agency" && (
        <div className="flex flex-col gap-3  rounded-md text-md px-5 py-3 leading-5 bg-white border">
          <TextField
            label="Description"
            variant="outlined"
            size="small"
            required
            multiline={true}
            rows={4}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="success" sx={{ width: "160px" }}>
            Send Req
          </Button>
        </div>
      )}
    </div>
  );
};

export default Case;
