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


const Case: React.FC<CaseProps> = ({ cases }) => {
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
      {cases?.map((caseItem: CaseType) => (
        <div
          key={caseItem.id}
          className="flx-row justify-between rounded-md text-md px-5 py-3 leading-5 border"
        >
          <p className=" w-1/5">{caseItem.name}</p>

          <p className="  w-1/5">{dateConverter(caseItem.createdAt)}</p>
          {/* <p className="flx-row gap-2  w-1/5 ">
            <span>
              <FiberManualRecordIcon className={`text-sm ${caseItem.status === 'Pending' ? 'text-green-500' : 'text-red-500'}`} />
            </span>
            {caseItem.status}
          </p> */}
          <Link href={`/case/${caseItem.id}`} className="flx-row gap-2   w-1/5">
            <IconButton>
              <RemoveRedEyeIcon className="text-ascent" />
            </IconButton>
            View
          </Link>
          <p className="w-1/5 text-center">
            {caseItem.type}
          </p>
          <div className="w-1/5 justify-end flex">
            {caseItem?.status == "APPROVED" ||
            caseItem?.status == "REJECTED" ? (
              caseItem?.status == "APPROVED" ? (
                <IconButton size="large" color="primary" aria-label="edit icon">
                  <VerifiedIcon className="text-green-600" />
                </IconButton>
              ) : (
                <IconButton size="large" color="primary" aria-label="edit icon">
                  <CancelIcon className="text-ascent" />
                </IconButton>
              )
            ) : account?.role == "AGENCY" ? (
              <div className="">
                <IconButton
                  size="large"
                  color="primary"
                  aria-label="edit icon"
                  onClick={() => {
                    if (openApproval === caseItem.id) setOpenApproval(null);
                    else setOpenApproval(caseItem.id);
                  }}
                >
                  <EditNoteIcon className="text-ascent" />
                </IconButton>
                {openApproval && openApproval == caseItem.id && (
                  <ApprovalDrop id={caseItem.id} />
                )}
              </div>
            ) : (
              <IconButton size="large" color="primary" aria-label="edit icon">
                <PendingIcon className="text-background1" />
              </IconButton>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Case;
