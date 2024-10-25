import PhotoSwipeLightbox from "./assets/js/photoswipe-lightbox.esm.js";
const lightbox = new PhotoSwipeLightbox({
    gallery: ".pswp-gallery",
    children: "a",
    pswpModule: () => import ("./assets/js/photoswipe.esm.js"),
    wheelToZoom: true,
    bgClickAction: "close",
    tapAction: "close",
});
lightbox.init();
