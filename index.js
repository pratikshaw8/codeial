const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const port = 8000;
const db = require('./config/mongoose');


app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use express router for the routers folder we created(middleware)
app.use('/',require('./routes/index'));

//set up view engine as ejs
app.set('view engine','ejs');
app.set('views','./views');



//defining localhost port
app.listen(port,(err)=>{
    if(err)console.log(`Error listening on port: ${err}`);
    else console.log(`Listening on port: ${port}`);
});