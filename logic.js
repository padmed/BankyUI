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
  console.log(event.target.classList);
  if (
    event.target.classList.contains("photo-placeholder") ||
    event.target.classList.contains("add-contact")
  ) {
    event.target.classList.add("active");
  }
});

window.addEventListener("touchend", (event) => {
  console.log(event.target.classList);
  if (
    event.target.classList.contains("photo-placeholder") ||
    event.target.classList.contains("add-contact")
  ) {
    event.target.classList.remove("active");
  }
});

//desktop functionalities
const notificationContainer = document.querySelector("#notification-container");
const notificationSetting = document.querySelector(".notifications");
const envelopeIcon = document.querySelector("#notification");
const envelopeIconOpened = document.querySelector("#notification-opened");

function openEnvelope() {
  envelopeIcon.classList.add("hidden");
  envelopeIcon.classList.remove("display");

  envelopeIconOpened.classList.add("display");
  envelopeIconOpened.classList.remove("hidden");
}

function closeEnvelope() {
  envelopeIconOpened.classList.add("hidden");
  envelopeIconOpened.classList.remove("display");

  envelopeIcon.classList.add("display");
  envelopeIcon.classList.remove("hidden");
}

notificationSetting.addEventListener("click", (event) => {
  notificationContainer.style.display = "grid";

  if (event.target === envelopeIcon) {
    openEnvelope();
  } else if (event.target === envelopeIconOpened) {
    closeEnvelope();
  }
});
