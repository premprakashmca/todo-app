var express=require("express");
var bodyParser=require("body-parser");
var app=express();
var i1=[];
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res)

{
//res.send("<h1>Hey guys</h1>");
res.render("list",{newListItems:i1});
})

app.post("/",function(req,res)
{
    i=req.body.n;
   // console.log(i);
   i1.push(i);
   //res.render("list",{newListItem:i});
   res.redirect("/");
})



app.listen(3000,function()
{
    console.log("Listening to port 3000");
})