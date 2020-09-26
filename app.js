//Application dependency modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//Application Dependency Settings
app.set("views", path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('static'));

//Application Storage Variables
let items = [];
let workItems = [];

//Application Route Code Begin
app.get('/',function(req,res){
  console.log("INFO: Inside the '/' route GET request");

  const day = new Date();
  const today = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(day);

  let templateData = {
    listName: today,
    listItems: items
  };

  res.render("list",templateData);
});

app.post('/',function(req,res){
  console.log("INFO: Inside the '/' route POST request");
  console.log(req.body);

  let item = req.body.item;

  if(req.body.listType === 'Work')
  {
    workItems.push(item);
    res.redirect('/work');
  }
  else{
    items.push(item);
    res.redirect('/');
  }
});

app.get('/work',function(req,res){
  console.log("INFO: Inside the '/work' route GET request");
  console.log(req.body);
  let templateData = {
    listName: 'Work',
    listItems: workItems
  }
  res.render('list',templateData);
});
//Application Route Code END

//Main Server Code
app.listen('3000',() => {
  console.log("\nINFO: NODE server was started");
  console.log("INFO: It is listening to PORT: 3000");
});
