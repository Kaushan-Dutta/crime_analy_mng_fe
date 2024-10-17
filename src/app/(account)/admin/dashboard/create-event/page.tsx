"use client";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useAdminEvents } from "@/utils/admin/eventUtils";

export default function CreateEvent() {
  const { eventForm,handleEventCreation } = useAdminEvents();
  return (
    <div className="">
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
        <Button  variant="contained" color="error" className="w-1/3 h-12">
          Upload Image
          <FileUploadIcon/>
        </Button>
        
        <div className="flx-row justify-end gap-5 ">
        <Button type="submit" variant="contained" color="success" className=" w-[300px] rounded-full h-12 ">
          Create Event
        </Button>
        </div>
      </form>
    </div>
  );
}
