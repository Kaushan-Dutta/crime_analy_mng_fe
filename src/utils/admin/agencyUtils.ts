"use client";
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { useAdminApis } from '@/api/admin';
import { useRouter } from 'next/navigation';

export const useAgencyUtils = () => {
    const router = useRouter();

    const { agencies,UpdateAgencyStatus } = useAdminApis();

    const memoizedAgencies = useMemo(() => agencies, [agencies]);

    const handleUpdateAgencyStatus=async (id:string,status:string) => {
        
        try {
            console.log(id,status,"From utils");
            const updateStatus=await UpdateAgencyStatus(id,status);
            console.log(updateStatus);
            toast.success('Agency status updated');
        }
        catch (error:any) {
            console.log("Error is ",error.message);
            toast.error('Error updating agency status');
        }
    }

    return {
        agencies: memoizedAgencies,
        handleUpdateAgencyStatus
    };
};
