const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');
nunjucks.configure('src', { autoescape: true });

class Page {
    constructor(filename, pageTitle) {
        this.filename = filename;
        this.pageTitle = pageTitle;
    }

    create() {
        // will below work?
        let blogData = [];
        // const jsonFilePath = path.join(__dirname, '../data/blogData.json');
        // try {
        //     const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
        //     const parsedData = JSON.parse(jsonData);
        // } catch (error) {
        //     console.error('Error reading the JSON file with blog data:', error);
        // }
        // blogData = parsedData;

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