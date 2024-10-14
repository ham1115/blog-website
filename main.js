const hamburgerMenu = document.querySelector("#hamburger");
const floatingMenu = document.querySelector(".floating-link-container");
const hamburgerMenuBars = hamburgerMenu?.querySelectorAll(".bar");

if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", (e) => {
        floatingMenu?.classList.toggle("hide");

        hamburgerMenuBars?.forEach((bar) => {
            bar.classList.toggle("is-clicked");
        });
    });
}

const formGroupPassword = document.querySelector(".form-group-password");
const formGroupConfirmPassword = document.querySelector(
    ".form-group-confirm-password"
);

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
