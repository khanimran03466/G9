import Link from "next/link";

const formAndDocumentation = () => {
  return (
    <>
      <section className="mainSection hcpResources dBorder">
        <div className="container-fluid">
          <div className="row pt-lg-4">
            <div className="col-12 px-0">
              <div className="col-lg-11 col-12 mx-auto px-lg-5">
                <div className="row no-gutters">
                  <div className="col-12 pb-4 px-lg-0">
                    <p className="m-fs27  m-lh31 fs38 txtTeal ArialBold mb-1 pt-3 px-0 px-lg-3">
                      RESOURCES
                    </p>
                    <div className="col-12 px-0 px-lg-3">
                      <div className="row px-3 pt-lg-2">
                        <div className="col-lg-9 col-9 px-2 px-lg-3">
                          <p className="text-uppercase m-fs14 fs20 txtBlack ArialBold mb-0 mt-3">
                            RESOURCE
                          </p>
                        </div>
                        <div className="col-lg-3 col-3 text-center px-0">
                          <p className="text-uppercase m-fs14 fs20 txtBlack mb-0 ArialBold mt-3">
                            CLICK HERE
                          </p>
                        </div>
                      </div>
                      <div className="mainHeading bgGreen txtWhite">
                        <p className="m-fs15 py-1 fs20 ArialBold  mb-0 pl-2 pl-lg-3">
                          Enrollment Forms
                        </p>
                      </div>
                      <div className="txtBlack">
                        <div className="col-12">
                          <div className="row border-tab">
                            <div className="col-lg-9 col-9 pl-3 pl-lg-4 py-3 fs20 m-lh18 m-fs15">
                              <span>
                                The Merck Access Program Electronic Enrollment
                                Form
                              </span>{" "}
                              <span className="d-block pt-2 m-fs12 mfs12_mlh13 fs17">
                                This form can be signed and submitted
                                electronically.
                              </span>
                            </div>
                            <div className="col-lg-3 col-3 px-0 rightsection d-flex justify-content-center px-0 rightsection text-center">
                              <div className="align-self-center">
                                {/* <!--<Link href="https://powerforms.docusign.net/c4eaa580-6962-4591-b662-ac39bb578e3d?env=na1&accountId=4d2500a8-dc5d-4877-b72f-6629d6c93303&recipientLang=en2" target="_blank"
                            className="" data-design-category="button_vd" role="link" tabindex="0" aria-label="">--> */}
                                <Link
                                  className=""
                                  target="_blank"
                                  href="javascript:void(0)"
                                  data-toggle="modal"
                                  data-target="#leaveElectonic-hcp"
                                  data-design-category="button_vd"
                                >
                                  <img
                                    src="/images/new-DarkArrow.png"
                                    alt=""
                                    className="w-md-50 w-lg-75"
                                    data-design-category="button_vd"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-9 col-9 pl-3 pl-lg-4 py-3 py-lg-4 m-lh18 fs20 m-fs15">
                              <span>
                                The Merck Access Program Enrollment Form
                              </span>
                            </div>
                            <div className="col-lg-3 col-3 px-0 rightsection d-flex justify-content-center px-0 rightsection text-center">
                              <div className="align-self-center">
                                {/* <!--<Link href="https://powerforms.docusign.net/50c3f39f-ccc8-4b61-ae1a-8ed2eda38648?env=na1&accountId=4d2500a8-dc5d-4877-b72f-6629d6c93303&recipientLang=en" target="_blank"
                            className="" data-design-category="button_vd" role="link" tabindex="0" aria-label="">--> */}
                                <Link
                                  className=""
                                  target="_blank"
                                  href="/pdf/GARDASIL9-Enrollment-Form.pdf"
                                  data-design-category="button_vd"
                                  role="link"
                                >
                                  <img
                                    src="/images/new-DarkDownload.png"
                                    alt=""
                                    className="w-md-50 w-lg-75"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 px-0 px-lg-3">
                      <div className="mainHeading bgGreen txtWhite">
                        <p className="fs20 m-fs15 py-1  ArialBold mb-0 pl-2 pl-lg-3">
                          Enrollment Support
                        </p>
                      </div>
                      <div className="txtBlack">
                        <div className="col-12">
                          <div className="row border-tab">
                            <div className="col-lg-9 col-9 pl-3 pl-lg-4 py-3 py-lg-4 m-lh18 fs20 m-fs15">
                              <span>Submit Documents</span>{" "}
                              <span className=" d-block pt-2 m-fs12 fs17">
                                Use this link to securely upload documents to
                                submit to The Merck Access Program.
                              </span>
                            </div>
                            <div className="col-lg-3 col-3 px-0 rightsection d-flex justify-content-center px-0 rightsection text-center">
                              <div className="align-self-center">
                                {/* <!--  <Link target="_blank" href="#" className="" data-design-category="button_vd" role="link" tabindex="0" aria-label=""><img src="/images/new-DarkArrow.png"
                              alt="" className="w-md-50 w-lg-75" /></Link> --> */}
                                <Link
                                  className="externalsite"
                                  target="_blank"
                                  href="https://hubconnect.mckesson.com/8x52jhdfp92851merck"
                                >
                                  <img
                                    src="/images/new-DarkArrow.png"
                                    alt=""
                                    className="w-md-50 w-lg-75"
                                    data-design-category="button_vd"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 px-0 px-lg-3">
                      <div className="mainHeading bgGreen txtWhite">
                        <p className="fs20 m-fs15 py-1   ArialBold mb-0 pl-2 pl-lg-3">
                          Billing Codes
                        </p>
                      </div>
                      <div className="m-fs15">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-lg-9 col-9 pl-3 pl-lg-4 py-3 py-lg-4 m-lh18 fs20 m-fs15 txtBlack">
                              <span>Billing and Coding Card</span>
                            </div>
                            <div className="col-lg-3 col-3 px-0 rightsection d-flex justify-content-center px-0 rightsection text-center">
                              <div className="align-self-center">
                                <Link
                                  href="/pdf/G9-Billing-and-Coding-Guide-Update_Live-Links-US-GSL-02465.pdf"
                                  target="_blank"
                                  data-design-category="button_vd"
                                  role="link"
                                  tabindex="0"
                                  aria-label=""
                                  className=""
                                >
                                  <img
                                    src="/images/new-DarkDownload.png"
                                    alt=""
                                    className="w-md-50 w-lg-75"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 px-0 px-lg-3">
                      <div className="mainHeading bgGreen txtWhite">
                        <p className="fs20 m-fs15 py-1  ArialBold mb-0 pl-2 pl-lg-3">
                          Patient Support Materials
                        </p>
                      </div>
                      <div className="m-fs15">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-lg-9 col-9 pl-3 pl-lg-4 py-3 py-lg-4 m-lh18 fs20 m-fs15 txtBlack">
                              <span>GARDASIL9.com</span>
                            </div>
                            <div className="col-lg-3 col-3 px-0 rightsection d-flex justify-content-center px-0 rightsection text-center">
                              <div className="align-self-center">
                                <Link
                                  href="https://www.gardasil9.com/"
                                  target="_blank"
                                  data-design-category="button_vd"
                                  role="link"
                                  tabindex="0"
                                  aria-label=""
                                  className=""
                                >
                                  <img
                                    src="/images/new-DarkArrow.png"
                                    alt=""
                                    className="w-md-50 w-lg-75"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 px-0 px-lg-3">
                      <div className="mainHeading bgGreen txtWhite">
                        <p className=" py-1  ArialBold mb-0 pl-3 fs20 m-fs15">
                          Product Information
                        </p>
                      </div>
                      <div className="m-fs15">
                        <div className="col-12">
                          <div className="row border-tab">
                            <div className="col-lg-9 col-9 pl-3 pl-lg-4 py-3 py-lg-4 m-lh18 fs20 m-fs15 txtBlack">
                              <span>Prescribing Information</span>
                            </div>
                            <div className="col-lg-3 col-3 px-0 rightsection d-flex justify-content-center px-0 rightsection text-center">
                              <div className="align-self-center">
                                <Link
                                  href="https://www.merck.com/product/usa/pi_circulars/g/gardasil_9/gardasil_9_pi.pdf"
                                  data-design-category="button_vd"
                                  role="link"
                                  tabindex="0"
                                  aria-label=""
                                  target="_blank"
                                  className=""
                                >
                                  <img
                                    src="/images/new-DarkArrow.png"
                                    alt=""
                                    className="w-md-50 w-lg-75"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div className="row border-tab">
                            <div className="col-lg-9 col-9 pl-3 pl-lg-4 py-3 py-lg-4 m-lh18 fs20 m-fs15 txtBlack">
                              <span>Patient Information</span>
                            </div>
                            <div className="col-lg-3 col-3 px-0 rightsection d-flex justify-content-center px-0 rightsection text-center">
                              <div className="align-self-center">
                                <Link
                                  href="https://www.merck.com/product/usa/pi_circulars/g/gardasil_9/gardasil_9_ppi.pdf"
                                  data-design-category="button_vd"
                                  role="link"
                                  tabindex="0"
                                  aria-label=""
                                  target="_blank"
                                  className=""
                                >
                                  <img
                                    src="/images/new-DarkArrow.png"
                                    alt=""
                                    className="w-md-50 w-lg-75"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="col-lg-10 col-12 mx-auto">
            <div className="row">
              <div className="pb-3 px-3 pt-lg-2 px-lg-0">
                <div className="col-12 px-0">
                  <p className="mfs13_mlh16 fs20_lh28  mb-1">
                    The information available here is compiled from sources
                    believed to be accurate, but Merck makes no representation
                    that it is accurate. This information is subject to change.
                    Payer coding requirements may vary or change over time, so
                    it is important to regularly check with each payer as to
                    payer-specific requirements.
                  </p>
                  <p className="mfs13_mlh16 fs20_lh28  mb-1">
                    The information available here is not intended to be
                    definitive or exhaustive, and is not intended to replace the
                    guidance of a qualified professional advisor. Merck and its
                    agents make no warranties or guarantees, express or implied,
                    concerning the accuracy or appropriateness of this
                    information for your particular use given the frequent
                    changes in public and private payer billing. The use of this
                    information does not guarantee payment or that payment
                    received will cover your costs.
                  </p>
                  <p className="mfs13_mlh16 fs20_lh28 ">
                    You are solely responsible for determining the appropriate
                    codes and for any action you take in billing. Information
                    about billing codes is based on publicly available guidance
                    and may not apply to all payers. Consult the relevant manual
                    and/or other guidelines for a description of each code to
                    determine the appropriateness of a particular code and for
                    information on additional codes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default formAndDocumentation;
