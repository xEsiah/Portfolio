function showSmiley() {
  const CompetenceJS = document.getElementById("JS");
  CompetenceJS.innerHTML = "Je n'ai pas menti 😎";
}

function resetText() {
  const CompetenceJS = document.getElementById("JS");
  CompetenceJS.innerHTML = "JavaScript ⚡";
}
document.querySelectorAll("a.project-card").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = link.href;
  });
});
// Ajouter les effets de survol sur les éléments touchés sur mobile
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("touchstart", () => {
    card.classList.add("hover");
  });
  card.addEventListener("touchend", () => {
    card.classList.remove("hover");
  });
});

document.querySelectorAll("#competences li").forEach((item) => {
  item.addEventListener("touchstart", () => {
    item.classList.add("hover");
  });
  item.addEventListener("touchend", () => {
    item.classList.remove("hover");
  });
});

document.querySelectorAll("#centrer_retour_index").forEach((link) => {
  link.addEventListener("touchstart", () => {
    link.classList.add("hover");
  });
  link.addEventListener("touchend", () => {
    link.classList.remove("hover");
  });
});

document.querySelectorAll(".liens_footer").forEach((link) => {
  link.addEventListener("touchstart", () => {
    link.classList.add("hover");
  });
  link.addEventListener("touchend", () => {
    link.classList.remove("hover");
  });
});
