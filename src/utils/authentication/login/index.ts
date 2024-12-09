"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-hot-toast';
import { useAuthentication } from '@/api/authentication';
import { useRouter } from 'next/navigation';


export const useLogin = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const { LoginApi } = useAuthentication();

  const loginForm = [
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
    if (email.trim() !== '' && password.trim() !== '') {
      // console.log(email, password);
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleLogin = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      // console.log(email, password);
      const login_res = await LoginApi(email, password);
      //  console.log(res);
      localStorage.setItem('token', login_res.data);
      toast.success('Login successful');
      window.location.href="/"
    } catch (err) {
      console.log(err);
      toast.error('Invalid credentials');
    }
  };

  return {
    loginForm,
    disabled,
    handleLogin,
  };
};
