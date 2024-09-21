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
import DeleteIcon from "@mui/icons-material/Delete";

export default function Case({ params, searchParams }: any) {
  if (params.caseId === "92") {
    notFound();
  }
  return (
    <form className="flex-col mt-28 gap-5 flex ">
      <TextField
        label="Case Type"
        variant="outlined"
        size="medium"
        disabled
        defaultValue={params.caseId}
        sx={{ width: "100%" }}
      />
      <TextField
        label="Case Name"
        variant="outlined"
        size="medium"
        disabled
        defaultValue={"Instagram Fraud"}
        sx={{ width: "100%" }}
      />
      <div className="flx-row justify-between gap-5">
        <TextField
          label="Phone Number"
          variant="outlined"
          size="medium"
          disabled
          defaultValue={"9874563214"}
          sx={{ width: "100%" }}
        />
        <TextField
          label="Pincode"
          variant="outlined"
          size="medium"
          disabled
          defaultValue={"700137"}
          sx={{ width: "100%" }}
        />
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
          <IconButton className="">
            <DeleteIcon className="text-green-400" />
          </IconButton>
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
        <div className="flex flex-col gap-5">
          <TextField
           label="URL"
           variant="outlined"
           size="medium"
           disabled
           defaultValue={"700137"}
           sx={{ width: "100%" }}
          />
          <TextField
            label="Description"
            variant="outlined"
            size="medium"
            disabled
            multiline
            defaultValue={"700137"}
            sx={{ width: "100%" }}
          />
        </div>
      </div>
      <Button type="submit" variant="contained"  color="success" className="tracking-widest h-10 w-1/3">
        Update
      </Button>
    </form>
  );
}
