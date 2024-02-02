const fs = require("fs");
const path = require("path");

const directoryPath = __filename;
const parentDirectoryPath = path
  .join(directoryPath, "../../../")
  .split(path.sep)
  .join(path.sep);

// Example: Create a new file in the project root
const serverJsContent = `
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// Your mongodb uri
const uri =
  "mongodb+srv://user:passwordcc1@cluster0.uzrx08v.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const app = express();
app.use(cors());
const port = 8080 || 8088 || 3000 || 3030;
// create application/json parser
const jsonParser = bodyParser.json();

async function run() {
  try {
    // Create references to the database and collection in order to run
    // operations on them.
    const client = new MongoClient(uri);

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect().catch((err) => console.error(err));
    console.log("Database connection established 🧑‍💻...");

    app.get("/", (req, res) => {
      res.send("Your backend is start working 🧑‍💻...");
    });

    app.get("/users", async (req, res) => {
      console.log("users request :", req);
      res.json({ users: "users-create" });
    });

    app.post("/user", jsonParser, async (req, res) => {
      console.log("users request :", req.body);
      res.json({ users: "users-create" });
    });

    app.get("/users/:id", async (req, res) => {
      console.log("req", req.params.id);
      res.json({ users: "user-get" });
    });

    app.delete("/users/:id", async (req, res) => {
      console.log("req", req.params.id);
      res.json({ users: "user-delete" });
    });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log('App is running on port : ',port);
});
`;
const serverJsPath = path.join(parentDirectoryPath, "server.js");
fs.writeFileSync(serverJsPath, serverJsContent);

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