const fs = require('fs');
const path = require('path');

// Configuration
const authorName = 'Shubham Narkhede'; // Replace with your name
const markdownDir = path.join(__dirname, 'docs'); // Adjust to your markdown files directory

// Function to update last modified date and author in .md files
const updateMarkdownFiles = () => {
    fs.readdir(markdownDir, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            if (file.endsWith('.md')) {
                const filePath = path.join(markdownDir, file);
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        console.error('Error reading file:', err);
                        return;
                    }

                    // Prepare the new footer
                    const currentTime = new Date().toLocaleString();
                    const newFooter = `\n\n_Last updated on ${currentTime} by ${authorName}_\n`;

                    // Check if the footer already exists and replace it
                    const footerRegex = /_Last updated on.*by.*_/;
                    const updatedData = data.replace(footerRegex, newFooter);

                    // Write the updated content back to the file
                    fs.writeFile(filePath, updatedData, 'utf8', (err) => {
                        if (err) {
                            console.error('Error writing file:', err);
                        } else {
                            console.log(`Updated: ${file}`);
                        }
                    });
                });
            }
        });
    });
};

updateMarkdownFiles();
