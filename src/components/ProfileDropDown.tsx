import React from "react";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const ProfileDropDown = () => {
  const { account } = useAuth();

  return (
    <MenuList
      id="composition-menu"
      aria-labelledby="composition-button"
      className="absolute bg-sky-900 w-40 -translate-x-28 rounded-md translate-y-2"
    >
      <Link href="/account" passHref>
        <MenuItem>Profile</MenuItem>
      </Link>
      <Link href="/fakespot" passHref>
        <MenuItem>FakeSpot</MenuItem>
      </Link>
      <Link href={`/${account?.role}/dashboard`} passHref>
        {account && <MenuItem>Dashboard</MenuItem>}
      </Link>
      <MenuItem>Logout</MenuItem>
    </MenuList>
  );
};

export default ProfileDropDown;
