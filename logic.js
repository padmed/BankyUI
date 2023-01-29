// Slider functionality for mobile design
var swiper = new Swiper(".swiper", {
  grabCursor: true,
  effect: "creative",
  pagination: {
    el: ".swiper-pagination",
  },
  creativeEffect: {
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

// Hover effect on contact buttons for mobile design
window.addEventListener("touchstart", (event) => {
  if (
    event.target.classList.contains("photo-placeholder") ||
    event.target.classList.contains("add-contact")
  ) {
    event.target.classList.add("active");
  }
});

window.addEventListener("touchend", (event) => {
  if (
    event.target.classList.contains("photo-placeholder") ||
    event.target.classList.contains("add-contact")
  ) {
    event.target.classList.remove("active");
  }
});

//Desktop notification functionality
const notificationContainer = document.querySelector("#notification-container");
const notificationSetting = document.querySelector(".notifications");
const envelopeIcon = document.querySelector("#notification");
const envelopeIconOpened = document.querySelector("#notification-opened");

function openNotification() {
  envelopeIcon.classList.add("hidden");
  envelopeIcon.classList.remove("display");

  envelopeIconOpened.classList.add("display");
  envelopeIconOpened.classList.remove("hidden");

  notificationContainer.classList.add("show");
  notificationContainer.classList.remove("hide");
}

function closeNotification() {
  envelopeIconOpened.classList.add("hidden");
  envelopeIconOpened.classList.remove("display");

  envelopeIcon.classList.add("display");
  envelopeIcon.classList.remove("hidden");

  notificationContainer.classList.add("hide");
  notificationContainer.classList.remove("show");
}

window.addEventListener("click", (event) => {
  if (event.target === envelopeIcon) {
    openNotification();
  } else if (event.target === envelopeIconOpened) {
    closeNotification();
  } else if (!notificationContainer.contains(event.target)) {
    closeNotification();
    //closes notification dropdown if user clicks anywhere on screen except notifications itself
  } else if (event.target.id === "noti-close") {
    closeNotification();
  }
});

//Desktop user options functionality
const options = document.querySelector(".user-options");
const optionToggle = document.querySelectorAll(".optionToggle");

function hideOptions() {
  options.style.visibility = "hidden";
  options.style.opacity = "0";
  options.style.top = "100px";

  optionToggle[0].classList.remove("active");
  optionToggle[1].classList.remove("active");
}

function showOptions() {
  options.style.visibility = "visible";
  options.style.opacity = "1";
  options.style.top = "70px";

  optionToggle[0].classList.add("active");
  optionToggle[1].classList.add("active");
}

window.addEventListener("click", (event) => {
  if (event.target === optionToggle[0] || event.target === optionToggle[1]) {
    if (event.target.classList.contains("active")) {
      hideOptions();
    } else {
      showOptions();
    }
  } else {
    hideOptions();
  }
});
