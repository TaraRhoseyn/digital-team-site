import * as util from 'app/utils'

const nunjucks = require('nunjucks');
const fs = require('fs');
nunjucks.configure('src', { autoescape: true });


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
        profilePicture: util.profile.paul_batcup_profile,        
        author: "Paul Batcup",
        authorTitle: util.job.paul_batcup_job,
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

function returnProfile(author) {
    profilePicture = author.lowercase();
    profilePicture = profilePicture.replaceAll(" ", "_");
    profilePicture = 'https://github.com/TaraRhoseyn/digital-team-site/blob/main/assets/img/profiles/'+profilePicture+'.png?raw=true';
    return profilePicture
}

function returnJob(author) {
    job = author.lowercase();
    job = job.replaceAll(" ", "_");
    job = job+'_job';
    return job
}

class Blog {
    constructor(filename, pageTitle, author, authorTitle, date, profilePicture) {
        this.filename = filename;
        this.pageTitle = pageTitle;
        this.author = author;
        this.authorTitle = returnJob(author);
        this.date = date;
        this.profilePicture = returnProfile(author);
    }

    create() {
        fs.writeFileSync(
            `${outputLocation}${this.filename}.html`,
            nunjucks.render(`${this.filename}.njk`, {
                pageTitle: `${this.pageTitle} | Digital and Service Design Team`,
                author: author,
                authorTitle: authorTitle,
                date: date,
                profilePicture: profilePicture
            })
        );
    }
}


class Page {
    constructor(filename, pageTitle) {
        this.filename = filename;
        this.pageTitle = pageTitle;
    }

    create() {
        // adapts file if it's the index.html or 404.html (needs unique file paths and output location)
        const relFilePath = this.filename !== 'index' && this.filename !== '404' ? '../' : '';
        const outputLocation = 'dist/';

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

const blogs = [
    new Blog('blog1', 'My new blog', 'Paul Batcup', 'Boss Man', 'Oct 11', paulProfileURL),
]

// entry point:
try {
    for (const page of pages) {
        page.create();
    }
    for (const blog of blogs) {
        blog.create();
    }
    console.log('Pages successfully created.');
} catch (error) {
    console.error('Error rendering or writing pages:', error);
}

