"use client";
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { adminApis } from '@/api/admin';
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

    const { agencies,events } = adminApis();

    const memoizedAgencies = useMemo(() => agencies, [agencies]);
    const memoizedEvents = useMemo(() => events, [events]);


    return {
        agencies: memoizedAgencies,
        events: memoizedEvents
    };
};
