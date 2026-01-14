import express from "express";
import bodyParser from "body-parser";

// mock database
import mangas from "./mock_database.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));



app.get("/", (req, res) => {
    res.render("index.ejs", { mangas })
})


app.listen(port, () => {
    console.log(`Server ready on port ${port}`);
})