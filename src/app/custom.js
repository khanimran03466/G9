var mainApp = mainApp || {};
var mobileDevice = $(window).width() <= 991;
var ipad = $(window).width() < 800 && $(window).width() > 400;
var desktopDevice = $(window).width() >= 992;
var ipad1 = $(window).width() == 1024;
var ipad2 = $(window).width() == 768;
var mac = $(window).width() > 1600;
var enrollpage;
// $(document).ready(function(){
//
// });
// url = window.location.pathname;
url="";
$(function() {
  mainApp = {
    /* Declare global variables here*/
    _isMobile: "",
    // Initialize  application
    init: function() {
      // Call functions here
      // this.mobileMenu();
      _isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      url= this.sanitizeURL(window.location.pathname);
      this.iEPositionFixed();
      this.triggerClick();
      this.getFocusedElement();
      this.accessibility();
      this.skipLinkHide();
      this.showModal();
      this.modalHints();
      this.btnSubmit();
      this.customRadio();
      this.navactive();
      this.mobileNav();
      this.stickyPosition();
      this.leaveModal();
  },
leaveModal:function(){
  $(".externalsite").click(function(e){
    e.preventDefault();
    console.log("click");
    var proceedhref = $(this).attr('href');
    $("#leavehomehcp").modal('show');
    $(".yesLeavehcp").attr("href", proceedhref);
    $(".yesLeavehcp").attr("target", '_blank');
  });



 $(".yesLeavehcp").click(function(){
 //window.open('#', '_blank');
 $("#leavehomehcp").modal('hide');
 });

 $(".noLeavehcp").click(function(){
 $("#leavehomehcp").modal('hide');
 });

 $(".yesLeavehcc").click(function(){
 window.open('https://powerforms.docusign.net/1a014ccb-449a-45dd-b016-ce2c80e0b763?env=na1&acct=4d2500a8-dc5d-4877-b72f-6629d6c93303&accountId=4d2500a8-dc5d-4877-b72f-6629d6c93303', '_blank');
 $("#leavePopHccenroll").modal('hide');
 });

 $(".noLeavehcc").click(function(){
 $("#leavePopHccenroll").modal('hide');
 });

 $(".yesLeaveElehcp").click(function(){
 window.open('https://www.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=1555d71d-bebb-4385-96a4-ce3824de4fc7&env=na1&acct=4d2500a8-dc5d-4877-b72f-6629d6c93303&v=2', '_blank');
 $("#leaveElectonic-hcp").modal('hide');
 });

 $(".noLeaveElehcp").click(function(){
 $("#leaveElectonic-hcp").modal('hide');
 });

},

  sanitizeURL : function(url){
      return decodeURI(url).replace(/[>+;"[{}\]<]/g, '');
  },
  stickyPosition: function(){
          var ua = window.navigator.userAgent;
          var isIE = /MSIE|Trident/.test(ua);
          if(isIE){
              var offset = $('#top').offset();
              var navParent = $('#top');
              var nav = navParent.find('.stickyHeader');
              var tmp = navParent.find('.indication_notifier').clone().attr('class', 'tmp').css({'visibility': 'hidden'});
               window.addEventListener('scroll', function() {
                if (window.pageYOffset > offset.top) {
                  navParent.append(tmp);
                  nav.css({'position': 'fixed', 'top': 0});
                  $('#top').css("height", $('.stickyHeader').height() + "px");
                } else {
                  navParent.find('.tmp').remove();
                  nav.css({'position': 'static', 'top': ''});
                  // $('#middle').css("position", "relative");

                }
              });
          }
   },


    mobileNav: function() {
      $('#mobileNavButton').click(function(){
        // $('#mobileNavigation').toggle();
        if($('#mobileNavigation').hasClass('isSelected')){
          $('#mobileNavigation').show();

          $('.close-icon, .close-text').show();
          // console.log("hello");
          $('.mobHide').removeClass('d-block').addClass('d-none');
          // $('.close-icon').fadeIn('slow');
          $('.menu-bar, .middle-link, .menu-text').hide();
          // $('.menu-bar').fadeOut('slow');
          $('.mainSection, .logoFooter').hide();
          $('#mobileNavigation').removeClass('isSelected')
        }
        else{
          $('.close-icon, .close-text').hide();
          // $('.close-icon').fadeOut('slow');
          $('.menu-bar, .middle-link, .menu-text').show();
          // $('.menu-bar').fadeIn('slow');
          $('#mobileNavigation').hide();
          $('.mobHide').addClass('d-block').removeClass('d-none');

          $('.mainSection, .logoFooter').show();
          $('#mobileNavigation').addClass('isSelected')
        }
      });
    },

// New Custome JS
// Menu Link Background color change
      navactive: function() {
          //Main menu active state function
          // For main Parent level Menu
          // for HCP
          if (url === "/hcp/" || url === "/") {
              $("#hcpmainlinkOne").addClass("mainActive");
              // if (_isMobile || mobileDevice) {
              //     $("#hcpMenuLinkTwo, .hcpMenuLinkTwo").addClass("bgSecondary","bgDarkActive").removeClass("bgDarkActive1");
              // }
              // else{
                 $("#hcpMenuLinkTwo, .hcpMenuLinkTwo").removeClass("bgSecondary","bgDarkActive").addClass("bgDarkActive1");
              // }
              $("#mobileHeaderOne").addClass("mainActive");
          }
          if(url=="/hcp/forms-and-documentation/"){
            // if (_isMobile || mobileDevice) {
            //     $("#hcpMenuLinkThree, .hcpMenuLinkThree").addClass("bgSecondary").removeClass("bgDarkActive1");
            // }
            // else{
                $("#hcpMenuLinkThree, .hcpMenuLinkThree").removeClass("bgSecondary").addClass("bgDarkActive1");
            // }
          }
          // if(url=="/hcp/copay-cost-assistance-program/"){
          //   if (_isMobile || mobileDevice) {
          //       $("#hcpMenuLinkThree, .hcpMenuLinkThree").addClass("bgSecondary","bgDarkActive").removeClass("bgDarkActive1");
          //   }
          //   else{
          //     $("#hcpMenuLinkThree, .hcpMenuLinkThree").removeClass("bgSecondary","bgDarkActive").addClass("bgDarkActive1");
          //   }
          // }
          // if(url=="/hcp/patient-assistance-program/"){
          //   if (_isMobile || mobileDevice) {
          //       $("#hcpMenuLinkFour, .hcpMenuLinkFour").addClass("bgSecondary","bgDarkActive").removeClass("bgDarkActive1");
          //   }
          //   else{
          //       $("#hcpMenuLinkFour, .hcpMenuLinkFour").removeClass("bgSecondary","bgDarkActive").addClass("bgDarkActive1");
          //   }
          // }
          // if(url=="/hcp/resources-forms/"){
          //   if (_isMobile || mobileDevice) {
          //       $("#hcpMenuLinkFive, .hcpMenuLinkFive").addClass("bgSecondary","bgDarkActive").removeClass("bgDarkActive1");
          //   }
          //   else{
          //       $("#hcpMenuLinkFive, .hcpMenuLinkFive").removeClass("bgSecondary","bgDarkActive").addClass("bgDarkActive1");
          //   }
          // }
          // HCP End

          // For hcc
          if (url=="/hcc/") {
            // if (_isMobile || mobileDevice) {
            //     $("#hccMenuLinkThree, .hccMenuLinkThree").addClass("bgSecondary","bgDarkActive").removeClass("bgDarkActive1");
            // }
            // else{
                $("#hccMenuLinkThree, .hccMenuLinkThree").removeClass("bgSecondary","bgDarkActive").addClass("bgDarkActive1");
            // }
            $("#hccmainlinkTwo").addClass("mainActive");
            $("#mobileHeaderTwo").addClass("mainActive");
          }
          // if (url=="/hcc/copay-coupon/") {
          //   if (_isMobile || mobileDevice) {
          //       $("#hccMenuLinkTwo, .hccMenuLinkTwo").addClass("bgSecondary","bgDarkActive").removeClass("bgDarkActive1");
          //   }
          //   else{
          //       $("#hccMenuLinkTwo, .hccMenuLinkTwo").removeClass("bgSecondary","bgDarkActive").addClass("bgDarkActive1");
          //   }
          // }
          // if (url=="/hcc/merck-patient-assistance/") {
          //   if (_isMobile || mobileDevice) {
          //       $("#hccMenuLinkThree, .hccMenuLinkThree").addClass("bgSecondary","bgDarkActive").removeClass("bgDarkActive1");
          //   }
          //   else{
          //       $("#hccMenuLinkThree, .hccMenuLinkThree").removeClass("bgSecondary","bgDarkActive").addClass("bgDarkActive1");
          //   }
          // }
          if (url=="/hcc/support-resources/") {
            // if (_isMobile || mobileDevice) {
            //     $("#hccMenuLinkFour, .hccMenuLinkFour").addClass("bgSecondary","bgDarkActive").removeClass("bgDarkActive1");
            // }
            // else{
               $("#hccMenuLinkFour, .hccMenuLinkFour").removeClass("bgSecondary","bgDarkActive").addClass("bgDarkActive1");
            // }
          }
      },

        showModal: function(){
            var a = sessionStorage.getItem("alradyVisited");
            if(a){
                // console.log("if");
            } else {
                // console.log("else");
                $("#popupHCP").modal("show");
                sessionStorage.setItem("alradyVisited", true);

            }

            // Retrieve
        },

        modalHints: function(){
          $(".btnHelpHint").click(function () {
          //   $(this).addClass("position-relative");
          //     $('body').css('overflowY', 'auto');
          //     $('.modal-hint').css({'position' : 'absolute','overlflow-y' : 'unset','z-index' : '1'});
          //     var documentHeight = document.body.scrollHeight;
          //     $('.modal-hint').css('height', documentHeight);
          //     var modalID = $(this).attr("data-target");
          //     var topOffset = 150;
          //     var leftOffset = 150;
          //     var thisLeft = $(this).offset().left + leftOffset;
          //     var thisTop = $(this).offset().top + topOffset;
          //     var thisWidth = $(this).width();
          //     var thisHeight = $(this).height();
          //     var idWidth = $(modalID).width();
          //     var idHeight = $(modalID).height();
          //     $(modalID + " .modal-content").css({ left: thisLeft - Number(idWidth / 2) + Number(thisWidth / 2), top: thisTop - Number(idHeight / 2) + Number(thisHeight) });
          // });

            var documentHeight = document.body.scrollHeight;
            var topOffset ,leftOffset ,thisLeft , thisTop;
            var headTop = ($(".stickyHeader").height());
            var tabheight= $(".enrollTable").height();
            //console.log(tabheight);

              if(mobileDevice){
                //topOffset = 0;
                leftOffset = 60;
                thisTop = ($(this).offset().top)+ headTop;
              }
              else{
                //topOffset = 80;
                leftOffset = 130;
                thisTop = ($(this).offset().top) + headTop;

              }

              //$('.hintPop').css('height', documentHeight);
              var modalID = $(this).attr("data-target");
               thisLeft = $(this).offset().left + leftOffset;
              var thisWidth = $(this).width();
              var thisHeight = $(this).height();
              var idWidth = $(modalID).width();
              var idHeight = $(modalID).height();
              thisTop = ($(this).offset().top) + headTop;

            //  $(modalID + " .modal-content").css({ left: thisLeft - Number(idWidth / 2) + Number(thisWidth), top: thisTop - Number(idHeight /2 ) + Number(thisHeight) });
            $(modalID + " .modal-content").css({left: thisLeft - Number(idWidth / 2) + Number(thisWidth), top:150});
          });
        },

        // Initial Popup Submit Button click
        btnSubmit: function() {
            $(".btnSubmit").click(function(e) {
              e.preventDefault();
              var a = $('#hcp_yes').val();
              if(url=="/" || url == "/index.xhtml"){
              if (a == "true") {
                  $("#popupHCP").hide();
                  window.location.href= "/hcp/";
              } if (a == "false") {
                  $("#popupHCP").hide();
                  window.location.href= "/hcc/";
              }
              }
              else{
                var main_url = window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
                if (a == "true" && main_url == "/hcp") {
                    $("#popupHCP").hide();
                    // alert("true hcp");
                    sessionStorage.setItem("alradyVisited", true);
                    location.reload();

                    // window.location.href= "/hcp/";
                }
                 else if(a == "false" && main_url == "/hcp"){
                  // console.log("false hcp");
                   window.location.href= "/hcc/";
                   sessionStorage.setItem("alradyVisited", false);

                 }
                 if (a == "false" && main_url == "/hcc") {
                   $("#popupHCP").hide();
                    sessionStorage.setItem("alradyVisited", true);
                    location.reload();
                    // window.location.href= "/hcc/";
                }
                else if(a == "true" && main_url == "/hcc"){
                  window.location.href= "/hcp/";
                  sessionStorage.setItem("alradyVisited", false);

                }
              }
            });
        },

        // Custom Radio Button
        customRadio: function(radioName) {
            var radioButton = $('input[name="' + radioName + '"]');
            $(radioButton).each(function() {
                $(this).wrap("<span class='custom-radio'></span>");
                if ($(this).is(':checked')) {
                    $(this).parent().addClass("selected");
                }
            });
            $('input[name="usertype"]').click(function(e) {
                e.preventDefault();
                var currentId = $(this).attr('id');
                if(currentId == "pre_yes"){
                    document.getElementById('hcp_yes').value = "true";
                }else{
                    document.getElementById('hcp_yes').value = "false";
                }
                if ($(this).is(':checked')) {
                    $(this).parent().addClass("selected");
                }
                $('input[name="usertype"]').not(this).each(function() {
                    $(this).parent().removeClass("selected");
                });
            });
        },
// End
    iEPositionFixed: function() {
      (function($) {
        if (
          navigator.userAgent.indexOf("MSIE") !== -1 ||
          navigator.appVersion.indexOf("Trident/") > -1
        ) {
          $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            if (scroll > 5) {
              // $(".stickyHeader").addClass("sticky-top-ie");
            } else {
              // $(".stickyHeader").removeClass("sticky-top-ie");
            }
          });
        }
      })(jQuery);
    },

    getFocusedElement: function() {
      $(document).keyup(function(event) {
        // if (!mobileDevice) {
          /*if tab key is pressed focus the element */
          if (event.keyCode == 9 || event.which == 9) {
            var focusedElement = event.target;
            var roleFocusedElement = $(focusedElement).attr("role");
            $(".border-bottom-tab").removeClass("border-bottom-tab");
            if ($(focusedElement).hasClass("navPrimary")) {
              $(focusedElement).addClass("border-bottom-tab");
            }
          }
        // }
      });
    },


    accessibility: function() {
      $(document).ready(function() {
        // if (!mobileDevice) {
          document.body.addEventListener("mousedown", function() {
            document.body.classList.add("using-mouse");

            $(".border-bottom-tab").removeClass("border-bottom-tab");
          });

          // Re-enable focus styling when Tab is pressed
          document.body.addEventListener("keydown", function(event) {
            if (event.keyCode === 9) {
              document.body.classList.remove("using-mouse");
            }
          });
        // }
      });
    },

    triggerClick: function() {
      $(document).keydown(function(event) {
        // if (!mobileDevice) {
          var focusedElement = event.target;
          var keyCode = event.keyCode || event.which;

          if (keyCode == 13) {
            /* Enter Key pressed */

            $(focusedElement).trigger("click");
          }
        // }
      });
    },

    skipLinkHide: function() {
        $(document).ready(function() {
          //prevent skiplink button visiblility on accepting cookies panel(header and footer)
          $(document).on('click', '#onetrust-consent-sdk #onetrust-pc-sdk button, #onetrust-consent-sdk #onetrust-accept-btn-handler', function (e) {
            $('.skip-main').css("visibility", "hidden");

            setTimeout(function() {
                  $('.skip-main').css("visibility", "visible");
              },1000);
          });
          setTimeout(function() {
            if ($("#onetrust-banner-sdk").is(":visible")) {
              $("#onetrust-accept-btn-handler").click(function() {
                setTimeout(function() {
                  $('.skip-main').css("visibility", "visible");
                }, 1000);
              });
            } else {

              $('.skip-main').css("visibility", "visible");
            }
          }, 1000);

          if(window.location.href.indexOf('/')>-1) {
            $("#hcpmainlinkOne").addClass("mainActive");
            $("#mobileHeaderOne").addClass("mainActive");
          }
          if(window.location.href.indexOf('hcp')>-1) {
            $("#hcpmainlinkOne").addClass("mainActive");
            $("#mobileHeaderOne").addClass("mainActive");
          }
          if(window.location.href.indexOf('hcc')>-1) {
            $("#hccmainlinkTwo").addClass("mainActive");
             $("#mobileHeaderTwo").addClass("mainActive");
             $("#hcpmainlinkOne").removeClass("mainActive");
            $("#mobileHeaderOne").removeClass("mainActive");
          }

        });

      }
  };

  mainApp.init(); // Call init function to initialize app
});

window.addEventListener('resize', function(event) {
    //alert("resize");
    //location.reload();
    mainApp.navactive();
}, true);
