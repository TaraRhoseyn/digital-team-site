const nunjucks = require('nunjucks');
const fs = require('fs');
const blogData = require('./data');
nunjucks.configure('src', { autoescape: true });

class Page {
    constructor(filename, pageTitle) {
        this.filename = filename;
        this.pageTitle = pageTitle;
    }

    create() {

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

module.exports = Page;