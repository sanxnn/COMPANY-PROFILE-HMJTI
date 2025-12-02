document.addEventListener('DOMContentLoaded', () => {
    const infoCards = document.querySelectorAll('.info-card');
    const equalizeCardHeights = () => {
        infoCards.forEach(card => card.style.height = 'auto');

        if (window.innerWidth > 768) {

            // Pasangan Baris 1: Kartu 1 dan 2
            let maxHeightRow1 = 0;
            const row1 = [infoCards[0], infoCards[1]].filter(Boolean); // Ambil kartu jika ada
            row1.forEach(card => {
                maxHeightRow1 = Math.max(maxHeightRow1, card.offsetHeight);
            });
            row1.forEach(card => {
                card.style.height = `${maxHeightRow1}px`;
            });

            // Pasangan Baris 2: Kartu 3 dan 4
            let maxHeightRow2 = 0;
            const row2 = [infoCards[2], infoCards[3]].filter(Boolean);
            row2.forEach(card => {
                maxHeightRow2 = Math.max(maxHeightRow2, card.offsetHeight);
            });
            row2.forEach(card => {
                card.style.height = `${maxHeightRow2}px`;
            });
        }
        // Jika tampilan mobile, height tetap 'auto' (sudah di-reset di awal)
    };

    // Panggil fungsi saat dokumen selesai dimuat
    equalizeCardHeights();
    // Panggil fungsi setiap kali ukuran jendela diubah
    window.addEventListener('resize', equalizeCardHeights);

    infoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover-effect');
        });

        card.addEventListener('mouseleave', () => {
            // Hapus kelas hanya jika mouse benar-benar meninggalkan elemen
            card.classList.remove('hover-effect');
        });
    });
});