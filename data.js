// ============================================================
//  data.js — Single source of truth for projects & experiences
//
//  Fields:
//    cardSubtitle    — short line shown on the index page card
//    subtitle        — longer text shown in the hero on the detail page
//    isGame          — true  → button says "Play Game"
//                      false → button says "Visit Website"
//    date            — used for display AND for sorting (most recent first)
//                      format: "Mon YYYY" or "Mon YYYY - Mon YYYY" or "Mon YYYY · Label"
//                      sorting uses the START date; "Present" end means it sorts
//                      above finished projects, with the most recent start winning.
//    devScreenshots  — optional array of image paths shown in the
//                      "Development Screenshots" section on the detail page.
//                      Each image is clickable and opens in a full-screen lightbox.
//
//  To add a new PROJECT or EXPERIENCE, copy the template block
//  at the bottom of each section and fill it in. Nothing else
//  needs to be touched.
//
//  Keys used in `skills` arrays must match keys defined in skills.js
// ============================================================

const projects = {

    bloodbound: {
        title: "Bloodbound Knights",
        date: "Jun 2023 - Present",
        isGame: true,
        cardSubtitle: "A full solo-developed game released on Steam.",
        subtitle: "BloodBound Knights is a fast-paced roguelike shoot 'em up where you battle through procedurally generated levels, unleash powerful spells, and upgrade your gear. Choose your class, master unique abilities, level up, customize your playstyle, and become unstoppable.",
        description: `
            <p>Inspired by <strong>Vampire Survivors</strong>, I wanted to create my own take on the survivor genre after spending countless hours playing and analyzing what made its gameplay loop so addictive. This led to the creation of <strong>BloodBound Knights</strong>, a fast-paced rogue-like action game developed entirely <strong>solo</strong> in <strong>Unreal Engine 5</strong>.</p>

            <p>Rather than simply recreating the formula, I focused on adding a stronger emphasis on <strong>active gameplay</strong> and <strong>character identity</strong>. Instead of relying only on passive progression systems, the game introduces <strong>usable abilities</strong> and <strong>unique character kits</strong>, giving each playable character their own independent abilities and playstyle.</p>

            <p>Throughout development, I handled every aspect of the project myself, including <strong>gameplay programming</strong>, <strong>combat systems</strong>, <strong>enemy AI</strong>, <strong>UI</strong>, <strong>progression systems</strong>, <strong>optimization</strong>, balancing, polishing, and the full release pipeline to Steam. The only external assets used in the project were the character models and ability icons, which were purchased.</p>
        `,
        playLink: "https://store.steampowered.com/app/3577770/BloodBound_Knights/",
        heroImg: "images/Project Files/BBK/Hero/Library Hero.png",
        heroPosition: "center 20%",
        cardImg: "images/Project Files/BBK/Project Image/BBK.png",
        cardImgPosition: "center",
        screenshots: [
            "images/Project Files/BBK/Screenshots/CharacterSelection.gif",
            "images/Project Files/BBK/Screenshots/Abilities.gif",
            "images/Project Files/BBK/Screenshots/Shop.gif"
        ],
        devScreenshots: [
            "images/Project Files/BBK/Dev/1.png",
            "images/Project Files/BBK/Dev/2.png",
            "images/Project Files/BBK/Dev/3.png",
            "images/Project Files/BBK/Dev/4.png",
        ],
        skills: ["ue5", "blueprint", "git", "photoshop", "premiere"]
    },

    aimbuddy: {
        title: "Aim Buddy",
        date: "Dec 2025 - Jan 2026",
        isGame: true,
        cardSubtitle: "A compact 2D aim trainer designed for second-screen play.",
        subtitle: "A compact 2D aim-trainer mini game inspired by osu!, designed to be played while you're dead in an FPS.",
        description: `
            <p>This project was created as a small personal experiment to further expand my <strong>Unity</strong> and <strong>C#</strong> knowledge while developing a simple but polished gameplay loop inspired by competitive shooter downtime.</p>

            <p>Designed to run in a small window on a second monitor, the game activates while waiting to respawn or requeue in FPS games, turning downtime into meaningful aim practice. Players must quickly click appearing circles as they vanish and respawn across the screen, improving reaction time, precision, and consistency.</p>

            <p>To make the experience more engaging over time, I implemented systems such as <strong>XP progression</strong>, <strong>leveling</strong>, statistics tracking, and unlockable cosmetic skins. Despite being a smaller project, it allowed me to experiment with gameplay systems, UI programming, progression design, and responsive player feedback inside Unity.</p>
        `,
        playLink: "https://gabtrex.itch.io/aim-buddy",
        gamePath: "games/Aim Buddy",
        heroImg: "images/Project Files/AB/Hero/Library Hero.png",
        heroPosition: "center 0%",
        cardImg: "images/Project Files/AB/Project Image/AB.png",
        cardImgPosition: "center",
        screenshots: [
            "images/Project Files/AB/Screenshots/1.png",
            "images/Project Files/AB/Screenshots/2.png",
            "images/Project Files/AB/Screenshots/3.png"
        ],
        devScreenshots: [
            "images/Project Files/AB/Dev/1.png",
            "images/Project Files/AB/Dev/2.png",
            "images/Project Files/AB/Dev/3.png",
            "images/Project Files/AB/Dev/4.png",
        ],
        skills: ["unity", "csharp", "git", "photoshop", "webgl"]
    },

    portfolio: {
        title: "Portfolio",
        date: "Mar 2026 - Present",
        isGame: false,
        cardSubtitle: "The website you're currently on.",
        subtitle: "The website you're currently on.",
        description: `
            <p>I developed this <strong>portfolio website</strong> from scratch using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> in order to showcase my projects, technical skills, and professional experiences in a clean and interactive way.</p>

            <p>The website was designed with a strong focus on <strong>presentation</strong>, <strong>smooth navigation</strong>, and <strong>dynamic content management</strong>. Instead of hardcoding every page manually, I created reusable systems using JavaScript to dynamically generate project and experience pages from centralized data files.</p>

            <p>I also implemented features such as <strong>interactive project filtering</strong>, custom project pages, responsive layouts, Open Graph integration, custom UI effects, and integrated <strong>WebGL game embedding</strong> directly inside the website. The portfolio continues to evolve alongside my projects and serves as both a showcase and a personal web development project.</p>
        `,
        playLink: "https://gabtrex.github.io/",
        heroImg: "images/Project Files/Portfolio/Hero/Hero.png",
        heroPosition: "center 75%",
        cardImg: "images/Project Files/Portfolio/Project Image/Hero.png",
        cardImgSize: "135%",
        screenshots: [
            "images/Project Files/Portfolio/Screenshots/1.gif",
            "images/Project Files/Portfolio/Screenshots/2.gif",
            "images/Project Files/Portfolio/Screenshots/3.gif"
        ],
        devScreenshots: [
            "images/Project Files/Portfolio/Dev/1.png",
            "images/Project Files/Portfolio/Dev/2.png",
        ],
        skills: ["html", "css", "javascript", "git", "photoshop"],
    },

    veilshifter: {
        title: "Veil Shifter",
        date: "Jan 2026 · Global Game Jam",
        isGame: true,
        cardSubtitle: "A 48h jam game built in a two-developer team.",
        subtitle: "Participated in my second Global Game Jam with the theme masks as part of a two-developer team, creating a game within 48 hours.",
        description: `
            <p>A fast paced first person game in which players switch and combine masks to create unique weapons and abilities combos, mastering dynamic traversal mechanics and combat to clear levels and defeat enemies in the shortest time possible.</p>
            <p>Designed and built all map levels, focusing on layout, pacing, and player flow to support engaging gameplay. Implemented the full mask system, including selection, switching, and usability mechanics, ensuring each mask felt responsive, intuitive, and seamlessly integrated into both traversal and combat.</p>
            <p>AI was used in this project to generate the mask models, for the UI and the game Logo.</p>
            <p>Global Game Jam 2026, 48h | Theme : Mask</p>
        `,
        playLink: "https://gabtrex.itch.io/veil-shifter",
        gamePath: "games/Veil Shifter",
        allowFullscreen: true,
        heroImg: "images/Project Files/VeilShifter/Hero/Hero.png",
        heroPosition: "center 0%",
        cardImg: "images/Project Files/VeilShifter/Project Image/VS.png",
        cardImgPosition: "left center",
        screenshots: [
            "images/Project Files/VeilShifter/Screenshots/1.png",
            "images/Project Files/VeilShifter/Screenshots/2.png",
            "images/Project Files/VeilShifter/Screenshots/3.png"
        ],
        devScreenshots: [
            "images/Project Files/VeilShifter/Dev/1.png",
            "images/Project Files/VeilShifter/Dev/2.png",
            "images/Project Files/VeilShifter/Dev/3.png",
            "images/Project Files/VeilShifter/Dev/4.png",
        ],
        skills: ["unity", "csharp", "git", "blender", "photoshop", "gamejam", "webgl"]
    },

    mam: {
        title: "Meurtre à Monaco",
        date: "Nov 2025 · Internal Game Jam",
        isGame: true,
        cardSubtitle: "A Cluedo-style mystery built solo in 48 hours.",
        subtitle: "Participated in my first Game Jam with the theme 'on the track', working in a five-person team as the sole developer to create a game within 48 hours.",
        description: `
            <p>Between mystery and the smell of gasoline, welcome to Monaco. You are a driver and must stay focused on the road, but at the last minute, Yukio, one of the drivers, was found dead by the organizer... A tragedy blending high-speed thrills with intense puzzles, discover a Cluedo-style mystery set around the race! So get on the track and solve the Murder in Monaco!</p>
            <p>Global Game Jam 2026, 48h | Theme : On the Track</p>
        `,
        playLink: "https://gabtrex.itch.io/meurtre-monaco",
        gamePath: "games/Meurtre à Monaco",
        heroImg: "images/Project Files/MAM/Hero/MAM.png",
        heroPosition: "center 15%",
        cardImg: "images/Project Files/MAM/Project Image/MAM.png",
        cardImgSize: "135%",
        screenshots: [
            "images/Project Files/MAM/Screenshots/1.gif",
            "images/Project Files/MAM/Screenshots/2.gif",
            "images/Project Files/MAM/Screenshots/3.png"
        ],
        devScreenshots: [
            "images/Project Files/MAM/Dev/1.png",
            "images/Project Files/MAM/Dev/2.png",
            "images/Project Files/MAM/Dev/3.png",
            "images/Project Files/MAM/Dev/4.png",
        ],
        skills: ["godot", "git", "photoshop", "gamejam", "webgl"]
    },

    server: {
        title: "Family Server",
        date: "Jun 2025 - Present",
        isGame: false,
        cardSubtitle: "A personal server hosting our files.",
        subtitle: "A personal server hosting our files, photos, and media, built using NextCloud.",
        description: `
            <p>I created a personal <strong>Nextcloud</strong> server to build a private cloud storage system that is still actively used today by my family and me.</p>

            <p>The goal of the project was to centralize files, make them accessible remotely, and simplify sharing and organization between multiple users and devices. I deployed and configured the server myself using <strong>Docker</strong>, which allowed me to learn more about hosting, server management, and maintaining a real service over time.</p>

            <p>Through this project, I gained practical experience with problem solving, system setup, remote access, storage management, and creating tools designed for everyday use.</p>

            <p>The downloadable resumes available on this portfolio are also hosted directly on this server : <a href="https://gabtrex.ddns.net/s/bPfYbPtpX4PjDE2" target="_blank">Download Resume</a></p>
        `,
        playLink: "https://gabtrex.ddns.net/login?redirect_url=/apps/dashboard/",
        heroImg: "images/Project Files/Server/Hero/1.png",
        heroPosition: "center 50%",
        cardImg: "images/Project Files/Server/Project Image/image.jpg",
        cardImgPosition: "center",
        screenshots: [
            "images/Project Files/Server/Screenshots/1.png",
            "images/Project Files/Server/Screenshots/2.png",
            "images/Project Files/Server/Screenshots/3.png"
        ],
        devScreenshots: [
            "images/Project Files/Server/Dev/1.png",
            "images/Project Files/Server/Dev/2.png",
        ],
        skills: ["windows", "docker"]
    },

    // ── ADD NEW PROJECTS BELOW ──────────────────────────────
    //
    // example: {
    //     title: "My New Game",
    //     date: "Jan 2026",
    //     isGame: true,                          // true = "Play Game", false = "Visit Website"
    //     cardSubtitle: "One-line pitch for the index card.",
    //     subtitle: "Longer description shown in the hero on the detail page.",
    //     description: `<p>Full description here.</p>`,
    //     playLink: "https://...",
    //     gamePath: "games/my-game",             // unzipped WebGL build folder: games/my-game/index.html
    //     allowFullscreen: true,                 // allows full screen to the playable embed, can omit if not wanted
    //     heroImg: "images/Project Files/Example/Hero/hero.png",
    //     heroPosition: "center 20%",
    //     cardImg: "images/Project Files/Example/Project Image/card.png",
    //     cardImgPosition: "center",
    //     screenshots: ["images/Project Files/Example/1.png", "images/Project Files/Example/2.png", "images/Project Files/Example/3.png"],
    //     devScreenshots: [                      // optional — omit to hide the section entirely
    //         "images/Project Files/Example/Dev/1.png",
    //         "images/Project Files/Example/Dev/2.png",
    //     ],
    //     skills: ["unity", "csharp", "git"]
    // },

};

