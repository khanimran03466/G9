import Link from "next/link";

const HCCfooter = () => {
  return (
    <>
      <footer className="footerContainer mx-auto mt-md-0 mt-lg-0 pt-md-0 pt-lg-1">
        <section className="container-fluid full-width px-3 px-lg-0">
          <div className="row logoFooter  mb-0 ">
            <div className="col-lg-12 px-lg-5 px-3 col-12 mx-auto py-3 py-lg-4">
              <div className="row">
                <div className="col-12 col-lg-11 pb-0 float-lg-left text-lg-left px-xl-5 px-lg-0">
                  <p className="mfs10_mlh14 fs14_lh18 mb-0 txtdarkBlack pl-lg-5 ml-lg-1 footerFont">
                    This site is intended only for residents of the United
                    States.
                  </p>
                  <div className="row">
                    <div className="col-lg-11 px-0 px-lg-0">
                      <div className="col-12 col-lg-12 text-sm-left pb-0 text-sm-left float-lg-left pt-lg-1 py-2 py-lg-1 ">
                        <span>
                          <img
                            src="/images/new-merckLogoBlack.svg"
                            className="merckLogo pb-2 pb-lg-0"
                            alt="Merck Logo"
                          />
                        </span>
                        <span className=" pt-2 pt-lg-0 pl-lg-2">
                          <ul
                            className="link px-0 mb-0 d-lg-inline m-lh10"
                            style={{ listStyle: "none"}}
                          >
                            <li className="d-inline pr-lg-1">
                              <Link
                                href="https://www.merck.com/terms-of-use/"
                                target="_blank"
                                className="txtlightGreen m-fs10 m-lh13 fs14_lh18 ArialBold"
                                data-design-category="footer_ref_vd"
                                aria-label="Terms of Use"
                              >
                                Terms of Use
                              </Link>
                            </li>
                            <li className="d-inline pr-lg-1">
                              <Link
                                href="https://www.msdprivacy.com/us/en/"
                                target="_blank"
                                className="txtlightGreen m-fs10 m-lh13  fs14_lh18 ArialBold"
                                data-design-category="footer_ref_vd"
                                aria-label="Privacy Policy"
                              >
                                Privacy Policy
                              </Link>
                            </li>
                            <li className="d-inline pr-lg-1">
                              <Link
                                href="/hcc/support-resources/"
                                className="txtlightGreen m-fs10 m-lh13  fs14_lh18 ArialBold"
                                data-design-category="footer_ref_vd"
                                aria-label="Site Map"
                              >
                                Site Map
                              </Link>
                            </li>
                            <li className="d-inline pr-lg-1">
                              <Link
                                role="link"
                                tabindex="0"
                                aria-label="Cookie Preferences"
                                href="javascript:void(0)"
                                className="txtlightGreen m-fs10 m-lh13  fs14_lh18 ArialBold ot-sdk-show-settings"
                                data-design-category="footer_ref_vd"
                              >
                                Cookie Preferences
                              </Link>
                            </li>
                            <li className="d-inline">
                              <Link
                                className="txtlightGreen m-fs10 m-lh13  fs14_lh18 ArialBold"
                                data-design-category="footer_ref_vd"
                                href="https://www.msdaccessibility.com"
                                target="_blank"
                                aria-label="Accessibility"
                              >
                                Accessibility
                              </Link>
                            </li>
                          </ul>
                        </span>
                      </div>
                      <div className="col-12 text-sm-left text-lg-left float-lg-left">
                        <p className="copyContent mfs10_mlh14 fs14_lh18 txtdarkBlack pt-1 pb-0 pt-lg-0 pb-lg-0 mb-lg-0 pl-lg-5 ml-lg-1 pr-3">
                          Copyright © 2023 Merck & Co., Inc., Rahway, NJ, USA
                          and its affiliates. All rights reserved.{" "}
                          <span className="nowrap">US-GSL-04323 05/23</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-1">
                  <div className="col-12 col-lg-12 accessibility-logo accessibility-logo-rgb order-5 order-lg-0 mb-1 pl-0 pl-lg-0 float-lg-right text-lg-right float-left text-left">
                    <Link
                      href="https://www.essentialaccessibility.com/merck/?utm_source=merck-homepage&amp;utm_medium=icon-large&amp;utm_term=eachannel-page&amp;utm_content=header&amp;utm_campaign=merck"
                      data-design-category="accessibility_icon"
                      target="_blank"
                    >
                      <img
                        src="https://s3.amazonaws.com/com.merck.epublish/www/ghh/www.merckimages.com/web-accessibility/accessibility-logo-rgb.svg"
                        style={{width:"86px",height:"33px"}}
                        alt="Accessibility icon"
                        className="accessibility-icon-img"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default HCCfooter;
