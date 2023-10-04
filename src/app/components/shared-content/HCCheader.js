"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const HCCheader = () => {
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
      <div class="stickyHeader w-100 bgWhite">
        <header class="header_section">
          {/* <!--Skip to main content --> */}
          <Link
            data-design-category="top_nav_vd"
            class="skip-main d-none d-lg-block bgSecondary txtWhite"
            role="link"
            href="#SkipToMain"
            tabindex="0"
            style={{ visibility: "visible" }}
          >
            Skip to main content
          </Link>
          {/* <!-- End of Skip to main content -->
        <!-- top header --> */}
          <section class="mainHeaderSection">
            <div class="firstheader order-2 d-block d-lg-none">
              <div class="col-12">
                <div class="row justify-content-end bgSecondary">
                  <div
                    class={`mobileNavHeader align-self-center py-1 px-3 ${
                      isActive ? "active" : null
                    }`}
                  >
                    <div
                      class="d-inline-flex"
                      id="mobileNavButton"
                      onClick={ToggleClass}
                    >
                      <div class="txtWhite text-uppercase mt-1">
                        <span class="m-fs20 menu-text ArialBold">MENU</span>
                        <span class="m-fs20 close-text ArialBold">Close</span>
                      </div>
                      <div class="m-fs26 pl-2 pt-1 d-flex align-self-center justify-content-center txtWhite">
                        <img
                          src="/images/new-menu-bar.png"
                          class="menu-bar"
                          alt=""
                        />
                        <img
                          src="/images/new-close-icon.png"
                          class="close-icon"
                          alt=""
                          style={{ width: "20px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row py-2 mt-1">
                  <div class="col-7 pr-0 pl-3">
                    <div class="">
                      <img
                        src="/images/merckaccess_logo.svg"
                        class="d-block d-lg-none logoTwo"
                        alt=""
                      />
                    </div>
                    <div class="pt-4">
                      <img
                        src="/images/gardasil9Logo.svg"
                        alt=""
                        class="img-fluid logo mt-0"
                      />
                    </div>
                  </div>
                  <div class="col-5 px-0">
                    <div class="text-right px-2 pl-5 ml-3 mfs12_mlh15 pt-0">
                      <Link
                        data-design-category="top_nav_vd"
                        role="link"
                        tabindex="0"
                        aria-label="Patient Information"
                        href="https://www.merck.com/product/usa/pi_circulars/g/gardasil_9/gardasil_9_ppi.pdf"
                        class="txtBlack"
                        target="_blank"
                      >
                        Patient Information
                      </Link>
                    </div>
                    <div class="text-right px-2 pl-5 mfs12_mlh15 pt-2">
                      <Link
                        data-design-category="top_nav_vd"
                        role="link"
                        tabindex="0"
                        aria-label="Prescribing Information"
                        class="txtBlack"
                        href="https://www.merck.com/product/usa/pi_circulars/g/gardasil_9/gardasil_9_pi.pdf"
                        target="_blank"
                      >
                        Prescribing Information
                      </Link>
                    </div>
                    <div
                      class={`text-right px-2 pl-5 mfs12_mlh15 pt-2 pb-1 ${
                        pathName == "/hcp" ? "mainActive" : ""
                      }`}
                      id="mobileHeaderOne"
                    >
                      <Link
                        data-design-category="top_nav_vd"
                        class="txtBlack"
                        role="link"
                        tabindex="0"
                        href="/hcp/"
                        aria-label="Healthcare Professionals"
                      >
                        Healthcare Professionals
                      </Link>
                    </div>
                    <div
                      class={`text-right px-2 pl-5 mfs12_mlh15 pt-2 pb-1 mb-0 
                      ${
                        pathName == "/hcc" ? "mainActive" : ""
                      } 
                      
                      ${
                        pathName == "/hcc/support-resources" ? "mainActive" : ""
                      } 
                      
                      ${pathName == "/hcc/enrollnow" ? "mainActive" : ""}`}
                      
                      id="mobileHeaderTwo"
                    >
                      <Link
                        data-design-category="top_nav_vd"
                        class="txtBlack"
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
                <div class="row ">
                  <div class="col-12 bgDarkActive px-0 text-center text-lg-right py-1">
                    <Link
                      data-design-category="top_nav_vd"
                      role="link"
                      aria-label="ENROLL NOW"
                      href="/hcc/enrollnow/"
                      class="m-fs21"
                    >
                      <button
                        type="button"
                        class="enroll_btn px-4 text-center "
                        name="button"
                      >
                        ENROLL NOW
                      </button>
                    </Link>
                  </div>
                  <p class={`col-12 d-block mobHide text-center mb-0 py-3 mt-0 px-5 Arial txtTeal mfs18_mlh22 fs17_lh22 bgOlive ${isActive?"active":null}`} >
                    Contact The Merck Access Program{" "}
                    <span class="nowrap ArialBold txtPrimary">
                      Mon-Fri at{" "}
                      <Link
                        data-design-category="content_link_vd"
                        href="tel:855-210-1965"
                        class="hcptelephone nowrap ArialBold"
                      >
                        855-210-1965
                      </Link>
                    </span>
                  </p>
                </div>
                <div
                  class={`isSelected ${isActive ? "active" : null}`}
                  id="mobileNavigation"
                  onClick={ToggleClass}
                >
                  <div class="row">
                    <div class="col-12 px-0">
                      <div class="col-12 col-lg-11 px-0">
                        <div class="col-12">
                          <div class="row">
                            <div class="col-12 col-lg-3 px-0 bgSky" id="">
                              <Link
                                class="nav-link txtTeal p-2 mfs15_mlh18 text-center blueHover border-header"
                                role="link"
                                tabindex="0"
                                aria-label="The Merck Access Program"
                                data-design-category="top_nav_vd"
                                href="/hcc/"
                              >
                                The Merck Access Program
                              </Link>
                            </div>
                            <div class="col-12 col-lg-3 px-0 bgSky">
                              <Link
                                class="nav-link txtTeal mfs15_mlh18 p-2 blueHover text-center"
                                role="link"
                                tabindex="0"
                                aria-label="Support Resources"
                                data-design-category="top_nav_vd"
                                href="/hcc/support-resources/"
                              >
                                Support Resources
                              </Link>
                            </div>
                            <div
                              class="col-12 col-lg-4 px-0 mobOnly"
                              style={{ background: "#deeaeb" }}
                            >
                              <p class="txtTeal text-center mb-0 mfs18_mlh22 py-3 px-4 ">
                                Contact The Merck Access Program{" "}
                                <span class="nowrap ArialBold txtPrimary">
                                  Mon-Fri at{" "}
                                  <Link
                                    data-design-category="content_link_vd"
                                    href="tel:855-210-1965"
                                    class="hcptelephone nowrap ArialBold"
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
            <div class="d-none d-lg-block">
              <div class="firstheader">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-5  px-lg-4">
                      <span class="pr-2 borderRight">
                        <span class="p-3 p-xl-3 p-lg-2" id="hcpmainlinkOne">
                          <Link
                            role="link"
                            tabindex="0"
                            data-design-category="top_nav_vd"
                            aria-label="Healthcare Professionals"
                            href="/hcp/"
                            class="fs18"
                          >
                            Healthcare Professionals
                          </Link>
                        </span>
                      </span>
                      <span class="pl-1">
                        <span
                          class="d-xl-inline-block p-2 nowrap mainActive"
                          id="hccmainlinkTwo"
                        >
                          <Link
                            data-design-category="top_nav_vd"
                            href="/hcc/"
                            role="link"
                            tabindex="0"
                            aria-label="Patients and Caregivers"
                            class="fs18"
                          >
                            Patients and Caregivers
                          </Link>
                        </span>
                      </span>
                    </div>
                    <div class="col-md-7 pr-5 text-right fs17 pt-2">
                      <span>
                        <Link
                          data-design-category="top_nav_vd"
                          role="link"
                          tabindex="0"
                          aria-label="Patient Information"
                          href="https://www.merck.com/product/usa/pi_circulars/g/gardasil_9/gardasil_9_ppi.pdf"
                          target="_blank"
                          class="fs17"
                        >
                          Patient Information |
                        </Link>
                      </span>

                      <span class="pr-4 pl-1">
                        <Link
                          data-design-category="top_nav_vd"
                          role="link"
                          tabindex="0"
                          aria-label="Prescribing Information"
                          href="https://www.merck.com/product/usa/pi_circulars/g/gardasil_9/gardasil_9_pi.pdf"
                          target="_blank"
                          class="fs17"
                        >
                          Prescribing Information
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="secondheader">
                <div class="container-fluid">
                  <div class="row mb-2 mb-lg-0 px-lg-4">
                    <div class="col-md-5 px-0 mb-lg-2 align-self-center align-self-lg-end">
                      <img
                        src="/images/merckaccess_logo.svg"
                        class="d-none d-lg-block logoTwo"
                        alt=""
                      />
                    </div>
                    <div class="col-md-4 px-0 pl-lg-5 fs12 mfs13_mlh16">
                      <div class="pt-2 col-md-12 mx-auto pb-1 pb-lg-0 align-self-center">
                        {/* <!--  <Link role="link" tabindex="0" aria-label="" class="navbar-brand m-0 py-0 disabled" href="/hcp/"> --> */}
                        <img
                          src="/images/gardasil9Logo.svg"
                          alt=""
                          class="img-fluid m-0 logo mt-2"
                        />
                        {/* <!-- </Link> --> */}
                      </div>
                    </div>
                    <div class="col-md-3 col-12 mb-lg-2 pt-3 text-sm-right px-0 d-flex align-items-end">
                      <div class="col-12 px-0 px-lg-1 text-left">
                        <Link
                          data-design-category="top_nav_vd"
                          role="button"
                          aria-label=" ENROLL NOW"
                          href="/hcc/enrollnow/"
                          class="fs21 ArialBold"
                        >
                          <button
                            type="button"
                            class=" enroll_btn py-2 py-lg-1 px-3 px-lg-5 text-center"
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
            <div class="navMenu d-none d-lg-block">
              <nav class="navbar navbar-expand-lg navbar-light p-0">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul
                    class="navbar-nav col-lg-12"
                    style={{ padding: "0 105px 0 24px" }}
                  >
                    <li
                      class="px-lg-0 nav-item bgSecondary text-center hccMenuLinkOne col-lg-1 mx-1"
                      style={{ maxWidth: "65px" }}
                    >
                      <Link
                        class="nav-lin nav-link text-white  m-fs11 mfs20_mlh26 text-center"
                        href="/hcc/"
                        role="link"
                        tabindex="0"
                        aria-label="Home-icon"
                        data-design-category="top_nav_vd"
                      >
                        <img src="/images/new-home.png" alt="" />
                      </Link>
                    </li>
                    <li
                      class={`px-lg-0 nav-item bgSecondary text-center col-lg-6 mx-0 hccMenuLinkThree ${
                        pathName == "/hcc" ? "bgDarkActive1" : ""
                      }`}
                    >
                      <Link
                        class="nav-link nav-link text-white fs22_lh24 text-center py-lg-3"
                        href="/hcc/"
                        role="link"
                        tabindex="0"
                        aria-label="The Merck Access Program"
                        data-design-category="top_nav_vd"
                      >
                        The Merck Access Program
                      </Link>
                    </li>
                    <li
                      class={`px-lg-0 nav-item bgSecondary text-center col-lg-6 mx-1 hccMenuLinkFour ${
                        pathName == "/hcc/support-resources"
                          ? "bgDarkActive1"
                          : ""
                      }`}
                    >
                      <Link
                        class="nav-link nav-link text-white fs22_lh24 text-center py-lg-3"
                        href="/hcc/support-resources/"
                        role="link"
                        tabindex="0"
                        aria-label="Support Resources"
                        data-design-category="top_nav_vd"
                      >
                        Support Resources
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <div class="navbar-collapse">
                <ul
                  class="navbar-nav col-lg-12"
                  style={{ padding: "2px 32px 0 24px" }}
                >
                  <li
                    class="nav-item   col-lg-12 mx-1 text-center  py-2 py-lg-3 mt-0 mb-0 px-3 px-lg-1  txtTeal mt-lg-1 mfs15_mlh18 fs22_lh24"
                    style={{ background: "#deeaeb" }}
                  >
                    Contact The Merck Access Program{" "}
                    <span class="nowrap ArialBold txtPrimary">
                      Mon-Fri at{" "}
                      <Link
                        data-design-category="content_link_vd"
                        href="tel:855-210-1965"
                        class="hcptelephone nowrap ArialBold"
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

export default HCCheader;
