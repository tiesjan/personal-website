'use strict';

function updateFavicon(darkTheme) {
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = '/favicon-' + (darkTheme ? 'light' : 'dark') + '.png';
}

window.addEventListener('load', function(event) {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQueryList.addEventListener('change', function(event) {
        updateFavicon(mediaQueryList.matches);
    });
    updateFavicon(mediaQueryList.matches);
});
