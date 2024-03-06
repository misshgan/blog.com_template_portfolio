import "../css/index.css";
import { handleHomeGalleryLightbox, handlePostContentLightbox } from './photoSwipe';
import { handleHomeHeroSwiper } from "./swiper";

function handleHeaderDropdown() {
    const target = document.querySelector('#header-nav-dropdown-target');

    // Error handling if target is not found
    if (!target) return;

    const dropdownBody = target.querySelector('ul');
    const showDropdown = dropdownBody?.querySelector('li');

    if (showDropdown) target.classList.remove('hidden');

    target.addEventListener('mouseover', () => {
        dropdownBody.classList.add('active');
    });

    target.addEventListener('mouseout', () => {
        dropdownBody.classList.remove('active');
    });
}

function handleMobileNav() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const targets = document.querySelectorAll('.js-mobile-menu-target');

    // Error handling if targets are not found
    if (!targets || !mobileMenu) return;

    const toggleMobileMenu = () => {
        mobileMenu.classList.toggle('active');
    };

    targets.forEach(target => {
        target.addEventListener('click', toggleMobileMenu);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            mobileMenu.classList.remove('active');
        }
    });
}

handleMobileNav(); // Handle mobile navigation menu
handleHeaderDropdown(); // Handle header dropdown

// Check if elements exist before invoking related functions
const homeHeroSwiper = document.getElementById('home-hero-swiper');
const homeGallery = document.getElementById('home-gallery');
const postContent = document.getElementById('post-content');

if (homeHeroSwiper) handleHomeHeroSwiper();
if (homeGallery) handleHomeGalleryLightbox();
if (postContent) handlePostContentLightbox();

// Import lazysizes plugin
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
