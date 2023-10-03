"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const Modals = () => {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (!sessionStorage.getItem("alradyVisited")) {
      document.querySelector(".modal-backdrop").classList.add("show");
      document.querySelector(".modal.mainbodyopup").style.display = "block";
    } else {
      document.querySelector(".modal-backdrop").classList.remove("show");
      document.querySelector(".modal.mainbodyopup").style.display = "none";
    }

    const pre_yesBtn = document.querySelector("#pre_yes");
    const pre_noBtn = document.querySelector("#pre_no");

    pre_yesBtn.addEventListener("click", function () {
      this.parentElement.classList.add("selected");
      pre_noBtn.parentElement.classList.remove("selected");
    });

    pre_noBtn.addEventListener("click", function () {
      this.parentElement.classList.add("selected");
      pre_yesBtn.parentElement.classList.remove("selected");
    });

    document.querySelector(".btnSubmit").addEventListener("click", function () {
      document.querySelector(".modal-backdrop").classList.remove("show");
      document.querySelector(".modal.mainbodyopup").style.display = "none";
      sessionStorage.setItem("alradyVisited", true);
      const selected = pre_yesBtn.parentElement.classList.contains("selected");
      if (selected) {
        router.push("/hcp/");
      } else {
        router.push("/hcc/");
      }
    });

    // Leave Modals popups js

    const leavePopup = document.querySelector("#leaveElectonic-hcp");
    const bgShaddow = document.querySelector(".modal-backdrop");

    const yesLeavePopup = document.querySelector(".yesLeaveElehcp");
    const noLeavePopup = document.querySelector(".noLeaveElehcp");

    function showLeavePopup() {
      bgShaddow.classList.add("show");
      leavePopup.classList.add("show");
    }

    function hideLeavePopup() {
      bgShaddow.classList.remove("show");
      leavePopup.classList.remove("show");
    }

    document
      .querySelectorAll("[data-target='#leaveElectonic']")
      .forEach((item) => {
        item.addEventListener("click", (e) => {
          const url = e.currentTarget.getAttribute("data-href");
          yesLeavePopup.setAttribute("href", url);
          showLeavePopup();
        });
      });

    // No leave button

    noLeavePopup.addEventListener("click", () => {
      hideLeavePopup();
    });

    yesLeavePopup.addEventListener("click", () => {
      hideLeavePopup();
    });
  }, [pathName]);

  return (
    <>
      <div className="modal-backdrop d-none">&nbsp;</div>
      <div
        className="modal mainbodyopup"
        id="popupHCP"
        role="dialog"
        data-backdrop="static"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered mx-0 mx-lg-auto">
          <div className="modal-content">
            <div className="modal-body popupMain">
              <div className="col-12 px-0">
                <div className="col-11 pl-lg-2 px-0 mx-auto">
                  <p className="interstitalBody letterSpacing  letterSpacing2 txtPrimary text-uppercase mb-0 py-3 pt-2 pl-1 text-center m-fs25 fs36">
                    Welcome to
                  </p>
                </div>
              </div>
              <div className="col-12 bgGreen px-3 px-lg-3 pl-lg-4">
                <div className="mapRow interstitalHeader px-lg-5 px-2 py-3 py-lg-4 mfs30_mlh30 fs52_lh52 pt-lg-4">
                  THE MERCK
                  <span className="merckbold d-block">ACCESS PROGRAM</span>
                </div>
              </div>
              <div className="col-12 px-lg-5 px-0 pt-2 pt-lg-3">
                <div className="col-11 col-lg-12 px-0 mx-auto">
                  <div className="buttonRow px-2 pl-4 pl-lg-0 px-lg-0">
                    <div className="interstitalBody txtPrimary ArialBold mfs16_mlh20 fs24_lh36 text-center">
                      ARE YOU A US HEALTHCARE PROFESSIONAL?{" "}
                    </div>
                    <div className="text-center pt-1 pt-lg-2 py-2 py-lg-0 ppRadioBtn">
                      <span className="custom-radio">
                        <input type="radio" name="usertype" id="pre_yes" />
                      </span>{" "}
                      <label for="pre_yes" className="yesL m-fs16 fs24">
                        YES
                      </label>{" "}
                      <span className="custom-radio ml-lg-4">
                        <input type="radio" name="usertype" id="pre_no" />
                      </span>{" "}
                      <label for="pre_no" className="m-fs16 fs24">
                        NO
                      </label>{" "}
                      <input type="hidden" id="hcp_yes" value="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-3">
                <div className="text-center col-12">
                  <button
                    type="button"
                    className="enroll_btn ArialBold btnSubmit py-1 px-3 text-center fs29 bgSky"
                    data-design-category="button_vd"
                    name="button"
                  >
                    <em>SUBMIT</em>{" "}
                    <span className="ml-2">
                      <img src="/images/new-arrow.png" alt="" className="w-9" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!------------------Home hcp modal start -----------------> */}
      <div
        className="modal"
        id="leavehomehcp"
        role="dialog"
        data-backdrop="true"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body py-1 leavehomehcpBody">
              <div className="row px-2 px-lg-4">
                <div className="col-12 text-center">
                  <p className="mfs18_mlh22 fs24_lh32 py-2 py-lg-4 mx-2 mx-lg-0 px-4 px-lg-0 mb-0 txtBlack">
                    By clicking on this link, you will be leaving this site.{" "}
                  </p>
                  <p className="mfs18_mlh22 fs24_lh32 px-4 px-lg-5 mx-lg-5 pb-3 txtBlack">
                    This link will take you to a site outside of{" "}
                    <span className="nowrap">Merck & Co., Inc.</span> that is
                    managed by a third-party administrator of The Merck Access
                    Program. Merck does not endorse and is not responsible for
                    the accuracy, content, practices, or standards of any
                    non-Merck site.
                  </p>
                </div>
                <div className="col-12 text-center py-3 py-lg-4">
                  <Link
                    className="yesLeavehcp  mr-0 mr-lg-1 mfs18_mlh22 fs32_lh38 txtWhite px-5 p-1 yesHover"
                    href="javascript:void(0)"
                  >
                    YES
                  </Link>
                  <Link
                    className="noLeavehcp bgSky mfs18_mlh22 fs32_lh38 txtWhite px-5 p-1 noHover"
                    data-mdb-dismiss="modal"
                    href="javascript:void(0)"
                  >
                    NO
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!------------------Home hcp modal end -----------------> */}

      <div
        className="modal"
        id="leavePopHccenroll"
        role="dialog"
        data-backdrop="true"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body py-1 leavehomehccBody">
              <div className="row px-2 px-lg-4">
                <div className="col-12 text-center">
                  <p className="mfs18_mlh22 fs24_lh32 py-2 py-lg-4 mx-2 mx-lg-0 px-4 px-lg-0 mb-0 txtBlack">
                    By clicking on this link, you will be leaving this site.{" "}
                  </p>
                  <p className="mfs18_mlh22 fs24_lh32 px-4 px-lg-5 mx-lg-5 pb-3 txtBlack">
                    This link will take you to a site outside of{" "}
                    <span className="nowrap">Merck & Co., Inc.</span> that is
                    managed by a third-party administrator of The Merck Access
                    Program. Merck does not endorse and is not responsible for
                    the accuracy, content, practices, or standards of any
                    non-Merck site.
                  </p>
                </div>
                <div className="col-12 text-center py-3 py-lg-4">
                  <Link
                    className="yesLeavehcc mr-0 mr-lg-1 mfs18_mlh22 fs32_lh38 txtWhite px-5 p-1 yesHover"
                    href="javascript:void(0)"
                  >
                    YES
                  </Link>
                  <Link
                    className="noLeavehcc bgSky ml-0 mfs18_mlh22 fs32_lh38 txtWhite px-5 p-1 noHover"
                    data-mdb-dismiss="modal"
                    href="javascript:void(0)"
                  >
                    NO
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!----------------------------------------------------------------> */}
      <div
        className="modal"
        id="leaveElectonic-hcp"
        role="dialog"
        data-backdrop="true"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body py-1 leaveElectonic-hcpBody">
              <div className="row px-2 px-lg-4">
                <div className="col-12 text-center">
                  <p className="mfs18_mlh22 fs24_lh32 py-2 py-lg-4 mx-2 mx-lg-0 px-4 px-lg-0 mb-0 txtBlack">
                    By clicking on this link, you will be leaving this site.
                  </p>
                  <p className="mfs18_mlh22 fs24_lh32 px-4  px-lg-5 mx-lg-5 pb-3 txtBlack">
                    This link will take you to a site outside of{" "}
                    <span className="nowrap">Merck & Co., Inc.</span> that is
                    managed by a third-party administrator of The Merck Access
                    Program. Merck does not endorse and is not responsible for
                    the accuracy, content, practices, or standards of any
                    non-Merck site.
                  </p>
                </div>
                <div className="col-12 text-center py-3 py-lg-4">
                  <Link
                    className="yesLeaveElehcp mr-0 mr-lg-1 mfs18_mlh22 fs32_lh38 txtWhite px-5 p-1 yesHover"
                    href="javascript:void(0)"
                    target="_blank"
                  >
                    YES
                  </Link>
                  <Link
                    className="noLeaveElehcp bgSky ml-0 mfs18_mlh22 fs32_lh38 txtWhite px-5 p-1 noHover"
                    data-mdb-dismiss="modal"
                    href="javascript:void(0)"
                  >
                    NO
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!------------------------------------------------------------->
<!------------------Enroll signup hint start -----------------> */}
      <div
        className="modal modal-hint "
        id="EnrollHint"
        role="dialog"
        data-backdrop=""
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body EnrollHintBody">
              <div className="row tabRow">
                <div className="col-12 tabCol">
                  <div className="row headingRow1 py-2 px-2">
                    <p className="m-fs20  text-white mb-0  headingRow1Text">
                      <span className="ArialBold">REMEMBER TO:</span>
                      <span>
                        <img
                          className="EnrollHintClose"
                          style={{ width: "24px" }}
                          data-dismiss="modal"
                          src="/static/images/new-modalclose.png"
                        />
                      </span>
                    </p>
                  </div>
                  <div className="row BodyRow1 pt-2 pb-lg-0 py-3 py-lg-2 px-2">
                    <table className="mb-0">
                      <tr className="">
                        <td className="tdIMG">
                          <img
                            className="modalPointer"
                            src="/static/images/new-modalPointer.png"
                          />
                        </td>
                        <td>
                          <span className=" m-fs15 m-lh13 m-lh13">
                            Download and print the enrollment form
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <div className=" col-11 ModalTextLine my-1 mx-auto">
                            &nbsp;
                          </div>
                        </td>
                      </tr>
                      <tr className=" ">
                        <td className="tdIMG">
                          <img
                            className="modalPointer"
                            src="/static/images/new-modalPointer.png"
                          />
                        </td>
                        <td>
                          <span className=" m-fs15 m-lh13">
                            Complete and sign the patient sections of the
                            enrollment form (pages 1-4)
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <div className=" col-11 ModalTextLine my-1 mx-auto">
                            &nbsp;
                          </div>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="tdIMG">
                          <img
                            className="modalPointer"
                            src="/static/images/new-modalPointer.png"
                          />
                        </td>
                        <td>
                          <span className=" m-fs15 m-lh13">
                            Make sure your healthcare provider reads and signs
                            the healthcare provider section of the enrollment
                            form{" "}
                            <span className="text-nowrap">(pages 5-6) </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <div className=" col-11 ModalTextLine my-1 mx-auto">
                            &nbsp;
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="tdIMG">
                          <img
                            className="modalPointer"
                            src="/static/images/new-modalPointer.png"
                          />
                        </td>
                        <td>
                          <span className=" m-fs15 m-lh13">
                            Fax or ask your healthcare provider to help you fax
                            your enrollment form to{" "}
                            <span className=" nowrap">866-866-4127</span>
                          </span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-------------------Enroll signup hint end ----------------->
