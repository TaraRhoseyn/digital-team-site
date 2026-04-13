/*
This file renders regular pages
and accesses the global var blogData
to produce blog previews
*/
const nunjucks = require('nunjucks');
const fs = require('fs');
const { blogData, glossaryData, staffMembers } = require('./data');
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
        const outputPath = `${outputLocation}${this.filename}.html`;
        
        // Create directory structure if it doesn't exist
        const path = require('path');
        const outputDir = path.dirname(outputPath);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        
        fs.writeFileSync(
            outputPath,
            nunjucks.render(`${this.filename}.njk`, {
                pageTitle: `${this.pageTitle} | Digital and Service Design Team`,
                // sends blog data for previews:
                blogs: blogData,
                glossary: glossaryData,
                staffMembers: staffMembers,
            })
        );
    }
}

module.exports = Page;