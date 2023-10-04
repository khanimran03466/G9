"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const HCPheader = () => {
  const pathName = usePathname();

  const [isActive, setIsActive] = useState(false);

  const ToggleClass = () => {
    setIsActive(!isActive);
    if (isActive) {
      document.querySelector("body").style.overflow = "visible";
    } else {
      document.querySelector("body").style.overflow = "hidden";
    }
  };

  return (
    <>
      <div className="stickyHeader w-100 bgWhite">
        <header className="header_section">
          {/* <!--Skip to main content --> */}
          <Link
            data-design-category="top_nav_vd"
            className="skip-main d-none d-lg-block bgSecondary txtWhite"
            role="link"
            href="#SkipToMain"
            tabindex="0"
            style={{ visibility: "visible" }}
          >
            Skip to main content
          </Link>
          {/* <!-- End of Skip to main content --> */}
          {/* <!-- top header --> */}
          <section className="mainHeaderSection">
            <div className="firstheader order-2 d-block d-lg-none">
              <div className="col-12">
                <div className="row justify-content-end bgSecondary">
                  <div
                    className={`mobileNavHeader align-self-center py-1 px-3 ${
                      isActive ? "active" : null
                    }`}
                  >
                    <div
                      className="d-inline-flex"
                      id="mobileNavButton"
                      onClick={ToggleClass}
                    >
                      <div className="txtWhite text-uppercase mt-1">
                        <span className="m-fs20 menu-text ArialBold">MENU</span>
                        <span className="m-fs20 close-text ArialBold">
                          Close
                        </span>
                      </div>
                      <div className="m-fs26 pl-2 pt-1 d-flex align-self-center justify-content-center txtWhite">
                        <img
                          src="/images/new-menu-bar.png"
                          className="menu-bar"
                          alt=""
                        />
                        <img
                          src="/images/new-close-icon.png"
                          className="close-icon"
                          alt=""
                          style={{ width: "20px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row py-2 mt-1">
                  <div className="col-7 pr-0 pl-3">
                    <div className="">
                      <img
                        src="/images/merckaccess_logo.svg"
                        className="d-block d-lg-none logoTwo"
                        alt=""
                      />
                    </div>
                    <div className="pt-4">
                      {/* <!--  <Link role="link" tabindex="0" aria-label="" className="navbar-brand py-0 disabled" href="/hcp/"> --> */}
                      <img
                        src="/images/gardasil9Logo.svg"
                        alt=""
                        className="img-fluid logo mt-0"
                      />
                      {/* <!-- </Link> --> */}
                    </div>
                  </div>
                  <div className="col-5 px-0">
                    <div className="text-right px-2 pl-5 mfs12_mlh15 pt-0">
                      <Link
                        data-design-category="top_nav_vd"
                        role="link"
                        tabindex="0"
                        aria-label="Prescribing Information"
                        className="txtBlack"
                        href="https://www.merck.com/product/usa/pi_circulars/g/gardasil_9/gardasil_9_pi.pdf"
                        target="_blank"
                      >
                        Prescribing Information
                      </Link>
                    </div>
                    <div className="text-right px-2 pl-5 ml-3 mfs12_mlh15 pt-2">
                      <Link
                        data-design-category="top_nav_vd"
                        role="link"
                        tabindex="0"
                        aria-label="Patient Information"
                        href="https://www.merck.com/product/usa/pi_circulars/g/gardasil_9/gardasil_9_ppi.pdf"
                        className="txtBlack"
                        target="_blank"
                      >
                        Patient Information
                      </Link>
                    </div>
                    <div
                      className={`text-right px-2 pl-5 mfs12_mlh15 pt-2 pb-1 ${
                        pathName == "/hcp" ? "mainActive" : ""
                      } ${
                        pathName == "/hcp/forms-and-documentation"
                          ? "mainActive"
                          : ""
                      } ${
                        pathName == "/hcp/enrollnow"
                          ? "mainActive"
                          : ""
                      }`}
                      id="mobileHeaderOne"
                    >
                      <Link
                        data-design-category="top_nav_vd"
                        className="txtBlack"
                        role="link"
                        tabindex="0"
                        href="/hcp/"
                        aria-label="Healthcare Professionals"
                      >
                        Healthcare Professionals
                      </Link>
                    </div>
                    <div
                      className={`text-right px-2 pl-5 mfs12_mlh15 pt-2 mb-0  ${
                        pathName == "/hcc" ? "mainActive" : ""
                      }`}
                      id="mobileHeaderTwo"
                    >
                      <Link
                        data-design-category="top_nav_vd"
                        className="txtBlack"
                        href="/hcc/"
                        role="link"
                        tabindex="0"
                        aria-label="Patients and Caregivers"
                      >
                        Patients and Caregivers
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-12 bgDarkActive px-0 text-center text-lg-right py-1">
                    <Link
                      data-design-category="top_nav_vd"
                      role="link"
                      aria-label="ENROLL NOW"
                      href="/hcp/enrollnow/"
                      className="m-fs21"
                    >
                      <button
                        type="button"
                        className="enroll_btn px-4 text-center "
                        name="button"
                      >
                        ENROLL NOW
                      </button>
                    </Link>
                  </div>
                  <p className="col-12 d-block mobHide text-center mb-0 py-3 mt-0 px-5 Arial txtTeal mfs18_mlh22 fs17_lh22 bgOlive">
                    Contact The Merck Access Program{" "}
                    <span className="nowrap ArialBold txtPrimary">
                      Mon-Fri at{" "}
                      <Link
                        data-design-category="content_link_vd"
                        href="tel:855-210-1965"
                        className="hcptelephone nowrap ArialBold"
                      >
                        855-210-1965
                      </Link>
                    </span>
                  </p>
                </div>
                <div
                  className={`isSelected ${isActive ? "active" : null}`}
                  id="mobileNavigation"
                  onClick={ToggleClass}
                >
                  <div className="row">
                    <div className="col-12 px-0">
                      <div className="col-12 col-lg-11 px-0">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-12 col-lg-3 px-0 bgSky" id="">
                              <Link
                                className="nav-link txtTeal p-2 mfs15_mlh18 text-center blueHover border-header"
                                role="link"
                                tabindex="0"
                                aria-label="The Merck Access Program"
                                data-design-category="top_nav_vd"
                                href="/hcp/"
                              >
                                The Merck Access Program
                              </Link>
                            </div>
                            <div className="col-12 col-lg-3 px-0 bgSky">
                              <Link
                                className="nav-link txtTeal mfs15_mlh18 p-2 blueHover text-center"
                                role="link"
                                tabindex="0"
                                aria-label="Resources"
                                data-design-category="top_nav_vd"
                                href="/hcp/forms-and-documentation/"
                              >
                                Resources
                              </Link>
                            </div>
                            <div
                              className="col-12 col-lg-4 px-0 mobOnly"
                              style={{ background: "#deeaeb" }}
                            >
                              <p className="txtTeal text-center mb-0 mfs18_mlh22 py-3 px-4 ">
                                Contact The Merck Access Program{" "}
                                <span className="nowrap ArialBold txtPrimary">
                                  Mon-Fri at{" "}
                                  <Link
                                    data-design-category="content_link_vd"
                                    href="tel:855-210-1965"
                                    className="hcptelephone nowrap ArialBold"
                                  >
                                    855-210-1965
                                  </Link>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END --> */}
            <div className="d-none d-lg-block">
              <div className="firstheader">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-5  px-lg-4">
                      <span className="pr-2 borderRight">
                        <span
                          className="p-3 p-xl-3 p-lg-2 mainActive"
                          id="hcpmainlinkOne"
                        >
                          <Link
                            role="link"
                            tabindex="0"
                            data-design-category="top_nav_vd"
                            aria-label="Healthcare Professionals"
                            href="/hcp/"
                            className="fs18"
                          >
                            Healthcare Professionals
                          </Link>
                        </span>
                      </span>
                      <span className="pl-1">
                        <span
                          className="d-xl-inline-block p-2 nowrap"
                          id="hcpmainlinkTwo"
                        >
                          <Link
                            data-design-category="top_nav_vd"
                            href="/hcc/"
                            role="link"
                            tabindex="0"
                            aria-label="Patients and Caregivers"
                            className="fs18"
                          >
                            Patients and Caregivers
                          </Link>
                        </span>
                      </span>
                    </div>
                    <div className="col-md-7 pr-5 text-right fs17 pt-2">
                      <span className="">
                        <Link
                          data-design-category="top_nav_vd"
                          role="link"
                          tabindex="0"
                          aria-label="Prescribing Information"
                          href="https://www.merck.com/product/usa/pi_circulars/g/gardasil_9/gardasil_9_pi.pdf"
                          target="_blank"
                          className="fs17"
                        >
                          Prescribing Information |
                        </Link>
                      </span>
                      <span className="pr-4 pl-1">
                        <Link
                          data-design-category="top_nav_vd"
                          role="link"
                          tabindex="0"
                          aria-label="Patient Information"
                          href="https://www.merck.com/product/usa/pi_circulars/g/gardasil_9/gardasil_9_ppi.pdf"
                          target="_blank"
                          className="fs17"
                        >
                          Patient Information
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="secondheader">
                <div className="container-fluid">
                  <div className="row mb-2 mb-lg-0 px-lg-4">
                    <div className="col-md-5 mb-lg-2 px-0 align-self-center align-self-lg-end">
                      <img
                        src="/images/merckaccess_logo.svg"
                        className="d-none d-lg-block logoTwo"
                        alt=""
                      />
                    </div>
                    <div className="col-md-4  px-0 pl-lg-5 fs12 mfs13_mlh16">
                      <div className="pt-2 col-md-12 mx-auto pb-1 pb-lg-0 align-self-center">
                        {/* <!--  <Link role="link" tabindex="0" aria-label="" className="navbar-brand m-0 py-0 disabled" href="/hcp/"> --> */}
                        <img
                          src="/images/gardasil9Logo.svg"
                          alt=""
                          className="img-fluid m-0 logo mt-2"
                        />
                        {/* <!-- </Link> --> */}
                      </div>
                    </div>
                    <div className="col-md-3 mb-lg-2 col-12 pt-3 text-sm-right px-0 d-flex align-items-end">
                      <div className="col-12 px-0 px-lg-1 text-left">
                        <Link
                          data-design-category="top_nav_vd"
                          role="button"
                          aria-label=" ENROLL NOW"
                          href="/hcp/enrollnow/"
                          className="fs21 ArialBold"
                        >
                          <button
                            type="button"
                            className=" enroll_btn py-2 py-lg-1 px-3 px-lg-5 text-center"
                            name="button"
                          >
                            ENROLL NOW
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navMenu d-none d-lg-block">
              <nav className="navbar navbar-expand-lg navbar-light p-0">
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul
                    className="navbar-nav col-lg-12"
                    style={{ padding: "0 105px 0 24px" }}
                  >
                    <li
                      className="px-lg-0 nav-item bgSecondary text-center hcpMenuLinkOne col-lg-1 mx-1 "
                      style={{ maxWidth: "65px" }}
                    >
                      <Link
                        className="nav-lin nav-link text-white  m-fs11 mfs20_mlh26 text-center"
                        href="/hcp/"
                        role="link"
                        tabindex="0"
                        aria-label="Home-icon"
                        data-design-category="top_nav_vd"
                      >
                        <img src="/images/new-home.png" alt="" />
                      </Link>
                    </li>
                    <li
                      className={`px-lg-0 nav-item bgSecondary text-center col-lg-6 mx-0 hcpMenuLinkTwo ${
                        pathName == "/hcp" ? "bgDarkActive1" : ""
                      }`}
                    >
                      <Link
                        className="nav-link nav-link text-white fs22_lh24 text-center py-lg-3"
                        href="/hcp/"
                        role="link"
                        tabindex="0"
                        aria-label="The Merck Access Program"
                        data-design-category="top_nav_vd"
                      >
                        The Merck Access Program
                      </Link>
                    </li>
                    <li
                      className={`px-lg-0 nav-item bgSecondary text-center col-lg-6 mx-1 hcpMenuLinkThree ${
                        pathName == "/hcp/forms-and-documentation"
                          ? "bgDarkActive1"
                          : ""
                      }`}
                    >
                      <Link
                        className="nav-link nav-link text-white fs22_lh24 text-center py-lg-3"
                        href="/hcp/forms-and-documentation"
                        role="link"
                        tabindex="0"
                        aria-label="Resources"
                        data-design-category="top_nav_vd"
                      >
                        Resources
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="navbar-collapse">
                <ul
                  className="navbar-nav col-lg-12"
                  style={{ padding: "2px 32px 0 24px" }}
                >
                  <li
                    className="nav-item   col-lg-12 mx-1 text-center  py-2 py-lg-3 mt-0 mb-0 px-3 px-lg-1  txtTeal mt-lg-1 mfs15_mlh18 fs22_lh24"
                    style={{ background: "#deeaeb" }}
                  >
                    Contact The Merck Access Program{" "}
                    <span className="nowrap ArialBold txtPrimary">
                      Mon-Fri at{" "}
                      <Link
                        data-design-category="content_link_vd"
                        href="tel:855-210-1965"
                        className="hcptelephone nowrap ArialBold"
                      >
                        855-210-1965
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* <!--Navbar--> */}
        </header>
      </div>
    </>
  );
};

export default HCPheader;
