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
              top: 40, bottom: 40
            }
          },
    });

    const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
        type: 'below'
    });

        
    async function loadImagesAndSetDimensions(linksSelector) {
        try {
            const galleryContainer = document.querySelector('#home-gallery');
            if (!galleryContainer) throw new Error('Gallery container not found');
    
            const links = galleryContainer.querySelectorAll(linksSelector);
            if (!links.length) throw new Error('No links found');
    
            const loadImage = async (link) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = link;
    
                    img.onload = function() {
                        link.setAttribute('data-pswp-width', this.width);
                        link.setAttribute('data-pswp-height', this.height);
                        resolve();
                    };
    
                    img.onerror = function() {
                        reject(new Error('Failed to load image: ' + link.src));
                    };
                });
            };
    
            await Promise.all(Array.from(links).map(loadImage));
        } catch (error) {
            console.error('Error in loadImagesAndSetDimensions:', error);
        }
    }
    
    loadImagesAndSetDimensions('.card-lightbox-target');
       

    lightbox.init();
}