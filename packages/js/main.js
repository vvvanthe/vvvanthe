/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});


const serviceModalButtons = document.querySelectorAll(".services__button");
const serviceModalCloseButtons = document.querySelectorAll(".services__modal-close");

// Open modal based on data-service-modal attribute
serviceModalButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-service-modal");
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("active-modal");
    } else {
      console.warn(`Service modal with ID "${modalId}" not found.`);
    }
  });
});

// Close modal by closest parent
serviceModalCloseButtons.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    const modal = closeBtn.closest(".services__modal");
    if (modal) {
      modal.classList.remove("active-modal");
    }
  });
});

// Optional: click outside modal-content to close
document.addEventListener("click", (e) => {
  const openModals = document.querySelectorAll(".services__modal.active-modal");
  openModals.forEach((modal) => {
    if (e.target === modal) {
      modal.classList.remove("active-modal");
    }
  });
});




/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  /* mousewheel: true,
  keyboard: true, */
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },

  /* mousewheel: true,
  keyboard: true, */
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    const link = document.querySelector(".nav__menu a[href*=" + sectionId + "]");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      if (link) link.classList.add("active-link");
    } else {
      if (link) link.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("JS loaded and DOM ready");

  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !subject || !message) {
        alert("Please fill out all fields before sending.");
        return;
      }

      const encodedEmail = "dmFudGhlLmxlOTZAZ21haWwuY29t"; // vanthe.le96@gmail.com
      const decodedEmail = atob(encodedEmail);
      
      const mailtoLink = `mailto:${decodedEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      )}`;

      console.log("Opening mailto:", mailtoLink);
      window.location.href = mailtoLink;
    });
  } else {
    console.warn("contact-form not found in DOM.");
  }
});


// document.addEventListener('DOMContentLoaded', function () {
//   const modal = document.getElementById('modal');
 

//   document.addEventListener('click', function (e) {
//     if (e.target.classList.contains('open-modal')) {
//       modal.classList.remove('hidden');
//     }

//     if (e.target.classList.contains('close-modal')) {
//       modal.classList.add('hidden');
//     }

//     if (e.target === modal) {
//       modal.classList.add('hidden');
//     }
//   });
// });

/*==================== PROJECT MODAL ====================*/


// const pjModalViews = document.querySelectorAll(".modal"),
// pjModalBtns = document.querySelectorAll(".pj__button"),
// pjModalCloses = document.querySelectorAll(".close-modal");

// let pjModal = function (pjModalClick) {
//   pjModalViews[pjModalClick].classList.remove("hidden");
// };

// pjModalBtns.forEach((pjModalBtn, i) => {
//   pjModalBtn.addEventListener("click", () => {
//     pjModal(i);
//   });
// });

// pjModalCloses.forEach((pjModalClose) => {
//   pjModalClose.addEventListener("click", () => {
//     pjModalViews.forEach((pjModalView) => {
//       pjModalView.classList.add("hidden");
//     });
//   });
// });


const pjModalBtns = document.querySelectorAll(".pj__button");
const pjModalCloses = document.querySelectorAll(".close-modal");

pjModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove("hidden");
    } else {
      console.warn(`Modal with ID "${modalId}" not found.`);
    }
  });
});

pjModalCloses.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    closeBtn.closest(".modal").classList.add("hidden");
  });
});


