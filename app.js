import {config} from 'dotenv'               
import express from 'express'
import bodyParser from 'body-parser'
import {getTables} from './config/database.js';
import { createUserWithEmail } from './controllers/auth/auth.js';
const app = express();
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
app.get('/tables', async (req, res) => {
    const tables = await getTables();
    res.send(tables);
});
app.post('/register', async (req,res) =>{
const email = req.body.email;
const password = req.body.password;
const name = req.body.name;
const phoneNo = req.body.phoneNo;
const user = await createUserWithEmail(email,password);
});
const PORT = process.env.PORT || 3030;
app.listen(PORT, () =>{
    console.log(`Server started at port ${PORT}`);
})