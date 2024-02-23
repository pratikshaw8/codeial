const express = require('express');
const app = express();

const port = 8000;


//use express router for the routers folder we created(middleware)
app.use('/',require('./routes/index'));



app.listen(port,(err)=>{
    if(err)console.log(`Error listening on port: ${err}`);
    else console.log(`Listening on port: ${port}`);
});