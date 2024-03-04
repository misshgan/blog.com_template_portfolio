// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import "../css/index.css";

import { handleHomeGalleryLightbox } from './photoSwipe';
import { handlePostContentLightbox } from "./photoSwipe";
import { handleHomeHeroSwiper } from "./swiper";

function handleHeaderDropdown() {
    const target = document.querySelector('#header-nav-dropdown-target');
    const dropdownBody = target.querySelector('ul')
    if (!target) {return;}

    if (dropdownBody.querySelector('li')) {
        target.classList.remove('hidden')
    }

    target.addEventListener('mouseover', () => {
        dropdownBody.classList.add('active')
    })
    target.addEventListener('mouseout', () => {
        dropdownBody.classList.remove('active')
    })
}

handleHeaderDropdown();

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