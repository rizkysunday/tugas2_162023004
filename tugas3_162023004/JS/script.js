let selectedTarget = null;
let selectedBgColor = null;
let selectedTextColor = null;

const bgBox = document.getElementById("bgBox");
const textBox = document.getElementById("textBox");
const modal = document.getElementById("colorModal");
const colorPicker = document.getElementById("colorPicker");

// Klik kotak background
bgBox.addEventListener("click", function() {
    selectedTarget = "background";
    modal.style.display = "flex";
});

// Klik kotak teks
textBox.addEventListener("click", function() {
    selectedTarget = "text";
    modal.style.display = "flex";
});

// Pilih warna
document.getElementById("selectColor").addEventListener("click", function() {

    if (selectedTarget === "background") {
        selectedBgColor = colorPicker.value;
        bgBox.style.backgroundColor = selectedBgColor;
    }

    if (selectedTarget === "text") {
        selectedTextColor = colorPicker.value;
        textBox.style.backgroundColor = selectedTextColor;
    }

    modal.style.display = "none";
});

// Tutup modal
document.getElementById("closeModal").addEventListener("click", function() {
    modal.style.display = "none";
});

// Tombol Simpan
document.getElementById("saveBtn").addEventListener("click", function() {

    if (selectedBgColor) {
        document.body.style.backgroundColor = selectedBgColor;
    }

    if (selectedTextColor) {
        document.body.style.color = selectedTextColor;
    }
});