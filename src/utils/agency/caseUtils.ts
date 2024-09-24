"use client";
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useAgencyApis } from '@/api/agency';

export const useCaseUtils = () => {
    const router = useRouter();
    const [cases, setCases] = useState([]);
    const { GetAgencyCases,UpdateCaseStatus , allcases} = useAgencyApis();
    const memoizedCases = useMemo(() => allcases, [allcases]);
    const fetchCases = useCallback(async () => {
        try {
            const res = await GetAgencyCases();
            console.log("The Cases",res);
            setCases(res);
        }
        catch (error: any) {
            console.log("Error is ", error.message);
            toast.error('Error fetching cases');
        }
    }, [])
    useEffect(() => {
        fetchCases();
    }, [fetchCases]);
    const handleUpdateCaseStatus=async(id:string,status:string)=>{
        try{
            console.log("Id is ",id,"Status is ",status);
            const res=await UpdateCaseStatus(id,status);
            console.log("Response is ",res);
            toast.success('Case status updated successfully');
        }
        catch(error:any){
            console.log("Error is ",error.message);
            toast.error('Error updating case status');
        }

    }
    console.log("Cases are ",cases)
    return {
        cases,
        handleUpdateCaseStatus,
        allcases:memoizedCases
    };
};
