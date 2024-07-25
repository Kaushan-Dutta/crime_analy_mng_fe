"use client"
import { Button, TextField } from "@mui/material";
import { useSignup } from "@/utils/authentication/signup";

const SignUpAsUser:React.FC=()=>{
    const { disabled, handleSignup, signupForm } = useSignup();
    return(
        <form className="flex flex-col gap-5" >
        {signupForm.map((field,id) => (
          <TextField key={id}
            variant="outlined"
            size="medium"
            sx={{ width: "100%" }}
            {...field}
          />
        ))}
        <Button
          variant="contained"
          color="success"
          disabled={disabled}
          sx={{ height: "50px" }}
          className="tracking-widest text-lg font-bold"
          onClick={handleSignup}
        >
          Register
        </Button>
      </form>
    )
}
export default SignUpAsUser