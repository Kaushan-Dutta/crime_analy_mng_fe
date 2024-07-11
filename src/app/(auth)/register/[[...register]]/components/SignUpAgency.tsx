"use client";

import { Button, TextField } from "@mui/material";
import Proof from "./agencyFormPage/Proof";
import Contact from "./agencyFormPage/Contact";
import Location from "./agencyFormPage/Location";
import { useState, useReducer } from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Pages: { [key: number]: JSX.Element } = {
  1: <Location />,
  2: <Proof />,
  3: <Contact />,
};
type CounterAction = { type: "increment" } | { type: "decrement" };

const handleState = (state: number, action: CounterAction): number => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
const SignUpAsAgency: React.FC = () => {
  const [state, dispatch] = useReducer(handleState, 1);

  return (
    <div className="flex flex-col gap-5">
      {Pages[state]}
      <div className="flx-row justify-end gap-5">
        <Button
          variant="text"
          onClick={() => {
            if (state != 1) {
              dispatch({ type: "decrement" });
            }
          }}
          className="flx-row gap-2"
        >
          <span><ArrowBackIcon/></span>Prev
        </Button>
        <Button
          variant="text"
          onClick={() => {
            if (state != 3) {
              dispatch({ type: "increment" });
            }
          }}
          className="flx-row gap-2"
        >
          Next<span><ArrowForwardIcon/></span>
        </Button>
      </div>
    </div>
  );
};
export default SignUpAsAgency;
