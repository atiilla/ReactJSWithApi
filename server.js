const express = require('express');

const app = express();

const port = 5000
const users = [{_id:1, name:'Jack Sparrow', age:28, city:'Aalst'}]


app.get('/api/users', (req, res)=>{

    res.json(users)

});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});