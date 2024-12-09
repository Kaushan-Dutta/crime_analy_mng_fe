"use client";
import { TextField, IconButton, Button } from "@mui/material";
import { useState } from "react";
import CaseDetails from "./CaseDetails";
import CaseHistory from "./CaseHistory";

export default function Case() {
  const [tab, setTab] = useState<string>("Case Details");
  return (
    <div className="mt-28 flex flex-col gap-10">
      <div className="flx-row font-aton tracking-widest text-lg text-background1">
        <button
          className={`${tab==="Case Details"?'bg-ascent text-background':''}  w-1/2 border-b-[1px]  border-gray-400 p-2`}
          onClick={() => {
            if (tab === "Case History") {
              setTab("Case Details");
            }
          }}
        >
          Case Details{" "}
        </button>
        <button
          className={`${tab==="Case History"?'bg-ascent text-background':''}  w-1/2 border-b-[1px]  border-gray-400 p-2`}
          onClick={() => {
            if (tab === "Case Details") {
              setTab("Case History");
            }
          }}
        >
          Case History{" "}
        </button>
      </div>
      {tab === "Case Details" ? <CaseDetails /> : <CaseHistory />}
    </div>
  );
}
