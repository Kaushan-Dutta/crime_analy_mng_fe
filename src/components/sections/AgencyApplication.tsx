"use client";
import React, { useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton, Button, TextField } from "@mui/material";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import CancelIcon from "@mui/icons-material/Cancel";
import CopyAllOutlinedIcon from "@mui/icons-material/CopyAllOutlined";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useAgencyUtils } from "@/utils/admin/agencyUtils";

export type AgencyType = {
  id: string;
  name?: string;
  pincode?: string;
  document?: string;
  status: string;
  phone?: string;
  latitude?: string;
  longitude?: string;
};

type AgencyApplicationProps = {
  agencies: AgencyType[];
};

const AgencyApplication: React.FC<AgencyApplicationProps> = ({ agencies }) => {
  const { handleUpdateAgencyStatus } = useAgencyUtils();
  const [openApproval, setOpenApproval] = useState<string | null>();

  const ApprovalDrop = ({ id }: { id: string }) => {
    return (
      <MenuList
        id="composition-menu"
        aria-labelledby="composition-button"
        className="absolute bg-green-600 w-28 z-10 -translate-x-16 rounded-md text-white"
      >
        <MenuItem
          onClick={() => {
            handleUpdateAgencyStatus(id, "APPROVED");
            setOpenApproval(null);
          }}
        >
          Approve
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleUpdateAgencyStatus(id, "REJECTED");
            setOpenApproval(null);
          }}
        >
          Reject
        </MenuItem>
      </MenuList>
    );
  };

  console.log("Agencies Details", agencies);
  return (
    <div className="text-[17px]  flex-col flex gap-3 font-mono">
      {agencies &&
        agencies.length > 0 &&
        agencies.map((agency, id) => (
          <div
            className="flx-row justify-around  rounded-md text-md px-5 py-3 leading-5 border"
            key={id}
          >
            <p className="w-1/5">{agency?.name}</p>
            <p className="w-1/5 flx-row gap-1">
              {agency?.phone}
              <IconButton size="small">
                <CopyAllOutlinedIcon className="text-md text-green-600" />
              </IconButton>
            </p>
            <p className="w-1/5">
              LAT: {agency?.latitude}
              {"     "}LONG: {agency?.longitude}
            </p>

            <Link
              href={agency?.document || ""}
              target="_blank"
              className="w-1/5 flx-row gap-2"
            >
              <span>
                <RemoveRedEyeIcon className="text-ascent" />
              </span>
              View
            </Link>
            {/* <p className="flx-row gap-2 w-1/5">
              <span>
                <FiberManualRecordIcon className="text-green-500 text-sm" />
              </span>
              {agency?.status}
            </p> */}

            {agency?.status == "APPROVED" || agency?.status == "REJECTED" ? (
              agency?.status == "APPROVED" ? (
                <IconButton size="large" color="primary" aria-label="edit icon">
                  <VerifiedIcon className="text-green-600" />
                </IconButton>
              ) : (
                <IconButton size="large" color="primary" aria-label="edit icon">
                  <CancelIcon className="text-ascent" />
                </IconButton>
              )
            ) : (
              <div className="relative">
                <IconButton
                  size="large"
                  color="primary"
                  aria-label="edit icon"
                  onClick={() => {
                    if (openApproval === agency.id) setOpenApproval(null);
                    else setOpenApproval(agency.id);
                  }}
                >
                  <EditNoteIcon className="text-ascent" />
                </IconButton>
                {openApproval && openApproval == agency.id && (
                  <ApprovalDrop id={agency.id} />
                )}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default AgencyApplication;
