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
	new Page('accessibility-statement', 'Accessibility Statement'),
    new Page('about', 'About'),
    new Page('glossary', 'Glossary'),
    new Page('404', '404 Error Page'),
    new Page('developers', 'Developers'),
    new Page('privacy-policy', 'Privacy Policy'),
    new Page('contact', 'Contact'),
    new Page('agile-tools', 'Project Templates'),
    new Page('blogs', 'Blogs'),
    new Page('support', 'Support'),
	new Page('projects', 'Projects'),
    new Page('website-roadmap', 'Website Roadmap'),
    new Page('online-project-request-form', 'Online Project Request Form'),

    new Page('blogs-by-steffan-berrow', 'Blogs by Steffan Berrow'),
    new Page('blogs-by-phil-stephens', 'Blogs by Phil Stephens'),
    new Page('blogs-by-paul-batcup', 'Blogs by Paul Batcup'),
    new Page('blogs-by-tara-rhoseyn', 'Blogs by Tara Rhoseyn'),
    new Page('blogs-by-mathew-james', 'Blogs by Mathew James'),
    new Page('project-request-form', 'Project Request Form'),
    new Page('blogs-by-anselm-powell', 'Blogs by Anselm Powell'),

    // Introduction Section - Design Library
    new Page('design-library/introduction', 'Style Guide - SW Design Library'),
    new Page('design-library/color', 'Colour - SW Design Library'),
    new Page('design-library/logo', 'Logo - SW Design Library'), 
    new Page('design-library/typography', 'Typography - SW Design Library'),
    new Page('design-library/icons', 'Icons - SW Design Library'),
    
    // Components - Design Library
    new Page('design-library/button', 'Button - SW Design Library'),
    new Page('design-library/card', 'Card - SW Design Library'),
    new Page('design-library/card-no-btn', 'Card No Button - SW Design Library'),
    new Page('design-library/card-with-btn', 'Card With Button - SW Design Library'),
    new Page('design-library/navbar', 'Navigation Bar - SW Design Library'),
    new Page('design-library/footer', 'Footer - SW Design Library'),
    
]


const blogs = [
    // Blog(filename, title, author, authorJob, date, profilePicture)
    new Blog(
        'blog1', 'Why we need a Digital and Service Design Team', 'Phil Stephens', 
        util.job.phil_stephens_job, '1st October, 2023', util.profile.phil_stephens_profile),
    new Blog(
        'blog2', 'How we created the new Digital and Service Design Principles', 'Tara Rhoseyn', 
        util.job.tara_rhoseyn_job, '11th October, 2023', util.profile.tara_rhoseyn_profile),
    new Blog(
        'blog3', 'Lost at the National Centre', 'Paul Batcup', 
        util.job.paul_batcup_job, '15th October, 2023', util.profile.paul_batcup_profile),
    new Blog(
        'blog4', 'National Centre - The Digital Journey Begins', 'Craig Nowell', 'Assistant Director National Sport Facilities, Infrastructure and Capital', '15th October, 2023', 
        util.profile.generic_user_profile),
    new Blog(
        'blog5', 'Take a giant leap... With one small step', 'Paul Batcup', 
        util.job.paul_batcup_job, '15th October, 2023', util.profile.paul_batcup_profile),
    new Blog(
        'blog6', 'Meet the Newbies', 'Paul Batcup', 
        util.job.paul_batcup_job, '16th December, 2023', util.profile.paul_batcup_profile),
    new Blog(
        'blog7', 'Defining the User Journey Process', 'Steffan Berrow', 
        util.job.steffan_berrow_job, '9th December, 2023', util.profile.steffan_berrow_profile),
    new Blog(
        'blog8', 'The Power of Understanding User Needs', 'Steffan Berrow', 
        util.job.steffan_berrow_job, '9th December, 2023', util.profile.steffan_berrow_profile),
    new Blog(
        'blog9', 'Project Selection Process: User Need Decision-Making', 'Steffan Berrow', 
        util.job.steffan_berrow_job, '9th December, 2023', util.profile.steffan_berrow_profile),
    new Blog(
        'blog10', 'Oh DAM! The journey to effective Digital Asset Management', 'Mathew James',
        util.job.mathew_james_job, '1st July, 2024', util.profile.mathew_james_profile),
    new Blog(
            'blog11', 'The Home Court Advantage: Sport Wales’s In-House Development', 'Anselm Powell',
            util.job.anselm_powell_job, '6th July, 2024', util.profile.anselm_powell_profile),
    new Blog(
            'blog12', 'Rethinking Recruitment: Exploring the future of our HR Systems', 'Paul Batcup',
            util.job.paul_batcup_job, '4th July, 2025', util.profile.paul_batcup_profile),
    new Blog(
            'blog13', 'On your marks, get set, go online!', 'Mathew James',
            util.job.mathew_james_job, '8th September, 2025', util.profile.mathew_james_profile),
	new Blog(
		'blog14', 'Launching the Sport Wales Governance dashboard – how we worked and what made it a success!', 'Owain Morris',
		util.job.owain_morris_job, '8th September, 2025', util.profile.owain_morris_profile),
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