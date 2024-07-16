import {Button,TextField} from "@mui/material";

export default function FakeSpot() {
    return(
        <div className=" container-medium flex flex-col gap-5">
            <TextField
                label="Enter email"
                variant="outlined"
                size="medium"
                sx={{ width: "100%" }}
            />
           
            <Button
                variant="contained"
                color="success"
                
                size="large"
                className="tracking-widest w-1/3 "
            >
                DETECT
            </Button>
        </div>
    )
}