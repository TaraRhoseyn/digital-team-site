/*
This file is the entry point of the nunjucks
rendering. Run this file with 'npm start' in 
your terminal.

It utilises classes from other files, blog and page,
to create seperate nunjucks rendering sequences
that require different parameters
*/
const util = require('./utils');
const nunjucks = require('nunjucks');
const Page = require('./page');
const Blog = require('./blog');
nunjucks.configure('src', { autoescape: true });

const pages = [
    // Page(filename of njk and html, page title)
    new Page('index', 'Home'),
    new Page('principles', 'Principles'),
    new Page('about', 'About'),
    new Page('glossary', 'Glossary'),
    new Page('404', '404 Error Page'),
]


const blogs = [
    // Blog(filename, title, author, authorJob, date, profilePicture)
    new Blog(
        'blog1', 'Lost at the National Centre', 'Paul Batcup', 
        util.job.paul_batcup_job, '15th October, 2023', util.profile.paul_batcup_profile),
    new Blog(
        'blog2', 'How we created the new Digital and Service Design Principles', 'Tara Rhoseyn', 
        util.job.tara_rhoseyn_job, '11th October, 2023', util.profile.tara_rhoseyn_profile),
    new Blog(
        'blog3', 'Why we need a Digital and Service Design Team', 'Phil Stephens', 
        util.job.phil_stephens_job, '1st October, 2023', util.profile.phil_stephens_profile),
    new Blog(
        'blog4', 'National Centre - The Digital Journey Begins', 'Craig Nowell', 'Assistant Director National Sport Facilities, Infrastructure and Capital', '15th October, 2023', 
        util.profile.generic_user_profile),
    new Blog(
        'blog5', 'Take a giant leap... With one small step', 'Paul Batcup', 
        util.job.paul_batcup_job, '15th October, 2023', util.profile.paul_batcup_profile),
    new Blog(
        'blog6', 'Meet the Newbies', 'Paul Batcup', 
        util.job.paul_batcup_job, '16th December, 2023', util.profile.paul_batcup_profile),
]

function createPages(type) {
    try {
        for (const i of type) {
            i.create();
        }
        console.log('Pages successfully created.');
    } catch (error) {
        console.error('Error rendering or writing pages:', error);
    }
}

// blogs has to be run before pages to ensure blogs data gets created & passes to pages
createPages(blogs)
createPages(pages)