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
