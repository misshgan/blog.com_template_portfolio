// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import "../css/index.css";

import { handleHomeGalleryLightbox } from './photoSwipe';
import { handlePostContentLightbox } from "./photoSwipe";
import { handleHomeHeroSwiper } from "./swiper";

if (document.getElementById('home-hero-swiper')) {
    handleHomeHeroSwiper();
}

if (document.getElementById('home-gallery')) {
    handleHomeGalleryLightbox();
}

if (document.getElementById('post-content')) {
    handlePostContentLightbox();
}

// Lazyload plugin
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';