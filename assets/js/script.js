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

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileSidebar = document.getElementById("mobile-sidebar");
  const closeBtn = document.getElementById("close-sidebar");
  const overlay = document.getElementById("overlay");

  function openSidebar() {
    mobileSidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeSidebar() {
    mobileSidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    // Close all dropdowns when sidebar closes
    document.querySelectorAll(".mobile-dropdown").forEach((item) => {
      item.classList.remove("active");
    });
  }

  // Hamburger & close
  if (hamburger) hamburger.addEventListener("click", openSidebar);
  if (closeBtn) closeBtn.addEventListener("click", closeSidebar);
  if (overlay) overlay.addEventListener("click", closeSidebar);

  // Dropdown toggle
  document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      const parent = this.closest(".mobile-dropdown");
      const menu = parent.querySelector(".mobile-dropdown-menu");

      // Tutup semua dropdown lain
      document.querySelectorAll(".mobile-dropdown").forEach((item) => {
        if (item !== parent) {
          item.classList.remove("active");
          item.querySelector(".mobile-dropdown-menu").style.maxHeight = "0px";
        }
      });

      // Toggle current dropdown
      parent.classList.toggle("active");

      if (parent.classList.contains("active")) {
        // Delay sedikit agar animasi max-height jalan
        setTimeout(() => {
          menu.style.maxHeight = menu.scrollHeight + "px";
        }, 10);
      } else {
        menu.style.maxHeight = "0px";
      }
    });
  });

  // Close dropdown on link click
  document.querySelectorAll(".mobile-dropdown-menu a").forEach((link) => {
    link.addEventListener("click", closeSidebar);
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
