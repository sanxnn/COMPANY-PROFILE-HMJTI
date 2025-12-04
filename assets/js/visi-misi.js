// Smooth Scroll untuk tombol "Selengkapnya"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Animasi muncul saat scroll
const revealElements = document.querySelectorAll(".reveal, .reveal-item");

function revealOnScroll() {
  for (let el of revealElements) {
    let pos = el.getBoundingClientRect().top;
    let winHeight = window.innerHeight - 100;

    if (pos < winHeight) {
      el.classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
