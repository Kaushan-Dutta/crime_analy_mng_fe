"use client";
import React, { useEffect, useState, useCallback, useMemo, use } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useAgencyApis } from '@/api/agency';
import { useAlert } from '../alerts';

type UseAgencyType = {
    alerts: {
        id: string,
        latitude: string,
        longitude: string,
        status: string,
        createdAt: string,
    }[];
    agencyForm: {
        id: number,
        formList: {
            label: string;
            value: string;
            type: string;
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        }[]
    }[],
    handleAgencyRegister: (e: React.MouseEvent<HTMLElement>) => void,
    disabled: boolean
};

export const useAgency = (): UseAgencyType => {
    const router = useRouter();
    const { location } = useAlert();

    const [email, setEmail] = useState('');
    const [pincode, setPincode] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const [document, setDocument] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const [disabled, setDisabled] = useState(true);

    const agencyForm = [
        {
            id: 1,
            label:"Agency Details",
            formList: [
                {
                    label: 'Enter Agency Name',
                    value: name,
                    type: 'text',
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)
                }
            ]
        },
        {
            id: 2,
            label:"Agency Location",
            formList: [
                {
                    label: 'Enter Pincode',
                    value: pincode,
                    type: 'number',
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPincode(e.target.value)
                },
                {
                    label: 'Enter Latitude',
                    value: latitude,
                    type: 'number',
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setLatitude(e.target.value)
                },
                {
                    label: 'Enter Longitude',
                    value: longitude,
                    type: 'number',
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setLongitude(e.target.value)
                },
            ]
        },
        {
            id: 3,
            label:"Proof",
            formList: [
                {
                    label: 'Enter Document Url',
                    value: document,
                    type: 'text',
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setDocument(e.target.value),
                }
            ]

        },
        {
            id: 4,
            formList: [
                {
                    label: 'Enter your email',
                    value: email,
                    type: 'text',
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
                },
                {
                    label: 'Enter your phone number',
                    value: phone,
                    type: 'number',
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)
                }

            ]

        }
    ]

    const { alerts,AgencyRegister } = useAgencyApis();

    const memoizedAlerts = useMemo(() => alerts, [alerts]);

    const handleAgencyRegister = useCallback(async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        try {
            console.log("Agency Register")
            console.log(email,pincode,document,latitude,longitude,phone,name)
            const resAgency=await AgencyRegister(email,pincode,document,latitude,longitude,phone,name);
            // toast.success(resAgency.message)
            console.log(resAgency)
            toast.success("Agency Registered")
            window.location.href="/"
        }
        catch (err:any) {
            console.log(err)
            toast.error("Error in registering agency",err)
        }

    }, [
        email, pincode, document, name, location
    ])
    useEffect(() => {
        if (email.trim() !== '' && longitude.trim() !== '' && latitude.trim() !== '' && pincode.trim() !== '' && document.trim() !== '' && name.trim() !== '' && phone.trim() !== '') {
          // console.log(email, password);
          setDisabled(false);
        } else {
          setDisabled(true);
        }
      }, [email, pincode, document, name, phone, longitude, latitude]);

    return {
        alerts: memoizedAlerts,
        handleAgencyRegister,
        agencyForm,
        disabled
    };
};
