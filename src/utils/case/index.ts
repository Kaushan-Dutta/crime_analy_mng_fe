"use client";
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useCaseApi } from '@/api/case';
import { useSearchParams, usePathname } from 'next/navigation';

export const useCase = () => {
    const router = useRouter();
    const search_params = useSearchParams();
    const pathname = usePathname();

    const { Case, CaseUpdate } = useCaseApi();

    const [caseDes, setCaseDes] = useState<any>();

    const getCase = useCallback(async (caseId: string) => {
        try {
            // console.log("The case of the current",caseId);
            const res = await Case(caseId);
            // console.log("The case of the current",res);
            setCaseDes(res);
        }
        catch (e: any) {
            console.log(e.message);
            toast.error(e.message)
        }
    },[])
    useEffect(() => {
        const caseId = pathname.split("/")[2];
        // console.log(caseId," as pathname");
        if (caseId) {
            getCase(caseId);
        }
    }, [getCase]);
    const caseUpdate = async (evidence: any, caseId: string) => {
        try {
            const res = await CaseUpdate(evidence, caseId);
            console.log(res);
        }
        catch (e: any) {
            toast.error(e.message)
        }
    }
    return {
        caseDes,
        caseUpdate
    }
};
