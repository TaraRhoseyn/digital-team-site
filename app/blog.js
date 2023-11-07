/*
This file renders blog pages
and updates the global variable
blogData with that same blog information

That blog information is to be used in previews
*/
const nunjucks = require('nunjucks');
const fs = require('fs');
const { blogData } = require('./data');
nunjucks.configure('src', { autoescape: true });

class Blog {
	// creates class instance:
	constructor(filename, pageTitle, author, authorJob, date, profilePicture) {
		this.filename = filename;
		this.pageTitle = pageTitle;
		this.author = author;
		this.authorJob = authorJob;
		this.date = date;
		this.profilePicture = profilePicture;
	}
	create() {
		// pushes blog info to be used in previews:
        const newData = {
            filename: this.filename,
		    pageTitle: this.pageTitle,
		    author: this.author,
		    authorJob: this.authorJob,
		    date: this.date,
		    profilePicture: this.profilePicture,
        }
		blogData.push(newData)
		// renders html in dist dir from njk:
		const outputLocation = "dist/";
		fs.writeFileSync(
			`${outputLocation}${this.filename}.html`,
			nunjucks.render(`${this.filename}.njk`, {
				pageTitle: `${this.pageTitle} | Digital and Service Design Team`,
				author: this.author,
				authorJob: this.authorJob,
				date: this.date,
				profilePicture: this.profilePicture,
			})
		);
	}
}

module.exports = Blog;
