document.addEventListener("DOMContentLoaded", function () {
  // Hanya init map jika elemen ada
  const mapEl = document.getElementById("map");
  if (!mapEl) return;

  const map = L.map("map").setView([-8.1575886, 113.722782], 18);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  const marker = L.marker([-8.1575886, 113.722782]).addTo(map);
  marker.bindPopup(
    '<div style="font-family: Poppins, sans-serif; font-size: 14px;">' +
      "<b>Gedung Jurusan TI - Politeknik Negeri Jember</b><br>" +
      "Jl. Mastrip No.164, Tegalgede, Jember." +
      "</div>"
  );
});
