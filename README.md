# Digital and Service Design Team Blog

Blog site for the Digital and Service Design Team at Sport Wales. We work out in the open; blogging about our projects and sharing resources.

## Technologies

The website is a static site built with Nunjucks and Tailwind UI, deployed on Netlify.

## Installation

You'll need to install Nunjucks as a node package. Here are the steps:

1. Make sure you have [Node JS](https://nodejs.org/en) installed on your machine.
2. Install Nunjucks in your command line of your IDE, using npm:
```markdown
$ npm install nunjucks
```
This will create a node_modules directory which will be automatically added to your .gitignore for commits.

To run the file that renders HTML pages from Nunjucks templates, use this script:
```markdown
$ npm start
```
This code runs the app/app.js file (as defined in package.json)

There's no need to install Tailwind UI as a node package as it's accessed via CDN.

## Dependencies

- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Tailwind UI](https://tailwindui.com/)
- [Flowbite](https://flowbite.com/)

## Deployment

The website is <a href="https://sport-wales-digital-blog.netlify.app/" target="_blank">live and deployed</a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/33a01ed6-4a80-4065-b713-1c6e99a2c91e/deploy-status)](https://app.netlify.com/sites/sport-wales-digital-blog/deploys)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)