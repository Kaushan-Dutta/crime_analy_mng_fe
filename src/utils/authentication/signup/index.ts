"use client";
import React, { useEffect, useState ,useCallback} from 'react';
import { toast } from 'react-hot-toast';
import { useAuthentication } from '@/api/authentication';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';


export const useSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const { SignupApi } = useAuthentication();
  const router = useRouter();

  

  const signupForm = [
    {
      label: "Enter your email",
      type: "text",
      value: email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
      },
    },
    {
      label: "Enter your password",
      type: "password",
      value: password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    },
  ];

  useEffect(() => {
    if (email.trim()!=='' && password.trim()!=='') {
      // console.log(email, password);
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleSignup = async(e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const signup_res = await SignupApi(email, password);
      console.log(signup_res);
      toast.success('SignUp successful');
      // router.push('/login');

    } catch (err) {
      console.log(err);
      toast.error('SignUp failed');
    }
  };

  return {
    signupForm,
    disabled,
    handleSignup,
  };
};
