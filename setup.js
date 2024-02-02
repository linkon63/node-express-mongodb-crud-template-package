const { exec } = require("child_process");
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
console.log("Working on installation");
// install packages
const packageNames = ["cors", "mongodb", "express", "body-parser"];

// Specify the directory where you want to install the packages
const installDirectory = path.join(__dirname, "../../"); // Adjust the number of '../' based on your directory structure

exec(
  `npm install cors`,
  { cwd: installDirectory },
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error installing Cors: ${error.message}`);
      return;
    }
    console.log(`Package 'Cors' installed successfully`);
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  }
);

exec(
  `npm install express`,
  { cwd: installDirectory },
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error installing express: ${error.message}`);
      return;
    }
    console.log(`Package 'express' installed successfully`);
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  }
);

exec(
  `npm install mongodb`,
  { cwd: installDirectory },
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error installing mongodb: ${error.message}`);
      return;
    }
    console.log(`Package 'mongodb' installed successfully`);
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  }
);

exec(
  `npm install body-parser`,
  { cwd: installDirectory },
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error installing body-parser: ${error.message}`);
      return;
    }
    console.log(`Package 'body-parser' installed successfully`);
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  }
);

