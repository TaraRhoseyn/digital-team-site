// import util from './utils.js';

const util = require('./utils');
const nunjucks = require('nunjucks');
const fs = require('fs');
nunjucks.configure('src', { autoescape: true });

const taraProfileURL = util.profile.tara_rhoseyn_profile;
const owenSProfileURL = util.profile.owen_sullivan_profile;
const paulJob = util.job.paul_batcup_job;


const Page = require('./page');
const Blog = require('./blog');

const pages = [
    // Page(filename of njk and html, page title)
    new Page('index', 'Home'),
    new Page('principles', 'Principles'),
    new Page('about', 'About'),
]

const blogs = [
    // Blog(filename, title, author, authorJob, date, profilePicture)
    new Blog('blog1', 'My new blog', 'Paul Batcup', util.profile.paul_batcup_job, 'Oct 11', util.profile.paul_batcup_profile),
    new Blog('blog2', 'Another blog', 'Tara Rhoseyn', util.profile.tara_rhoseyn_job, 'Oct 11', util.profile.tara_rhoseyn_profile),
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