// IMAGE SLIDES & CIRCLES ARRAYS, & COUNTER
document.addEventListener('DOMContentLoaded', function() {
  // IMAGE SLIDES & CIRCLES ARRAYS, & COUNTER
  var imageSlides = document.getElementsByClassName('imageSlides');
  var circles = document.getElementsByClassName('circle');
  var leftArrow = document.getElementById('leftArrow');
  var rightArrow = document.getElementById('rightArrow');
  var counter = 0;

  // Captions array
  const captions = [
    "SIGGRAPH ASIA 2023, Sydney, Australia",
    "Automotive World 2024, Tokyo, Japan",
    "Speech in IPUT 2024, Tokyo, Japan",
    "ICIP 2024, Abu Dhabi, UAE",
    "Dissertation Defense 2025, Seoul, South Korea"
  ];

  // Caption element
  const caption = document.getElementById('slideCaptions');

  // HIDE ALL IMAGES FUNCTION
  function hideImages() {
    for (var i = 0; i < imageSlides.length; i++) {
      imageSlides[i].classList.remove('visible');
    }
  }

  // REMOVE ALL DOTS FUNCTION
  function removeDots() {
    for (var i = 0; i < circles.length; i++) {
      circles[i].classList.remove('dot');
    }
  }

  // SINGLE IMAGE LOOP/CIRCLES FUNCTION
  function imageLoop() {
    hideImages();
    removeDots();

    var currentImage = imageSlides[counter];
    var currentDot = circles[counter];
    currentImage.classList.add('visible');
    currentDot.classList.add('dot');

    // update caption
    caption.innerText = captions[counter];
  }

  // LEFT ARROW FUNCTION
  function leftArrowClick() {
    counter--;
    if (counter < 0) counter = imageSlides.length - 1;
    imageLoop();
  }

  // RIGHT ARROW FUNCTION
  function rightArrowClick() {
    counter++;
    if (counter >= imageSlides.length) counter = 0;
    imageLoop();
  }

  // INITIAL DISPLAY
  imageLoop();

  // EVENT LISTENERS
  leftArrow.addEventListener('click', leftArrowClick);
  rightArrow.addEventListener('click', rightArrowClick);

  // ================= TOUCH SWIPE =================
  let startX = 0;
  let startY = 0;
  let isDragging = false;
  const threshold = 50; // minimum px to trigger swipe

  const slideshow = document.querySelector('.slideshowContainer');

  slideshow.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isDragging = true;
  });

  slideshow.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const diffX = touch.clientX - startX;
    const diffY = touch.clientY - startY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (e.cancelable) {
        e.preventDefault();
      }
    }
  }, { passive: false });

  slideshow.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startX;

    if (diffX > threshold) leftArrowClick();
    else if (diffX < -threshold) rightArrowClick();

    isDragging = false;
    startX = 0;
    startY = 0;
  });

  // ================= MOUSE WHEEL =================
  slideshow.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      if (e.deltaX < 0) leftArrowClick();
      else rightArrowClick();
    }
  }, { passive: false });

  // ================= MOUSE DRAG =================
  let mouseStartX = 0;
  let mouseDragging = false;

  slideshow.addEventListener('mousedown', (e) => {
    mouseStartX = e.clientX;
    mouseDragging = true;
  });

  slideshow.addEventListener('mousemove', (e) => {
    if (!mouseDragging) return;
    // Optional: you can add visual feedback here while dragging
  });

  slideshow.addEventListener('mouseup', (e) => {
    if (!mouseDragging) return;
    const mouseEndX = e.clientX;
    const diffX = mouseEndX - mouseStartX;

    if (diffX > threshold) leftArrowClick();
    else if (diffX < -threshold) rightArrowClick();

    mouseDragging = false;
  });

  // Also cancel dragging if mouse leaves slideshow container
  slideshow.addEventListener('mouseleave', () => {
    mouseDragging = false;
  });

});


// Update information 

document.addEventListener("DOMContentLoaded", function() {
  const encodedData = {
    linkedin: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3RoZXZhbmxlLw==",
    scholar: "aHR0cHM6Ly9zY2hvbGFyLmdvb2dsZS5jb20vY2l0YXRpb25zP3VzZXI9azhuTElOWUFBQUFK",
    github: "aHR0cHM6Ly9naXRodWIuY29tL3Z2dmFudGhl",
  };

  // Decode & apply
  const linkedinEl = document.getElementById("linkedin");
  const scholarEl = document.getElementById("scholar");
  const githubEl = document.getElementById("github");

  if (linkedinEl) linkedinEl.href = atob(encodedData.linkedin);
  if (scholarEl) scholarEl.href = atob(encodedData.scholar);
  if (githubEl) githubEl.href = atob(encodedData.github);


  const linkedinElft = document.getElementById("linkedin_ft");
  const scholarElft = document.getElementById("scholar_ft");
  const githubElft = document.getElementById("github_ft");

  if (linkedinElft) linkedinElft.href = atob(encodedData.linkedin);
  if (scholarElft) scholarElft.href = atob(encodedData.scholar);
  if (githubElft) githubElft.href = atob(encodedData.github);





// Function to get CSS variable
function getCssVar(varName) {
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
}

// Render canvas with theme color and default font
function renderTextCanvas(id, encodedText) {
  const text = encodedText; // decode Base64
  const canvas = document.getElementById(id);
  const ctx = canvas.getContext("2d");

  const textColor = getCssVar('--text-color-light') || "#888";
  const font = "sans-serif";

  ctx.font = `14px ${font}`;
  const width = ctx.measureText(text).width + 10;
  const height = 20;
  canvas.width = width;
  canvas.height = height;

  ctx.font = `14px ${font}`;
  ctx.fillStyle = textColor;
  ctx.fillText(text, 5, 14);
}

// Base64-encoded info
renderTextCanvas("phoneCanvas",  atob("KCs4MikgMTAyMTU1NjY2OQ==")); // phone
renderTextCanvas("emailCanvas", atob("dmFudGhlLmxlOTZAZ21haWwuY29t")); // email
renderTextCanvas("locationCanvas", "Seoul, South Korea"); // Seoul, South Korea

// Re-render if theme changes
const observer = new MutationObserver(() => {
  renderTextCanvas("phoneCanvas", atob("KCs4MikgMTAyMTU1NjY2OQ=="));
  renderTextCanvas("emailCanvas", atob("dmFudGhlLmxlOTZAZ21haWwuY29t"));
  renderTextCanvas("locationCanvas",  "Seoul, South Korea");
});
observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

});