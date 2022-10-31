const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


//pass: KjcP3UeClezxLMyS
// user : dbuser1

app.get('/',(req,res)=>{
    console.log('server on');
    res.send('server is running')
})

const uri = "mongodb+srv://dbuser1:KjcP3UeClezxLMyS@bloodfind.twiongw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async()=>{
    const collection = client.db("bloodFind").collection("users");

    try{
        app.post('/donor/register',async(req,res)=>{
            const user = req.body;
            const result = await collection.insertOne(user);
            res.send(user)
        })
    
        app.get('/user',(req,res)=>{
    
            res.send('it ok')
        });
    }


    finally{

    }
};


run().catch((e)=>{
    console.log(e);
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})