<!------------------Spanish enroll hint -----------------> */}
      <div
        className="modal modal-hint "
        id="SpanishEnrollHint"
        role="dialog"
        data-backdrop=""
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body SpanishEnrollHintBody">
              <div className="row px-3 px-lg-3 headingRow">
                <div className="col-12 px-0">
                  <p className="text-white ArialBold m-fs20 mb-0 py-1 headingHintText">
                    REMEMBER TO:{" "}
                    <span>
                      <img
                        className="SpanishEnrollHintClose"
                        style={{ width: "24px" }}
                        data-dismiss="modal"
                        src="/static/images/new-modalclose.png"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="row px-3 px-lg-3 BodyRow pt-2 pb-3">
                <table>
                  <tr>
                    <td className="tdIMG">
                      <img
                        className="modalPointer"
                        src="/static/images/new-modalPointer.png"
                      />
                    </td>
                    <td>
                      <span className=" m-fs15 m-lh13">
                        {" "}
                        Download and print the enrollment form{" "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div className=" col-11 ModalTextLine my-1 mx-auto">
                        &nbsp;
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tdIMG">
                      <img
                        className="modalPointer"
                        src="/static/images/new-modalPointer.png"
                      />
                    </td>
                    <td>
                      <span className=" m-fs15 m-lh13">
                        {" "}
                        Complete and sign the patient sections of the enrollment
                        form (pages 1-4){" "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div className=" col-11 ModalTextLine my-1 mx-auto">
                        &nbsp;
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tdIMG">
                      <img
                        className="modalPointer"
                        src="/static/images/new-modalPointer.png"
                      />
                    </td>
                    <td>
                      <span className=" m-fs15 m-lh13">
                        Make sure your healthcare provider reads and signs the
                        healthcare provider section of the enrollment form{" "}
                        <span className="text-nowrap">(pages 5-6) </span>{" "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div className=" col-11 ModalTextLine my-1 mx-auto">
                        &nbsp;
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tdIMG">
                      <img
                        className="modalPointer"
                        src="/static/images/new-modalPointer.png"
                      />
                    </td>
                    <td>
                      <span className="m-fs15">
                        {" "}
                        Fax or ask your healthcare provider to help you fax your
                        enrollment form to{" "}
                        <span className="txtBlack nowrap">866-866-4127</span>
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!------------------spanish enroll hint modal end ----------------->
<!------------------patient enroll hint -----------------> */}
      <div
        className="modal modal-hint "
        id="PatientEnrollHint"
        role="dialog"
        data-backdrop=""
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body PatientEnrollHintBody">
              <div className="row px-3 px-lg-3 headingRow">
                <div className="col-12 px-0">
                  <p className="text-white ArialBold m-fs20 mb-0 py-1 headingHintText">
                    REMEMBER TO:{" "}
                    <span>
                      <img
                        className="PatientEnrollHintClose"
                        style={{ width: "24px" }}
                        data-dismiss="modal"
                        src="/static/images/new-modalclose.png"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="row px-3 px-lg-3 BodyRow pt-2 pb-3">
                <table>
                  <tr>
                    <td className="tdIMG">
                      <img
                        className="modalPointer"
                        src="/static/images/new-modalPointer.png"
                      />
                    </td>
                    <td>
                      <span className=" m-fs15 m-lh13">
                        {" "}
                        Use this option to complete the enrollment form
                        electronically{" "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div className=" col-11 ModalTextLine my-1 mx-auto">
                        &nbsp;
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tdIMG">
                      <img
                        className="modalPointer"
                        src="/static/images/new-modalPointer.png"
                      />
                    </td>
                    <td>
                      <span className=" m-fs15 m-lh13">
                        {" "}
                        Make sure you talk to your healthcare provider if you
                        have any questions or concerns{" "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div className=" col-11 ModalTextLine my-1 mx-auto">
                        &nbsp;
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tdIMG">
                      <img
                        className="modalPointer"
                        src="/static/images/new-modalPointer.png"
                      />
                    </td>
                    <td>
                      <span className=" m-fs15 m-lh13">
                        Fill out your name and the date when asked on the form{" "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div className=" col-11 ModalTextLine my-1 mx-auto">
                        &nbsp;
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tdIMG">
                      <img
                        className="modalPointer"
                        src="/static/images/new-modalPointer.png"
                      />
                    </td>
                    <td>
                      <span className="  m-fs15">
                        {" "}
                        Complete and sign all relevant sections of the
                        enrollment form
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div className=" col-11 ModalTextLine my-1 mx-auto">
                        &nbsp;
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tdIMG">
                      <img
                        className="modalPointer"
                        src="/static/images/new-modalPointer.png"
                      />
                    </td>
                    <td>
                      <span className="  m-fs15">
                        {" "}
                        Submit the form electronically
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div className=" col-11 ModalTextLine my-1 mx-auto">
                        &nbsp;
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tdIMG">
                      <img
                        className="modalPointer"
                        src="/static/images/new-modalPointer.png"
                      />
                    </td>
                    <td>
                      <span className="  m-fs15">
                        {" "}
                        Ask your healthcare provider to complete and submit the
                        Healthcare Provider Enrollment Form
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!------------------patient enroll hint modal end ----------------->
<!------------------ HCP POPUP EnrollHint-hcp start-----------------> */}
      <div
        className="modal modal-hint "
        id="EnrollHint-hcp"
        role="dialog"
        data-backdrop=""
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body EnrollHint-hcpBody">
              <div className="row tabRow">
                <div className="col-12 col-lg-6 tabCol1">
                  <div className="row headingRow1 py-2 px-2">
                    <div className="col-9 d-lg-none d-block">
                      <p className=" m-fs15  text-white mb-0  headingRow1Text">
                        <span className="ArialBold">REMEMBER TO:</span>
                      </p>
                      <p className=" m-fs15  text-white mb-0  headingRow1Text nowrap">
                        Sign & Submit Electronically
                      </p>
                    </div>
                    <div className="col-2 d-lg-none d-block">
                      <img
                        className="headingRow1Close"
                        style={{
                          width: "24px",
                          marginLeft: "3rem",
                          top: "-1px;",
                          position: "relative",
                        }}
                        data-dismiss="modal"
                        src="/static/images/new-modalclose.png"
                      />
                    </div>
                    <p className=" m-fs15 text-white  d-lg-block d-none headingRow1Text">
                      <span className="ArialBold">REMEMBER TO:</span> Sign &
                      Submit Electronically{" "}
                    </p>
                  </div>
                  <div className="row BodyRow1 py-lg-2 py-3 px-2">
                    <table>
                      <tr>
                        <td className="tdIMG">
                          <img
                            className="modalPointer"
                            src="/static/images/new-modalPointer.png"
                          />
                        </td>
                        <td>
                          <span className=" m-fs15 m-lh13">
                            Use this option to complete the enrollment form
                            electronically with the patient{" "}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <div className=" col-11 ModalTextLine my-1 mx-auto">
                            &nbsp;
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="tdIMG">
                          <img
                            className="modalPointer"
                            src="/static/images/new-modalPointer.png"
                          />
                        </td>
                        <td>
                          <span className=" m-fs15 m-lh13">
                            Fill out and sign the healthcare provider section of
                            the enrollment form{" "}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <div className=" col-11 ModalTextLine my-1 mx-auto">
                            &nbsp;
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="tdIMG">
                          <img
                            className="modalPointer"
                            src="/static/images/new-modalPointer.png"
                          />
                        </td>
                        <td>
                          <span className=" m-fs15 m-lh13">
                            Inform the patient that they will receive an email
                            from The Merck Access Program to complete the
                            enrollment form
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <div className=" col-11 ModalTextLine my-1 mx-auto">
                            &nbsp;
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="tdIMG">
                          <img
                            className="modalPointer"
                            src="/static/images/new-modalPointer.png"
                          />
                        </td>
                        <td>
                          <span className=" m-fs15 m-lh13">
                            Instruct the patient to complete and sign the
                            patient sections of the enrollment form
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <div className=" col-11 ModalTextLine my-1 mx-auto">
                            &nbsp;
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="tdIMG">
                          <img
                            className="modalPointer"
                            src="/static/images/new-modalPointer.png"
                          />
                        </td>
                        <td>
                          <span className=" m-fs15 m-lh13">
                            Submit the form electronically
                          </span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="col-12 col-lg-6 tabCol2">
                  <div className="row headingRow2 py-2 px-2">
                    <div className="col-9 d-lg-none d-block">
                      <p className=" m-fs15 text-white mb-0 d-lg-none d-block headingRow2Text">
                        <span className="ArialBold">REMEMBER TO:</span>
                      </p>
                      <p className=" m-fs15 text-white mb-0 d-lg-none d-block headingRow2Text">
                        Download & Print
                      </p>
                    </div>
                    <p className=" m-fs15 text-white d-lg-block d-none headingRow2Text">
                      <span className="ArialBold">REMEMBER TO:</span> Download &
                      Print
                      <span className="">
                        <img
                          className="headingRow2Close"
                          style={{ width: "24px" }}
                          data-dismiss="modal"
                          src="/static/images/new-modalclose.png"
                        />
                      </span>
                    </p>
                  </div>
                  <div className="row BodyRow2 pt-2 pb-lg-0 py-3 py-lg-2 px-2">
                    <table className="mb-lg-4 mb-3">
                      <tr>
                        <td className="tdIMG">
                          <img
                            className="modalPointer"
                            src="/static/images/new-modalPointer.png"
                          />
                        </td>
                        <td>
                          <span className=" m-fs15 m-lh13">
                            Download and print the enrollment form
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <div className=" col-11 ModalTextLine my-1 mx-auto">
                            &nbsp;
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="tdIMG">
                          <img
                            className="modalPointer"
                            src="/static/images/new-modalPointer.png"
                          />
                        </td>
                        <td>
                          <span className=" m-fs15 m-lh13">
                            Instruct the patient to complete and sign the
                            patient sections of the enrollment form (pages 1-4)
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <div className=" col-11 ModalTextLine my-1 mx-auto">
                            &nbsp;
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="tdIMG">
                          <img
                            className="modalPointer"
                            src="/static/images/new-modalPointer.png"
                          />
                        </td>
                        <td>
                          <span className=" m-fs15 m-lh13">
                            Fill out and sign the healthcare provider section of
                            the enrollment form{" "}
                            <span className="text-nowrap">(pages 5-6) </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <div className=" col-11 ModalTextLine my-1 mx-auto">
                            &nbsp;
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="tdIMG">
                          <img
                            className="modalPointer"
                            src="/static/images/new-modalPointer.png"
                          />
                        </td>
                        <td>
                          <span className=" m-fs15 m-lh13">
                            Include a copy of the front and back of the
                            patient’s insurance card
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <div className=" col-11 ModalTextLine my-1 mx-auto">
                            &nbsp;
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="tdIMG">
                          <img
                            className="modalPointer"
                            src="/static/images/new-modalPointer.png"
                          />
                        </td>
                        <td>
                          <span className=" m-fs15 m-lh13">
                            Fax the completed form to{" "}
                            <span className="txtBlack nowrap">
                              866-866-4127
                            </span>
                          </span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!------------------EnrollHint-hcp  modal end ----------------->
<!------------------ HCP POPUP SpanishEnrollHint-hcp start-----------------> */}
      <div
        className="modal modal-hint "
        id="SpanishEnrollHint-hcp"
        role="dialog"
        data-backdrop=""
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body SpanishEnrollHint-hcpBody">
              <div className="row px-3 px-lg-3 headingRow">
                <div className="col-12 px-0">
                  <p className="text-white ArialBold m-fs20 mb-0 py-1 headingHintText">
                    REMEMBER TO:{" "}
                    <span>
                      <img
                        className="SpanishEnrollHint-hcpClose"
                        style={{ width: "24px" }}
                        data-dismiss="modal"
                        src="/static/images/new-modalclose.png"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="row px-3 px-lg-3 BodyRow pt-2 pb-3">
                <table>
                  <tr>
                    <td className="tdIMG">
                      <img
                        className="modalPointer"
                        src="/static/images/new-modalPointer.png"
                      />
                    </td>
                    <td>
                      <span className=" m-fs15 m-lh13">
                        {" "}
                        Download and print the enrollment form
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div className=" col-11 ModalTextLine my-1 mx-auto">
                        &nbsp;
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tdIMG">
                      <img
                        className="modalPointer"
                        src="/static/images/new-modalPointer.png"
                      />
                    </td>
                    <td>
                      <span className=" m-fs15 m-lh13">
                        {" "}
                        Instruct the patient to complete and sign the patient
                        sections of the enrollment form (pages 1-4){" "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div className=" col-11 ModalTextLine my-1 mx-auto">
                        &nbsp;
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tdIMG">
                      <img
                        className="modalPointer"
                        src="/static/images/new-modalPointer.png"
                      />
                    </td>
                    <td>
                      <span className=" m-fs15 m-lh13">
                        Fill out and sign the healthcare provider section of the
                        enrollment form{" "}
                        <span className="text-nowrap">(pages 5-6) </span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div className=" col-11 ModalTextLine my-1 mx-auto">
                        &nbsp;
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tdIMG">
                      <img
                        className="modalPointer"
                        src="/static/images/new-modalPointer.png"
                      />
                    </td>
                    <td>
                      <span className="  m-fs15">
                        {" "}
                        Include a front and back copy of the patient’s insurance
                        card
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div className=" col-11 ModalTextLine my-1 mx-auto">
                        &nbsp;
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tdIMG">
                      <img
                        className="modalPointer"
                        src="/static/images/new-modalPointer.png"
                      />
                    </td>
                    <td>
                      <span className="  m-fs15">
                        {" "}
                        Fax the completed form to
                        <span className="nowrap ArialBold"> 866-866-4127</span>
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!------------------SpanishEnrollHint-hcp  modal end ----------------->
<!------------------ HCP POPUP ElectonicHint-hcp start-----------------> */}
      <div
        className="modal modal-hint "
        id="ElectonicHint-hcp"
        role="dialog"
        data-backdrop=""
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body ElectonicHint-hcpBody">
              <div className="row px-3 px-lg-3 headingRow">
                <div className="col-12 px-0">
                  <p className="text-white ArialBold m-fs20 mb-0 py-1 headingHintText">
                    REMEMBER TO:{" "}
                    <span>
                      <img
                        className="ElectonicHint-hcpClose"
                        style={{ width: "24px" }}
                        data-dismiss="modal"
                        src="/static/images/new-modalclose.png"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="row px-3 px-lg-3 BodyRow pt-2 pb-3">
                <table>
                  <tr>
                    <td className="tdIMG">
                      <img
                        className="modalPointer"
                        src="/static/images/new-modalPointer.png"
                      />
                    </td>
                    <td>
                      <span className=" m-fs15 m-lh13">
                        {" "}
                        Complete the patient and insurance information{" "}
                        <span className="text-nowrap">(page 1) </span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div className=" col-11 ModalTextLine my-1 mx-auto">
                        &nbsp;
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tdIMG">
                      <img
                        className="modalPointer"
                        src="/static/images/new-modalPointer.png"
                      />
                    </td>
                    <td>
                      <span className=" m-fs15 m-lh13">
                        {" "}
                        Fill out and sign the healthcare provider section of the
                        enrollment form{" "}
                        <span className="nowrap">(pages 2-3)</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div className=" col-11 ModalTextLine my-1 mx-auto">
                        &nbsp;
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tdIMG">
                      <img
                        className="modalPointer"
                        src="/static/images/new-modalPointer.png"
                      />
                    </td>
                    <td>
                      <span className=" m-fs15 m-lh13">
                        Submit the form electronically{" "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div className=" col-11 ModalTextLine my-1 mx-auto">
                        &nbsp;
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="tdIMG">
                      <img
                        className="modalPointer"
                        src="/static/images/new-modalPointer.png"
                      />
                    </td>
                    <td>
                      <span className="  m-fs15">
                        Ensure the patient also completes the Electronic Patient
                        Enrollment Form, found at
                        merckaccessprogram-prevymis.com/hcc
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!------------------ElectonicHint-hcp  modal end -----------------> */}
    </>
  );
};

export default Modals;
