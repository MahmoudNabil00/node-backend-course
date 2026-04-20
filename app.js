const readline = require("readline");
const fs = require("fs");
const http = require('http');

// const rel = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })
// rel.question("What is your name?", (name) => {
//     console.log(`Hello ${name}`);
//     rel.close();
// });

// rel.on("close", () => {
//     console.log("Bye!");
//     process.exit(0); 
// });

// console.log('line1');



// console.log('line2');

// let content = `Data created by synchronous created at ${new Date().toISOString()}`
// fs.writeFileSync('./folders/input.text', content);

// console.log('line3')

// fs.readFile('./folders/input.text', 'utf-8', (err, data) => {
//     console.log('-----------------------------------------\n')
//     console.log(err,data,'File read Asynchronously')
//     fs.writeFile('./folders/write1.text', 'Dummy data', (err) => {
//         console.log(err,'File written Asynchronously')
//         fs.readFile('./folders/write1.text', 'utf-8', (err, data) => {
//             console.log(err,data,'File read Asynchronously')
//         })
//     })
// })

// console.log('line1')
// let textFile = fs.readFile('./folders/input.text', 'utf-8', (err, data) => {
//     console.log('asdasdasd')
// })
// console.log('line3')


// Asynchronous code : non blocking IO model is used in node js 

// Synchronous code : blocking IO model is used in node js 

// Asynchronous NATURE OF NODE JS 
// non blocking IO (Input & Output) model is used in node js

// non blocking IO model is used to handle thousands of requests

// we used so many callback function in node js

// Callback does not mean async code


// Creating a simple web server 

// // Create a server using http module(req:Data from client, response:Data to client)

const template =  fs.readFileSync('./templates/index.html', 'utf-8', (err, data) => {
    // SYNC code does not use callback function
    console.log(data)
})
const server = http.createServer((request, response)=>{

    // to send a response to client and stop loading the page
    response.end(template);
    // this call back will execute every time new request hit a server 
    console.log('New request receive ');
    console.log(request)
    console.log('-----------------------------------------\n')
    console.log(response)
});

// Start the server (port, hostname, callback)
server.listen(8000,'127.0.0.1',()=>{
    console.log('Server is running on port 8000');
})


//What happened ? 

// When you request as Domain this domain name goes to dns server and DNS(Domain Name Server(phone box)) server gives you the ip address of the server
// It is matching the name with the ip
// every application is hosted in a specific port number in the Ip address of the server 
// TCP(Transmission Control Protocol) is used to send and receive data between client and server

// assets in html file are called from the browser the browser make a request to the server and the server will send the asset to the browser
// assets are images, css, js, etc.
// assets are stored in the server and the browser will request the asset from the server