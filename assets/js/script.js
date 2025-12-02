// navbar
$(document).ready(function () {
  let timeout;

  $(".dropdown").each(function () {
    const $dropdown = $(this);
    const $menu = $dropdown.find(".dropdown-menu");

    // Hover masuk ke trigger (navbar item)
    $dropdown.on("mouseenter", function () {
      clearTimeout(timeout);
      $menu.addClass("show");
    });

    // Hover keluar dari trigger
    $dropdown.on("mouseleave", function (e) {
      const related = e.relatedTarget;
      // Cek: apakah mouse langsung masuk ke dropdown?
      if ($menu.is(related) || $menu.has(related).length) return;

      // Kalau nggak, hide setelah delay
      timeout = setTimeout(() => $menu.removeClass("show"), 0);
    });

    // Hover masuk/luar dropdown
    $menu
      .on("mouseenter", () => clearTimeout(timeout))
      .on("mouseleave", (e) => {
        const related = e.relatedTarget;
        if ($dropdown.is(related) || $dropdown.has(related).length) return;
        timeout = setTimeout(() => $menu.removeClass("show"), 150);
      });
  });
});


// Back to Top Button
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// Smooth Scroll
backToTop.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
