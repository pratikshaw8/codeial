const express = require('express');
const app = express();

const port = 8000;
app.listen(port,(err)=>{
    if(err)console.log(`Error listening on port: ${err}`);
    else console.log(`Listening on port: ${port}`);
});