const hamburgerMenu = document.querySelector("#hamburger");
const hamburgerMenuBars = hamburgerMenu?.querySelectorAll(".bar");
const floatingMenu = document.querySelector(".floating-link-container");
const socialLinks = document.querySelectorAll(".social-links");

const formGroupPassword = document.querySelector(".form-group-password");
const formGroupConfirmPassword = document.querySelector(
    ".form-group-confirm-password"
);

if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", (e) => {
        floatingMenu?.classList.toggle("hide");

        hamburgerMenuBars?.forEach((bar) => {
            bar.classList.toggle("is-clicked");
        });
    });
}

const authenticatedUser = JSON.parse(localStorage.getItem("userDetails"));

// check if user is authenticated
if (!authenticatedUser) {
    const navLinks = document.querySelectorAll(".nav-link:not(.logo");
    const mobileNavLinks = floatingMenu.querySelector("ul");
    const desktopNavLins = document.querySelector(
        ".desktop-header .nav-links ul"
    );

    navLinks.forEach((link) => {
        link.style.display = "none";
    });

    desktopNavLins.style.gap = "0";
    mobileNavLinks.style.display = "none";

    socialLinks.forEach((link) => {
        link.style.display = "none";
    });
} else {
    const authLinks = document.querySelectorAll(".auth-links");
    const logoutLinks = document.querySelectorAll(".log-out-link");
    const socialLinks = document.querySelectorAll(".social-link");

    socialLinks.forEach((link) => {
        const type = link?.getAttribute("data-type");
        if (type) {
            link.href = authenticatedUser.socialLinks[type];
        }
    });

    authLinks.forEach((link) => {
        link.style.display = "none";
    });

    logoutLinks.forEach((link) => {
        link.style.display = "block";

        link.addEventListener("click", (e) => {
            Swal.fire({
                title: "Confirm Action",
                text: "Are you sure you want to log out?",
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "Confirm",
                cancelButtonText: "Cancel",
                customClass: {
                    confirmButton: "confirm-button",
                    cancelButton: "cancel-button",
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    setTimeout(() => {
                        localStorage.setItem("userDetails", null);
                        window.location.href = "/pages/login.html";
                    }, 500);
                }
            });
        });
    });
}

if (formGroupPassword) {
    const passwordInput = formGroupPassword.querySelector("#password");

    // get the eye icon
    const eyeIcon = formGroupPassword.querySelector(".eye-icon");

    if (passwordInput && eyeIcon) {
        eyeIcon.addEventListener("click", (e) => {
            if (passwordInput.type === "password") {
                passwordInput.type = "text"; // Show password
                eyeIcon.src = "/assets/hide.png"; // Change to hide-eye icon
                eyeIcon.alt = "Hide Password";
            } else {
                passwordInput.type = "password"; // Hide password
                eyeIcon.src = "/assets/show.png"; // Change to hide-eye icon
                eyeIcon.alt = "Show Password";
            }
        });
    }
}

if (formGroupConfirmPassword) {
    const passwordInput =
        formGroupConfirmPassword.querySelector("#confirm-password");

    // get the eye icon
    const eyeIcon = formGroupConfirmPassword.querySelector(".eye-icon");

    if (passwordInput && eyeIcon) {
        eyeIcon.addEventListener("click", (e) => {
            if (passwordInput.type === "password") {
                passwordInput.type = "text"; // Show password
                eyeIcon.src = "/assets/hide.png"; // Change to hide-eye icon
                eyeIcon.alt = "Hide Password";
            } else {
                passwordInput.type = "password"; // Hide password
                eyeIcon.src = "/assets/show.png"; // Change to hide-eye icon
                eyeIcon.alt = "Show Password";
            }
        });
    }
}

const modalPopup = document.querySelector("#modal-popup");

if (modalPopup) {
    const openModalBtn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementById("closeBtn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const modalActionBtn = document.querySelector(".modal-action-btn");

    openModalBtn?.addEventListener("click", (e) => {
        modalPopup.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    closeBtn?.addEventListener("click", (e) => {
        modalPopup.style.display = "none";

        if (modalActionBtn?.getAttribute("data-action") === "login") {
            window.location.href = "/pages/login.html";
        }
    });

    cancelBtn?.addEventListener("click", (e) => {
        modalPopup.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", (e) => {
        if (e.target === modalPopup) {
            modalPopup.style.display = "none";

            if (modalActionBtn?.getAttribute("data-action") === "login") {
                window.location.href = "/pages/login.html";
            }
        }
    });

    if (modalActionBtn) {
        modalActionBtn.addEventListener("click", (e) => {
            if (modalActionBtn?.getAttribute("data-action") === "login") {
                window.location.href = "/pages/login.html";
            }
        });
    }
}
