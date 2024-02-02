const fs = require("fs");
const path = require("path");

const directoryPath = __filename;
const parentDirectoryPath = path
  .join(directoryPath, "../../../")
  .split(path.sep)
  .join(path.sep);

// Specify the path to your JavaScript file
const filePath = "./server.js";
// Read the content of the file into a variable
const jsFileContent = fs.readFileSync(filePath, "utf8");

// Example: Create a new file in the project root
const serverJsContent = jsFileContent;
const serverJsPath = path.join(parentDirectoryPath, "server.js");
fs.writeFileSync(serverJsPath, serverJsContent);

// install packages
// const packageName = "cors";
// const installDirectory = path.join(__dirname, "../../"); // Adjust the number of '../' based on your directory structure

// // Execute npm install command in the specified directory
// exec(
//   `npm install ${packageName}`,
//   { cwd: installDirectory },
//   (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error: ${error.message}`);
//       return;
//     }
//     console.log(`Package '${packageName}' installed successfully`);
//     console.log(`stdout: ${stdout}`);
//     console.error(`stderr: ${stderr}`);
//   }
// );

// // Example: Update package.json (assuming customProperty is a top-level property)
// // const packageJsonPath = path.join(process.cwd(), "package.json");
// const packageJson = require(packageJsonPath);

// const packagePath = path.join(parentDirectoryPath, "new_package.json");

// fs.writeFileSync(packagePath, JSON.stringify(packageJson));

// Get the path to the existing package.json
// console.log('filepath', parentDirectoryPath)
// const packageJsonPath = path.join(parentDirectoryPath, "package.json");
// console.log('filepath', packageJsonPath)

// // // Read the content of the existing package.json
// const packageJson = require(packageJsonPath);

// // Specify the path where you want to create the new package.json
// const newPackagePath = path.join(parentDirectoryPath, "new-package.json");

// // Write the content of the existing package.json to the new location
// fs.writeFileSync(newPackagePath, JSON.stringify(packageJson, null, 2));

// console.log("Setup completed.");

// const newPackagePath = path.join(parentDirectoryPath, "new-package.json");
// packageJson.dependencies = {
//   ...packageJson.dependencies,
//   cors: "^2.8.5",
//   express: "^4.18.2",
//   mongodb: "^6.3.0",
// };

// fs.writeFileSync(newPackagePath, JSON.stringify(packageJson, null, 2));

// const oldPackagePath = path.join(parentDirectoryPath, "package.json");
// // Delete the file
// fs.unlink(oldPackagePath, (err) => {
//   if (err) {
//     console.error(`Error deleting file: ${err.message}`);
//   } else {
//     console.log('File deleted successfully');
//   }
// });

// // Write the content of the existing package.json to the new location

// const oldFilePath = path.join(parentDirectoryPath, 'new-package.json'); // Replace with the path to your existing file
// const newFilePath = path.join(parentDirectoryPath, 'package.json'); // Replace with the desired new file name and path

// // Rename the file
// fs.rename(oldFilePath, newFilePath, (err) => {
//   if (err) {
//     console.error(`Error renaming file: ${err.message}`);
//   } else {
//     console.log('File renamed successfully');
//   }
// });
