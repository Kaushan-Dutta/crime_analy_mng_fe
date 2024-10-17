"use client";
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useUserApis } from '@/api/user';

export type EvidenceType = {
    url?: string,
    file?: string,
    description: string
}

export const useCaseUtils = () => {
    const router = useRouter();
    const { CaseRegister, cases } = useUserApis();

    const [caseType, setCaseType] = useState<'CYBER' | 'MISSING' | 'KIDNAPPING' | 'TRAFFICKING' | 'ACCIDENT' | 'OTHER'>('CYBER');
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [pincode, setPincode] = useState<string>('');
    const [evidence, setEvidence] = useState<EvidenceType[]>([]);

    const memoizedCases = useMemo(() => cases, [cases]);
    console.log("Memoized Cases", memoizedCases);
    const handleCaseRegister = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(caseType, name, phone, pincode, evidence);
        try {
            const updateStatus = await CaseRegister(caseType, name, phone, pincode, evidence);
            console.log(updateStatus);
            toast.success('Agency status updated');
        }
        catch (error: any) {
            console.log("Error is ", error.message);
            toast.error('Error updating agency status');
        }
    }, [caseType, name, phone, pincode, evidence]);

    const caseForm = [
        {
            label: 'Case Name',
            type: 'text',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
            },
            value: name
        },
        {
            label: 'Phone',
            type: 'number',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setPhone(e.target.value);
            },
            value: phone
        },
        {
            label: 'Pincode',
            type: 'number',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setPincode(e.target.value);
            },
            value: pincode
        }
    ]
    
    return {
        caseForm, evidence, setEvidence, caseType, setCaseType, handleCaseRegister,cases:memoizedCases
    };
};
