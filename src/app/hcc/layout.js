import React from "react";
import HCCheader from "../components/shared-content/HCCheader";

const layout = ({ children }) => {
  return (
    <>
      <HCCheader />
      {children}
    </>
  );
};

export default layout;
