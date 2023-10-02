import HCPheader from "../components/shared-content/HCPheader";

const layout = ({ children }) => {
  return (
    <>
      <HCPheader />
      {children}
    </>
  );
};

export default layout;
