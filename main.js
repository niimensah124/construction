/* =========================================================
   MR MENSAH
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileNav =
        document.getElementById("mobileNav");


    if (menuToggle && mobileNav) {


        /* -----------------------------------------
           OPEN / CLOSE MENU
        ----------------------------------------- */

        menuToggle.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen =
                mobileNav.classList.toggle("open");

            menuToggle.classList.toggle(
                "active",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

        });


        /* -----------------------------------------
           CLOSE MENU WHEN LINK IS CLICKED
        ----------------------------------------- */

        const mobileLinks =
            mobileNav.querySelectorAll("a");


        mobileLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    closeMobileMenu();

                }
            );

        });


        /* -----------------------------------------
           CLOSE MENU WHEN CLICKING OUTSIDE
        ----------------------------------------- */

        document.addEventListener(
            "click",
            function (event) {

                if (
                    !mobileNav.classList.contains("open")
                ) {
                    return;
                }


                const clickedInsideMenu =
                    mobileNav.contains(event.target);


                const clickedMenuButton =
                    menuToggle.contains(event.target);


                if (
                    !clickedInsideMenu &&
                    !clickedMenuButton
                ) {

                    closeMobileMenu();

                }

            }
        );


        /* -----------------------------------------
           CLOSE MENU FUNCTION
        ----------------------------------------- */

        function closeMobileMenu() {

            mobileNav.classList.remove("open");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        }

    }



    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const header =
        document.getElementById("siteHeader");


    function handleHeaderScroll() {

        if (!header) return;


        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    handleHeaderScroll();


    window.addEventListener(
        "scroll",
        handleHeaderScroll
    );



    /* =====================================================
       SERVICE REQUEST FORM
    ===================================================== */

    const serviceForm =
        document.getElementById(
            "serviceRequestForm"
        );


    if (serviceForm) {

        serviceForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                /* -----------------------------------------
                   GET FORM VALUES
                ----------------------------------------- */

                const clientName =
                    document
                        .getElementById("clientName")
                        .value
                        .trim();


                const clientPhone =
                    document
                        .getElementById("clientPhone")
                        .value
                        .trim();


                const clientEmail =
                    document
                        .getElementById("clientEmail")
                        .value
                        .trim();


                const serviceType =
                    document
                        .getElementById("serviceType")
                        .value;


                const workersNeeded =
                    document
                        .getElementById("workersNeeded")
                        .value;


                const projectDescription =
                    document
                        .getElementById(
                            "projectDescription"
                        )
                        .value
                        .trim();


                const projectLocation =
                    document
                        .getElementById(
                            "projectLocation"
                        )
                        .value
                        .trim();


                const projectStage =
                    document
                        .getElementById(
                            "projectStage"
                        )
                        .value;


                const contactMethod =
                    document.querySelector(
                        'input[name="contactMethod"]:checked'
                    )?.value || "WhatsApp";



                /* -----------------------------------------
                   BASIC VALIDATION
                ----------------------------------------- */

                if (!clientName) {

                    alert(
                        "Please enter your full name."
                    );

                    return;

                }


                if (!clientPhone) {

                    alert(
                        "Please enter your phone number."
                    );

                    return;

                }


                if (!serviceType) {

                    alert(
                        "Please select the service you need."
                    );

                    return;

                }


                if (!projectDescription) {

                    alert(
                        "Please describe the work you need."
                    );

                    return;

                }


                if (!projectLocation) {

                    alert(
                        "Please enter the project location."
                    );

                    return;

                }



                /* =================================================
                   MR MENSAH WHATSAPP NUMBER
                   
                   Ghana format:
                   233XXXXXXXXX

                   No +
                   No spaces
                ================================================= */

                const whatsappNumber =
                    "233265145875";



                /* =================================================
                   BUILD WHATSAPP MESSAGE
                ================================================= */

                const message =

`Hello Mr Mensah,

I would like to request a construction service.

━━━━━━━━━━━━━━━━━━

CLIENT DETAILS

Name:
${clientName}

Phone:
${clientPhone}

Email:
${clientEmail || "Not provided"}

━━━━━━━━━━━━━━━━━━

SERVICE REQUIRED

Service:
${serviceType}

Workers Needed:
${workersNeeded || "Not specified"}

━━━━━━━━━━━━━━━━━━

PROJECT DETAILS

Location:
${projectLocation}

Project Stage:
${projectStage || "Not specified"}

Description:
${projectDescription}

━━━━━━━━━━━━━━━━━━

Preferred Contact:
${contactMethod}

I would like to discuss this project further.

Thank you.`;



                /* -----------------------------------------
                   ENCODE MESSAGE
                ----------------------------------------- */

                const encodedMessage =
                    encodeURIComponent(message);


                const whatsappURL =
                    `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;



                /* -----------------------------------------
                   OPEN WHATSAPP
                ----------------------------------------- */

                window.open(
                    whatsappURL,
                    "_blank"
                );

            }
        );

    }



    /* =====================================================
       DIRECT WHATSAPP LINK
    ===================================================== */

    const whatsappLink =
        document.getElementById(
            "whatsappLink"
        );


    if (whatsappLink) {

        const whatsappNumber =
            "233265145875";


        const message =
            "Hello Mr Mensah, I would like to make an enquiry about your construction services.";


        whatsappLink.href =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    }



    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    const yearElements =
        document.querySelectorAll(
            ".current-year"
        );


    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });



    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetID =
                    this.getAttribute("href");


                if (
                    targetID &&
                    targetID !== "#"
                ) {

                    const target =
                        document.querySelector(
                            targetID
                        );


                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }

            }
        );

    });


});