const express = require("express");
const path = require("path");
const hbs = require("hbs");

require("./db/conn");
const User = require("./models/userdata");

const app = express();
const port = process.env.PORT || 3300

const static_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));

app.set("view engine", "hbs");
app.set("views",views_path);
hbs.registerPartials(partials_path);


app.get("/", (req,res) => {
    res.render("index");
});

app.post("/contact", async(req,res) => {
    try{
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");
    }catch(error){
        res.status(500).send(error);
    }
});


app.listen(port, () => {
    console.log(`server running on port number ${port}`)
});