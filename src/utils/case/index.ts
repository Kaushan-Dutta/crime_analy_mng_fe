"use client";
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useCaseApi } from '@/api/case';
import { usePathname } from 'next/navigation';

export type EvidenceType = {
    url?: string,
    file?: string,
    description: string
}

export const useCase = () => {
  
    const pathname = usePathname();

    const { Case, CaseUpdate } = useCaseApi();

    const [caseDes, setCaseDes] = useState<any>();
    const [evidence, setEvidence] = useState<EvidenceType[]>([]);

    const getCase = useCallback(async (caseId: string) => {
        try {
            console.log("The case of the current",caseId);
            const res = await Case(caseId);
            console.log("The case of the current",res);
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
    const caseUpdate = useCallback(async (e:React.FormEvent) => {
        e.preventDefault();
        try {
            const caseId = pathname.split("/")[2];
            console.log(evidence, caseId);
            if (!caseId) {
                toast.error("Case Id not found");
                return;
            }

            await CaseUpdate(evidence, caseId);
            
            toast.success("Case Updated");
        }
        catch (e: any) {
            console.log(e.message);
            toast.error(e.message)
        }
    },[evidence])
    return {
        caseDes,
        caseUpdate,
        evidence,
        setEvidence
    }
};
