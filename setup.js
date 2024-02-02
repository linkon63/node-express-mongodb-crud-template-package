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
console.log("Working on installation")
// install packages
const packageName = ["", "cros", "mongodb", "express"]  //"cors";
const installDirectory = path.join(__dirname, "../../"); // Adjust the number of '../' based on your directory structure

// Execute npm install command in the specified directory
packageName.map((pkn) => {

  exec(
    `npm install ${pkn}`,
    { cwd: installDirectory },
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      console.log(`Package '${pkn}' installed successfully`);
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    }
  );
})
