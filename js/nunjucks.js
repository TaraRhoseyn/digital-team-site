const nunjucks = require('nunjucks');
const fs = require('fs');

nunjucks.configure('./templates', { autoescape: true });

class Page {
    constructor(filename, pageTitle) {
        this.filename = filename;
        this.pageTitle = pageTitle;
    }

    create() {
        // adapts file if it's the index.html or 404.html (needs unique file paths and output location)
        const relFilePath = this.filename !== 'index' && this.filename !== '404' ? '../' : '';
        const outputLocation = this.filename !== 'index' && this.filename !== '404' ? './pages/' : '';

        fs.writeFileSync(
            `${outputLocation}${this.filename}.html`,
            nunjucks.render(`${this.filename}.njk`, {
                pageTitle: `${this.pageTitle} | Digital and Service Design Team`,
                filePath: relFilePath,
            })
        );
    }
}

const pages = [
    new Page('index', 'Home'),
    new Page('principles', 'Principles'),
    new Page('about', 'About'),
]

// entry point:
try {
    for (const page of pages) {
        page.create();
    }
    console.log('Pages successfully created.');
} catch (error) {
    console.error('Error rendering or writing pages:', error);
}

