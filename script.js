document.addEventListener("DOMContentLoaded", function () {
    const viewer = document.getElementById('lightbox');
    const viewerImg = document.getElementById('lightbox-img');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const close = document.getElementById('close-btn');

    thumbnails.forEach(pic => {
        pic.onclick = () => {
            viewerImg.src = pic.dataset.full;
            viewer.classList.add('show');
        };
    });

    close.onclick = () => viewer.classList.remove('show');

    viewer.onclick = e => {
        if (e.target === viewer) viewer.classList.remove('show');
    };
});