/* =========================================================
   MR MENSAH
   PROJECTS DATA & FILTERING
========================================================= */


/* =========================================================
   PROJECT DATA

   To add a new project later:
   1. Add the project image to the img folder
   2. Add another object below
========================================================= */

const projects = [

    {
        number: "02",
        title: "Building Works",
        category: "Construction",
        filter: "building",
        status: "Completed",
        image: "img/Project.jpg",
        alt: "Building construction project",
        size: "large"
    },


    {
        number: "03",
        title: "Electrical Works",
        category: "Electrical",
        filter: "electrical",
        status: "Completed",
        image: "img/Lighting ⚡️.jpg",
        alt: "Electrical installation project",
        size: ""
    },


    {
        number: "04",
        title: "Roofing Works",
        category: "Roofing",
        filter: "roofing",
        status: "Completed",
        image: "img/Parapet Roofing.jpg",
        alt: "Roofing construction project",
        size: ""
    },


    {
        number: "05",
        title: "Interior Finishing",
        category: "Finishing",
        filter: "finishing",
        status: "Completed",
        image: "img/finishing int.jpg",
        alt: "Interior finishing project",
        size: "wide"
    },


    {
        number: "06",
        title: "Metal Works",
        category: "Fabrication",
        filter: "metal",
        status: "Completed",
        image: "img/metal works.jpg",
        alt: "Metal fabrication project",
        size: ""
    }

];



/* =========================================================
   PROJECT DISPLAY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    const projectsGrid =
        document.getElementById("projectsGrid");


    const filterButtons =
        document.querySelectorAll(".project-filter");


    /* -----------------------------------------
       STOP IF PROJECT GRID DOES NOT EXIST
    ----------------------------------------- */

    if (!projectsGrid) {
        return;
    }



    /* =====================================================
       RENDER PROJECTS
    ===================================================== */

    function renderProjects(filter = "all") {


        /* -----------------------------------------
           FILTER PROJECTS
        ----------------------------------------- */

        const filteredProjects =
            filter === "all"
                ? projects
                : projects.filter(function (project) {

                    return project.filter === filter;

                });



        /* -----------------------------------------
           CLEAR CURRENT PROJECTS
        ----------------------------------------- */

        projectsGrid.innerHTML = "";



        /* -----------------------------------------
           NO PROJECTS MESSAGE
        ----------------------------------------- */

        if (filteredProjects.length === 0) {

            projectsGrid.innerHTML = `

                <div class="no-projects">

                    <p>
                        No projects available in this category yet.
                    </p>

                </div>

            `;

            return;

        }



        /* =================================================
           CREATE PROJECT CARDS
        ================================================= */

        filteredProjects.forEach(function (project) {


            /* -----------------------------------------
               PROJECT SIZE
            ----------------------------------------- */

            let sizeClass = "";


            if (project.size === "large") {

                sizeClass = " project-card-large";

            }


            if (project.size === "wide") {

                sizeClass = " project-card-wide";

            }



            /* -----------------------------------------
               PROJECT CARD
            ----------------------------------------- */

            const projectCard =
                document.createElement("article");


            projectCard.className =
                `project-card${sizeClass}`;



            projectCard.innerHTML = `

                <div class="project-image">

                    <img
                        src="${project.image}"
                        alt="${project.alt}"
                        loading="lazy"
                    >


                    <div class="project-overlay">

                        <span>
                            ${project.status}
                        </span>

                        <span>
                            ↗
                        </span>

                    </div>

                </div>


                <div class="project-card-info">


                    <div>

                        <span>
                            ${project.number}
                        </span>


                        <h3>
                            ${project.title}
                        </h3>

                    </div>


                    <span>
                        ${project.category}
                    </span>


                </div>

            `;



            /* -----------------------------------------
               ADD CARD TO GRID
            ----------------------------------------- */

            projectsGrid.appendChild(projectCard);

        });

    }



    /* =====================================================
       FILTER BUTTONS
    ===================================================== */

    filterButtons.forEach(function (button) {


        button.addEventListener(
            "click",
            function () {


                /* -----------------------------------------
                   GET SELECTED FILTER
                ----------------------------------------- */

                const selectedFilter =
                    this.dataset.filter;



                /* -----------------------------------------
                   UPDATE ACTIVE BUTTON
                ----------------------------------------- */

                filterButtons.forEach(function (btn) {

                    btn.classList.remove("active");

                });


                this.classList.add("active");



                /* -----------------------------------------
                   DISPLAY PROJECTS
                ----------------------------------------- */

                renderProjects(selectedFilter);

            }
        );

    });



    /* =====================================================
       INITIAL PROJECT LOAD
    ===================================================== */

    renderProjects("all");

});