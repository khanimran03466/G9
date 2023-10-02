"use client"

import { usePathname } from "next/navigation"
import HCPheader from "./HCPheader";
import HCCheader from "./HCCheader";

const Header = () => {

    const pathName = usePathname();

  return (
    <>

    <HCPheader pathName={pathName} />
        {/* {
          pathName !== "/hcc"? <HCPheader /> : <HCCheader />
        } */}
    </>
  )
}

export default Header