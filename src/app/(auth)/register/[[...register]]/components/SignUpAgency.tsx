"use client";

import { Button, TextField } from "@mui/material";
import Proof from "./agencyFormPage/Proof";
import Contact from "./agencyFormPage/Contact";
import Location from "./agencyFormPage/Location";
import { useState, useReducer } from "react";
import { useAgency } from "@/utils/agency";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
const Pages: { [key: number]: JSX.Element } = {
  1: <Location pageId={1} />,
  2: <Proof pageId={2} />,
  3: <Contact pageId={3} />,
};

const SignUpAsAgency: React.FC = () => {
  const [state, dispatch] = useReducer(handleState, 0);
  const { agencyForm, disabled, handleAgencyRegister } = useAgency();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        {agencyForm[state].formList.map((field, id) => (
          <TextField
            key={id}
            variant="outlined"
            size="medium"
            sx={{ width: "100%" }}
            {...field}
          />
        ))}
      </div>
      {state === 3 && (
        <Button
          variant="contained"
          color="success"
          disabled={disabled}
          sx={{ height: "50px" }}
          className="tracking-widest text-lg font-bold"
          onClick={handleAgencyRegister}
        >
          Register
        </Button>
      )}
      <div className="flx-row justify-end gap-5">
        <Button
          variant="text"
          onClick={() => {
            if (state != 0) {
              dispatch({ type: "decrement" });
            }
          }}
          className="flx-row gap-2"
        >
          <span>
            <ArrowBackIcon />
          </span>
          Prev
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
          Next
          <span>
            <ArrowForwardIcon />
          </span>
        </Button>
      </div>
    </div>
  );
};
export default SignUpAsAgency;
