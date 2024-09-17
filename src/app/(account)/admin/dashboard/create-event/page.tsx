"use client";
import { useAdmin } from "@/utils/admin";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function CreateEvent() {
  const { eventForm,handleEventCreation } = useAdmin();
  return (
    <div className="max-w-screen-2xl">
      <form className="flex flex-col gap-8" onSubmit={handleEventCreation}>
        {eventForm.map((form, index) => (
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
        <div className="flx-row justify-between gap-5">
            <TextField variant="outlined" label="Start Time"  className="w-1/2"/>
            <TextField variant="outlined" label="End Time" className="w-1/2" />
        </div>
        <Button  variant="contained" color="error" className="w-1/3 h-10 flx-row justify-center gap-3">
          Upload Image
            <FileUploadIcon/>
        </Button>
        <Button type="submit" variant="contained" color="success" className="w-full h-12">
          Create Event
        </Button>
      </form>
    </div>
  );
}