// ============================================================

const experiences = {

    playmanity: {
        title: "Community Manager",
        date: "Jun 2022 – Present",
        cardSubtitle: "Community management, events & content.",
        subtitle: "Playmanity",
        description: `
            <p>Community Manager at Playmanity, serving as the primary point of contact and public-facing presence for the community. Responsible for organizing events and giveaways, actively engaging with users, and maintaining a dynamic and interactive environment to foster long-term community retention and growth.</p>
        `,
        websiteLink: "https://playmanity.net",
        heroImg: "images/Experience Files/Playmanity/Hero/Pm.png",
        heroPosition: "center 0%",
        cardImg: "images/Experience Files/Playmanity/Experience Image/Pm.png",
        cardImgPosition: "left center",
        skills: ["community", "eventorg", "photoshop", "premiere"]
    },

    idlevalleygames: {
        title: "Junior Programmer",
        isGame: true,
        date: "Mar 2026 - Present",
        cardSubtitle: "Improved game feel, core mechanics, and controller usability.",
        subtitle: "Idle Valley Games",
        description: `
            <p>Focused on improving core gameplay feel, interaction clarity, and system stability across multiple gameplay features. Worked on both player experience and underlying systems to enhance usability, particularly on controller, while also strengthening onboarding flow and overall game reliability.</p>

            <p><strong>Game Feel Improvements :</strong></p>
            <ul>
                <li>Implemented vignette effect to enhance player feedback during crouching</li>
                <li>Improved stamina feedback system to provide clearer player state awareness</li>
            </ul>

            <p><strong>Gameplay Systems & Logic :</strong></p>
            <ul>
                <li>Reworked interaction and biting systems to improve usability, particularly on controller, by increasing detection zones and prioritizing key interactable objects</li>
                <li>Refined animation logic, including implementation of contextual actions such as throwing animations</li>
                <li>Contributed to the development of a dynamic tutorial system with adaptive text based on input device (controller vs keyboard)</li>
                <li>Designed and implemented inventory and item systems, as well as pickup mechanics</li>
                <li>Adjusted tutorial gameplay rules to prevent lethal damage during onboarding sequences</li>
            </ul>

            <p><strong>Bug Fixing & Stability :</strong></p>
            <ul>
                <li>Fixed crouch state preventing proper jump execution</li>
                <li>Resolved autorun issue causing unintended stamina drain after sprinting</li>
                <li>Fixed ladder interaction bug causing unintended airborne climbing and teleportation after enemy capture events</li>
                <li>Corrected stamina system issue preventing values from reaching zero</li>
                <li>Fixed interaction and biting exploits allowing actions through walls</li>
            </ul>
        `,
        websiteLink: "https://store.steampowered.com/app/4002300/Goblin_Mode/",
        heroImg: "images/Experience Files/idlevalleygames/Hero/Hero.png",
        heroPosition: "center 100%",
        cardImg: "images/Experience Files/idlevalleygames/Card/Card.png",
        cardImgPosition: "center",
        skills: ["community", "eventorg", "photoshop", "premiere"]
    },

    // ── ADD NEW EXPERIENCES BELOW ───────────────────────────
    //
    // example: {
    //     title: "Job Title",
    //     date: "Jan 2024 – Present",
    //     isGame: false,                         // true = "Play Game", false/omit = "Visit Website"
    //     cardSubtitle: "One-line pitch for the index card.",
    //     subtitle: "Company Name (shown in hero on detail page).",
    //     description: `<p>What you did there.</p>`,
    //     websiteLink: "https://...",
    //     heroImg: "images/Experience Files/Company/Hero/hero.png",
    //     heroPosition: "center 20%",
    //     heroSize: "cover",                     // e.g. "150%" to zoom in, omit for default (cover)
    //     cardImg: "images/Experience Files/Company/Experience Image/card.png",
    //     cardImgPosition: "center",             // e.g. "left center", "center", "right center"
    //     cardImgSize: "100%",                   // e.g. "135%" to zoom in, omit for default (cover)
    //     skills: ["photoshop"]
    // },

};

