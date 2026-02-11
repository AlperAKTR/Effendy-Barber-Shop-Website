// back to top butonu

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// menü sabitleme

const header = document.querySelector('.header-bottom');
const hero = document.querySelector('.hero');
const triggerHeight = hero ? hero.offsetHeight - 80 : 0;

window.addEventListener('scroll', () => {
  if (window.scrollY > triggerHeight) {
    header.classList.add('is-fixed');
   } else {
    header.classList.remove('is-fixed');
  }
});

const translations = {
  tr: {
    menuHome: "Ana Sayfa",
    menuServices: "Hizmetler",
    menuAppointment: "Randevu",
    menuLocation: "Konum",
    menuContact: "İletişim",
    heroTitle: "Berber & Saç Kesimi",
    heroButton: "Hemen Randevu Alın"
  },
  en: {
    menuHome: "Home",
    menuServices: "Services",
    menuAppointment: "Appointment",
    menuLocation: "Location",
    menuContact: "Contact",
    heroTitle: "Barbers & Hair Cutting",
    heroButton: "Book Appointment"
  }
};

const texts = document.querySelectorAll("[data-lang]");
const langBtn = document.querySelector(".lang-current");
const langMenu = document.querySelector(".lang-menu");
const langItems = document.querySelectorAll("[data-lang-btn]");

// varsayılan dil: TR
const savedLang = localStorage.getItem("siteLang") || "tr";
setLanguage(savedLang);
updateCurrentLabel(savedLang);

// dropdown aç/kapat
langBtn.addEventListener("click", () => {
  langMenu.classList.toggle("open");
});

// dil seçimi
langItems.forEach(item => {
  item.addEventListener("click", () => {
    const lang = item.dataset.langBtn;

    setLanguage(lang);
    updateCurrentLabel(lang);

    langMenu.classList.remove("open");
  });
});

// dışarı tıklayınca kapansın
document.addEventListener("click", e => {
  if (!e.target.closest(".lang-dropdown")) {
    langMenu.classList.remove("open");
  }
});

function updateCurrentLabel(lang) {
  langBtn.innerHTML =
    lang.toUpperCase() + ' <i class="fa-solid fa-chevron-down"></i>';
}

function setLanguage(lang) {
  if (!translations[lang]) return;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  texts.forEach(el => {
    const key = el.dataset.lang;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("siteLang", lang);
}




