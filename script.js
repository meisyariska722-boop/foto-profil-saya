
/* TOMBOL UBAH TEKS */
const tombolTeks = document.querySelector("#changeTextBtn");
const deskripsi = document.querySelector("#introText");

tombolTeks.addEventListener("click", function () {
    deskripsi.textContent =
        "Saya senang mencoba hal baru, belajar teknologi, dan mengembangkan kreativitas.";
});

/* TOMBOL GANTI TEMA */
const tombolTema = document.querySelector("#themeToggle");

tombolTema.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
