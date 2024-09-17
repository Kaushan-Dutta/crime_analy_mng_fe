"use client";
import Button from "@mui/material/Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useCaseUtils } from "@/utils/user/caseUtils";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
  IconButton,
} from "@mui/material";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

const caseType = [
  "CYBER",
  "MISSING",
  "KIDNAPPING",
  "TRAFFICKING",
  "ACCIDENT",
  "OTHER",
];

export default function CaseRegister() {
  const { caseForm,evidence,setEvidence, setCaseType,handleCaseRegister } = useCaseUtils();
  // console.log("Evidence", evidence);
  return (
    <div className="max-w-screen-2xl mb-12">
      <form className="flex flex-col gap-8" onSubmit={handleCaseRegister}>
        <TextField
          label="Case Type"
          select
          className="w-full h-fit text-sm bg-white" onChange={(e:any) => {
            setCaseType(e.target.value);
          }}
        >
          {caseType.map((item, id) => (
            <MenuItem key={id} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
        {caseForm.map((form, index) => (
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
        <label className="flx-row gap-2 text-xl font-semibold">
          Add Evidence
          <IconButton
            onClick={() => {
              setEvidence([...evidence, { url: "", description: "" }]);
            }}
          >
            {" "}
            <AddCircleOutlinedIcon className="text-ascent" />
          </IconButton>
        </label>
        {evidence.map((item, index) => (
          <div className="flex flex-col gap-5">
            <TextField
              variant="outlined"
              label="URL"
              className="w-full"
              value={item.url}
              onChange={(e) => {
                const newEvidence = [...evidence];
                newEvidence[index].url = e.target.value;
                setEvidence(newEvidence);
              }}
            />
            <TextField
              variant="outlined"
              label="Description"
              className="w-full"
              multiline
              rows={4}
              value={item.description}
              onChange={(e) => {
                const newEvidence = [...evidence];
                newEvidence[index].description = e.target.value;
                setEvidence(newEvidence);
              }}
            />
          </div>
        ))}

        <Button
          type="submit"
          variant="contained"
          color="success"
          className="w-1/2 h-12 leading-relaxed tracking-widest text-lg"
        >
          Register Case
        </Button>
      </form>
    </div>
  );
}
