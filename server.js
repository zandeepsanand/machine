const express = require('express');
const app = express();
const path = require('path');


 if (process.env.NODE_ENV === 'production'){
    app.use('/', express.static('frontend/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend/build/index.html'))
    })
 }

 const port = process.env.PORT || 8000 ;
 app.listen(port,()=> console.log(`Node js is running`))