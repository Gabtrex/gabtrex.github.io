// ============================================================
//  data.js — Single source of truth for projects & experiences
//
//  Languages:
//    Text fields (title, cardSubtitle, subtitle, description) can be a plain
//    "text" (same in every language) or { en: "...", fr: "...", pt: "..." }.
//    Missing languages fall back to English. `date` always stays in English
//    (it's used for sorting) and is translated automatically on screen.
//
//  Fields:
//    cardSubtitle    — short line shown on the index page card
//    subtitle        — longer text shown in the hero on the detail page
//    isGame          — true  → button says "Play Game"
//                      false → button says "Visit Website"
//    date            — used for display AND for sorting (most recent first)
//                      format: "Mon YYYY" or "Mon YYYY – Mon YYYY" or "Mon YYYY · Label"
//                      sorting uses the START date; "Present" end means it sorts
//                      above finished projects, with the most recent start winning.
//    devScreenshots  — optional array of image paths shown in the
//                      "Development Screenshots" section on the detail page.
//                      Each image is clickable and opens in a full-screen lightbox.
//    heroSize /      — optional background size for the hero / index card
//    cardImgSize       ("cover" by default, e.g. "135%" to zoom in)
//
//  To add a new PROJECT or EXPERIENCE, copy the template block
//  at the bottom of each section and fill it in. Nothing else
//  needs to be touched.
//
//  Keys used in `skills` arrays must match keys defined in skills.js
// ============================================================

