import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe'
import 'photoswipe/style.css';

import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css'


export default function handlePhotoSwipe() {
    const lightbox = new PhotoSwipeLightbox({
        gallery: "#home-gallery",
        children: ".glightbox",
        pswpModule: PhotoSwipe,
        paddingFn: (viewportSize) => {
            return {
              top: 30, bottom: 30
            }
          },
    });

    const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
        type: 'below'
    });

    function loadImagesAndSetDimensions(imagesSelector) {
        const galleryContainer = document.querySelector('#home-gallery');
        const images = galleryContainer.querySelectorAll(imagesSelector);
    
        images.forEach(image => {
            const img = new Image();
            img.src = image.src;
    
            img.onload = function() {
                image.parentElement.nextElementSibling.setAttribute('data-pswp-width', this.width);
                image.parentElement.nextElementSibling.setAttribute('data-pswp-height', this.height);
            };
        });
    }
    
    loadImagesAndSetDimensions('.card-feature-image');

    lightbox.init();
}