import { Button, TextField } from "@mui/material";

const SignUpAsUser:React.FC=()=>{
    return(
        <form className="flex flex-col gap-5">
        <TextField
          label="Enter your email"
          variant="outlined"
          size="medium"
          sx={{ width: "100%" }}
        />
        <TextField
          type="password"
          label="Enter your password"
          variant="outlined"
          size="medium"
          sx={{ width: "100%" }}
        />
        <Button
          variant="contained"
          color="success"
          disabled
          sx={{ height: "50px" }}
          className="tracking-widest text-lg font-bold"
        >
          Register
        </Button>
      </form>
    )
}
export default SignUpAsUser