// ── Shared header ────────────────────────────────────────
// On index.html: name button scrolls to top, nav links
//   smooth-scroll to their section.
// On detail pages: name button goes to index.html, nav links
//   go to index.html and store the target section in
//   sessionStorage so index.html plays the scroll animation.
(function() {
    var path = window.location.pathname;
    var isIndex = (path === '/' || path === '' || path.endsWith('/index.html') || path.endsWith('/'))
                  && !window.location.search;

    var sections = ['about', 'skills', 'projects', 'experience', 'connect'];
    var labels   = ['About', 'Skills', 'Projects', 'Experience', 'Connect'];

    // ── Desktop nav links ────────────────────────────────────
    var desktopNavHTML = '';
    sections.forEach(function(s, i) {
        if (isIndex) {
            desktopNavHTML += '<a href="#' + s + '">' + labels[i] + '</a>\n        ';
        } else {
            desktopNavHTML += '<a href="index.html" onclick="sessionStorage.setItem(\'scrollTo\',\'' + s + '\')">' + labels[i] + '</a>\n        ';
        }
    });

    // ── Mobile drawer links ──────────────────────────────────
    var drawerNavHTML = '';
    sections.forEach(function(s, i) {
        if (isIndex) {
            drawerNavHTML += '<a href="#' + s + '">' + labels[i] + '</a>\n            ';
        } else {
            drawerNavHTML += '<a href="index.html" onclick="sessionStorage.setItem(\'scrollTo\',\'' + s + '\')">' + labels[i] + '</a>\n            ';
        }
    });

    // ── Name button ──────────────────────────────────────────
    var nameTag;
    if (isIndex) {
        nameTag = '<a href="#" class="name-button" onclick="window.scrollTo({ top: 0, behavior: \'smooth\' }); return false;">';
    } else {
        nameTag = '<a href="index.html" class="name-button">';
    }

    // ── Inject header ────────────────────────────────────────
    var header = document.querySelector('header');
    if (!header) return;

    header.innerHTML =
        nameTag +
        '<div class="name-container">' +
        '<h1 class="main-name">Gabriel Fernandes Neves</h1>' +
        '<h2 class="sub-name">Gabtrex</h2>' +
        '</div>' +
        '</a>' +
        '<nav>' + desktopNavHTML + '</nav>' +
        '<button class="nav-hamburger" aria-label="Open menu" aria-expanded="false">' +
        '<span></span><span></span><span></span>' +
        '</button>';

    // ── Inject drawer (outside header, into body) ────────────
    var drawer = document.createElement('div');
    drawer.className = 'nav-drawer';
    drawer.setAttribute('aria-hidden', 'true');
    drawer.innerHTML =
        '<div class="nav-drawer-backdrop"></div>' +
        '<nav class="nav-drawer-panel">' + drawerNavHTML + '</nav>';
    document.body.appendChild(drawer);

    // ── Toggle logic ─────────────────────────────────────────
    var hamburger = header.querySelector('.nav-hamburger');
    var backdrop  = drawer.querySelector('.nav-drawer-backdrop');

    function openDrawer() {
        drawer.classList.add('open');
        hamburger.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        drawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        drawer.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', function() {
        drawer.classList.contains('open') ? closeDrawer() : openDrawer();
    });

    backdrop.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeDrawer();
    });

    drawer.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', closeDrawer);
    });

})();