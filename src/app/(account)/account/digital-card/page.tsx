"use client";
import React from "react";
import { Button, TextField, Checkbox } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { DigitalCardUtils } from "@/utils/account/digitalCardUtils";

const page = () => {
  const {
    digitalCardForm,
    consent,
    setConsent,
    document,
    setDocument,
    handleSubmit,
    getMemoizedCard,
  } = DigitalCardUtils();
  console.log(getMemoizedCard);

  return (
    <div className="">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        {digitalCardForm.map((form, index) => (
          <TextField
            key={index}
            variant="outlined"
            size="medium"
            required
            {...form}
            InputLabelProps={{
              shrink: true,
            }}
          />
        ))}
        <Button variant="outlined" color="error" className="w-1/3 h-12">
          Upload Document
          <FileUploadIcon />
        </Button>
        <div className="flx-row justify-between gap-5">
          <Checkbox
            inputProps={{ "aria-label": "controlled" }}
            onClick={() => setConsent(!consent)}
          />
          I have read the terms and conditions of the event and agree to them.
          If I fail to comply with the terms and conditions, I will be held
          accountable. If I fail to comply with the terms and conditions, I will
          be held accountable.
        </div>

        <Button
          type="submit"
          variant="contained"
          color="success"
          className=" rounded-full h-12 "
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default page;
