"use client";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { Button, TextField } from "@mui/material";
import { useAccount } from "@/utils/account";

export default function Account() {
  const { account } = useAuth();
  const { handleUpdate,updateForm,phone,setPhone } = useAccount();
  return (
    <div className="container-small flex md:flex-row flex-col items-center justify-between gap-10">
      <div className="flex flex-col gap-5 justify-center text-center md:w-1/3 ">
        <Image
          alt="profile"
          src=""
          className="w-48 h-48 rounded-full border-2 mx-auto"
        />
        <p>{account?.role}</p>
        <p>{account?.email}</p>
      </div>
      <div className="flex-1   justify-end">
        <form className="flex-col flex gap-5">
          
          <TextField
            label="Your email"
            variant="outlined"
            size="medium"
            disabled
            defaultValue={account?.email}
            sx={{ width: "100%" }}
          />
          {updateForm && updateForm.map((ele:any,id)=>(
            <TextField
              variant="outlined"
              size="medium"
              sx={{ width: "100%" }}
              {...ele}
              key={id}
            />
          ))}
          <div className="flx-row gap-3">
            <TextField
              type="number"
              label="Your Phone Number"
              variant="outlined"
              size="medium"
              sx={{ width: "80%" }}
            />
            <Button
              color="error"
              variant="contained"
              size="large"
              disabled
              sx={{ width: "20%",height:"57px" }}
            >
              Get Otp
            </Button>
          </div>
          <Button
              color="error"
              variant="contained"
              size="large"
              className="w-fit tracking-widest"
              onClick={handleUpdate}
            >
              UPDATE
            </Button>
        </form>
      </div>
    </div>
  );
}
