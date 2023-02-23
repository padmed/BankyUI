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

//Desktop notification dropdown functionality
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
  } else if (event.target.classList.contains("close")) {
    closeNotification();
  }
});

//Desktop user options dropdown functionality
const options = document.querySelector(".user-options");
const optionToggle = document.querySelectorAll(".optionToggle");

function hideOptions() {
  options.classList.remove("shown");

  optionToggle[0].classList.remove("active");
  optionToggle[1].classList.remove("active");
}

function showOptions() {
  options.classList.add("shown");

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

//"more" functionality in recent transactions
const dropDowns = document.querySelectorAll(".more-dropdown");
const moreDropDownTriggers = document.querySelectorAll(
  '[data-moreOptions="more"]'
);

function hideMoreDropdowns() {
  moreDropDownTriggers.forEach((each) => each.classList.remove("active"));
  dropDowns.forEach((each) => each.classList.remove("more-dropdown-active"));
}

function showMoreDropdown(target) {
  const dropDown = document.querySelector(
    `div[data-dropdown= ${target.getAttribute("data-dropdown")}]`
  );

  target.classList.add("active");
  dropDown.classList.add("more-dropdown-active");
}

window.addEventListener("click", (event) => {
  if (Array.from(moreDropDownTriggers).includes(event.target)) {
    let trigger = event.target;
    if (event.target.tagName === "IMG") {
      trigger = event.target.parentNode;
    }

    if (trigger.classList.contains("active")) {
      hideMoreDropdowns();
    } else {
      hideMoreDropdowns();
      showMoreDropdown(trigger);
    }
  } else {
    hideMoreDropdowns();
  }
});

// light/dark modes

const themeTrigger = document.querySelector(".theme");
const page = document.querySelector(".desktop");
const darkThemeIcon = document.querySelector("#dark-mode");
const lightThemeIcon = document.querySelector("#light-mode");

function makePageLight() {
  page.classList.remove("dark");
  page.classList.add("light");

  lightThemeIcon.style.transform = "scale(0)";

  setTimeout(() => {
    // lightThemeIcon.style.display = "none";
    // darkThemeIcon.style.display = "block";
    darkThemeIcon.style.transform = "scale(1)";
  }, 200);

  setTimeout(() => {
    // darkThemeIcon.style.display = "block";
    darkThemeIcon.style.transform = "scale(1)";
  }, 300);
}

function makePageDark() {
  page.classList.remove("light");
  page.classList.add("dark");

  darkThemeIcon.style.transform = "scale(0)";

  setTimeout(() => {
    // darkThemeIcon.style.display = "none";
  }, 200);

  setTimeout(() => {
    // lightThemeIcon.style.display = "block";
    lightThemeIcon.style.transform = "scale(1)";
  }, 300);
}

themeTrigger.addEventListener("click", (event) => {
  const icon = event.target;

  if (icon.id === "dark-mode") {
    makePageDark();
  } else if (icon.id === "light-mode") {
    makePageLight();
  }
});
