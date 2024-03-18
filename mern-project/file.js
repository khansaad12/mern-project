// const { error } = require('console');
// const fs = require('fs');
// fs.writeFile("./test.txt","hello world this is file", (err)=>{})
// fs.appendFile("./test.txt","now i append the message \n",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('successfully append');
//     }
// })
// fs.readFile("./test.txt","utf-8",(error,data)=>{
//     if (error) {
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }
// })
// fs.unlink("./test.txt",(eror)=>{
//     if(eror){
//         console.log(eror);
//     }
//     else{
//         console.log("successfully removed");
//     }
// })
// fs.mkdir("./main-dir/sub-dir",(error)=>{
//     if (error) {
//         console.log(error);
//     }
//     else{
//         console.log("success");
//     }
// })
//     const express = require('express');
//     const server = express()
//     server.listen(8080);
// fs.readFile('./main-dir/sub-dir/text.txt','utf-8',(error,data)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }
// })


//2U4P3bDApilx81kN     db-password


//6u7X0mOpxpEU5RkT    db-user password

// const http = require('http');
// const url = require('url');
const express = require("express");
const cors = require("cors")

const router = require('./routes/product');
const path = require("path");
require('dotenv').config();
// const server=http.createServer((req,res)=>{
//     const log = `${new Date()} ${req.url}  : "new req is received" \n`;
//     const myurl = url.parse(req.url,true)
//     console.log(myurl);
//     fs.appendFile('message.txt',log,(err,data)=>{

//         if(err){
//             res.end("error");
//         }
//         else{
//             switch(myurl.pathname){
//                 case '/':
//                     res.end("home page");
//                     break;
//                 case '/about':
//                     res.end("About page");
//                     break;
//                 case '/contact':
//                     res.end("contact us page");
//                     break;
//                 default:
//                     res.end("404 page not found");
//             }

//         }
//     })

// })

// server.listen(8080,()=>{
//   console.log("server starts");
// });

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("datbase connection success");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// const mongoose = require('mongoose');
// //main().catch(err=>console.log(err));
//  //function main(){
//    mongoose.connect('mongodb+srv://saadullah:9aJomH19AwSIjR1t@db-project.ha4afbo.mongodb.net/?retryWrites=true&w=majority&appName=db-project');
//   console.log("database connected");
//}

// const { default: mongoose } = require("mongoose");
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
