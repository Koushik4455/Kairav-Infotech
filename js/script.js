// ===============================
// KAIRAV INFOTECH - WHATSAPP SETTINGS
// ===============================

// Main Kairav Infotech WhatsApp number.
// Keep country code and do NOT use +, spaces or hyphens.
const WHATSAPP_NUMBER = "919059392653";

const navbar = document.getElementById("mainNavbar");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    backToTop.style.display = "grid";
  } else {
    navbar.classList.remove("scrolled");
    backToTop.style.display = "none";
  }

  updateActiveNav();
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function updateActiveNav() {
  const sections = document.querySelectorAll("section[id], header[id]");
  const links = document.querySelectorAll(".nav-link");

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// Close mobile navbar after clicking a menu item.
document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
    }
  });
});

// ===============================
// WHATSAPP CONTACT FORM
// ===============================
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
const contactActions = document.getElementById("contactActions");
const whatsappBtn = document.getElementById("whatsappBtn");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    event.stopPropagation();
    contactForm.classList.add("was-validated");
    return;
  }

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const enquiryText =
`Hi Kairav Infotech,

I would like to enquire about your website development services.

Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}

Requirement:
${message}`;

  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiryText)}`;

  whatsappBtn.href = whatsappURL;

  formSuccess.classList.remove("d-none");
  contactActions.classList.remove("d-none");

  contactActions.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
});

// Current year
document.getElementById("year").textContent = new Date().getFullYear();
