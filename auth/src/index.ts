import express from 'express';
import { json } from 'body-parser';

const app = express();

app.use( json() );

app.get( '/api/users/cc', (req, res)=>{
    // res.send('hi there');
    res.send("hi")
})

app.listen( 3000, ()=>{
    console.log("Auth service listening on port 3000@@@@");
})
