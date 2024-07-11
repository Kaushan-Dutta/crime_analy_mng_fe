import Image from "next/image";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import AuthHeading from "../../components/AuthHeading";

export default function Login() {
  return (
    <AuthHeading
      heading={{
        image: "",
        title: "Login",
        otherTitle:'Dont have an account? Click ',
        redirectTitle: "here to register",
        redirect: "/register",
      }}
    >
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
          Login
        </Button>
      </form>
    </AuthHeading>
  );
}
