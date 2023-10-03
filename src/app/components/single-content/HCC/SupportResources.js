import Link from "next/link";

const SupportResources = () => {
  return (
    <>
      <section className="mainSection hccresourceImgCSS dBorder">
        <div className="container-fluid">
          <div className="row pt-lg-4">
            <div className="col-12 px-0">
              <div className="col-lg-11 col-12 mx-auto px-lg-4">
                <div className="row no-gutters">
                  <div className="col-12 pb-4 pb-lg-5 px-lg-4">
                    <p className="m-fs27 fs38 m-lh31 txtTeal ArialBold mb-1 pt-3 px-0 px-lg-3">
                      SUPPORT RESOURCES
                    </p>
                    <div className="col-12 px-0 px-lg-3">
                      <div className="row px-3 pt-lg-2">
                        <div className="col-lg-9 col-9 px-2 px-lg-3">
                          <p className="text-uppercase m-fs14 fs20 txtBlack ArialBold mb-0 mt-3">
                            RESOURCE
                          </p>
                        </div>
                        <div className="col-lg-3 col-3 text-center px-0">
                          <p className="text-uppercase txtTeal m-fs14 fs20 mb-0 ArialBold mt-3">
                            CLICK HERE
                          </p>
                        </div>
                      </div>
                      <div className="mainHeading bgGreen txtWhite">
                        <p className="m-fs15 py-1 fs20 ArialBold mb-0 pl-2 pl-lg-3">
                          Enrollment Forms
                        </p>
                      </div>
                      <div className="">
                        <div className="col-12">
                          <div className="row border-tab">
                            <div className="col-lg-9 col-9 pl-3 pl-lg-4 py-3 fs20 m-lh18 m-fs15">
                              <span>
                                The Merck Access Program Electronic Enrollment
                                Form
                              </span>
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
                                  href="javascript:void(0)"
                                  data-href="https://powerforms.docusign.net/1a014ccb-449a-45dd-b016-ce2c80e0b763?env=na1&acct=4d2500a8-dc5d-4877-b72f-6629d6c93303&accountId=4d2500a8-dc5d-4877-b72f-6629d6c93303"
                                  data-toggle="modal"
                                  data-target="#leaveElectonic"
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
                                <Link
                                  className=""
                                  target="_blank"
                                  href="/pdf/HCC G9 Patient Enrollment Form.pdf"
                                >
                                  <img
                                    src="/images/new-DarkDownload.png"
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
                        <p className="fs20 m-fs15 py-1 ArialBold mb-0 pl-2 pl-lg-3">
                          Patient Support Materials
                        </p>
                      </div>
                      <div className="m-fs15">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-lg-9 col-9 pl-3 pl-lg-4 py-3 py-lg-4 m-lh18 fs20 m-fs15">
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
                                  className="w-md-50 w-lg-75"
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
                        <p className="py-1 ArialBold mb-0 pl-2 pl-lg-3 fs20 m-fs15">
                          Product Information
                        </p>
                      </div>
                      <div className="m-fs15">
                        <div className="col-12">
                          <div className="row border-tab">
                            <div className="col-lg-9 col-9 pl-3 pl-lg-4 py-3 py-lg-4 m-lh18 fs20 m-fs15">
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
                                  className="w-md-50 w-lg-75"
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
                            <div className="col-lg-9 col-9 pl-3 pl-lg-4 py-3 py-lg-4 m-lh18 fs20 m-fs15">
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
                                  className="w-md-50 w-lg-75"
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
      </section>
    </>
  );
};

export default SupportResources;
