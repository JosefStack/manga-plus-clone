import express from "express";
import bodyParser from "body-parser";
import { escape } from "node:querystring";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));



app.get("/", (req, res) => {
    res.render("index.ejs")
})


app.listen(port, () => {
    console.log(`Server ready on port ${port}`);
})