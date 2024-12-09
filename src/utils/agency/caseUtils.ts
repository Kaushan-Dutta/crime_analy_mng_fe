"use client";
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter, usePathname } from 'next/navigation';
import { useAgencyApis } from '@/api/agency';
import { useAuth } from '@/context/AuthContext';

export const useCaseUtils = () => {
    const router = useRouter();
    const pathname = usePathname();

    const { account } = useAuth();
    const [cases, setCases] = useState([]);
    const [allCases, setAllCases] = useState([]);

    const [requestMessage,setRequestMessage]=useState<string>('');

    const { GetAgencyCases, UpdateCaseStatus, GetAllCases, RequestCase} = useAgencyApis();

    const fetchCases = useCallback(async () => {
        try {
            if (account?.role === 'AGENCY') {
                const res = await GetAgencyCases();
                console.log("Agency Cases", res);
                setCases(res);
            }
        } catch (error: any) {
            console.log("Error is ", error.message);
            toast.error('Error fetching cases');
        }
    }, [account]);

    useEffect(() => {
        if (pathname === '/agency/dashboard') {
            fetchCases();
        }
    }, [fetchCases, pathname]);

    const fetchAllCases = useCallback(async () => {
        try {
            if (account?.role == 'AGENCY') {
                const res = await GetAllCases();
                console.log("All Cases", res);
                setAllCases(res);
            }
        }
        catch (error: any) {
            console.log("Error is ", error.message);
            toast.error('Error fetching cases');
        }
    }, [account]);
    useEffect(() => {
        if (pathname === '/agency/dashboard/cases') {
            fetchAllCases();
        }
    }, [fetchAllCases, pathname]);

    const handleUpdateCaseStatus = async (id: string, status: string) => {
        try {
            console.log("Id is ", id, "Status is ", status);
            const res = await UpdateCaseStatus(id, status);
            console.log("Response is ", res);
            toast.success('Case status updated successfully');
        }
        catch (error: any) {
            console.log("Error is ", error.message);
            toast.error('Error updating case status');
        }

    }

    const sendRequest=useCallback(async(caseId:string)=>{
        try{
            console.log("Request Message",requestMessage);
            const res=await RequestCase(caseId,requestMessage);
            console.log("Response is ",res);
            toast.success('Request sent successfully');
        }
        catch(err:any){
            console.log("Error is ",err.message);
            toast.error('Error sending request');
        }
    },[requestMessage])

    return {
        cases,
        handleUpdateCaseStatus,
        allCases,
        sendRequest,
        setRequestMessage,     
        requestMessage
    };
};
