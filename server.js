const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// Your mongodb uri
const uri = "";
; // Setup your mongodb uri
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
    await client
      .connect()
      .catch((err) => console.error("Connection error : ", err));

    console.log("Database connection established 🧑‍💻...");
    const yourDBName = '' // please give your database name here
    const db = await client.db(yourDBName)
    const userCollection = await db.collection("yourUserCollectionName") // Give your table / collection name
    const productCollection = await db.collection("yourProductCollectionName") // Give your table / collection name
    // ... so on if there is more collection

    app.get("/", (req, res) => {
      res.send("Your backend is start working 🧑‍💻...");
    });
    //  users crud operations [admin - client ]
    app.get("/users", async (req, res) => {
      const users = await userCollection.find().toArray();
      res.json({ users: users, status: 'ok', code: 200 });
    });
    // users registration
    app.post("/users", jsonParser, async (req, res) => {
      const userCollection = await db.collection("users")
      await userCollection.insertOne(req.body);
      res.json({ users: req.body, status: 'ok', code: 200 });
    });

    app.get("/users/:id", async (req, res) => {
      const id = req.params.id
      const userCollection = await db.collection("users")
      const users = await userCollection.findOne({ "_id": new ObjectId(id) });
      res.json({ users: users, status: 'ok', code: 200 });
    });

    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id
      const userCollection = await db.collection("users")
      const users = await userCollection.deleteOne({ "_id": new ObjectId(id) });
      res.json({ users: users, status: 'ok', code: 200 });
    });

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log('Ports are running on :', port);
});
