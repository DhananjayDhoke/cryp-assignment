
const fs = require('fs');
const path = require('path');

function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size;
}

// Give units for file according to siz
function formatSizeUnits(size) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let i = 0;
    while (size >= 1024 && i < units.length - 1) {
      size /= 1024;
      i++;
    }
    return size.toFixed(2) + units[i];
  }

// Get file from directory and sort them according to size
function getFiles(directory) {
  const files = fs.readdirSync(directory);
  const filePaths = files.map(file => path.join(directory, file));
  const fileSizes = filePaths.map(filePath => ({
    name: path.basename(filePath),
    size: getFileSize(filePath)
  }));
  return fileSizes.sort((a, b) => b.size - a.size);
}

// file and its size printed in sorted way
function printFiles(directory) {
  const files = getFiles(directory);
  files.forEach(file => {
    const size = formatSizeUnits(file.size);
    console.log(`${size} ${file.name}`);
  });
}

// Error Handling if directory is not found
const directory = process.argv[2];
if (!directory) {
  console.log('Please provide a directory as an argument');
  process.exit(1);
}

printFiles(directory);


// to run this code user node index.js {directory path here}