import Link from 'next/link';
// import hcc_banner from "./../../../../public/images/hcc_banner.png";

const Hcchome = () => {
  return (
    <>
      <section className="mainSection px-lg-1 dBorder" id="hccHome">
        {/* <!-- home banner Start --> */}
        <section className="hompageBanner">
          <div className="row no-gutters">
            <div className="col-12 position-relative">
              <div className="row no-gutters align-items-center flex-row-reverse pt-lg-2">
                <img className="w-100 imgHeight" src="/images/hcc_banner.png" alt="" />
                {/* <img className="w-100 imgHeight" src={hcc_banner} alt="" /> */}
                <div
                  className="col-12 px-1 d-lg-none py-2 mobile-bottom-140"
                >
                  <p className="col-6 mfs28_mlh30 txtTeal ArialBold position-absolute mb-0" >
                    HOW MAY WE ASSIST YOU?
                  </p>
                </div>
                <div className="col-12 col-lg-12 px-lg-5 offset-lg-1 pl-3 pr-3  px-lg-0 deskAbsolute  pr-0 pt-2 pt-lg-0 mt-lg-0 ">
                  <p className="m-fs38 ArialBold txtTeal mb-0 d-none d-lg-block pb-lg-0 pl-lg-4">
                    HOW MAY WE ASSIST YOU?
                  </p>
                  <p className="px-0 col-12 col-lg-6 mfs17_mlh20 pl-lg-4 txtTeal fs22_lh24 text-uppercase py-1 py-lg-2 mb-2 ">
                    THE MERCK ACCESS PROGRAM MAY BE ABLE TO HELP ANSWER YOUR
                    QUESTIONS ABOUT INSURANCE COVERAGE LIKE:
                  </p>
                  <div className="col-12">
                    <div className="row txtGrey">
                      <div className="col-12 col-lg-6 col-xl-5 px-0 pl-lg-4">
                        <ul className="mfs15_mlh22 fs20_lh22 pr-3">
                          <li className="pb-lg-1">
                            Does my insurance cover{" "}
                            <span className="nowrap">GARDASIL 9?</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p className="mfs21_mlh23  pl-lg-4 fs28_lh32 txtTeal ArialBold mb-2 ">
                    A REPRESENTATIVE MAY BE ABLE TO
                  </p>
                  <ul className="mfs15_mlh22 fs20_lh22 pr-3">
                    <li className="pb-lg-1 pl-lg-4">
                      Identify your insurance benefits
                    </li>
                    <li className="pl-lg-4">
                      Obtain information about your out-of-pocket costs
                    </li>
                  </ul>

                  <div className="px-0 col-lg-6 pb-3 py-lg-3 pl-lg-4">
                    <Link
                      href="/hcc/enrollnow/"
                      role="link"
                      tabindex="0"
                      aria-label="ENROLL NOW"
                    >
                      <button
                        type="button"
                        data-design-category="button_vd"
                        className="col-12 col-lg-10 col-xl-8 page_enroll_btn py-2 py-lg-3 px-5 text-center mfs20_mlh24 fs29 italic bgTeal"
                        name="button"
                        tabindex="-1"
                      >
                        ENROLL NOW
                      </button>
                    </Link>
                  </div>
                  <p className="mb-3 mb-lg-0 px-0 pr-3 pr-lg-4 col-12 col-lg-6 txtGrey mfs15_mlh18 fs20_lh22 pl-lg-4">
                    If you are uninsured or unable to afford your medication,
                    please visit merckhelps.com or call
                    <span className="nowrap">800-293-3881. </span>The Merck
                    Patient Assistance Program may be able to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- home banner End --> */}
      </section>
    </>
  );
};

export default Hcchome;
