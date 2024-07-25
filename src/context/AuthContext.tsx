"use client";

import React, { useContext, createContext, useState, useEffect } from "react";
import { useAuthentication } from "@/api/authentication";

type Account = {
  email: string;
  role: "admin" | "user" | "agency";
  id: string;
};
type AccountValue = {
  account: Account | null;
  setAccount: React.Dispatch<React.SetStateAction<Account | null>>;
};
const defaultAccountValue: AccountValue = {
  account: null,
  setAccount: () => {},
};

const Data = createContext<AccountValue>(defaultAccountValue);

const AuthContext = ({ children }: { children: React.ReactNode }) => {
  const [account, setAccount] = useState<Account | null>(null);
  const { GetAccountApi } = useAuthentication();

  const value: AccountValue = {
    account,
    setAccount,
  };
  useEffect(() => {
    const loadAccount = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const account_res = await GetAccountApi();
          console.log("Account ",account_res);
          setAccount(account_res)
        } catch (err) {
          console.log(err);
        }
        finally{
            console.log("Account ",account);}
      }
    };
    loadAccount();
  }, []);
  return <Data.Provider value={value}>{children}</Data.Provider>;
};

export default AuthContext;
export const useAuth = () => {
  return useContext(Data);
};
