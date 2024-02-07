// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import "../css/index.css";

// // Import JS
// import menuOpen from "./menuOpen";
// import infiniteScroll from "./infiniteScroll";

import handlePhotoSwipe from './photoSwipe';

handlePhotoSwipe();

// Lazyload plugin
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// Call the menu and infinite scroll functions
// menuOpen();
// infiniteScroll();