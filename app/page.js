/*
This file renders regular pages
and accesses the global var blogData
to produce blog previews
*/
const nunjucks = require('nunjucks');
const fs = require('fs');
const blogData = require('./data');
nunjucks.configure('src', { autoescape: true });

class Page {
    // creates class instance:
    constructor(filename, pageTitle) {
        this.filename = filename;
        this.pageTitle = pageTitle;
    }

    create() {
        // renders html in dist dir from njk:
        const outputLocation = 'dist/';
        fs.writeFileSync(
            `${outputLocation}${this.filename}.html`,
            nunjucks.render(`${this.filename}.njk`, {
                pageTitle: `${this.pageTitle} | Digital and Service Design Team`,
                // sends blog data for previews:
                blogs: blogData
            })
        );
    }
}

module.exports = Page;