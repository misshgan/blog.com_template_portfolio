import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";
import "photoswipe/style.css";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";
import "photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css";

export function handleHomeGalleryLightbox() {

    const lightbox = new PhotoSwipeLightbox({
        gallery: "#home-gallery",
        children: ".card-lightbox-target",
        showHideAnimationType: "zoom",
        pswpModule: PhotoSwipe,
        paddingFn: (viewportSize) => ({
            top: 30,
            bottom: 30,
        }),
    });

    const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
        type: "below",
    });

    async function loadImagesAndSetDimensions(linksSelector) {
        try {
            const galleryContainer = document.querySelector("#home-gallery");
            const links = galleryContainer.querySelectorAll(linksSelector);
            if (!links.length) {
                throw new Error("No links found");
            }

            const loadImage = async (link) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = link;

                    img.onload = function () {
                        link.setAttribute("data-pswp-width", this.width);
                        link.setAttribute("data-pswp-height", this.height);
                        resolve();
                    };

                    img.onerror = function () {
                        reject(new Error("Failed to load image: " + link.src));
                    };
                });
            };

            await Promise.all(Array.from(links).map(loadImage));
        } catch (error) {
            console.error("Error in loadImagesAndSetDimensions:", error);
        }
    }

    loadImagesAndSetDimensions(".card-lightbox-target");

    lightbox.init();
}

export function handlePostContentLightbox() {
    function getMaxImageInSet(img) {
        if (!img.srcset) {
            return img.src;
        }

        const sources = img.srcset.split(",");
        let maxWidth = 0;
        let maxSrc = "";

        sources.forEach((source) => {
            const [url, widthStr] = source.trim().split(" ");
            const width = parseInt(widthStr);

            if (width > maxWidth) { 
                maxWidth = width;
                maxSrc = url;
            }
        });

        return maxSrc;
    }

    function setDimensions(link) {
        const img = new Image();
        img.src = link.getAttribute('href');

        img.onload = function () {
            link.setAttribute("data-pswp-width", this.width);
            link.setAttribute("data-pswp-height", this.height);
        };
    }

    const images = document.querySelectorAll(".kg-image, .kg-gallery-container img");

    if (images.length === 0) {
        return;
    }

    images.forEach(image => {
        const link = document.createElement("a");
        link.classList.add("pswp-lightbox-image");
        image.after(link);
        link.setAttribute("href", getMaxImageInSet(image));
        setDimensions(link);
        link.appendChild(image);
    });

    try {
        const lightbox = new PhotoSwipeLightbox({
            gallery: "#post-content",
            pswpModule: PhotoSwipe,
            children: ".pswp-lightbox-image",
            paddingFn: (viewportSize) => ({
                top: 40,
                bottom: 40
            }),
        });

        lightbox.init();
    } catch (error) {
        console.error("Error initializing lightbox:", error);
    }
}