/* =========================================================
   Tensio Design & Civil Consultancy Pvt. Ltd.
   JavaScript Interactions, Animations & Validation
   ========================================================= */

/* ---------- 1. FADE-IN ON SCROLL ---------- */
const fadeElements = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -80px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

fadeElements.forEach((el) => {
  appearOnScroll.observe(el);
});

/* ---------- 2. NAVBAR ACTIVE LINK ---------- */
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

/* ---------- 3. FORM VALIDATION ---------- */
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    let valid = true;

    form.querySelectorAll("[required]").forEach((field) => {
      if (!field.value.trim()) {
        valid = false;
        field.style.border = "2px solid red";
      } else {
        field.style.border = "1px solid #ccc";
      }
    });

    if (!valid) {
      e.preventDefault();
      alert("⚠️ Please fill in all required fields before submitting.");
    }
  });
});

/* ---------- 4. FLOATING WHATSAPP BUTTON ---------- */
const whatsappBtn = document.createElement("a");
whatsappBtn.href = "https://wa.me/919901280247";
whatsappBtn.target = "_blank";
whatsappBtn.innerHTML = "💬";
whatsappBtn.id = "whatsapp-float";
document.body.appendChild(whatsappBtn);

const whatsappStyle = document.createElement("style");
whatsappStyle.innerHTML = `
  #whatsapp-float {
    position: fixed;
    width: 55px;
    height: 55px;
    background: #25D366;
    color: white;
    border-radius: 50%;
    bottom: 25px;
    right: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    text-decoration: none;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    z-index: 999;
    transition: transform 0.3s ease;
  }
  #whatsapp-float:hover {
    transform: scale(1.1);
    background: #128C7E;
  }
`;
document.head.appendChild(whatsappStyle);

/* ---------- 5. SMOOTH SCROLL FOR INTERNAL LINKS ---------- */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

/* ---------- 6. HERO VIDEO AUTO-PLAY FIX ---------- */
window.addEventListener("load", () => {
  const bgVideo = document.getElementById("bg-video");
  if (bgVideo) {
    bgVideo.muted = true;
    const playPromise = bgVideo.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => console.log("Background video playing."))
        .catch(() => console.warn("Autoplay prevented by browser."));
    }
  }
});

/* ---------- 7. CONSOLE BRANDING ---------- */
console.log(
  "%cTensio Design & Civil Consultancy Pvt. Ltd.",
  "color:#ff9d00; font-weight:bold; font-size:14px;"
);
console.log(
  "%cEngineering Precision. Creative Solutions. Complete Delivery.",
  "color:#002b5c; font-size:12px;"
);
