const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const filterButtons = document.querySelectorAll("[data-filter]");
const serviceRows = document.querySelectorAll(".service-row[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    serviceRows.forEach((row) => {
      row.hidden = !(filter === "all" || row.dataset.category === filter);
    });
  });
});

const finderForm = document.querySelector("#finderForm");
const finderResult = document.querySelector("#finderResult");

if (finderForm && finderResult) {
  finderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(finderForm).entries());
    finderResult.textContent = `Matched ${data.size} ${data.type} tires for your ${data.year} ${data.make}. Add installation to reserve a same-week appointment.`;
  });
}

const quoteForm = document.querySelector("#quoteForm");
const formMessage = document.querySelector("#formMessage");
const savedQuote = document.querySelector("#savedQuote");

function renderSavedQuote() {
  if (!savedQuote) return;
  const quote = JSON.parse(localStorage.getItem("roadlineQuote") || "null");
  if (!quote) return;
  savedQuote.innerHTML = `
    <strong>Latest demo request</strong>
    <p><b>${quote.name}</b> requested ${quote.service.toLowerCase()} for ${quote.vehicle || "their vehicle"}.</p>
    <p>${quote.phone} | ${quote.email}</p>
  `;
}

if (quoteForm) {
  renderSavedQuote();

  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const quote = Object.fromEntries(new FormData(quoteForm).entries());
    localStorage.setItem("roadlineQuote", JSON.stringify(quote));
    quoteForm.reset();
    renderSavedQuote();
    if (formMessage) {
      formMessage.textContent = "Quote saved for demo. Connect this form to email, CRM, or your shop system for production.";
    }
  });
}
