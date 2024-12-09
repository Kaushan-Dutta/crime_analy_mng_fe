"use client";
import React, { useEffect, useState, useRef, use } from "react";
import { Button, MenuItem, selectClasses, TextField } from "@mui/material";
import axios from "axios";

interface ListDropDownProps {
  searchList: string[];
  activeItem: number;
  setItem: (item: string) => void;
  setActive: (active: string) => void;
}

const ListDropDown: React.FC<ListDropDownProps> = ({
  searchList,
  activeItem,
  setItem,
  setActive
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (itemRefs.current[activeItem]) {
      itemRefs.current[activeItem]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeItem]);

  return (
    <div
      className="overflow-y-auto w-full border rounded-md absolute top-full mt-5 bg-white shadow-lg z-50 max-h-60 scroll"
      ref={containerRef}
    >
      {searchList.map((item: string, id: number) => (
        <li
          key={id}
          ref={(el) => {
            itemRefs.current[id] = el;
          }}
          onClick={() => {
            setItem(item);
            setActive("");
          }}
          className={`search-list shadow-md ${
            activeItem === id ? "bg-background" : "bg-white"
          }`}
        >
          {item}
        </li>
      ))}
    </div>
  );
};

const SearchAreaFilter = () => {
  const [state, setState] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");

  const [active, setActive] = useState<string>("");

  const stateref = useRef<HTMLInputElement>(null);
  const districtref = useRef<HTMLInputElement>(null);
  const pincoderef = useRef<HTMLInputElement>(null);

  const [stateList, setStateList] = useState<string[]>([
    "Andhra Pradesh",
    "Karnataka",
    "Tamil Nadu",
    "Kerala",
    "Maharashtra",
    "Gujarat",
    "Rajasthan",
  ]);
  const [districtList, setDistrictList] = useState<string[]>([
    "Andhra Pradesh",
    "Karnataka",
    "Tamil Nadu",
    "Kerala",
    "Maharashtra",
    "Gujarat",
    "Rajasthan",
  ]);
  const [pincodeList, setPincodeList] = useState<string[]>([
    "Andhra Pradesh",
    "Karnataka",
    "Tamil Nadu",
    "Kerala",
    "Maharashtra",
    "Gujarat",
    "Rajasthan",
  ]);

  const [selectState, setSelectState] = useState<number>(-1);
  const [selectDistrict, setSelectDistrict] = useState<number>(-1);
  const [selectPincode, setSelectPincode] = useState<number>(-1);

  useEffect(() => {
    const loadContents = async () => {
      // const response = await axios.get(
      //   "https://api.covid19india.org/v4/min/data.min.json"
      // );
      // const data = response.data;
      // const stateList = Object.keys(data);
      // setStateList(stateList);
    };
    loadContents();
  }, [state]);

  useEffect(() => {
    const loadContents = async () => {
      // const response = await axios.get(
      //   "https://api.covid19india.org/v4/min/data.min.json"
      // );
      // const data = response.data;
      // const stateList = Object.keys(data);
      // setDistrictList(stateList);
    };
    loadContents();
  }, [district]);

  useEffect(() => {
    const loadContents = async () => {
      // const response = await axios.get(
      //   "https://api.covid19india.org/v4/min/data.min.json"
      // );
      // const data = response.data;
      // const stateList = Object.keys(data);
      // setPincodeList(stateList);
    };
    loadContents();
  }, [pincode]);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (
        (active === "state_input" &&
          stateref.current &&
          !stateref.current.contains(e.target)) ||
        (active === "district_input" &&
          districtref.current &&
          !districtref.current.contains(e.target)) ||
        (active === "pincode_input" &&
          pincoderef.current &&
          !pincoderef.current.contains(e.target))
      ) {
        setActive("");
      }

    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="w-full rounded-full border flx-row justify-between gap-2 pl-5 py-2 pr-2">
      <div className="w-1/3 bg-green-300 relative" ref={stateref}>
        <input
          type="text"
          placeholder="Search your state"
          className="w-full"
          id="state_input"
          onClick={(e) => setActive("state_input")}
          onChange={(e) => {
            setState(e.target.value);
          }}
          value={state}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              setSelectState((selectState + 1) % stateList.length);
            } else if (e.key === "ArrowUp") {
              setSelectState(
                (selectState - 1 + stateList.length) % stateList.length
              );
            } else if (e.key === "Enter") {
              console.log(selectState, stateList[selectState]);
              setState(stateList[selectState]);
              setActive("");
            }
          }}
        />
        {active === "state_input" && (
          <ListDropDown
            searchList={stateList}
            activeItem={selectState}
            setItem={setState}
            setActive={setActive}
          />
        )}
      </div>
      {"|"}
      <div className="w-1/3 relative" ref={districtref}>
        <input
          type="text"
          placeholder="Search your district"
          className="w-full"
          id="district_input"
          value={district}
          onClick={(e) => setActive("district_input")}
          onChange={(e) => {
            setDistrict(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              setSelectDistrict((selectDistrict + 1) % districtList.length);
            } else if (e.key === "ArrowUp") {
              setSelectDistrict(
                (selectDistrict - 1 + districtList.length) % districtList.length
              );
            } else if (e.key === "Enter") {
              console.log(selectDistrict, districtList[selectDistrict]);
              setDistrict(districtList[selectDistrict]);
              setActive("");
            }
          }}
        />
        {active === "district_input" && state != "" && (
          <ListDropDown
            searchList={districtList}
            activeItem={selectDistrict}
            setItem={setDistrict}
            setActive={setActive}
          />
        )}
      </div>
      {"|"}
      <div className="w-1/3 relative" ref={pincoderef}>
        <input
          type="text"
          placeholder="Search your pincode"
          className="w-full"
          id="pincode_input"
          value={pincode}
          onClick={(e) => setActive("pincode_input")}
          onChange={(e) => {
            setPincode(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              setSelectPincode((selectPincode + 1) % pincodeList.length);
            } else if (e.key === "ArrowUp") {
              setSelectPincode(
                (selectPincode - 1 + pincodeList.length) % pincodeList.length
              );
            } else if (e.key === "Enter") {
              console.log(selectPincode, pincodeList[selectPincode]);
              setPincode(pincodeList[selectPincode]);
              setActive("");
            }
          }}
        />
        {active === "pincode_input" && district != "" && (
          <ListDropDown
            searchList={pincodeList}
            activeItem={selectPincode}
            setItem={setPincode}
            setActive={setActive}
          />
        )}
      </div>
      <div className="flex justify-end">
        <Button
          variant="contained"
          color="primary"
          className="rounded-full w-40 "
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchAreaFilter;
