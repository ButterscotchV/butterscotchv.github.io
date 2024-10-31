import PhotoSwipeLightbox from "/assets/ps/photoswipe-lightbox.esm.js";
const lightbox = new PhotoSwipeLightbox({
    gallery: ".pswp-gallery",
    children: "a",
    pswpModule: () => import ("/assets/ps/photoswipe.esm.js"),
    wheelToZoom: true,
    bgClickAction: "close",
    tapAction: "close",
});
lightbox.init();
