import express from "express";

//give your app a name
const app = express();

//always use json for body
app.use(express.json());

//list of allowed requests
//all express functions have a least 2 parameters request, response in order
app.get("/test", (request, response) => {
    response.send('Hello there 😀');
});

const fruits = ["apple", "bannana", "cherries", "orange"];
//add a fruit to the list?

app.get("/fruits", (req,res)=> {
    res.send(fruits);//auto adds status 200
});

//post requests needs a body
app.post("/fruits", (req, res) => {
    const newFruit = req.body.fruit;
    fruits.push(newFruit);
    res.status(201).send(fruits);

})


//what port to watch, listen to
app.listen(3000, ()=>{
    console.log('Listening on http://localhost:3000/...');
});