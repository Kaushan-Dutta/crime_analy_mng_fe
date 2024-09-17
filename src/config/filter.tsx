"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export const useGlobalUtils = () => {
  const router = useRouter();

  const [dateFilter, setDateFilter] = useState<string>("");
  const [timeFilter, setTimeFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");

  const filter = {
    "By Date": {
      data: ["Today", "Yesterday", "Last 7 days", "Last 30 days"],
      value: dateFilter,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setDateFilter(e.target.value);
      },
    },
    "By Status": {
      data: ["Pending", "Approved", "Rejected", "On Hold"],
      value: statusFilter,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatusFilter(e.target.value);
      },
    },
    "By Time": {
      data: [
        "15 mins",
        "30 mins",
        "1 hr",
        "2 hrs",
        "4 hrs",
        "8 hrs",
        "12 hrs",
        "24 hrs",
      ],
      value: timeFilter,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setTimeFilter(e.target.value);
      },
    },
  };

  return {filter};
};