const projects = {

    bloodbound: {
        title: "BloodBound Knights",
        date: "Jun 2023 – Present",
        isGame: true,
        cardSubtitle: {
            en: "A full solo-developed game released on Steam.",
            fr: "Un jeu entièrement développé en solo et publié sur Steam.",
            pt: "Um jogo desenvolvido inteiramente a solo e lançado na Steam."
        },
        subtitle: {
            en: "BloodBound Knights is a fast-paced roguelike shoot 'em up where you battle through procedurally generated levels, unleash powerful spells, and upgrade your gear. Choose your class, master unique abilities, level up, customize your playstyle, and become unstoppable.",
            fr: "BloodBound Knights est un shoot 'em up roguelike nerveux dans lequel vous traversez des niveaux générés procéduralement, déchaînez de puissants sorts et améliorez votre équipement. Choisissez votre classe, maîtrisez des capacités uniques, montez en niveau, personnalisez votre style de jeu et devenez inarrêtable.",
            pt: "BloodBound Knights é um shoot 'em up roguelike frenético em que atravessas níveis gerados proceduralmente, lanças feitiços poderosos e melhoras o teu equipamento. Escolhe a tua classe, domina habilidades únicas, sobe de nível, personaliza o teu estilo de jogo e torna-te imparável."
        },
        description: {
            en: `
            <p>Inspired by <strong>Vampire Survivors</strong>, I wanted to create my own take on the survivor genre after spending countless hours playing and analyzing what made its gameplay loop so addictive. This led to the creation of <strong>BloodBound Knights</strong>, a fast-paced rogue-like action game developed entirely <strong>solo</strong> in <strong>Unreal Engine 5</strong>.</p>

            <p>Rather than simply recreating the formula, I focused on adding a stronger emphasis on <strong>active gameplay</strong> and <strong>character identity</strong>. Instead of relying only on passive progression systems, the game introduces <strong>usable abilities</strong> and <strong>unique character kits</strong>, giving each playable character their own independent abilities and playstyle.</p>

            <p>Throughout development, I handled every aspect of the project myself, including <strong>gameplay programming</strong>, <strong>combat systems</strong>, <strong>enemy AI</strong>, <strong>UI</strong>, <strong>progression systems</strong>, <strong>optimization</strong>, balancing, polishing, and the full release pipeline to Steam. The only external assets used in the project were the character models and ability icons, which were purchased.</p>
            `,
            fr: `
            <p>Inspiré par <strong>Vampire Survivors</strong>, j'ai voulu créer ma propre version du genre survivor après avoir passé d'innombrables heures à y jouer et à analyser ce qui rendait sa boucle de gameplay si addictive. C'est ainsi qu'est né <strong>BloodBound Knights</strong>, un jeu d'action rogue-like nerveux développé entièrement <strong>en solo</strong> sur <strong>Unreal Engine 5</strong>.</p>

            <p>Plutôt que de simplement reproduire la formule, j'ai mis davantage l'accent sur un <strong>gameplay actif</strong> et sur l'<strong>identité des personnages</strong>. Au lieu de reposer uniquement sur des systèmes de progression passifs, le jeu introduit des <strong>capacités utilisables</strong> et des <strong>kits de personnages uniques</strong>, ce qui donne à chaque personnage jouable ses propres capacités et son propre style de jeu.</p>

            <p>Tout au long du développement, j'ai géré moi-même chaque aspect du projet : <strong>programmation du gameplay</strong>, <strong>systèmes de combat</strong>, <strong>IA des ennemis</strong>, <strong>interface</strong>, <strong>systèmes de progression</strong>, <strong>optimisation</strong>, équilibrage, finitions et tout le processus de sortie sur Steam. Les seuls assets externes utilisés sont les modèles des personnages et les icônes des capacités, qui ont été achetés.</p>
            `,
            pt: `
            <p>Inspirado em <strong>Vampire Survivors</strong>, quis criar a minha própria versão do género survivor depois de passar inúmeras horas a jogá-lo e a analisar o que tornava o seu ciclo de jogo tão viciante. Foi assim que nasceu <strong>BloodBound Knights</strong>, um jogo de ação rogue-like frenético desenvolvido inteiramente <strong>a solo</strong> em <strong>Unreal Engine 5</strong>.</p>

            <p>Em vez de simplesmente recriar a fórmula, dei mais ênfase à <strong>jogabilidade ativa</strong> e à <strong>identidade das personagens</strong>. Em vez de depender apenas de sistemas de progressão passivos, o jogo introduz <strong>habilidades ativas</strong> e <strong>kits de personagem únicos</strong>, dando a cada personagem jogável as suas próprias habilidades e o seu estilo de jogo.</p>

            <p>Ao longo do desenvolvimento, tratei sozinho de todos os aspetos do projeto, incluindo <strong>programação de gameplay</strong>, <strong>sistemas de combate</strong>, <strong>IA dos inimigos</strong>, <strong>interface</strong>, <strong>sistemas de progressão</strong>, <strong>otimização</strong>, equilíbrio, polimento e todo o processo de lançamento na Steam. Os únicos recursos externos utilizados foram os modelos das personagens e os ícones das habilidades, que foram comprados.</p>
            `
        },
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
        date: "Dec 2025 – Jan 2026",
        isGame: true,
        cardSubtitle: {
            en: "A compact 2D aim trainer designed for second-screen play.",
            fr: "Un aim trainer 2D compact conçu pour être joué sur un second écran.",
            pt: "Um aim trainer 2D compacto pensado para jogar num segundo ecrã."
        },
        subtitle: {
            en: "A compact 2D aim-trainer mini game inspired by osu!, designed to be played while you're dead in an FPS.",
            fr: "Un mini-jeu d'entraînement à la visée en 2D inspiré d'osu!, conçu pour être joué pendant que vous êtes mort dans un FPS.",
            pt: "Um minijogo de treino de pontaria em 2D inspirado em osu!, pensado para jogar enquanto estás morto num FPS."
        },
        description: {
            en: `
            <p>This project was created as a small personal experiment to further expand my <strong>Unity</strong> and <strong>C#</strong> knowledge while developing a simple but polished gameplay loop inspired by competitive shooter downtime.</p>

            <p>Designed to run in a small window on a second monitor, the game activates while waiting to respawn or requeue in FPS games, turning downtime into meaningful aim practice. Players must quickly click appearing circles as they vanish and respawn across the screen, improving reaction time, precision, and consistency.</p>

            <p>To make the experience more engaging over time, I implemented systems such as <strong>XP progression</strong>, <strong>leveling</strong>, statistics tracking, and unlockable cosmetic skins. Despite being a smaller project, it allowed me to experiment with gameplay systems, UI programming, progression design, and responsive player feedback inside Unity.</p>
            `,
            fr: `
            <p>Ce projet est né d'une petite expérimentation personnelle pour approfondir mes connaissances en <strong>Unity</strong> et en <strong>C#</strong>, tout en développant une boucle de gameplay simple mais soignée, inspirée des temps morts des jeux de tir compétitifs.</p>

            <p>Conçu pour tourner dans une petite fenêtre sur un second écran, le jeu se lance pendant l'attente d'une réapparition ou d'une nouvelle partie dans un FPS, ce qui transforme ces temps morts en un vrai entraînement à la visée. Les joueurs doivent cliquer rapidement sur des cercles qui apparaissent, disparaissent et réapparaissent ailleurs à l'écran, pour améliorer leur temps de réaction, leur précision et leur régularité.</p>

            <p>Pour rendre l'expérience plus motivante sur la durée, j'ai mis en place des systèmes comme la <strong>progression par XP</strong>, la <strong>montée de niveau</strong>, le suivi de statistiques et des skins cosmétiques à débloquer. Même s'il s'agit d'un petit projet, il m'a permis d'expérimenter les systèmes de gameplay, la programmation d'interface, la conception de la progression et le feedback joueur réactif dans Unity.</p>
            `,
            pt: `
            <p>Este projeto nasceu como uma pequena experiência pessoal para aprofundar os meus conhecimentos de <strong>Unity</strong> e <strong>C#</strong>, desenvolvendo um ciclo de jogo simples mas cuidado, inspirado nos tempos mortos dos shooters competitivos.</p>

            <p>Pensado para correr numa pequena janela num segundo monitor, o jogo ativa-se enquanto se espera para renascer ou entrar numa nova partida em jogos FPS, transformando esses tempos mortos em treino de pontaria útil. Os jogadores têm de clicar rapidamente nos círculos que aparecem antes que desapareçam e reapareçam noutro ponto do ecrã, melhorando o tempo de reação, a precisão e a consistência.</p>

            <p>Para tornar a experiência mais envolvente ao longo do tempo, implementei sistemas como <strong>progressão por XP</strong>, <strong>subida de nível</strong>, registo de estatísticas e skins cosméticas desbloqueáveis. Apesar de ser um projeto mais pequeno, permitiu-me experimentar sistemas de jogo, programação de interfaces, design de progressão e feedback responsivo ao jogador no Unity.</p>
            `
        },
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
        title: { en: "Portfolio", fr: "Portfolio", pt: "Portfólio" },
        date: "Mar 2026 – Present",
        isGame: false,
        cardSubtitle: {
            en: "The website you're currently on.",
            fr: "Le site sur lequel vous êtes en ce moment.",
            pt: "O site em que está neste momento."
        },
        subtitle: {
            en: "The website you're currently on.",
            fr: "Le site sur lequel vous êtes en ce moment.",
            pt: "O site em que está neste momento."
        },
        description: {
            en: `
            <p>I developed this <strong>portfolio website</strong> from scratch using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> in order to showcase my projects, technical skills, and professional experiences in a clean and interactive way.</p>

            <p>The website was designed with a strong focus on <strong>presentation</strong>, <strong>smooth navigation</strong>, and <strong>dynamic content management</strong>. Instead of hardcoding every page manually, I created reusable systems using JavaScript to dynamically generate project and experience pages from centralized data files.</p>

            <p>I also implemented features such as <strong>interactive project filtering</strong>, custom project pages, responsive layouts, Open Graph integration, custom UI effects, <strong>English, French and Portuguese versions</strong>, and integrated <strong>WebGL game embedding</strong> directly inside the website. The portfolio continues to evolve alongside my projects and serves as both a showcase and a personal web development project.</p>
            `,
            fr: `
            <p>J'ai développé ce <strong>site portfolio</strong> de zéro en <strong>HTML</strong>, <strong>CSS</strong> et <strong>JavaScript</strong> afin de présenter mes projets, mes compétences techniques et mes expériences professionnelles de manière claire et interactive.</p>

            <p>Le site a été pensé avec une attention particulière portée à la <strong>présentation</strong>, à la <strong>fluidité de la navigation</strong> et à la <strong>gestion dynamique du contenu</strong>. Plutôt que de coder chaque page à la main, j'ai créé des systèmes réutilisables en JavaScript qui génèrent dynamiquement les pages des projets et des expériences à partir de fichiers de données centralisés.</p>

            <p>J'ai aussi mis en place des fonctionnalités comme le <strong>filtrage interactif des projets</strong>, des pages de projet personnalisées, une mise en page responsive, l'intégration Open Graph, des effets d'interface personnalisés, des <strong>versions en anglais, français et portugais</strong> et l'<strong>intégration de jeux WebGL</strong> directement dans le site. Le portfolio continue d'évoluer avec mes projets et sert à la fois de vitrine et de projet personnel de développement web.</p>
            `,
            pt: `
            <p>Desenvolvi este <strong>site de portfólio</strong> de raiz em <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong> para apresentar os meus projetos, competências técnicas e experiências profissionais de forma clara e interativa.</p>

            <p>O site foi concebido com especial atenção à <strong>apresentação</strong>, à <strong>navegação fluida</strong> e à <strong>gestão dinâmica de conteúdos</strong>. Em vez de programar cada página manualmente, criei sistemas reutilizáveis em JavaScript que geram dinamicamente as páginas de projetos e experiências a partir de ficheiros de dados centralizados.</p>

            <p>Implementei também funcionalidades como a <strong>filtragem interativa de projetos</strong>, páginas de projeto personalizadas, layouts responsivos, integração Open Graph, efeitos de interface personalizados, <strong>versões em inglês, francês e português</strong> e a <strong>integração de jogos WebGL</strong> diretamente no site. O portfólio continua a evoluir com os meus projetos e serve tanto de montra como de projeto pessoal de desenvolvimento web.</p>
            `
        },
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
        skills: ["html", "css", "javascript", "git", "photoshop"]
    },

    veilshifter: {
        title: "Veil Shifter",
        date: "Jan 2026 · Global Game Jam",
        isGame: true,
        cardSubtitle: {
            en: "A 48h jam game built in a two-developer team.",
            fr: "Un jeu de game jam réalisé en 48 h dans une équipe de deux développeurs.",
            pt: "Um jogo de game jam feito em 48 h numa equipa de dois programadores."
        },
        subtitle: {
            en: "Participated in the Global Game Jam 2026, my second game jam, with the theme 'Mask', as part of a two-developer team, creating a game within 48 hours.",
            fr: "Participation à la Global Game Jam 2026, ma deuxième game jam, sur le thème « Mask », dans une équipe de deux développeurs, avec un jeu créé en 48 heures.",
            pt: "Participação na Global Game Jam 2026, a minha segunda game jam, com o tema 'Mask', numa equipa de dois programadores, criando um jogo em 48 horas."
        },
        description: {
            en: `
            <p>A fast-paced first-person game in which players switch and combine masks to create unique weapon and ability combos, mastering dynamic traversal mechanics and combat to clear levels and defeat enemies in the shortest time possible.</p>
            <p>Designed and built all map levels, focusing on layout, pacing, and player flow to support engaging gameplay. Implemented the full mask system, including selection, switching, and usability mechanics, ensuring each mask felt responsive, intuitive, and seamlessly integrated into both traversal and combat.</p>
            <p>AI was used in this project to generate the mask models, the UI and the game logo.</p>
            <p>Global Game Jam 2026, 48h | Theme : Mask</p>
            `,
            fr: `
            <p>Un jeu nerveux à la première personne dans lequel les joueurs changent et combinent des masques pour créer des combinaisons uniques d'armes et de capacités, en maîtrisant des déplacements dynamiques et le combat pour terminer les niveaux et vaincre les ennemis le plus vite possible.</p>
            <p>J'ai conçu et construit tous les niveaux, en travaillant leur agencement, le rythme et le parcours du joueur pour soutenir un gameplay prenant. J'ai implémenté tout le système de masques, dont la sélection, le changement et leur utilisation, pour que chaque masque soit réactif, intuitif et parfaitement intégré aux déplacements comme au combat.</p>
            <p>L'IA a été utilisée dans ce projet pour générer les modèles des masques, l'interface et le logo du jeu.</p>
            <p>Global Game Jam 2026, 48 h | Thème : Mask</p>
            `,
            pt: `
            <p>Um jogo frenético na primeira pessoa em que os jogadores trocam e combinam máscaras para criar combinações únicas de armas e habilidades, dominando mecânicas de deslocação dinâmicas e o combate para completar os níveis e derrotar os inimigos no menor tempo possível.</p>
            <p>Concebi e construí todos os níveis, com foco no layout, no ritmo e no percurso do jogador para apoiar uma jogabilidade envolvente. Implementei todo o sistema de máscaras, incluindo a seleção, a troca e a sua utilização, garantindo que cada máscara fosse responsiva, intuitiva e perfeitamente integrada tanto na deslocação como no combate.</p>
            <p>Neste projeto foi usada IA para gerar os modelos das máscaras, a interface e o logótipo do jogo.</p>
            <p>Global Game Jam 2026, 48 h | Tema: Mask</p>
            `
        },
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
        cardSubtitle: {
            en: "A Cluedo-style mystery built in 48 hours as the team's sole developer.",
            fr: "Une enquête façon Cluedo créée en 48 heures, en tant que seul développeur de l'équipe.",
            pt: "Um mistério ao estilo Cluedo criado em 48 horas, como único programador da equipa."
        },
        subtitle: {
            en: "Participated in my first game jam with the theme 'On the Track', working in a five-person team as the sole developer to create a game within 48 hours.",
            fr: "Participation à ma première game jam sur le thème « On the Track », dans une équipe de cinq personnes où j'étais le seul développeur, avec un jeu créé en 48 heures.",
            pt: "Participação na minha primeira game jam, com o tema 'On the Track', numa equipa de cinco pessoas em que era o único programador, criando um jogo em 48 horas."
        },
        description: {
            en: `
            <p>Between mystery and the smell of gasoline, welcome to Monaco. You are a driver and must stay focused on the road, but at the last minute, Yukio, one of the drivers, was found dead by the organizer... A tragedy blending high-speed thrills with intense puzzles, discover a Cluedo-style mystery set around the race! So get on the track and solve the Murder in Monaco!</p>
            <p>Internal Game Jam, Nov 2025, 48h | Theme : On the Track</p>
            `,
            fr: `
            <p>Entre mystère et odeur d'essence, bienvenue à Monaco. Vous êtes pilote et devez rester concentré sur la route, mais à la dernière minute, Yukio, l'un des pilotes, est retrouvé mort par l'organisateur... Une tragédie qui mêle sensations à grande vitesse et énigmes intenses : découvrez une enquête façon Cluedo autour de la course ! Alors, en piste, et résolvez le Meurtre à Monaco !</p>
            <p>Game jam interne, nov. 2025, 48 h | Thème : On the Track</p>
            `,
            pt: `
            <p>Entre mistério e cheiro a gasolina, bem-vindo ao Mónaco. És piloto e tens de te manter concentrado na estrada, mas, no último minuto, Yukio, um dos pilotos, é encontrado morto pelo organizador... Uma tragédia que mistura emoções a alta velocidade com enigmas intensos: descobre um mistério ao estilo Cluedo à volta da corrida! Por isso, entra em pista e resolve o Assassínio no Mónaco!</p>
            <p>Game jam interna, nov. 2025, 48 h | Tema: On the Track</p>
            `
        },
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
        title: { en: "Family Server", fr: "Serveur familial", pt: "Servidor familiar" },
        date: "Jun 2025 – Present",
        isGame: false,
        cardSubtitle: {
            en: "A personal server hosting our files.",
            fr: "Un serveur personnel qui héberge nos fichiers.",
            pt: "Um servidor pessoal que aloja os nossos ficheiros."
        },
        subtitle: {
            en: "A personal server hosting our files, photos, and media, built using Nextcloud.",
            fr: "Un serveur personnel qui héberge nos fichiers, photos et médias, construit avec Nextcloud.",
            pt: "Um servidor pessoal que aloja os nossos ficheiros, fotos e conteúdos multimédia, construído com Nextcloud."
        },
        description: {
            en: `
            <p>I created a personal <strong>Nextcloud</strong> server to build a private cloud storage system that is still actively used today by my family and me.</p>

            <p>The goal of the project was to centralize files, make them accessible remotely, and simplify sharing and organization between multiple users and devices. I deployed and configured the server myself using <strong>Docker</strong>, which allowed me to learn more about hosting, server management, and maintaining a real service over time.</p>

            <p>Through this project, I gained practical experience with problem solving, system setup, remote access, storage management, and creating tools designed for everyday use.</p>

            <p>The downloadable resumes available on this portfolio are also hosted directly on this server : <a href="https://gabtrex.ddns.net/s/bPfYbPtpX4PjDE2" target="_blank">Download Resume</a></p>
            `,
            fr: `
            <p>J'ai créé un serveur <strong>Nextcloud</strong> personnel pour mettre en place un stockage cloud privé, toujours utilisé activement aujourd'hui par ma famille et moi.</p>

            <p>L'objectif du projet était de centraliser les fichiers, de les rendre accessibles à distance et de simplifier le partage et l'organisation entre plusieurs utilisateurs et appareils. J'ai déployé et configuré le serveur moi-même avec <strong>Docker</strong>, ce qui m'a permis d'en apprendre davantage sur l'hébergement, l'administration de serveur et la maintenance d'un vrai service dans la durée.</p>

            <p>Grâce à ce projet, j'ai acquis une expérience concrète en résolution de problèmes, configuration système, accès à distance, gestion du stockage et création d'outils pensés pour un usage quotidien.</p>

            <p>Les CV téléchargeables sur ce portfolio sont d'ailleurs hébergés directement sur ce serveur : <a href="https://gabtrex.ddns.net/s/bPfYbPtpX4PjDE2" target="_blank">Télécharger le CV</a></p>
            `,
            pt: `
            <p>Criei um servidor <strong>Nextcloud</strong> pessoal para montar um sistema de armazenamento na nuvem privado, que ainda hoje é usado ativamente pela minha família e por mim.</p>

            <p>O objetivo do projeto era centralizar os ficheiros, torná-los acessíveis remotamente e simplificar a partilha e a organização entre vários utilizadores e dispositivos. Instalei e configurei o servidor eu próprio com <strong>Docker</strong>, o que me permitiu aprender mais sobre alojamento, administração de servidores e manutenção de um serviço real ao longo do tempo.</p>

            <p>Com este projeto, ganhei experiência prática em resolução de problemas, configuração de sistemas, acesso remoto, gestão de armazenamento e criação de ferramentas pensadas para o dia a dia.</p>

            <p>Os CVs disponíveis para descarregar neste portfólio também estão alojados diretamente neste servidor: <a href="https://gabtrex.ddns.net/s/bPfYbPtpX4PjDE2" target="_blank">Descarregar CV</a></p>
            `
        },
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

    AM: {
        title: { en: "Childcare Assistant", fr: "Assistante maternelle", pt: "Ama" },
        date: "Jun 2026",
        isGame: false,
        cardSubtitle: {
            en: "Website developed for a professional childcare business.",
            fr: "Site web développé pour une activité professionnelle d'assistante maternelle.",
            pt: "Site desenvolvido para uma atividade profissional de ama."
        },
        subtitle: {
            en: "A responsive website developed for my mother's childcare business to present her services, qualifications, daily activities, and provide an easy way for parents to get in touch.",
            fr: "Un site responsive développé pour l'activité d'assistante maternelle de ma mère, afin de présenter ses services, ses qualifications et les activités du quotidien, et de permettre aux parents de la contacter facilement.",
            pt: "Um site responsivo desenvolvido para a atividade de ama da minha mãe, para apresentar os seus serviços, qualificações e atividades do dia a dia, e dar aos pais uma forma simples de a contactar."
        },
        description: {
            en: `
            <p>This project was developed as a complete promotional website for a professional childcare business. The goal was to create a clean, modern, and accessible platform where parents can quickly learn about the services offered, discover the childcare environment through photos, and easily make contact.</p>

            <p>The website was built with HTML, CSS, and JavaScript, featuring a fully responsive layout, smooth navigation, and a strong focus on readability. Particular attention was given to creating a warm visual identity while keeping the interface simple and intuitive.</p>

            <p>Beyond showcasing the business, the project also served as an opportunity to strengthen front-end development skills by designing and implementing a complete website from scratch.</p>
            `,
            fr: `
            <p>Ce projet a été développé comme un site vitrine complet pour une activité professionnelle d'assistante maternelle. L'objectif était de créer une plateforme claire, moderne et accessible, où les parents peuvent rapidement découvrir les services proposés, voir le lieu d'accueil en photos et prendre contact facilement.</p>

            <p>Le site a été réalisé en HTML, CSS et JavaScript, avec une mise en page entièrement responsive, une navigation fluide et une attention particulière portée à la lisibilité. J'ai veillé à créer une identité visuelle chaleureuse tout en gardant une interface simple et intuitive.</p>

            <p>Au-delà de la présentation de l'activité, ce projet m'a permis de renforcer mes compétences en développement front-end en concevant et en réalisant un site complet de zéro.</p>
            `,
            pt: `
            <p>Este projeto foi desenvolvido como um site promocional completo para uma atividade profissional de ama. O objetivo era criar uma plataforma clara, moderna e acessível, onde os pais pudessem conhecer rapidamente os serviços oferecidos, ver o espaço de acolhimento através de fotos e entrar em contacto facilmente.</p>

            <p>O site foi construído em HTML, CSS e JavaScript, com um layout totalmente responsivo, navegação fluida e especial atenção à legibilidade. Houve um cuidado particular em criar uma identidade visual acolhedora, mantendo a interface simples e intuitiva.</p>

            <p>Além de apresentar a atividade, o projeto foi também uma oportunidade para reforçar as minhas competências de desenvolvimento front-end, concebendo e implementando um site completo de raiz.</p>
            `
        },
        playLink: "https://edisabel.github.io/assistante_maternelle/",
        heroImg: "images/Project Files/Childcare Assistant/Hero/hero.png",
        heroPosition: "center center",
        cardImg: "images/Project Files/Childcare Assistant/Project Image/card.png",
        cardImgPosition: "center",
        screenshots: [
            "images/Project Files/Childcare Assistant/Screenshots/1.png",
            "images/Project Files/Childcare Assistant/Screenshots/2.png",
            "images/Project Files/Childcare Assistant/Screenshots/3.png"
        ],
        devScreenshots: [
            "images/Project Files/Childcare Assistant/Dev/1.png",
            "images/Project Files/Childcare Assistant/Dev/2.png"
        ],
        skills: ["html", "css", "javascript"]
    },

    // --- ADD NEW PROJECTS BELOW --- \\
    //
    // example: {
    //     title: "My New Game",                  // plain text = same in every language
    //     date: "Jan 2026",
    //     isGame: true,                          // true = "Play Game", false = "Visit Website"
    //     cardSubtitle: {                        // { en, fr, pt } = translated (missing ones fall back to en)
    //         en: "One-line pitch for the index card.",
    //         fr: "Une phrase d'accroche pour la carte.",
    //         pt: "Uma frase de apresentação para o cartão."
    //     },
    //     subtitle: { en: "Longer description shown in the hero on the detail page.", fr: "...", pt: "..." },
    //     description: { en: `<p>Full description here.</p>`, fr: `<p>...</p>`, pt: `<p>...</p>` },
    //     playLink: "https://...",
    //     gamePath: "games/my-game",             // unzipped WebGL build folder: games/my-game/index.html
    //     allowFullscreen: true,                 // allows full screen to the playable embed, can omit if not wanted
    //     heroImg: "images/Project Files/Example/Hero/hero.png",
    //     heroPosition: "center 20%",
    //     heroSize: "cover",                     // e.g. "150%" to zoom in, omit for default (cover)
    //     cardImg: "images/Project Files/Example/Project Image/card.png",
    //     cardImgPosition: "center",
    //     cardImgSize: "100%",                   // e.g. "135%" to zoom in, omit for default (cover)
    //     screenshots: ["images/Project Files/Example/Screenshots/1.png", "images/Project Files/Example/Screenshots/2.png", "images/Project Files/Example/Screenshots/3.png"],
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
        title: { en: "Community Manager", fr: "Community Manager", pt: "Gestor de Comunidade" },
        date: "Jun 2022 – Aug 2026",
        cardSubtitle: {
            en: "Community management, events & content.",
            fr: "Gestion de communauté, événements et contenu.",
            pt: "Gestão de comunidade, eventos e conteúdos."
        },
        subtitle: "Playmanity",
        description: {
            en: `
            <p>Community Manager at Playmanity, serving as the primary point of contact and public-facing presence for the community. Responsible for organizing events and giveaways, actively engaging with users, and maintaining a dynamic and interactive environment to foster long-term community retention and growth.</p>
            `,
            fr: `
            <p>Community Manager chez Playmanity, principal point de contact et visage public de la communauté. Chargé d'organiser des événements et des giveaways, d'échanger activement avec les utilisateurs et de faire vivre un environnement dynamique et interactif pour favoriser la fidélisation et la croissance de la communauté sur le long terme.</p>
            `,
            pt: `
            <p>Gestor de Comunidade na Playmanity, como principal ponto de contacto e rosto público da comunidade. Responsável por organizar eventos e sorteios, interagir ativamente com os utilizadores e manter um ambiente dinâmico e interativo para promover a fidelização e o crescimento da comunidade a longo prazo.</p>
            `
        },
        websiteLink: "https://playmanity.net",
        heroImg: "images/Experience Files/Playmanity/Hero/Pm.png",
        heroPosition: "center 0%",
        cardImg: "images/Experience Files/Playmanity/Card/Pm.png",
        cardImgPosition: "left center",
        skills: ["community", "eventorg", "photoshop", "premiere"]
    },

    idlevalleygames: {
        title: { en: "Junior Programmer", fr: "Programmeur junior", pt: "Programador Júnior" },
        isGame: true,
        date: "Mar 2026 – Sep 2026",
        cardSubtitle: {
            en: "Improved game feel, gameplay systems, and controller usability.",
            fr: "Amélioration du game feel, des systèmes de gameplay et de la jouabilité à la manette.",
            pt: "Melhoria do game feel, dos sistemas de jogo e da jogabilidade com comando."
        },
        subtitle: "Idle Valley Games",
        description: {
            en: `
            <p>Worked on <strong>Goblin Mode</strong> as a Junior Programmer, focusing on gameplay systems, game feel, controller usability, and bug fixing. Contributed to both player-facing features and underlying gameplay logic to improve responsiveness, feedback, onboarding, and overall stability.</p>

            <p><strong>Game Feel & Player Feedback :</strong></p>
            <ul>
                <li>Implemented a vignette effect to provide additional visual feedback while crouching</li>
                <li>Improved stamina feedback to make the player's current stamina state clearer</li>
                <li>Implemented contextual highlight colors for different interaction types</li>
                <li>Added conditional highlighting so unavailable objects are no longer highlighted, such as objects that are too heavy to pick up with the slingshot</li>
            </ul>

            <p><strong>Gameplay Systems & Logic :</strong></p>
            <ul>
                <li>Reworked interaction and biting systems to improve responsiveness and usability, particularly on controller</li>
                <li>Expanded detection zones and implemented prioritization logic to favor important interactable objects</li>
                <li>Refined animation logic, including contextual actions such as throwing animations</li>
                <li>Contributed to a dynamic tutorial text system adapting instructions to controller or keyboard input</li>
                <li>Implemented inventory and item display systems, including item stacking</li>
                <li>Added tutorial-specific logic preventing the player from taking lethal damage during onboarding</li>
            </ul>

            <p><strong>Slingshot & Item System :</strong></p>
            <ul>
                <li>Developed a pickable and equippable slingshot allowing players to pick up and launch objects from the environment</li>
                <li>Implemented visual feedback displaying the selected object directly on the slingshot</li>
                <li>Made projectile positioning fully customizable for different item types</li>
                <li>Implemented configurable pickup validation through the <code>Slingshot_Bullet</code> system</li>
                <li>Added special behaviors for items such as bombs and dynamite when launched</li>
                <li>Implemented limb-based ragdoll reactions when enemies are hit by slingshot projectiles</li>
                <li>Added dissolve animations when equipping and unequipping the slingshot</li>
            </ul>

            <p><strong>Bug Fixing & Stability :</strong></p>
            <ul>
                <li>Fixed crouch jumping and stamina depletion issues, including stamina not properly reaching zero</li>
                <li>Fixed an autorun bug causing unintended stamina consumption while attempting to walk and recover stamina</li>
                <li>Fixed ladder bugs causing the player to climb in mid-air and teleport back to the ladder after being captured</li>
                <li>Fixed interaction and biting exploits allowing players to interact with or bite through walls</li>
            </ul>

            <p><strong>Research & Game Design :</strong></p>
            <ul>
                <li>Conducted research across multiple sources to evaluate potential game modes and their expected player appeal and success</li>
            </ul>
            `,
            fr: `
            <p>J'ai travaillé sur <strong>Goblin Mode</strong> en tant que programmeur junior, en me concentrant sur les systèmes de gameplay, le game feel, la jouabilité à la manette et la correction de bugs. J'ai contribué à la fois aux fonctionnalités visibles par les joueurs et à la logique de gameplay sous-jacente, pour améliorer la réactivité, le feedback, la prise en main et la stabilité générale.</p>

            <p><strong>Game feel et feedback joueur :</strong></p>
            <ul>
                <li>Ajout d'un effet de vignette pour renforcer le retour visuel en position accroupie</li>
                <li>Amélioration du feedback de l'endurance pour rendre son niveau actuel plus lisible</li>
                <li>Mise en place de couleurs de surbrillance selon le type d'interaction</li>
                <li>Ajout d'une surbrillance conditionnelle : les objets indisponibles ne sont plus mis en surbrillance, comme ceux trop lourds pour être ramassés avec le lance-pierre</li>
            </ul>

            <p><strong>Systèmes et logique de gameplay :</strong></p>
            <ul>
                <li>Refonte des systèmes d'interaction et de morsure pour améliorer la réactivité et la prise en main, en particulier à la manette</li>
                <li>Agrandissement des zones de détection et ajout d'une logique de priorité pour favoriser les objets interactifs importants</li>
                <li>Amélioration de la logique d'animation, notamment pour les actions contextuelles comme les animations de lancer</li>
                <li>Contribution à un système de textes de tutoriel dynamiques qui s'adaptent à la manette ou au clavier</li>
                <li>Mise en place des systèmes d'inventaire et d'affichage des objets, avec empilement des objets</li>
                <li>Ajout d'une logique propre au tutoriel qui empêche le joueur de subir des dégâts mortels pendant la prise en main</li>
            </ul>

            <p><strong>Lance-pierre et système d'objets :</strong></p>
            <ul>
                <li>Développement d'un lance-pierre ramassable et équipable permettant de ramasser et de lancer des objets de l'environnement</li>
                <li>Ajout d'un retour visuel qui affiche l'objet sélectionné directement sur le lance-pierre</li>
                <li>Position des projectiles entièrement personnalisable selon le type d'objet</li>
                <li>Validation configurable des objets ramassables via le système <code>Slingshot_Bullet</code></li>
                <li>Ajout de comportements spéciaux pour certains objets lancés, comme les bombes et la dynamite</li>
                <li>Réactions ragdoll par membre lorsque les ennemis sont touchés par les projectiles du lance-pierre</li>
                <li>Ajout d'animations de dissolution quand on équipe ou range le lance-pierre</li>
            </ul>

            <p><strong>Correction de bugs et stabilité :</strong></p>
            <ul>
                <li>Correction de problèmes de saut accroupi et de consommation d'endurance, dont l'endurance qui ne descendait pas correctement à zéro</li>
                <li>Correction d'un bug de course automatique qui consommait de l'endurance alors que le joueur essayait de marcher pour la récupérer</li>
                <li>Correction de bugs d'échelle qui faisaient grimper le joueur dans le vide et le téléportaient vers l'échelle après sa capture</li>
                <li>Correction d'exploits qui permettaient d'interagir avec des objets ou de mordre à travers les murs</li>
            </ul>

            <p><strong>Recherche et game design :</strong></p>
            <ul>
                <li>Recherches menées à partir de plusieurs sources pour évaluer des modes de jeu potentiels, leur attrait auprès des joueurs et leurs chances de succès</li>
            </ul>
            `,
            pt: `
            <p>Trabalhei em <strong>Goblin Mode</strong> como Programador Júnior, com foco nos sistemas de jogo, no game feel, na jogabilidade com comando e na correção de bugs. Contribuí tanto para funcionalidades visíveis para o jogador como para a lógica de jogo subjacente, melhorando a capacidade de resposta, o feedback, a aprendizagem inicial e a estabilidade geral.</p>

            <p><strong>Game feel e feedback ao jogador:</strong></p>
            <ul>
                <li>Implementei um efeito de vinheta para dar feedback visual adicional ao agachar</li>
                <li>Melhorei o feedback da stamina para tornar o estado atual do jogador mais claro</li>
                <li>Implementei cores de destaque contextuais para os diferentes tipos de interação</li>
                <li>Adicionei destaque condicional para que os objetos indisponíveis deixem de ser destacados, como os objetos demasiado pesados para apanhar com a fisga</li>
            </ul>

            <p><strong>Sistemas e lógica de jogo:</strong></p>
            <ul>
                <li>Reformulei os sistemas de interação e de mordida para melhorar a resposta e a usabilidade, sobretudo com comando</li>
                <li>Alarguei as zonas de deteção e implementei lógica de prioridade para favorecer os objetos interativos importantes</li>
                <li>Refinei a lógica de animação, incluindo ações contextuais como as animações de arremesso</li>
                <li>Contribuí para um sistema de textos de tutorial dinâmicos que se adaptam ao comando ou ao teclado</li>
                <li>Implementei os sistemas de inventário e de apresentação de objetos, incluindo o empilhamento de objetos</li>
                <li>Adicionei lógica específica do tutorial que impede o jogador de sofrer dano letal durante a aprendizagem inicial</li>
            </ul>

            <p><strong>Fisga e sistema de objetos:</strong></p>
            <ul>
                <li>Desenvolvi uma fisga que se pode apanhar e equipar, permitindo apanhar e lançar objetos do cenário</li>
                <li>Implementei feedback visual que mostra o objeto selecionado diretamente na fisga</li>
                <li>Tornei o posicionamento dos projéteis totalmente personalizável para cada tipo de objeto</li>
                <li>Implementei a validação configurável dos objetos que se podem apanhar através do sistema <code>Slingshot_Bullet</code></li>
                <li>Adicionei comportamentos especiais para objetos como bombas e dinamite quando são lançados</li>
                <li>Implementei reações ragdoll por membro quando os inimigos são atingidos pelos projéteis da fisga</li>
                <li>Adicionei animações de dissolução ao equipar e desequipar a fisga</li>
            </ul>

            <p><strong>Correção de bugs e estabilidade:</strong></p>
            <ul>
                <li>Corrigi problemas de salto agachado e de consumo de stamina, incluindo a stamina que não chegava corretamente a zero</li>
                <li>Corrigi um bug de corrida automática que consumia stamina quando o jogador tentava andar para a recuperar</li>
                <li>Corrigi bugs nas escadas que faziam o jogador subir no ar e ser teletransportado de volta para a escada depois de ser capturado</li>
                <li>Corrigi exploits que permitiam interagir com objetos ou morder através das paredes</li>
            </ul>

            <p><strong>Investigação e game design:</strong></p>
            <ul>
                <li>Investiguei várias fontes para avaliar potenciais modos de jogo e o seu provável apelo e sucesso junto dos jogadores</li>
            </ul>
            `
        },
        websiteLink: "https://store.steampowered.com/app/4002300/Goblin_Mode/",
        heroImg: "images/Experience Files/idlevalleygames/Hero/Hero.png",
        heroPosition: "center 100%",
        cardImg: "images/Experience Files/idlevalleygames/Card/Card.png",
        cardImgPosition: "center",
        devScreenshots: [
            "images/Experience Files/idlevalleygames/Screenshots/1.png",
            "images/Experience Files/idlevalleygames/Screenshots/2.png",
            "images/Experience Files/idlevalleygames/Screenshots/3.png",
            "images/Experience Files/idlevalleygames/Screenshots/4.png",
        ],
        skills: ["unity", "csharp", "plasticscm", "photoshop"]
    },

    hochland: {
        title: { en: "Software Engineer", fr: "Ingénieur logiciel", pt: "Engenheiro de Software" },
        date: "Sep 2026 – Present",
        isGame: false,
        cardSubtitle: {
            en: "Developed and maintained internal software solutions to improve operational efficiency and data management.",
            fr: "Développement et maintenance de solutions logicielles internes pour améliorer l'efficacité opérationnelle et la gestion des données.",
            pt: "Desenvolvimento e manutenção de soluções de software internas para melhorar a eficiência operacional e a gestão de dados."
        },
        subtitle: "Hochland",
        description: {
            en: `
            <p>Developed and maintained an internal software solution used to manage and monitor the factory's day-to-day operations. The application covers the production workflow from <strong>milk reception</strong> and <strong>cheese production</strong> to <strong>storage</strong>, <strong>packaging</strong>, and the <strong>tracking of materials</strong> entering and leaving the factory.</p>
            <p>The software brings these different processes together into a centralized system, making it possible to manage production data, follow the movement of materials, and support the different operational needs of the factory.</p>
            <p><strong>Technical Development :</strong></p>
            <ul>
                <li>Developed the user interface using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong></li>
                <li>Implemented <strong>C#</strong> components for API communication and data exchange with backend services</li>
                <li>Maintained and improved existing features according to the factory's operational requirements</li>
                <li>Worked on a software solution used as part of real-world production and material management processes</li>
            </ul>
            <p>This was possible thanks to the many workers in the factory who told me what tools would facilitate their lives, and make production more efficient. I was able to implement these tools in the software, and see them used in real life, which was a very rewarding experience!</p>
            `,
            fr: `
            <p>Développement et maintenance d'une solution logicielle interne utilisée pour gérer et suivre les opérations quotidiennes de l'usine. L'application couvre tout le flux de production, de la <strong>réception du lait</strong> et la <strong>fabrication du fromage</strong> jusqu'au <strong>stockage</strong>, au <strong>conditionnement</strong> et au <strong>suivi des matières</strong> qui entrent et sortent de l'usine.</p>
            <p>Le logiciel réunit ces différents processus dans un système centralisé, ce qui permet de gérer les données de production, de suivre les mouvements de matières et de répondre aux différents besoins opérationnels de l'usine.</p>
            <p><strong>Développement technique :</strong></p>
            <ul>
                <li>Développement de l'interface utilisateur en <strong>HTML</strong>, <strong>CSS</strong> et <strong>JavaScript</strong></li>
                <li>Mise en place de composants <strong>C#</strong> pour la communication avec les API et l'échange de données avec les services backend</li>
                <li>Maintenance et amélioration des fonctionnalités existantes selon les besoins opérationnels de l'usine</li>
                <li>Travail sur une solution logicielle utilisée dans de vrais processus de production et de gestion des matières</li>
            </ul>
            <p>Tout cela a été possible grâce aux nombreux employés de l'usine qui m'ont expliqué quels outils leur faciliteraient la vie et rendraient la production plus efficace. J'ai pu intégrer ces outils au logiciel et les voir utilisés au quotidien, ce qui a été une expérience très enrichissante !</p>
            `,
            pt: `
            <p>Desenvolvimento e manutenção de uma solução de software interna usada para gerir e monitorizar as operações diárias da fábrica. A aplicação cobre todo o fluxo de produção, desde a <strong>receção do leite</strong> e a <strong>produção de queijo</strong> até ao <strong>armazenamento</strong>, à <strong>embalagem</strong> e ao <strong>controlo dos materiais</strong> que entram e saem da fábrica.</p>
            <p>O software reúne estes diferentes processos num sistema centralizado, permitindo gerir os dados de produção, acompanhar a movimentação de materiais e dar resposta às diferentes necessidades operacionais da fábrica.</p>
            <p><strong>Desenvolvimento técnico:</strong></p>
            <ul>
                <li>Desenvolvi a interface de utilizador em <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong></li>
                <li>Implementei componentes em <strong>C#</strong> para a comunicação com APIs e a troca de dados com serviços de backend</li>
                <li>Mantive e melhorei funcionalidades existentes de acordo com as necessidades operacionais da fábrica</li>
                <li>Trabalhei numa solução de software usada em processos reais de produção e gestão de materiais</li>
            </ul>
            <p>Isto foi possível graças aos muitos trabalhadores da fábrica que me disseram que ferramentas lhes facilitariam a vida e tornariam a produção mais eficiente. Consegui implementar essas ferramentas no software e vê-las a ser usadas no dia a dia, o que foi uma experiência muito gratificante!</p>
            `
        },
        websiteLink: "https://www.hochland-group.com/en",
        heroImg: "images/Experience Files/hochland/Hero/Hero.jpg",
        heroPosition: "center 10%",
        heroSize: "cover",
        cardImg: "images/Experience Files/hochland/Card/Card.jpg",
        cardImgPosition: "center",
        cardImgSize: "103%",
        skills: ["csharp", "git", "docker", "html", "css", "javascript"]
    },

    // --- ADD NEW EXPERIENCES BELOW --- \\
    //
    // example: {
    //     title: { en: "Job Title", fr: "Intitulé du poste", pt: "Cargo" },
    //     date: "Jan 2024 – Present",
    //     isGame: false,                         // true = "Play Game", false/omit = "Visit Website"
    //     cardSubtitle: { en: "One-line pitch for the index card.", fr: "...", pt: "..." },
    //     subtitle: "Company Name",              // shown in the hero on the detail page
    //     description: { en: `<p>What you did there.</p>`, fr: `<p>...</p>`, pt: `<p>...</p>` },
    //     websiteLink: "https://...",
    //     heroImg: "images/Experience Files/Company/Hero/hero.png",
    //     heroPosition: "center 20%",
    //     heroSize: "cover",                     // e.g. "150%" to zoom in, omit for default (cover)
    //     cardImg: "images/Experience Files/Company/Card/card.png",
    //     cardImgPosition: "center",             // e.g. "left center", "center", "right center"
    //     cardImgSize: "100%",                   // e.g. "135%" to zoom in, omit for default (cover)
    //     devScreenshots: [                      // optional — omit to hide the section entirely
    //         "images/Experience Files/Company/Screenshots/1.png",
    //         "images/Experience Files/Company/Screenshots/2.png",
    //     ],
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