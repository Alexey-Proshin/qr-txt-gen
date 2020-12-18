document.addEventListener("DOMContentLoaded", function () {
    var qr = window.qr = new QRious({
        element: document.getElementById("qr_code"),
        value: "txt",
        background: '#122638',
        foreground: '#7ecad6',
        level: 'H',
        size: 250
    });

    var input = document.getElementById("txt");

    input.oninput = function () {
        qr.value = input.value;
    };
});
