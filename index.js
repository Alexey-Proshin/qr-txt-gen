document.addEventListener("DOMContentLoaded", function () {
    var qr = window.qr = new QRious({
        element: document.getElementById("qr_code"),
        value: "txt",
        background: '#fff',
        foreground: '#1a1a40',
        level: 'H',
        size: 250
    });

    var input = document.getElementById("txt");

    input.oninput = function () {
        qr.value = input.value;
    };
});
