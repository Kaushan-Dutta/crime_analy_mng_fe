import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

type AuthHeadingProps= {
  image: string | '';
  title: string;
  otherTitle:string
  redirectTitle: string;
  redirect: string;
}

const AuthHeading = ({
  children,
  heading
}:{children:ReactNode,heading:AuthHeadingProps}) => {
  return (
    <section className="flx-row justify-between h-full">
      <div className="md:w-3/5 hidden md:block border-4 h-full">
        <Image src={heading?.image} className="w-full contain h-full" alt="SideImage" />
      </div>
      <div className="md:w-2/5 w-full border-4 md:p-16 p-2 flx-row ">
        <div className="flex flex-col gap-10 w-full">
          <p className="font-aton md:text-4xl text-3xl tracking-wider text-center ">
            CRIMEWATCH
          </p>
          <p className=" md:text-3xl text-xl tracking-wider text-center ">
            {heading?.title}
          </p>
            {children}
          <p>
            {heading?.otherTitle}
            <Link className="font-bold " href={heading?.redirect}>
              {heading?.redirectTitle}
            </Link>{" "}
          </p>
          
        </div>
      </div>
    </section>
  );
};
export default AuthHeading;
