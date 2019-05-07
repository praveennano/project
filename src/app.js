const express = require("express");
const bodyparser = require("body-parser");
const mongodb = require("mongodb").MongoClient

const app = express();

var products = [{pdtName:"Knorr Instant Soup (100 Gm)", pdtPrice:88, pdtImg:"http://localhost:4200/assets/images/5.png"},
{pdtName:"Chings Noodles (75 Gm)", pdtPrice:100, pdtImg:"http://localhost:4200/assets/images/6.png"},
{pdtName:"Lahsun Sev (150 Gm)", pdtPrice:75, pdtImg:"http://localhost:4200/assets/images/7.png"},
{pdtName:"Premium Bake Rusk (300 Gm)", pdtPrice:245, pdtImg:"http://localhost:4200/assets/images/8.png"}];


var db;

mongodb.connect("mongodb+srv://test:test@mycluster-fqiol.mongodb.net/test?retryWrites=true", (error, database)=>{

if(error)
{
  console.log(error);
}
else {

  db = database.db("shopping");
  
  console.log("DB Connected");
}

});

app.use((req, res, next)=>{

  console.log("Middleware 1");

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  next();

});

app.use((req, res, next)=>{

  console.log("Middleware 2");

  next();

});

app.use(bodyparser.json());

app.use('/home', (req, res, next)=>{

  console.log("Middleware 3");

  next();

});




app.get("/",  (req, res)=>{

  console.log("Index page");

    var data = {name:"parveen", age:28};
  //  res.send("<h1>Welcome to Express<h1>");

  //res.send(data);

  res.json("<h1>Welcome to Express<h1>");

});


app.get("/home", (req, res)=>{

  
    console.log("Home page");

    res.json("Welcome to Home page");
});



app.get("/listproducts", (req, res)=>{

res.json(products);

}); 


app.post("/register", (req, res)=>{

  console.log(req.body);
  
  req.body._id = new Date().getTime();
  db.collection("user").save(req.body, (error, data)=>{

    if(error)
    {
      res.status(401).json("Error in Insert query");
    }
    else{

      res.json("Registered Successfully");

    }

  })

});
app.post("/login", (req, res)=>{

  console.log(req.body);

  db.collection("user").find(req.body, {projection: {_id:1, Username:1}}).toArray((error, data)=>{

    if(error)
    {
      res.status(402).json("Error in select query");
    }
    else {
      res.json(data);
    }

  })

 // res.json("Logged successfully");

});


module.exports = app;