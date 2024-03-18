const express = require('express')
const server = express();
const mongoose = require("mongoose")
const router = require("./routes/task");
require('dotenv').config();
//database connection

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todolist');
  console.log("datbase connection success");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
server.use(express.json())
server.use('/api',router.router);

server.listen(process.env.PORT,()=>{
    console.log("server strated");
});
