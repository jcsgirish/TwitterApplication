const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');


app.use(cors({
  origin:'https://twitter-application-pi.vercel.app/signup',
  methods: 'GET,POST,PUT,DELETE,PATCH',
  credentials: true 
}));
app.use(express.json()); 


  const uri = "mongodb+srv://Twitter_admin:OczIflmOZghSHgWJ@twitteradmin.0np7z19.mongodb.net/Twitter_admin?retryWrites=true&w=majority&appName=Twitteradmin";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
 
    await client.connect();

    const postCollection = client.db('database').collection('posts')
    const userCollection = client.db('database').collection('users')

  app.get('/post', async(req,res)=>{
    const posts = (await postCollection.find().toArray()).reverse()
    res.json(posts)  
  })
  app.get('/user',async(req,res)=>{
    const user= await userCollection.find().toArray()
    res.json(user)
  })

  app.get('/Loggeduser', async(req,res)=>{
    const email = req.query.email
    console.log(email)

    const user =  await userCollection.find({email:email}).toArray()
    console.log(user)
    res.json(user)
  })
  
  app.get('/userPost' , async(req,res)=>{
    const email = req.query.email
    const post =  (await postCollection.find({email:email}).toArray()).reverse()
    res.json(post);
  })

  app.post('/post', async(req,res)=>{
    const post = req.body
    const result = await postCollection.insertOne(post)
    res.json(result)
  })

  app.post('/register', async (req, res) => {
    try {
      const user = req.body;
      console.log('Received user data:', user);
      const result = await userCollection.insertOne(user);
      console.log('MongoDB insertion result:', result);
  
      res.json(result);
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Failed to register user' });
    }
  });
  
  

  app.patch('/userUpdates/:email', async (req, res) => {
    const filter = req.params;
    const profile = req.body;
    const options = {upsert: true };
    const updateDoc = {$set: profile };
    const result = await userCollection.updateOne(filter,updateDoc,options);
    res.json(result);
});

  
 
}
catch(error){
  console.log(error)
}
}run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send('Hello Twitter!')
})
app.listen(port,()=>{
    console.log(`Twitter hello ${port}`)
})