// ============================================================
//  Date sorting utility — used by index.html
//
//  Rules:
//  1. Always sorts by the START date (first Mon YYYY found).
//  2. If the string contains "Present", it's treated as ongoing.
//     Ongoing projects sort above finished ones.
//     Among two ongoing projects, the more recent START date wins.
//     e.g. "Mar 2026 - Present" > "Jun 2023 - Present"
//  3. Finished projects sort by their START date after that.
// ============================================================

const MONTHS = { jan:0, feb:1, mar:2, apr:3, may:4, jun:5, jul:6, aug:7, sep:8, oct:9, nov:10, dec:11 };

function parseStartDate(dateStr) {
    if (!dateStr) return 0;
    var m = dateStr.match(/([a-z]{3})\s+(\d{4})/i);
    if (m) {
        var month = MONTHS[m[1].toLowerCase()];
        if (month === undefined) month = 0;
        return new Date(parseInt(m[2]), month).getTime();
    }
    var y = dateStr.match(/(\d{4})/);
    if (y) return new Date(parseInt(y[1]), 0).getTime();
    return 0;
}

function isOngoing(dateStr) {
    return /present/i.test(dateStr);
}

function sortedEntries(obj) {
    return Object.entries(obj).sort(function(a, b) {
        var aOngoing = isOngoing(a[1].date);
        var bOngoing = isOngoing(b[1].date);
        if (aOngoing && !bOngoing) return -1;
        if (!aOngoing && bOngoing) return 1;
        return parseStartDate(b[1].date) - parseStartDate(a[1].date);
    });
}