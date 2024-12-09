"use client";
import React, { useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton, Button, TextField } from "@mui/material";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Image from "next/image";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useAuth } from "@/context/AuthContext";
import VerifiedIcon from "@mui/icons-material/Verified";
import CancelIcon from "@mui/icons-material/Cancel";
import CopyAllOutlinedIcon from "@mui/icons-material/CopyAllOutlined";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import PendingIcon from "@mui/icons-material/Pending";
import { useCaseUtils } from "@/utils/agency/caseUtils";


const ReqCase: React.FC<CaseProps> = ({ cases }) => {
  const { account } = useAuth();
  console.log("Cases got inside Case.tsx", cases);
  const [openApproval, setOpenApproval] = useState<string | null>();
  const { handleUpdateCaseStatus } = useCaseUtils();

  const dateConverter = (timestamp: string) => {
    const date = new Date(parseInt(timestamp));
    return date.toLocaleDateString();
  };

  const ApprovalDrop = ({ id }: { id: string }) => {
    return (
      <MenuList
        id="composition-menu"
        aria-labelledby="composition-button"
        className="absolute bg-green-600 w-28 z-10 -translate-x-16 rounded-md text-white"
      >
        <MenuItem
          onClick={() => {
            handleUpdateCaseStatus(id, "APPROVED");
            setOpenApproval(null);
          }}
        >
          Approve
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleUpdateCaseStatus(id, "REJECTED");
            setOpenApproval(null);
          }}
        >
          Reject
        </MenuItem>
      </MenuList>
    );
  };
  return (
    <div className="text-[17px]  flex-col flex gap-3 font-mono">
      <div className="flx-row justify-between rounded-md text-md px-5 py-3 leading-5 border">
        <div className="flx-row w-5/6 justify-between">
          <p className=" w-1/4">CS7001371323</p>
          <p className=" w-1/4">Maheshtala Agency</p>
          <p className=" w-1/4 flx-row gap-1">
            {`0x844...0686aF`}
            <IconButton size="small">
              <CopyAllOutlinedIcon className="text-md text-green-600" />
            </IconButton>
          </p>

          {/* <p className="  w-1/5">{dateConverter(caseItem.createdAt)}</p> */}
          <p className="  w-1/4">2022-09-12 00:17:54 </p>
        </div>
        <div className="flx-row justify-between w-1/6">
          <Link href={""} className="flx-row gap-2">
            <IconButton>
              <RemoveRedEyeIcon className="text-ascent" />
            </IconButton>
            View
          </Link>
          <IconButton size="large" color="primary" aria-label="edit icon" >
            <VerifiedIcon className="text-green-600" />
          </IconButton>
        </div>
      </div>

      <div className="flx-row justify-between rounded-md text-md px-5 py-3 leading-5 border">
        <div className="flx-row w-5/6 justify-between">
          <p className=" w-1/4">CS7001371323</p>
          <p className=" w-1/4">Maheshtala Agency</p>
          <p className=" w-1/4 flx-row gap-1">
            {`0x844...0686aF`}
            <IconButton size="small">
              <CopyAllOutlinedIcon className="text-md text-green-600" />
            </IconButton>
          </p>

          {/* <p className="  w-1/5">{dateConverter(caseItem.createdAt)}</p> */}
          <p className="  w-1/4">2022-09-12 00:17:54 </p>
        </div>
        <div className="flx-row justify-between w-1/6">

        <IconButton size="large" color="primary" aria-label="edit icon" >
          <PendingIcon className="text-background1" />
        </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ReqCase;
