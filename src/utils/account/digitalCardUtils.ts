"use state"
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { useCardApi } from '@/api/digitalcard';

export const DigitalCardUtils = () => {

    const {card,createCard}=useCardApi();

    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [pincode, setPincode] = useState<string>("");
    const [document, setDocument] = useState<string>("");
    const [consent, setConsent] = useState<boolean>(false);

    const getMemoizedCard=useMemo(()=>card,[card]);

    const digitalCardForm = [
        {
            label: "Enter your name",
            type: "text",
            value: name,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
            },
        },
        {
            label: "Enter your phone",
            type: "number",
            value: phone,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setPhone(e.target.value);
            },
        },
        {
            label: "Enter your address",
            type: "text",
            value: address,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setAddress(e.target.value);
            },
        },
        {
            label: "Enter your pincode",
            type: "number",
            value: pincode,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setPincode(e.target.value);
            },
        }
    ]

    const handleSubmit = useCallback(async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (!consent) {
                throw new Error("Please accept the terms and conditions");
            }
            const _createCard=await createCard({name,phone,address,pincode,document});
            console.log("create card",_createCard);
            toast.success("Form submitted successfully");

        }
        catch (err) {
            console.error(err);
            toast.error("Error submitting form");
        }
    }, [
        name,
        phone,
        address,
        pincode,
        document,
        consent
    ])

    return { digitalCardForm, consent, setConsent, document, setDocument, handleSubmit,getMemoizedCard };
}
