/* =========================================================
   MR MENSAH
   PROJECTS DATA, FILTERING & PROJECT GALLERY
========================================================= */


/* =========================================================
   PROJECT DATA

   IMPORTANT:
   Add all photos belonging to each project inside "images".

   Example:

   images: [
     
   ]

========================================================= */

const projects = [

    /* =====================================================
       02 — BUILDING WORKS
    ===================================================== */

    {
        number: "02",

        title: "Building Works",

        type: "Residential",
        typeFilter: "residential",

        service: "Construction",
        serviceFilter: "construction",

        status: "Completed",

        image: "img/Project.jpg",

        images: [
            "img/Project.jpg",
            
        ],

        alt: "Residential building construction project",

        size: "large"
    },


    /* =====================================================
       03 — ELECTRICAL WORKS
    ===================================================== */

    {
        number: "03",

        title: "Electrical Works",

        type: "Residential",
        typeFilter: "residential",

        service: "Electrical",
        serviceFilter: "electrical",

        status: "Completed",

        image: "img/Lighting ⚡️.jpg",

        images: [
            "img/Lighting ⚡️.jpg",
           
        ],

        alt: "Electrical installation project",

        size: ""
    },


    /* =====================================================
       04 — ROOFING WORKS
    ===================================================== */

    {
        number: "04",

        title: "Roofing Works",

        type: "Residential",
        typeFilter: "residential",

        service: "Roofing",
        serviceFilter: "roofing",

        status: "Completed",

        image: "img/Parapet Roofing.jpg",

        images: [
            "img/Parapet Roofing.jpg",
            
        ],

        alt: "Residential roofing construction project",

        size: ""
    },


    /* =====================================================
       05 — INTERIOR FINISHING
    ===================================================== */

    {
        number: "05",

        title: "Interior Finishing",

        type: "Residential",
        typeFilter: "residential",

        service: "Finishing",
        serviceFilter: "finishing",

        status: "Completed",

        image: "img/finishing int.jpg",

        images: [
            "img/finishing int.jpg",
           
        ],

        alt: "Interior finishing project",

        size: "wide"
    },


    /* =====================================================
       06 — METAL WORKS
    ===================================================== */

    {
        number: "06",

        title: "Metal Works",

        type: "Residential",
        typeFilter: "residential",

        service: "Metal Works",
        serviceFilter: "metal",

        status: "Completed",

        image: "img/metal works.jpg",

        images: [
            "img/metal works.jpg",
           
        ],

        alt: "Metal fabrication project",

        size: ""
    }

];



