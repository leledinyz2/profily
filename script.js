const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const projectCards = Array.from(document.querySelectorAll(".project-card[data-category]"));
const filterStatus = document.querySelector("#filter-status");

const filterLabels = {
  all: "todos os projetos",
  acervo: "projetos de acervos e leitura",
  arte: "projetos de arte e personagens",
};

function setProjectFilter(filter) {
  let visibleCount = 0;

  for (const card of projectCards) {
    const isVisible = filter === "all" || card.dataset.category === filter;
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  }

  for (const button of filterButtons) {
    const isActive = button.dataset.filter === filter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  }

  if (filterStatus) {
    const label = filterLabels[filter] ?? filterLabels.all;
    filterStatus.textContent = `Mostrando ${visibleCount} ${visibleCount === 1 ? "projeto" : "projetos"}: ${label}.`;
  }
}

for (const button of filterButtons) {
  button.addEventListener("click", () => setProjectFilter(button.dataset.filter));
}
