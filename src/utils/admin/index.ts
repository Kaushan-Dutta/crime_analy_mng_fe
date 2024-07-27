"use client";
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { useAdminApis } from '@/api/admin';
import { useRouter } from 'next/navigation';

type UseAdminType = {
    agencies: {
        name: string;
        pincode: string;
        document: string;
        status: string;
    }[];
    events: {
        id: string;
        name: string;
        description: string;
        date: string;
        location: string;
    }[];
};

export const useAdmin = ():UseAdminType => {
    const router = useRouter();

    const { agencies,events } = useAdminApis();

    const memoizedAgencies = useMemo(() => agencies, [agencies]);
    const memoizedEvents = useMemo(() => events, [events]);


    return {
        agencies: memoizedAgencies,
        events: memoizedEvents
    };
};
