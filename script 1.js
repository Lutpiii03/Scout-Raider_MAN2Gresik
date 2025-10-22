// Fungsi untuk hamburger menu (mobile)
function toggleMenu() {
    const navContainer = document.querySelector('.nav-container');
    navContainer.classList.toggle('open');
}

// Tutup menu saat klik link (opsional, biar smooth)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-container').classList.remove('open');
    });
});

// Accordion untuk "Pelajari Lebih Lanjut" (FAQ-like)
document.addEventListener('DOMContentLoaded', function() {
    const trigger = document.querySelector('.accordion-trigger');
    const detailSection = document.querySelector('.detail-section');
    
    if (trigger && detailSection) {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            detailSection.classList.toggle('open');
            // Optional: Toggle icon or text
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('bi-chevron-down');
                icon.classList.toggle('bi-chevron-up');
            }
            this.textContent = detailSection.classList.contains('open') ? 'Tutup Detail' : 'Pelajari Lebih Lanjut';
        });
    }
});

// Modal untuk gambar (lightbox)
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('img01');
const span = document.getElementsByClassName('close')[0];

if (modal && modalImg && span) {
    // Open modal saat klik gambar dengan class 'modal-image'
    document.querySelectorAll('.modal-image').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex'; // Show flex untuk center
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });

    // Close modal
    span.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close saat klik di luar gambar
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Existing JS (jika ada single-page logic, tapi sepertinya multi-page, jadi optional)
// function showSection(sectionId) { ... } // Biarin aja, gak ganggu

// Inisialisasi saat load
window.addEventListener('load', () => {
    // Existing onload jika perlu
});