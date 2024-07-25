"use client"
import Image from "next/image";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import AuthHeading from "../../components/AuthHeading";
import { useLogin } from "../../../../utils/authentication/login";
import {useAuth} from "@/context/AuthContext";

import { useRouter } from "next/navigation";

export default function Login() {
  const { loginForm, disabled, handleLogin } = useLogin();
  const {account} = useAuth();
  const router = useRouter();

  if(account){
    return router.push('/')
  }
  return (
    <AuthHeading
      heading={{
        image: "",
        title: "Login",
        otherTitle: "Dont have an account? Click ",
        redirectTitle: "here to register",
        redirect: "/register",
      }}
    >
      <form className="flex flex-col gap-5">
        {loginForm.map((field,id) => (
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
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>
    </AuthHeading>
  );
}
