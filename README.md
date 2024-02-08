# Digital and Service Design Team Blog

Blog site for the Digital and Service Design Team at Sport Wales. We work out in the open; blogging about our projects and sharing resources.

## Technologies

The website is a static site built with Nunjucks and Tailwind, <a href="https://sport-wales-digital-blog.netlify.app/" target="_blank">deployed</a> on Netlify.

This code also uses [gulp](https://gulpjs.com/) for some workflows.

## Quick start

You'll need to install several dependencies as node packages.

1. Make sure you have [Node JS](https://nodejs.org/en) installed on your machine. This will include the package manager npm by default.
2. Install dependencies in your command line of your IDE, using npm:
```markdown
npm install
```
This will create a node_modules directory which will be automatically added to your .gitignore for commits.

To render the HTML pages from the Nunjucks templates and perform automated tasks, you can run the 'gulp' command (note: make sure the terminal you're using for this command is the command prompt, not windows powershell)
```markdown
gulp
```
This can be slow, however. To only run the file that renders HTML pages from Nunjucks templates, you can use ```gulp nunjucks``` or ```npm start```.

This code runs the app/app.js file (as defined in package.json)


There's no need to install Tailwind as a node package as it's accessed via CDN.

## Dependencies

- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Gulp](https://gulpjs.com/)

## Deployment

The website is <a href="https://sport-wales-digital-blog.netlify.app/" target="_blank">live and deployed</a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/33a01ed6-4a80-4065-b713-1c6e99a2c91e/deploy-status)](https://app.netlify.com/sites/sport-wales-digital-blog/deploys)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)