import Link from "next/link";

const HcpHome = () => {
  return (
    <>
      <section className="mainSection px-lg-1 dBorder" id="hcpHome">
        {/* <!-- home banner Start --> */}
        <section className="hompageBanner">
          <div className="row no-gutters">
            <div className="col-12 position-relative">
              <div className="row no-gutters align-items-center flex-row-reverse">
                <picture className="">
                  <source
                    media="(max-width: 450px)"
                    srcset="/images/new-lady_mob.png"
                  />
                  <source
                    media="(max-width: 991px)"
                    srcset="/images/new-lady_mob.png"
                  />
                  <source
                    media="(max-width: 1600px)"
                    srcset="/images/new-lady.png"
                  />
                  <source
                    media="(min-width: 1601px)"
                    srcset="/images/new-lady.png"
                  />
                  <img className="w-100" src="/images/new-lady.png" alt="" />
                </picture>
                <div
                  className="col-12 px-1 d-lg-none py-2 mobile-bottom-140"
                >
                  <p className="col-7 mfs29_mlh31 txtTeal ArialBold position-absolute mb-0 ">
                    HOW MAY WE ASSIST YOU?
                  </p>
                </div>
                <div className="col-12 col-lg-11 offset-lg-1 pl-3 pr-3  px-lg-0 deskAbsolute  pr-0 pt-2 pt-lg-0 mt-lg-0 ">
                  <p className="m-fs38 ArialBold txtTeal mb-0 d-none d-lg-block pb-lg-3">
                    HOW MAY WE ASSIST YOU?
                  </p>
                  <p className="mfs28_mlh30 fs41_lh40 txtTeal mb-0 mercklight uniRegular">
                    THE MERCK{" "}
                    <span className="merckbold d-block m-fs32 fs47">
                      ACCESS PROGRAM
                    </span>
                  </p>
                  <p className="mfs25_mlh30 txtTeal fs28_lh32  text-uppercase py-1 py-lg-2 mb-2">
                    CAN HELP ANSWER QUESTIONS ABOUT:
                  </p>
                  <div className="col-12">
                    <div className="row txtGrey">
                      <div className="col-12 col-lg-5 px-0">
                        <ul className="mfs15_mlh22 fs20_lh22 pr-3 txtGrey">
                          <li className="pb-lg-1 ">Billing and coding</li>
                          <li className="pb-lg-1">Benefit investigations</li>
                          <li className="">Prior authorizations and appeals</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p className="m-fs19 fs28_lh32 txtTeal ArialBold mb-0 mb-lg-2">
                    GETTING STARTED IS SIMPLE!
                  </p>
                  <p className="mb-1 mb-lg-2 mfs15_mlh18 fs22_lh24 txtGrey ArialBold">
                    Contact The Merck Access Program
                  </p>
                  <p className="mb-1 mb-lg-2 mfs15_mlh18 fs22_lh24 txtGrey">
                    Mon-Fri, 8 <span className="m-fs10 fs17">AM</span> to 8{" "}
                    <span className="m-fs10 fs17">PM</span> (ET)
                  </p>
                  <p className="mb-1 mb-lg-2 mfs15_mlh18 fs22_lh24 txtGrey ArialBold">
                    855-210-1965
                  </p>
                  <div className="px-0 col-lg-6 py-3">
                    <Link
                      href="/hcp/enrollnow/"
                      role="link"
                      tabindex="0"
                      aria-label="ENROLL NOW"
                    >
                      <button
                        type="button"
                        data-design-category="button_vd"
                        className="col-12 col-lg-8 page_enroll_btn py-2 py-lg-3 px-5 px-lg-1 px-xl-5 text-center mfs20_mlh24 fs33 italic bgTeal"
                        tabindex="-1"
                        name="button"
                      >
                        ENROLL NOW
                      </button>
                    </Link>
                  </div>
                  <p className="mb-3 mb-lg-0 px-0 pr-3 pr-lg-5 col-12 col-lg-8 txtGrey mfs15_mlh18 fs20_lh22">
                    If you are uninsured or unable to afford your medication,
                    please visit merckhelps.com or call{" "}
                    <span className="nowrap">800-293-3881.</span> The Merck Patient
                    Assistance Program may be able to help.
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

export default HcpHome;
