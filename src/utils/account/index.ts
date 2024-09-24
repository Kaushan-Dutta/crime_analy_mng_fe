"use client";
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { useSearchParams, usePathname } from 'next/navigation';
import { useAuthentication } from '@/api/authentication';

export const useAccount = () => {

    const [name,setName]=useState<string | undefined>();
    const [password,setPassword]=useState<string | undefined>();
    const [phone,setPhone]=useState<string | undefined>();
    
    const { UpdateAccountApi } = useAuthentication();

    const updateForm=[
        {
            label: "Enter your name",
            type: "text",
            value: name,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
            },
        },
        
        {
            label: "Enter your password",
            type: "password",
            value: password,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
        }
    ];
    
    const handleUpdate = useCallback(async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        try {
            await UpdateAccountApi( password, name,phone);
            toast.success('Account updated successfully');
        } catch (error:any) {
            toast.error('Account update failed');
            console.log(error.message);
        }
    },[name || password || phone]);

    return {
        updateForm,handleUpdate,phone,setPhone
    }
};
