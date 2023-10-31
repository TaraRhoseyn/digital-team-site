// configuring nunjucks:
const nunjucks = require('nunjucks');
const fs = require('fs');
nunjucks.configure('./templates', { autoescape: true });

// utils for blogs:
const taraProfileURL = 'https://github.com/TaraRhoseyn/digital-team-site/blob/main/assets/img/profiles/tara-rhoseyn.png?raw=true';
const owenSProfileURL = 'https://github.com/TaraRhoseyn/digital-team-site/blob/main/assets/img/profiles/owen-sullivan.png?raw=true';
const owenBProfileURL = 'https://github.com/TaraRhoseyn/digital-team-site/blob/main/assets/img/profiles/owen-burgess.png?raw=true';
const anselmProfileURL = 'https://github.com/TaraRhoseyn/digital-team-site/blob/main/assets/img/profiles/anselm-powell.png?raw=true';
const owainProfileURL = 'https://github.com/TaraRhoseyn/digital-team-site/blob/main/assets/img/profiles/owain-morris.png?raw=true';
const philProfileURL = 'https://github.com/TaraRhoseyn/digital-team-site/blob/main/assets/img/profiles/phil-stephens.png?raw=true';
const paulProfileURL = 'https://github.com/TaraRhoseyn/digital-team-site/blob/main/assets/img/profiles/paul-batcup.png?raw=true';
const mattKProfileURL = 'https://github.com/TaraRhoseyn/digital-team-site/blob/main/assets/img/profiles/matt-kinnear.png?raw=true';
const mathewProfileURL = 'https://github.com/TaraRhoseyn/digital-team-site/blob/main/assets/img/profiles/mathew-james.png?raw=true';
const calvinProfileURL = 'https://github.com/TaraRhoseyn/digital-team-site/blob/main/assets/img/profiles/calvin-ley.png?raw=true';
const steffProfileURL = 'https://github.com/TaraRhoseyn/digital-team-site/blob/main/assets/img/profiles/steffan-bercow.png?raw=true';
const tomProfileURL = 'https://github.com/TaraRhoseyn/digital-team-site/blob/main/assets/img/profiles/tom-morgan.png?raw=true';
const rhianProfileURL = 'https://github.com/TaraRhoseyn/digital-team-site/blob/main/assets/img/profiles/rhian-evans.png?raw=true';
const genericProfileURL = 'https://github.com/TaraRhoseyn/digital-team-site/blob/main/assets/img/profiles/generic-user.png?raw=true'
const philJob = 'Information Security Lead';
const paulJob = 'Digital Programme Lead';
const taraJob = 'Digital and Service Design Programme Manager';


const blogData = [
    {
        title: "Why we need a Digital and Service Design Team",
        profilePicture: philProfileURL,
        author: "Phil Stephens",
        authorTitle: philJob,
        date: "October 1, 2023",
    },
    {
        title: "National Centre - The Digital Journey Begins",
        profilePicture: genericProfileURL,
        author: "Craig Nowell",
        authorTitle: "Assistant Director National Sport Facilities, Infrastructure & Capital",
        date: "October 15, 2023",
    },
    {
        title: "Lost at the National Centre",
        profilePicture: paulProfileURL,        
        author: "Paul Batcup",
        authorTitle: paulJob,
        date: "October 15, 2023",
    },
    {
        title: "How we created the new Digital and Service Design Principles",
        profilePicture: taraProfileURL,
        author: "Tara Rhoseyn",
        authorTitle: taraJob,
        date: "October 15, 2023",
    },
    {
        title: "Take a giant leap... With one small step",
        profilePicture: paulProfileURL,
        author: "Paul Batcup",
        authorTitle: paulJob,
        date: "October 15, 2023",
    },
]


class Page {
    constructor(filename, pageTitle) {
        this.filename = filename;
        this.pageTitle = pageTitle;
    }

    create() {
        // adapts file if it's the index.html or 404.html (needs unique file paths and output location)
        const relFilePath = this.filename !== 'index' && this.filename !== '404' ? '../' : '';
        const outputLocation = this.filename !== 'index' && this.filename !== '404' ? './pages/' : '';

        fs.writeFileSync(
            `${outputLocation}${this.filename}.html`,
            nunjucks.render(`${this.filename}.njk`, {
                pageTitle: `${this.pageTitle} | Digital and Service Design Team`,
                filePath: relFilePath,
                blogs: blogData
            })
        );
    }
}


const pages = [
    new Page('index', 'Home'),
    new Page('principles', 'Principles'),
    new Page('about', 'About'),
]

// entry point:
try {
    for (const page of pages) {
        page.create();
    }
    console.log('Pages successfully created.');
} catch (error) {
    console.error('Error rendering or writing pages:', error);
}

