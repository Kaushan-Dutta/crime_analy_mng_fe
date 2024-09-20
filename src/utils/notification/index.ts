"use client";
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useNotificationApi } from '@/api/notification';


export const useNotification = () => {
    const router = useRouter();
    const { notifications } = useNotificationApi();

    const memoizedNotifications = useMemo(() => notifications, [notifications]);
    return {
        notifications: memoizedNotifications
    };
};
