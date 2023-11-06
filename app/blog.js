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

	static readDataFromJSONFile(filePath, callback) {
		fs.readFile(filePath, "utf8", (err, data) => {
			if (err) return callback(err);

			const jsonData = JSON.parse(data);
			callback(null, jsonData);
		});
	}

	static writeDataToJSONFile(filePath, data, callback) {
		fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8", (err) => {
			callback(err);
		});
	}

	create() {
        const filePath = './data/blogData.json';
        const newData = {
            filename: this.filename,
		    pageTitle: this.pageTitle,
		    author: this.author,
		    authorJob: this.authorJob,
		    date: this.date,
		    profilePicture: this.profilePicture,
        }

        Blog.readDataFromJSONFile(filePath, (readErr, existingData) => {
            if (readErr) {
                console.error('Error reading the JSON file with blog data:', readErr);
                return;
            }

            existingData.push(newData);

            Blog.writeDataToJSONFile(filePath, existingData, (writeErr) => {
                if (writeErr) {
                    console.error('Error writing data to JSON file:', writeErr);
                } else {
                    console.log('Data successfully appended to JSON file.');
                }
            });
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
