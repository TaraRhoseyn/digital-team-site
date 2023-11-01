const nunjucks = require('nunjucks');
const fs = require('fs');
nunjucks.configure('src', { autoescape: true });

class Blog {
	constructor(filename, pageTitle, author, authorJob, date, profilePicture) {
		this.filename = filename;
		this.pageTitle = pageTitle;
		this.author = author;
		this.authorJob = authorJob;
		this.date = date;
		this.profilePicture = profilePicture;
	}

	static appendDataToJSON(filePath, newData, callback) {
		fs.readFile(filePath, "utf8", (err, data) => {
			if (err) return callback(err);

			let existingData = JSON.parse(data);
			existingData.push(newData);

			fs.writeFile(
				filePath,
				JSON.stringify(existingData, null, 2),
				"utf8",
				(err) => {
					callback(err);
				}
			);
		});
	}

	create() {

        const filePath = './blogData.json';
        const newData = {
            filename: this.filename,
		    pageTitle: this.pageTitle,
		    author: this.author,
		    authorJob: this.authorJob,
		    date: this.date,
		    profilePicture: this.profilePicture,
        }

        appendDataToJSONFile(filePath, newData, (err) => {
            if (err) {
              console.error('Error appending data to JSON file:', err);
            } else {
              console.log('Data successfully appended to JSON file.');
            }
          });

		// append to the blogData.json for index.html
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