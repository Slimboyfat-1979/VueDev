import mongoose from "mongoose";
import path from "path";
import express from "express";


const dbUrl = "mongodb://localhost:27017/VueDev";

mongoose.connect(dbUrl).then(() => {
    console.log("connected to mongodb")
}).catch((err) => {
    console.log("============ERROR===============" + err);
})


const app = express();

const rootDir = path.dirname(process.cwd());
app.use(express.static(path.join(rootDir, 'dist')));
app.use(express.json());

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    occupation: String
});

const user = mongoose.model('Users', userSchema);

app.get("*", (req, res) => {
    res.sendFile(path.join(rootDir, 'dist', 'index.html'))
})

app.post("/sent", (req, res) => {
    const newUser = new user(req.body);
    newUser.save();
    res.status(201).send(newUser);
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})

