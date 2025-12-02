document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelectorAll(".galeri-page");
  const pagelinks = document.querySelectorAll(".pagination .page");

  function showPage(hash) {
    const id = hash && document.querySelector(hash) ? hash : "#page1";

    // hide semua page
    pages.forEach((p) => (p.style.display = "none"));

    // show target
    const target = document.querySelector(id);
    if (target) target.style.display = "block";

    // update active class di pagination (cari semua link dengan href="#pageX")
    pagelinks.forEach((a) => {
      if (a.getAttribute("href") === id) a.classList.add("active");
      else a.classList.remove("active");
    });
  }

  // show on load
  showPage(location.hash);

  // listen to hash change (klik pagination / back button)
  window.addEventListener("hashchange", () => showPage(location.hash));
});
