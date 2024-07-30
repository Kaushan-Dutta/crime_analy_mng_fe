import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import { IconButton, Stack } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useAlert } from "@/utils/alerts";

type PopType = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Alert = ({ open, setOpen }: PopType) => {
  const { location,handleLocation,handleAlert } = useAlert();
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Box sx={style}  className="flex flex-col gap-5 justify-center text-center">
            <CrisisAlertIcon className="text-error text-6xl mx-auto text-ascent" /> 
          <Button variant="contained" size="small" className="w-fit mx-auto flx-row gap-2" onClick={handleLocation}>
            <LocationOnIcon/>{location?('Lat: '+location?.latitude+' Long: '+location?.longitude):'Set Location'}
          </Button>
          <Typography id="modal-modal-title" variant="h6" component="h2" className="font-rale">
            Are you sure want to sent alert?
          </Typography>
            <Button variant="contained" size="medium" color="success" className=" w-2/3 mx-auto tracking-widest" onClick={handleAlert}>
              SEND
            </Button>
            
        </Box>
      </Modal>
    </div>
  );
};

export default Alert;
