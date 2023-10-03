import Link from "next/link";

const Enrollnow = () => {
  return (
    <>
      <section className="mainSection enrollHCP">
        <section className="firstSection">
          <div className="container-fluid pt-4 pt-lg-3 px-lg-0">
            <div className="row">
              <div className="col-12 col-lg-10 px-lg-0 mx-auto pt-0 pt-lg-3">
                <p className="mfs19_mlh23 fs38_lh42  mb-lg-1 txtPrimary mb-1 col-12 pl-0 col-lg-12">
                  Learn More About Enrollment
                </p>
                <p className="m-fs28 m-lh30 fs43_lh47 txtPrimary ArialBold mb-2 pt-lg-1 d-lg-block d-none">
                  THE MERCK ACCESS PROGRAM
                </p>
                <p className="m-fs21 m-lh30 fs43_lh47 txtPrimary ArialBold mb-2 pt-1 d-block d-lg-none">
                  THE MERCK <span className="ArialBold ">ACCESS PROGRAM</span>
                </p>
                <div className="txtlightBlack mfs15_mlh18 fs22_lh24 pt-1 pt-lg-2 pb-lg-5">
                  The Merck Access Program is designed to provide reimbursement
                  and insurance coverage-related information for your patient
                  throughout their treatment process.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="secondSection-hcp pt-lg-0 pt-3 pb-2 pb-lg-5 px-3">
          <div className="row no-gutters pt-lg-4">
            {/* <!--- desktop view table--> */}
            <div className="col-11 d-lg-block d-none px-4 mx-auto">
              <table className="table enrollTable-hcp">
                <thead>
                  <tr>
                    <th className="heading1 py-lg-2">&#160;</th>
                    <th className="heading2 text-center m-fs14 fs20 py-lg-2 pr-lg-4">
                      <span className="">SIGN &amp; SUBMIT ELECTRONICALLY</span>
                    </th>
                    <th className="heading3 text-center m-fs14 fs20 py-lg-2">
                      <span className="">
                        DOWNLOAD &amp;<span className="d-block"> PRINT</span>
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="row1">
                    <td className="col1 bgGradient">
                      <div className="row px-3 py-2">
                        <div className="col-xl-8 col-7">
                          <p className="ArialBold m-fs15 m-lh20 fs34 lh40 TableText pt-1">
                            Enrollment Form
                          </p>
                        </div>
                        {/* <!-- <div className="col-xl-4 col-5"><Link className="btnHelpHint " href="javascript:void(0)" data-toggle="modal" data-target="#EnrollHint-hcp">Helpful Hints</Link></div> --> */}
                      </div>
                    </td>
                    <td className="text-center col2 bgGradient">
                      <Link
                        href="javascript:volid(0)"
                        data-href="https://www.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=1555d71d-bebb-4385-96a4-ce3824de4fc7&env=na1&acct=4d2500a8-dc5d-4877-b72f-6629d6c93303&v=2"
                        data-target="#leaveElectonic"
                        data-design-category="button_vd"
                      >
                        <img className="W70" src="/images/new-desk-icon.png" />
                      </Link>
                      <p className="fs18 pt-2 text-left lh20 txtBlack">
                        This form can be signed and submitted electronically.
                      </p>
                    </td>
                    <td className="text-center col3 bgGradient">
                      <Link
                        className=""
                        target="_blank"
                        href="/pdf/GARDASIL9-Enrollment-Form.pdf"
                        data-design-category="button_vd"
                      >
                        <img
                          className="W55"
                          src="/images/new-download-icon.png"
                        />
                      </Link>
                      <p className="fs18 pt-2 text-left mb-0 lh20 txtBlack">
                        This form can be downloaded and printed, and requires an
                        original signature.
                      </p>
                    </td>
                  </tr>
                  <tr className="row1 row2">
                    <td
                      className="col1 p-0 small-line-table1"
                      background="/images/new-small-table-enroll.png"
                    />
                    <td
                      className="col2 p-0 small-line-table2"
                      background="/images/new-small-table-enroll.png"
                    />
                    <td
                      className="text-center small-line-table3 col3 p-0"
                      background="/images/new-small-table-enroll.png"
                    />
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <!--- mobile view --> */}
            <div className="col-12 d-lg-none d-block MobRowBtn">
              <p className="m-fs16 ArialBold mb-1 m-lh20">Enrollment Form</p>
              <div className="row px-3 pt-2 pb-1 MobDownBtn">
                <div className="col-6 mr-1 downCol py-2">
                  <p className="txtBlack ArialBold mb-0 m-fs16 m-lh18">
                    SIGN &amp; SUBMIT ELECTRONICALLY
                  </p>
                </div>
                <div className="col-5 btnBgT py-2">
                  <Link
                    href="javascript:void(0)"
                    data-href="https://www.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=1555d71d-bebb-4385-96a4-ce3824de4fc7&env=na1&acct=4d2500a8-dc5d-4877-b72f-6629d6c93303&v=2"
                    data-target="#leaveElectonic"
                  >
                    <img className="W45" src="/images/new-desk-icon.png" />
                  </Link>
                </div>
              </div>
              <p className="text-left m-fs14 lh20 fs18 pt-0 mb-0 px-1">
                This form can be signed and submitted electronically.
              </p>
              <p className="text-center col-6 ArialBold mb-0 pt-1 m-fs15 m-lh20">
                OR
              </p>
              <div className="row px-3 pt-2 pb-1 MobDownBtn">
                <div className="col-6 mr-1 elcCol py-2">
                  <p
                    className="text-white mb-0 ArialBold m-fs16 m-lh18 pt-1"
                    style={{ textTransform: "uppercase;" }}
                  >
                    Download &amp; Print
                  </p>
                </div>
                <div className="col-5 btnBgT py-2">
                  <Link
                    className=""
                    href="/pdf/GARDASIL9-Enrollment-Form.pdf"
                    target="_blank"
                  >
                    <img className="W35" src="/images/new-download-icon.png" />
                  </Link>
                </div>
              </div>
              <p className="text-left fs18 m-fs14 lh20 pt-0 mb-0 px-1">
                This form can be downloaded and printed, and requires an
                original signature.
              </p>
            </div>
            {/* <!--- mobile view  end--> */}
          </div>
        </section>
        {/* <!-- home banner End --> */}
        <section className="thirdSectionEnroll bgDarkActive mt-3 my-lg-0 mx-lg-1">
          <div className="container-fluid py-3 py-lg-2">
            <div className="row px-lg-5 px-0 py-lg-4 py-1 align-items-center">
              <div className="col-12 col-lg-6 col-xl-7 offset-xl-0  pl-lg-5 px-4 text-lg-left text-center">
                <p className="mfs20_mlh24 fs30 lh36 text-txtgreen ArialBold pr-3 pl-lg-0 txtTeal  mb-0 ">
                  Use this link to securely upload enrollment documents to The
                  Merck Access Program
                </p>
              </div>
              <div className="col-12 col-lg-6 col-xl-5 pt-3 pt-lg-0 px-0 text-center text-lg-center">
                <Link
                  className="m-fs20 fs26 bold txtgreen upBtn-enroll enrollHover externalsite"
                  href="javascript:void(0)"
                  data-href="https://hubconnect.mckesson.com/8x52jhdfp92851merck"
                  data-target="#leaveElectonic"
                  data-design-category="button_vd"
                >
                  <span className="col-7 px-2 text-center graytxt HelvaticaBold">
                    UPLOAD DOCUMENTS
                  </span>{" "}
                  <span className="col-2 px-0">
                    <img src="/images/new-upload.png" className="hcpBtn" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Enrollnow;
