const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

// Source and destination directories
const sourceDir = "src/pages/books/covers"; // Original high-quality images
const outputDir = "static/books/covers"; // Optimized images (recommended for Docusaurus)

// Compression settings
const MAX_WIDTH = 300; // Resize to max 300px width (adjust as needed)
const QUALITY = 60; // JPEG quality (0-100, lower = smaller file size)

async function compressImages() {
  try {
    // Create output directory if it doesn’t exist
    await fs.mkdir(outputDir, { recursive: true });

    // Read all files in source directory
    const files = await fs.readdir(sourceDir);

    // Filter for .jpg files
    const jpgFiles = files.filter((file) => file.endsWith(".jpg"));

    // Process each image
    for (const file of jpgFiles) {
      const inputPath = path.join(sourceDir, file);
      const outputPath = path.join(outputDir, file);

      console.log(`Compressing ${file}...`);

      await sharp(inputPath)
        .resize({ width: MAX_WIDTH }) // Resize to max width, preserving aspect ratio
        .jpeg({ quality: QUALITY }) // Compress with specified quality
        .toFile(outputPath);

      console.log(`Saved optimized ${file} to ${outputPath}`);
    }

    console.log("All images compressed successfully!");
  } catch (error) {
    console.error("Error compressing images:", error);
  }
}

compressImages();