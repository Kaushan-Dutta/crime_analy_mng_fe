"use client"

import React, { useContext, createContext, useState } from 'react'

type Account = {
    email:string,
    role:'admin' | 'user' | 'agency'
}
type AccountValue={
    account:Account | null,
    setAccount:React.Dispatch<React.SetStateAction<Account | null>>
}
const defaultAccountValue: AccountValue = {
    account: null,
    setAccount: () => {}
  }
  
const Data = createContext<AccountValue>(defaultAccountValue)

const AuthContext = ({children}:{children:React.ReactNode}) => {
    const [account,setAccount] = useState<Account | null>({email:'user@gmail.com',role:'user'});

    const value:AccountValue={
        account,
        setAccount
    }
    return (
        <Data.Provider value={value} >
             { children }
        </Data.Provider>
  )
}

export default AuthContext
export const useAuth = () => {
    return useContext(Data)
}