/* =========================================================
   PROJECT DISPLAY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       GET PROJECT GRID
    ===================================================== */

    const projectsGrid =
        document.getElementById("projectsGrid");


    if (!projectsGrid) {
        return;
    }



    /* =====================================================
       FILTER BUTTONS
    ===================================================== */

    const typeFilterButtons =
        document.querySelectorAll(
            ".project-type-filter"
        );


    const serviceFilterButtons =
        document.querySelectorAll(
            ".project-service-filter"
        );



    /* =====================================================
       FILTER STATE
    ===================================================== */

    let activeType = "all";

    let activeService = "all";



    /* =====================================================
       GALLERY STATE
    ===================================================== */

    let currentProject = null;

    let currentImageIndex = 0;



    /* =====================================================
       CREATE GALLERY
    ===================================================== */

    function createGallery() {


        if (
            document.getElementById(
                "projectGallery"
            )
        ) {
            return;
        }


        const gallery =
            document.createElement("div");


        gallery.id = "projectGallery";

        gallery.className =
            "project-gallery-modal";


        gallery.innerHTML = `

            <div
                class="project-gallery-backdrop"
            ></div>


            <div
                class="project-gallery-container"
                role="dialog"
                aria-modal="true"
                aria-label="Project image gallery"
            >


                <!-- CLOSE -->

                <button
                    type="button"
                    class="project-gallery-close"
                    id="projectGalleryClose"
                    aria-label="Close project gallery"
                >
                    ×
                </button>



                <!-- MAIN IMAGE -->

                <div
                    class="project-gallery-image-wrap"
                >


                    <button
                        type="button"
                        class="project-gallery-arrow project-gallery-prev"
                        id="projectGalleryPrev"
                        aria-label="Previous image"
                    >
                        ‹
                    </button>



                    <img
                        id="projectGalleryMainImage"
                        src=""
                        alt=""
                    >



                    <button
                        type="button"
                        class="project-gallery-arrow project-gallery-next"
                        id="projectGalleryNext"
                        aria-label="Next image"
                    >
                        ›
                    </button>


                </div>



                <!-- PROJECT INFORMATION -->

                <div class="project-gallery-info">


                    <div>

                        <span
                            id="projectGalleryNumber"
                            class="project-gallery-number"
                        ></span>


                        <h3
                            id="projectGalleryTitle"
                        ></h3>

                    </div>



                    <div
                        class="project-gallery-meta"
                    >

                        <span
                            id="projectGalleryType"
                        ></span>


                        <span>
                            ·
                        </span>


                        <span
                            id="projectGalleryService"
                        ></span>

                    </div>


                </div>



                <!-- THUMBNAILS -->

                <div
                    class="project-gallery-thumbnails"
                    id="projectGalleryThumbnails"
                ></div>


            </div>

        `;


        document.body.appendChild(gallery);



        /* =================================================
           CLOSE BUTTON
        ================================================= */

        document
            .getElementById(
                "projectGalleryClose"
            )
            .addEventListener(
                "click",
                closeGallery
            );



        /* =================================================
           BACKDROP
        ================================================= */

        gallery
            .querySelector(
                ".project-gallery-backdrop"
            )
            .addEventListener(
                "click",
                closeGallery
            );



        /* =================================================
           PREVIOUS
        ================================================= */

        document
            .getElementById(
                "projectGalleryPrev"
            )
            .addEventListener(
                "click",
                function () {

                    changeGalleryImage(-1);

                }
            );



        /* =================================================
           NEXT
        ================================================= */

        document
            .getElementById(
                "projectGalleryNext"
            )
            .addEventListener(
                "click",
                function () {

                    changeGalleryImage(1);

                }
            );

    }



    /* =====================================================
       OPEN GALLERY
    ===================================================== */

    function openGallery(project) {


        createGallery();


        currentProject = project;

        currentImageIndex = 0;


        const gallery =
            document.getElementById(
                "projectGallery"
            );


        gallery.classList.add("active");


        document.body.classList.add(
            "gallery-open"
        );


        updateGallery();

    }



    /* =====================================================
       UPDATE GALLERY
    ===================================================== */

    function updateGallery() {


        if (!currentProject) {
            return;
        }


        const images =
            currentProject.images &&
            currentProject.images.length
                ? currentProject.images
                : [currentProject.image];


        const mainImage =
            document.getElementById(
                "projectGalleryMainImage"
            );


        const number =
            document.getElementById(
                "projectGalleryNumber"
            );


        const title =
            document.getElementById(
                "projectGalleryTitle"
            );


        const type =
            document.getElementById(
                "projectGalleryType"
            );


        const service =
            document.getElementById(
                "projectGalleryService"
            );


        const thumbnails =
            document.getElementById(
                "projectGalleryThumbnails"
            );


        /* -----------------------------------------
           MAIN IMAGE
        ----------------------------------------- */

        mainImage.src =
            images[currentImageIndex];

        mainImage.alt =
            `${currentProject.alt} - View ${currentImageIndex + 1}`;



        /* -----------------------------------------
           PROJECT INFORMATION
        ----------------------------------------- */

        number.textContent =
            currentProject.number;

        title.textContent =
            currentProject.title;

        type.textContent =
            currentProject.type;

        service.textContent =
            currentProject.service;



        /* -----------------------------------------
           THUMBNAILS
        ----------------------------------------- */

        thumbnails.innerHTML = "";


        images.forEach(
            function (image, index) {


                const thumbnail =
                    document.createElement(
                        "button"
                    );


                thumbnail.type = "button";


                thumbnail.className =
                    "project-gallery-thumbnail";


                if (
                    index === currentImageIndex
                ) {

                    thumbnail.classList.add(
                        "active"
                    );

                }


                thumbnail.innerHTML = `

                    <img
                        src="${image}"
                        alt="${currentProject.title} view ${index + 1}"
                        loading="lazy"
                    >

                `;


                thumbnail.addEventListener(
                    "click",
                    function () {

                        currentImageIndex =
                            index;

                        updateGallery();

                    }
                );


                thumbnails.appendChild(
                    thumbnail
                );

            }
        );



        /* -----------------------------------------
           SHOW / HIDE NAVIGATION
        ----------------------------------------- */

        const previousButton =
            document.getElementById(
                "projectGalleryPrev"
            );


        const nextButton =
            document.getElementById(
                "projectGalleryNext"
            );


        if (images.length <= 1) {

            previousButton.style.display =
                "none";

            nextButton.style.display =
                "none";

            thumbnails.style.display =
                "none";

        } else {

            previousButton.style.display =
                "flex";

            nextButton.style.display =
                "flex";

            thumbnails.style.display =
                "flex";

        }

    }



    /* =====================================================
       CHANGE IMAGE
    ===================================================== */

    function changeGalleryImage(direction) {


        if (!currentProject) {
            return;
        }


        const images =
            currentProject.images &&
            currentProject.images.length
                ? currentProject.images
                : [currentProject.image];


        currentImageIndex += direction;


        if (
            currentImageIndex < 0
        ) {

            currentImageIndex =
                images.length - 1;

        }


        if (
            currentImageIndex >=
            images.length
        ) {

            currentImageIndex = 0;

        }


        updateGallery();

    }



    /* =====================================================
       CLOSE GALLERY
    ===================================================== */

    function closeGallery() {


        const gallery =
            document.getElementById(
                "projectGallery"
            );


        if (!gallery) {
            return;
        }


        gallery.classList.remove(
            "active"
        );


        document.body.classList.remove(
            "gallery-open"
        );


        currentProject = null;

        currentImageIndex = 0;

    }



    /* =====================================================
       KEYBOARD CONTROLS
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {


            const gallery =
                document.getElementById(
                    "projectGallery"
                );


            if (
                !gallery ||
                !gallery.classList.contains(
                    "active"
                )
            ) {

                return;

            }


            if (
                event.key === "Escape"
            ) {

                closeGallery();

            }


            if (
                event.key === "ArrowLeft"
            ) {

                changeGalleryImage(-1);

            }


            if (
                event.key === "ArrowRight"
            ) {

                changeGalleryImage(1);

            }

        }
    );



    /* =====================================================
       RENDER PROJECTS
    ===================================================== */

    function renderProjects() {


        const filteredProjects =
            projects.filter(
                function (project) {


                    const matchesType =
                        activeType === "all" ||
                        project.typeFilter ===
                            activeType;


                    const matchesService =
                        activeService === "all" ||
                        project.serviceFilter ===
                            activeService;


                    return (
                        matchesType &&
                        matchesService
                    );

                }
            );



        /* -----------------------------------------
           CLEAR GRID
        ----------------------------------------- */

        projectsGrid.innerHTML = "";



        /* -----------------------------------------
           NO PROJECTS
        ----------------------------------------- */

        if (
            filteredProjects.length === 0
        ) {

            projectsGrid.innerHTML = `

                <div class="no-projects">

                    <p>
                        No projects available
                        for this selection yet.
                    </p>

                </div>

            `;

            return;

        }



        /* =================================================
           CREATE PROJECT CARDS
        ================================================= */

        filteredProjects.forEach(
            function (project) {


                let sizeClass = "";



                if (
                    project.size === "large"
                ) {

                    sizeClass =
                        " project-card-large";

                }



                if (
                    project.size === "wide"
                ) {

                    sizeClass =
                        " project-card-wide";

                }



                /* -----------------------------------------
                   CARD
                ----------------------------------------- */

                const projectCard =
                    document.createElement(
                        "article"
                    );


                projectCard.className =
                    `project-card${sizeClass}`;


                projectCard.setAttribute(
                    "tabindex",
                    "0"
                );


                projectCard.setAttribute(
                    "role",
                    "button"
                );


                projectCard.setAttribute(
                    "aria-label",
                    `View ${project.title} project gallery`
                );



                /* -----------------------------------------
                   CARD CONTENT
                ----------------------------------------- */

                projectCard.innerHTML = `

                    <div class="project-image">

                        <img
                            src="${project.image}"
                            alt="${project.alt}"
                            loading="lazy"
                        >


                        <div
                            class="project-overlay"
                        >

                            <span>
                                ${project.status}
                            </span>


                            <span>
                                View Project ↗
                            </span>

                        </div>

                    </div>


                    <div
                        class="project-card-info"
                    >


                        <div>

                            <span>
                                ${project.number}
                            </span>


                            <h3>
                                ${project.title}
                            </h3>

                        </div>


                        <span>
                            ${project.type}
                            ·
                            ${project.service}
                        </span>


                    </div>

                `;



                /* =================================================
                   CLICK
                ================================================= */

                projectCard.addEventListener(
                    "click",
                    function () {

                        openGallery(project);

                    }
                );



                /* =================================================
                   KEYBOARD
                ================================================= */

                projectCard.addEventListener(
                    "keydown",
                    function (event) {


                        if (
                            event.key === "Enter" ||
                            event.key === " "
                        ) {

                            event.preventDefault();

                            openGallery(project);

                        }

                    }
                );



                projectsGrid.appendChild(
                    projectCard
                );

            }
        );

    }



    /* =====================================================
       PROJECT TYPE FILTER
    ===================================================== */

    typeFilterButtons.forEach(
        function (button) {


            button.addEventListener(
                "click",
                function () {


                    activeType =
                        this.dataset.typeFilter;


                    typeFilterButtons.forEach(
                        function (btn) {

                            btn.classList.remove(
                                "active"
                            );

                        }
                    );


                    this.classList.add(
                        "active"
                    );


                    renderProjects();

                }
            );

        }
    );



    /* =====================================================
       SERVICE FILTER
    ===================================================== */

    serviceFilterButtons.forEach(
        function (button) {


            button.addEventListener(
                "click",
                function () {


                    activeService =
                        this.dataset.serviceFilter;


                    serviceFilterButtons.forEach(
                        function (btn) {

                            btn.classList.remove(
                                "active"
                            );

                        }
                    );


                    this.classList.add(
                        "active"
                    );


                    renderProjects();

                }
            );

        }
    );



    /* =====================================================
       INITIAL LOAD
    ===================================================== */

    createGallery();

    renderProjects();

});