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

/*==================== SERVICES MODAL ====================*/
// const modalViews = document.querySelectorAll(".services__modal"),
//   modalBtns = document.querySelectorAll(".services__button"),
//   modalCloses = document.querySelectorAll(".services__modal-close");

// let modal = function (modalClick) {
//   modalViews[modalClick].classList.add("active-modal");
// };

// modalBtns.forEach((modalBtn, i) => {
//   modalBtn.addEventListener("click", () => {
//     modal(i);
//   });
// });

// modalCloses.forEach((modalClose) => {
//   modalClose.addEventListener("click", () => {
//     modalViews.forEach((modalView) => {
//       modalView.classList.remove("active-modal");
//     });
//   });
// });


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

// function scrollActive() {
//   const scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     sectionId = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".nav__menu a[href*=" + sectionId + "]")
//         .classList.add("active-link");
//     } else {
//       document
//         .querySelector(".nav__menu a[href*=" + sectionId + "]")
//         .classList.remove("active-link");
//     }
//   });
// }

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

      const mailtoLink = `mailto:vanthe.le96@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
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


/*==================== SERVICES MODAL ====================*/
// const modalViews = document.querySelectorAll(".services__modal"),
//   modalBtns = document.querySelectorAll(".services__button"),
//   modalCloses = document.querySelectorAll(".services__modal-close");

// let modal = function (modalClick) {
//   modalViews[modalClick].classList.add("active-modal");
// };

// modalBtns.forEach((modalBtn, i) => {
//   modalBtn.addEventListener("click", () => {
//     modal(i);
//   });
// });

// modalCloses.forEach((modalClose) => {
//   modalClose.addEventListener("click", () => {
//     modalViews.forEach((modalView) => {
//       modalView.classList.remove("active-modal");
//     });
//   });
// });