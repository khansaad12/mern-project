
const express = require("express");
const cors = require("cors")

const router = require('./routes/product');
const path = require("path");
require('dotenv').config();


const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("datbase connection success");
 
}


const app = express();
// console.log(process.env.DB_PASSWORD);
app.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
app.use(cors());
app.use(express.json());

 app.use('/products',router.router);
app.use("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname ,"build/index.html"));
})

app.listen(process.env.PORT, () => {
  console.log("server started");
});
