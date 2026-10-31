// --- Languages (English / French / Portuguese) --- \\
// Order of choice: ?lang=xx in the URL → last choice saved in this browser
// → the browser's own language → English.
// Static text in the HTML uses data-i18n="key" (plain text) or data-i18n-html="key" (text with <strong> etc.).
// Project / experience text lives in data.js as { en, fr, pt } and is read with tr().
var LANGS = ['en', 'fr', 'pt'];                                             // supported languages, in switcher order

var currentLang = (function() {
    var fromUrl = new URLSearchParams(window.location.search).get('lang');  // shareable link, e.g. ?lang=fr
    var saved   = null;                                                     // last choice in this browser
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    var browser = (navigator.language || 'en').slice(0, 2).toLowerCase();  // "fr-FR" → "fr"

    var lang = [fromUrl, saved, browser].filter(function(l) { return LANGS.indexOf(l) !== -1; })[0] || 'en';
    if (fromUrl === lang) { try { localStorage.setItem('lang', lang); } catch (e) {} }
    return lang;
})();

document.documentElement.lang = currentLang;

// --- Interface text --- \\
var UI = {
    // Page titles
    'page.index':          { en: 'Gabriel Fernandes Neves — Game Developer', fr: 'Gabriel Fernandes Neves — Développeur de jeux vidéo', pt: 'Gabriel Fernandes Neves — Programador de videojogos' },
    'page.portfolio':      { en: "Gabriel's Portfolio", fr: 'Portfolio de Gabriel', pt: 'Portfólio do Gabriel' },
    'page.404':            { en: "404 — Gabriel's Portfolio", fr: '404 — Portfolio de Gabriel', pt: '404 — Portfólio do Gabriel' },

    // Header
    'nav.about':           { en: 'About', fr: 'À propos', pt: 'Sobre' },
    'nav.skills':          { en: 'Skills', fr: 'Compétences', pt: 'Competências' },
    'nav.projects':        { en: 'Projects', fr: 'Projets', pt: 'Projetos' },
    'nav.experience':      { en: 'Experience', fr: 'Expérience', pt: 'Experiência' },
    'nav.connect':         { en: 'Connect', fr: 'Contact', pt: 'Contacto' },
    'nav.openMenu':        { en: 'Open menu', fr: 'Ouvrir le menu', pt: 'Abrir o menu' },
    'nav.language':        { en: 'Language', fr: 'Langue', pt: 'Idioma' },

    // Index — hero
    'hero.eyebrow':        { en: 'Game Developer · Unreal Engine · Unity', fr: 'Développeur de jeux vidéo · Unreal Engine · Unity', pt: 'Programador de videojogos · Unreal Engine · Unity' },
    'hero.title':          { en: 'Building Worlds from Scratch', fr: 'Créer des mondes de zéro', pt: 'Construir mundos do zero' },
    'hero.sub':            { en: 'Solo developer with 4+ years of experience crafting games across Unreal Engine, Unity, and beyond.',
                             fr: "Développeur indépendant avec plus de 4 ans d'expérience dans la création de jeux sur Unreal Engine, Unity et bien plus.",
                             pt: 'Programador independente com mais de 4 anos de experiência a criar jogos em Unreal Engine, Unity e não só.' },
    'hero.viewProjects':   { en: 'View Projects', fr: 'Voir les projets', pt: 'Ver projetos' },
    'hero.aboutMe':        { en: 'About Me', fr: 'À propos de moi', pt: 'Sobre mim' },
    'hero.scroll':         { en: 'Scroll', fr: 'Défiler', pt: 'Deslizar' },

    // Index — about
    'about.title':         { en: 'About Me', fr: 'À propos de moi', pt: 'Sobre mim' },
    'about.p1': {
        en: "I'm Gabriel, a <strong>19-year-old game developer</strong> who has been creating games since the age of <strong>10</strong>. I started with <strong>Scratch</strong> and progressively moved to engines such as <strong>Unreal Engine 5</strong> and <strong>Unity</strong>, building experience across multiple technologies and languages.",
        fr: "Je m'appelle Gabriel, <strong>développeur de jeux vidéo de 19 ans</strong>, et je crée des jeux depuis l'âge de <strong>10 ans</strong>. J'ai commencé avec <strong>Scratch</strong> avant de passer progressivement à des moteurs comme <strong>Unreal Engine 5</strong> et <strong>Unity</strong>, en accumulant de l'expérience sur de nombreuses technologies et langages.",
        pt: "Chamo-me Gabriel, sou um <strong>programador de videojogos de 19 anos</strong> e crio jogos desde os <strong>10 anos</strong>. Comecei com o <strong>Scratch</strong> e passei progressivamente para motores como o <strong>Unreal Engine 5</strong> e o <strong>Unity</strong>, ganhando experiência em várias tecnologias e linguagens."
    },
    'about.p2': {
        en: "In <strong>2025</strong>, I independently developed and released <strong>BloodBound Knights on Steam</strong>, handling the <strong>full production pipeline</strong> and gaining strong experience with <strong>Unreal Engine 5</strong> and <strong>Blueprint</strong>. Prior to that, I published a <strong>mobile game on Google Play</strong> and worked on smaller projects using <strong>C#</strong>, <strong>Roblox Lua</strong>, and <strong>Godot</strong>.",
        fr: "En <strong>2025</strong>, j'ai développé et publié seul <strong>BloodBound Knights sur Steam</strong>, en gérant <strong>toute la chaîne de production</strong> et en acquérant une solide expérience sur <strong>Unreal Engine 5</strong> et en <strong>Blueprint</strong>. Avant cela, j'avais publié un <strong>jeu mobile sur Google Play</strong> et travaillé sur de plus petits projets en <strong>C#</strong>, <strong>Roblox Lua</strong> et <strong>Godot</strong>.",
        pt: "Em <strong>2025</strong>, desenvolvi e lancei sozinho o <strong>BloodBound Knights na Steam</strong>, tratando de <strong>todo o processo de produção</strong> e ganhando uma sólida experiência com o <strong>Unreal Engine 5</strong> e <strong>Blueprint</strong>. Antes disso, publiquei um <strong>jogo para telemóvel no Google Play</strong> e trabalhei em projetos mais pequenos com <strong>C#</strong>, <strong>Roblox Lua</strong> e <strong>Godot</strong>."
    },
    'about.p3': {
        en: "I'm currently a second-year student at <strong>ISCOD</strong>, where I continue to strengthen my development skills and explore new technologies. My passion lies in <strong>game development</strong>, and I'm always eager to take on new challenges and create engaging experiences for players.",
        fr: "Je suis actuellement étudiant en deuxième année à l'<strong>ISCOD</strong>, où je continue à renforcer mes compétences en développement et à explorer de nouvelles technologies. Ma passion, c'est le <strong>développement de jeux vidéo</strong>, et je suis toujours prêt à relever de nouveaux défis pour créer des expériences captivantes pour les joueurs.",
        pt: "Atualmente sou estudante do segundo ano na <strong>ISCOD</strong>, onde continuo a reforçar as minhas competências de desenvolvimento e a explorar novas tecnologias. A minha paixão é o <strong>desenvolvimento de videojogos</strong> e estou sempre pronto para enfrentar novos desafios e criar experiências envolventes para os jogadores."
    },
    'about.resume':        { en: 'Resume', fr: 'CV', pt: 'CV' },

    // Index — sections
    'skills.title':        { en: 'Skills', fr: 'Compétences', pt: 'Competências' },
    'skills.hint':         { en: 'Click any skill to filter projects & experiences', fr: 'Cliquez sur une compétence pour filtrer les projets et expériences', pt: 'Clique numa competência para filtrar projetos e experiências' },
    'skills.clear':        { en: 'Clear', fr: 'Effacer', pt: 'Limpar' },
    'projects.title':      { en: 'Projects', fr: 'Projets', pt: 'Projetos' },
    'experience.title':    { en: 'Professional Experience', fr: 'Expérience professionnelle', pt: 'Experiência profissional' },
    'connect.title':       { en: 'Connect', fr: 'Contact', pt: 'Contacto' },
    'email.open':          { en: 'Open Mail', fr: 'Ouvrir la messagerie', pt: 'Abrir o e-mail' },
    'email.copy':          { en: 'Copy Address', fr: "Copier l'adresse", pt: 'Copiar endereço' },
    'copied':              { en: 'Copied!', fr: 'Copié !', pt: 'Copiado!' },

    // Project / experience pages
    'detail.about':        { en: 'About', fr: 'À propos', pt: 'Sobre' },
    'detail.skillsUsed':   { en: 'Skills Used', fr: 'Compétences utilisées', pt: 'Competências utilizadas' },
    'detail.devShots':     { en: 'Development Screenshots', fr: 'Captures du développement', pt: 'Capturas do desenvolvimento' },
    'detail.screenshots':  { en: 'Screenshots', fr: "Captures d'écran", pt: 'Capturas de ecrã' },
    'detail.playGame':     { en: 'Play Game', fr: 'Jouer', pt: 'Jogar' },
    'detail.visitWebsite': { en: 'Visit Website', fr: 'Voir le site', pt: 'Visitar o site' },
    'detail.playBrowser':  { en: 'Play in Browser', fr: 'Jouer dans le navigateur', pt: 'Jogar no navegador' },
    'game.loading':        { en: 'Loading game…', fr: 'Chargement du jeu…', pt: 'A carregar o jogo…' },
    'game.error':          { en: 'Failed to load game.', fr: 'Impossible de charger le jeu.', pt: 'Não foi possível carregar o jogo.' },

    // Dates (data.js keeps English dates for sorting; these replace the words on screen)
    'date.present':        { en: 'Present', fr: "Aujourd'hui", pt: 'Presente' },
    'date.internalJam':    { en: 'Internal Game Jam', fr: 'Game jam interne', pt: 'Game jam interna' },

    // 404
    '404.title':           { en: 'Page not found', fr: 'Page introuvable', pt: 'Página não encontrada' },
    '404.msg':             { en: "This page doesn't exist or may have been moved. Head back and explore my work instead!",
                             fr: "Cette page n'existe pas ou a peut-être été déplacée. Revenez plutôt découvrir mes projets !",
                             pt: 'Esta página não existe ou pode ter sido movida. Volte e explore antes o meu trabalho!' },
    '404.back':            { en: 'Back to Portfolio', fr: 'Retour au portfolio', pt: 'Voltar ao portfólio' }
};

