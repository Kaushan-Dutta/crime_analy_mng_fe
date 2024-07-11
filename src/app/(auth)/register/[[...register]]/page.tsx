"use client";

import { useState } from "react";
import Link from "next/link";

import SignUpAsAgency from "./components/SignUpAgency";
import SignUpAsUser from "./components/SignUpUser";

import AuthHeading from "../../components/AuthHeading";

const SignUp: React.FC = () => {
  const [state, setState] = useState<string>("user");

  return (
    <AuthHeading
      heading={{
        image: "",
        title: "Register",
        otherTitle: "Alredy have an account? Click ",
        redirectTitle: "here to login",
        redirect: "/login",
      }}
    >
      <>{state === "user" ? <SignUpAsUser /> : <SignUpAsAgency />}</>

      <Link
        className="font-bold underline"
        href="/register"
        onClick={() => {
          state === "user" ? setState("agency") : setState("user");
        }}
      >
        Register as {state === "user" ? "Agency" : "User"}
      </Link>
    </AuthHeading>
  );
};
export default SignUp;
