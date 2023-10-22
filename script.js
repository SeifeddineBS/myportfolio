// script.js

document.getElementById('downloadButton').addEventListener('click', function() {
    var pdfUrl = 'Seifeddine_Ben_Salah_CV.pdf';
    var downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = 'Seifeddine_Ben_Salah_CV.pdf';
    downloadLink.click();
});