// --- t('key') → interface text in the current language --- \\
function t(key) {
    var entry = UI[key];
    if (!entry) return key;
    return entry[currentLang] || entry.en;
}

// --- tr(field) → a data.js field in the current language ("text" or { en, fr, pt }) --- \\
function tr(field) {
    if (field && typeof field === 'object') return field[currentLang] || field.en;
    return field;
}

// --- trDate('Jun 2023 – Present') → the same date in the current language --- \\
var MONTHS_SHORT = {                                                        // English abbreviation → shown text
    fr: { Jan: 'Janv.', Feb: 'Févr.', Mar: 'Mars', Apr: 'Avr.', May: 'Mai', Jun: 'Juin', Jul: 'Juil.', Aug: 'Août', Sep: 'Sept.', Oct: 'Oct.', Nov: 'Nov.', Dec: 'Déc.' },
    pt: { Jan: 'Jan.', Feb: 'Fev.', Mar: 'Mar.', Apr: 'Abr.', May: 'Mai.', Jun: 'Jun.', Jul: 'Jul.', Aug: 'Ago.', Sep: 'Set.', Oct: 'Out.', Nov: 'Nov.', Dec: 'Dez.' }
};

function trDate(date) {
    if (!date || currentLang === 'en') return date;
    return date
        .replace(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/g, function(m) { return MONTHS_SHORT[currentLang][m]; })
        .replace('Present', t('date.present'))
        .replace('Internal Game Jam', t('date.internalJam'));
}

// --- Switch language: remember it, put it in the URL (so the link can be shared) and reload --- \\
function setLang(lang) {
    try { localStorage.setItem('lang', lang); } catch (e) {}
    var url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.location.replace(url.toString());
}

// --- Fill the static text of the page --- \\
document.querySelectorAll('[data-i18n]').forEach(function(el) { el.textContent = t(el.dataset.i18n); });
document.querySelectorAll('[data-i18n-html]').forEach(function(el) { el.innerHTML = t(el.dataset.i18nHtml); });
