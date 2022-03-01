import PhotoSwipeLightbox from "/assets/ps/photoswipe-lightbox.esm.min.js";
const lightbox = new PhotoSwipeLightbox({
    gallery: ".pswp-gallery",
    children: "a",
    pswpModule: () => import ("/assets/ps/photoswipe.esm.min.js"),
    wheelToZoom: true,
    bgClickAction: "close",
    tapAction: "close",
});
lightbox.init();
