"use client";
import { notFound } from "next/navigation";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import { useEffect } from "react";
import { useCase } from "@/utils/case";

type TextType={
  label: string,
  defaultValue: string,
  disabled?: boolean
}

const CustomTextField = ({label, defaultValue, disabled = true }:TextType) => (
  <TextField
    label={label}
    variant="outlined"
    size="medium"
    disabled={disabled}
    defaultValue={defaultValue}
    InputLabelProps={{ shrink: true }}
    sx={{ width: "100%" }}
  />
);

export default function Case() {
  const { caseDes, caseUpdate } = useCase();
  console.log(caseDes);

  return (
    <form className="flex-col mt-28 gap-5 flex ">
      <CustomTextField label="Case Type" defaultValue={caseDes?.type} />
      <CustomTextField label="Case Name" defaultValue={caseDes?.name} />

      <div className="flx-row justify-between gap-5">
        <CustomTextField label="Phone Number" defaultValue={caseDes?.phone} />
        <CustomTextField label="Pincode" defaultValue={caseDes?.pincode} />
      </div>

      <div className="flx-row justify-between gap-5">
        <CustomTextField label="Complainer Name" defaultValue={""} />
        <CustomTextField label="Agency" defaultValue={caseDes?.agency?.name} />
      </div>
      <div className="flex flex-col ">
        <label className="flx-row gap-2 text-xl font-semibold">
          Add Evidence
          <IconButton
          // onClick={() => {
          //   setEvidence([...evidence, { url: "", description: "" }]);
          // }}
          >
            {" "}
            <AddCircleOutlinedIcon className="text-ascent" />
          </IconButton>
        </label>
        <div className="flex flex-col gap-3 items-end">
          <Button className="flx-row" variant="outlined">
            {/* <DeleteIcon  /> */}
            <span className="">Delete</span>
          </Button>
          <TextField
            variant="outlined"
            label="URL"
            className="w-full"

            // value={item.url}
            // onChange={(e) => {
            //   const newEvidence = [...evidence];
            //   newEvidence[index].url = e.target.value;
            //   setEvidence(newEvidence);
            // }}
          />
          <TextField
            variant="outlined"
            label="Description"
            className="w-full"
            multiline
            rows={4}
            // value={item.description}
            // onChange={(e) => {
            //   const newEvidence = [...evidence];
            //   newEvidence[index].description = e.target.value;
            //   setEvidence(newEvidence);
            // }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {caseDes?.evidence.map((evidence:any)=>(
          <div className="flex flex-col gap-5">
            <TextField
              label="URL"
              variant="outlined"
              size="medium"
              disabled
              defaultValue={evidence.url}
              sx={{ width: "100%" }}
            />
            <TextField
              label="Description"
              variant="outlined"
              size="medium"
              disabled
              multiline
              defaultValue={evidence.description}
              sx={{ width: "100%" }}
            />
          </div>
        ))}
      </div>
      <Button
        type="submit"
        variant="contained"
        color="success"
        className="tracking-widest h-10 w-1/3"
      >
        Update
      </Button>
    </form>
  );
}
