import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton, Button, TextField } from "@mui/material";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export type AgencyType = {
  name: string;
  pincode: string;
  document: string;
  status: string;
};

type AgencyApplicationProps = {
  agencies: AgencyType[];
};

const AgencyApplication: React.FC<AgencyApplicationProps> = ({ agencies }) => {
  return (
    <div className="text-[17px]  flex-col flex gap-3 font-normal">
      {agencies &&
        agencies.length > 0 &&
        agencies.map((agency,id) => (
          <div className="flx-row justify-around  rounded-md text-md px-5 py-3 leading-5 border" key={id}>
            <p className="w-1/5">{agency?.name}</p>
            <p className="w-1/5">Pincode: {agency?.pincode}</p>
            <Link href={agency?.document} className="w-1/5 flx-row gap-2">
              <span>
                <RemoveRedEyeIcon className="text-ascent" />
              </span>
              View
            </Link>
            <p className="flx-row gap-2 w-1/5">
              <span>
                <FiberManualRecordIcon className="text-green-500 text-sm" />
              </span>
              {agency?.status}
            </p>
            <IconButton size="large" color="primary" aria-label="edit icon">
              <EditNoteIcon className="text-ascent" />
            </IconButton>
          </div>
        ))}
    </div>
  );
};

export default AgencyApplication;
