import Link from "next/link";

const Enrollnow = () => {
  return (
    <>
      <section className="mainSection enrollHcc">
        <section className="firstSection">
          <div className="container-fluid pt-3 px-lg-0">
            <div className="row">
              <div className="col-12 col-lg-10 px-lg-0 mx-auto pt-0 pt-lg-3">
                <p className="mfs19_mlh23 fs38_lh42 mb-lg-1 mb-1 col-10 pl-0 col-lg-12 txtTeal">
                  Learn More About Enrollment
                </p>
                <p className="m-fs28 m-lh30 fs43_lh47 txtPurple ArialBold mb-2 pt-lg-1 d-lg-block d-none txtTeal">
                  THE MERCK ACCESS PROGRAM
                </p>
                <p className="m-fs21 m-lh30 fs43_lh47 txtPurple txtTeal ArialBold mb-2 pt-1 d-block d-lg-none">
                  THE MERCK <span className="ArialBold">ACCESS PROGRAM</span>
                </p>
                <div className="txtBlack mfs15_mlh18 fs22_lh24 pt-1 pt-lg-2 pb-lg-2">
                  The Merck Access Program is designed to provide reimbursement
                  and insurance coverage-related information for you throughout
                  your treatment process.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="secondSection-hcc pt-lg-0 pt-3 pb-5 px-3">
          <div className="row no-gutters pt-lg-4">
            {/* <!--- desktop view table--> */}
            <div className="col-11 d-lg-block d-none px-4 mx-auto">
              <table className="table enrollTable-hcc">
                <thead>
                  <tr>
                    <th className="heading1 py-lg-2">&#160;</th>
                    <th className="heading2 py-lg-2 pr-lg-4 text-center m-fs14 fs20 txtBlack">
                      SIGN &amp; SUBMIT ELECTRONICALLY
                    </th>
                    {/* <!-- <th className="heading2.5 text-center m-fs14 fs20">OR</th> --> */}
                    <th className="heading3 text-center py-lg-2 m-fs14 fs20">
                      <span className="">DOWNLOAD &amp; PRINT</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="row1">
                    <td className="col1 bgGradient">
                      <div className="row px-3 py-2">
                        <div className="col-xl-8 col-7">
                          <p className="ArialBold m-fs15 m-lh20 fs34 lh40 txtBlack TableText pt-1">
                            Enrollment Form
                          </p>
                        </div>
                        {/* <!-- <div className="col-xl-4 col-5"><Link className="btnHelpHint " href="javascript:void(0)" data-toggle="modal" data-target="#EnrollHint-hcp">Helpful Hints</Link></div> --> */}
                      </div>
                    </td>
                    <td className="text-center col2 bgGradient">
                      <Link
                        className=""
                        target="_blank"
                        href="javascript:void(0)"
                        data-toggle="modal"
                        data-target="#leavePopHccenroll"
                      >
                        <img className="W70" src="/images/new-desk-icon.png" />
                      </Link>
                      <p className="text-left pt-2 mb-0 txtBlack px-2 m-fs14 lh20 fs18">
                        This form can be signed and submitted electronically.
                      </p>
                    </td>
                    <td className="text-center col3 bgGradient">
                      <Link
                        className=""
                        target="_blank"
                        href="/pdf/HCC G9 Patient Enrollment Form.pdf"
                      >
                        <img
                          className="W60"
                          src="/images/new-download-icon.png"
                        />
                      </Link>
                      <p className="text-left txtBlack pt-2 mb-0 m-fs14 lh20 px-3 fs18">
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
                      colspan="2"
                      background="/images/new-small-table-enroll.png"
                    />
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <!--- mobile view --> */}
            <div className="col-12 d-lg-none d-block MobRowBtn">
              <p className="m-fs16 ArialBold mb-1 m-lh20">Enrollment Form</p>
              <div className="row px-3 pt-2 MobDownBtn">
                <div className="col-6 mr-1 downCol py-2">
                  <p className="txtBlack ArialBold mb-0 m-fs16 m-lh18">
                    SIGN &amp; SUBMIT ELECTRONICALLY
                  </p>
                </div>
                <div className="col-5 btnBgT py-2">
                  <Link
                    className=""
                    target="_blank"
                    href="javascript:void(0)"
                    data-toggle="modal"
                    data-target="#leavePopHccenroll"
                  >
                    <img
                      className="W45"
                      src="/images/new-desk-icon.png"
                      data-design-category="button_vd"
                    />
                  </Link>
                </div>
              </div>
              <p className="text-left pt-2 mb-0 txtBlack px-1 m-fs14 fs18">
                This form can be signed and submitted electronically.
              </p>
              <p className="text-center col-6 ArialBold pt-1 mb-1 m-fs15 m-lh20">
                OR
              </p>
              <div className="row px-3 pt-2 MobDownBtn">
                <div className="col-6 mr-1 elcCol py-2">
                  <p
                    className="text-white mb-0 ArialBold m-fs16 m-lh18 pt-1"
                    style={{ textTransform: "uppercase" }}
                  >
                    Download &amp; Print
                  </p>
                </div>
                <div className="col-5 btnBgT py-2">
                  <Link
                    className=""
                    target="_blank"
                    href="/pdf/HCC G9 Patient Enrollment Form.pdf"
                  >
                    <img
                      className="W35"
                      src="/images/new-download-icon.png"
                      data-design-category="button_vd"
                    />
                  </Link>
                </div>
              </div>
              <p className="text-left pt-2 mb-0 px-1 txtBlack m-fs14">
                This form can be downloaded and printed, and requires an
                original signature.
              </p>
            </div>
            {/* <!--- mobile view  end--> */}
          </div>
        </section>
        {/* <!-- home banner End --> */}
      </section>
    </>
  );
};

export default Enrollnow;
