let express = require("express");
let app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function(req,res){
   res.render("home");
  
});

app.get("/fallinlovewith/:thing", function(req, res) {
    let thing2 = req.params.thing;
    res.render("love", {thingVar: thing2});

});

app.get("/posts", function(req, res) {
  let posts = [
      {title: "Post 1", author: "Suzy"},
      {title: "The Story of My Life", author: "Charlie"},
      {title: "Eating Curry", author: "George"},

  ];

  //the first "posts" refers to the posts in the posts.ejs file. the second posts refers to the variable.
  //it is common for them to be the same name.
  res.render("posts", {posts: posts});


});

app.listen(3000,function() {
  console.log("server is listening");
});
