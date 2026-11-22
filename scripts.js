

/* =====================================
   YULI'S BAKERY SHOP
   WEBSITE JAVASCRIPT
===================================== */


/* =====================================
   ACTIVITY LINKS
===================================== */

const activities = [
    { title: "Activity 1", link: "./activities/ACT1_INOT_IANNY.html" },
    { title: "Activity 2", link: "./activities/ACT2_INOT_IANNY.html" },
    { title: "Activity 3", link: "./activities/ACT3_INOT_IANNY.html" },
    { title: "Activity 4", link: "./activities/ACT4_INOT_IANNY.html" },
    { title: "Activity 5", link: "./activities/ACT5_INOT_IANNY.html" }
];

const exercises = [
    { title: "Exercise 1", link: "./exercises/EXE1_INOT_IANNY.html" },
    { title: "Exercise 2", link: "./exercises/EXE2_INOT_IANNY.html" },
    { title: "Exercise 3", link: "./exercises/EXE3_INOT_IANNY.html" },
    { title: "Exercise 4", link: "./exercises/EXE4_INOT_IANNY.html" },
    { title: "Exercise 5", link: "./exercises/EXE5_INOT_IANNY.html" },
    { title: "Exercise 6", link: "./exercises/EXE6_INOT_IANNY.html" },
    { title: "Exercise 7", link: "./exercises/EXE7_INOT_IANNY.html" },
    { title: "Exercise 8", link: "./exercises/EXE8_INOT_IANNY.html" },
    { title: "Exercise 9", link: "./exercises/EXE9_INOT_IANNY.html" },
    { title: "Exercise 10", link: "./exercises/EXE10_INOT_IANNY.html" },
    { title: "Exercise 11", link: "./exercises/EXE11_INOT_IANNY.html" },
    { title: "Exercise 12", link: "./exercises/EXE12_INOT_IANNY.html" }
];


/* =====================================
   FILE UPLOAD FUNCTION
===================================== */

function uploadFiles(inputId, listId) {
    const fileInput = document.getElementById(inputId);
    const fileList = document.getElementById(listId);

    if (!fileInput || !fileList) return;

    fileInput.addEventListener("change", function() {
        fileList.innerHTML = "";

        Array.from(this.files).forEach(function(file) {
            const item = document.createElement("p");
            item.textContent = "📄 " + file.name;
            fileList.appendChild(item);
        });
    });
}


/* =====================================
   PREVIEW FUNCTION
===================================== */

function openPreview(fileLink) {
    const modal = document.getElementById("previewModal");
    const frame = document.getElementById("previewFrame");

    if (!modal || !frame) return;

    frame.src = fileLink;
    modal.style.display = "flex";
}


/* =====================================
   CLOSE PREVIEW
===================================== */

function closePreview() {
    const modal = document.getElementById("previewModal");
    const frame = document.getElementById("previewFrame");

    if (!modal || !frame) return;

    modal.style.display = "none";
    frame.src = "";
}


/* =====================================
   MAIN WEBSITE FUNCTIONS
===================================== */

document.addEventListener("DOMContentLoaded", function() {

    // NAVIGATION ACTIVE EFFECT
    const navLinks = document.querySelectorAll(".side-nav a");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            navLinks.forEach(function(item) {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });
    });


    // FEEDBACK FORM
    const feedbackForm = document.getElementById("feedbackForm");

    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (!name.trim() || !email.trim() || !message.trim()) {
                alert("Please complete all fields.");
                return;
            }

            alert(
                "Thank you, " + name +
                "! ♡\n\n" +
                "Your feedback has been received.\n" +
                "We appreciate your visit to Yuli's Bakery Shop!"
            );

            feedbackForm.reset();
        });
    }


    // SMOOTH SECTION REVEAL
    const sections = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, {
            threshold: 0.10
        });

        sections.forEach(function(section) {
            observer.observe(section);
        });

    } else {
        sections.forEach(function(section) {
            section.classList.add("show");
        });
    }


    // HOME / BACK TO TOP
    const homeLink = document.querySelector('.side-nav a[href="#home"]');

    if (homeLink) {
        homeLink.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    // DISPLAY PORTFOLIO
    displayActivities();
    displayExercises();


    // FILE UPLOAD
    uploadFiles("activityFile", "activityList");
    uploadFiles("exerciseFile", "exerciseList");


    console.log("Yuli's Bakery Shop is ready! ♡");

});
