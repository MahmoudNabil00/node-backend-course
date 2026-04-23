// NodeJs Core Modules
const readline = require("readline");
const fs = require("fs");
const http = require('http');
const url = require('url');

// Creating Custom module in NodeJs  (User defined modules)
const bindHtml = require('./modules/bindHtml');

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


function sendServerError(response) {
    response.writeHead(500, { 'Content-Type': 'text/plain' });
    response.end('Internal Server Error');
}

function safeRead(filePath, encoding = 'utf-8') {
    try {
        return fs.readFileSync(filePath, encoding);
    } catch (error) {
        return null;
    }
}

const template = safeRead('./templates/index.html');
const productsRaw = safeRead('./data/products.json');
const productsHtml = safeRead('./templates/products-list.html');
const productDetailsHtml = safeRead('./templates/product-details.html');
const styleCss = safeRead('./styles/style.css');
const scriptJs = safeRead('./scripts/index.js');
const consoleJs = safeRead('./scripts/console.js');

function safeParseJson(raw) {
    try {
        return JSON.parse(raw);
    } catch (error) {
        return null;
    }
}

const products = productsRaw ? safeParseJson(productsRaw) : null;

const productsHtmlArray = Array.isArray(products) && productsHtml
    ? products.map(product => {
        return productsHtml
        .replace('{{%PRODUCT_NAME%}}', product.name)
        .replace('{{%PRODUCT_DESCRIPTION%}}', product.description)
        .replace('{{%PRODUCT_PRICE%}}', product.price)
        .replace('{{%PRODUCT_IMAGE%}}', product.image)
        .replace('{{%PRODUCT_ID%}}', product.id);
    }).join('')
    : null;

function getProductDetailsHtml(id){
    if (!Array.isArray(products) || !productDetailsHtml) {
        return null;
    }
    const selectedProduct = products.find(product => product.id === Number(id));
    if(!selectedProduct){
        return 'Product not found';
    }else{
        return productDetailsHtml.replace('{{%PRODUCT_NAME%}}', selectedProduct?.name)
        .replace('{{%PRODUCT_DESCRIPTION%}}', selectedProduct?.description)
        .replace('{{%PRODUCT_PRICE%}}', selectedProduct?.price)
        .replace('{{%PRODUCT_IMAGE%}}', selectedProduct?.image);
    }
}
//What happened ? 

// When you request as Domain this domain name goes to dns server and DNS(Domain Name Server(phone box)) server gives you the ip address of the server
// It is matching the name with the ip
// every application is hosted in a specific port number in the Ip address of the server 
// TCP(Transmission Control Protocol) is used to send and receive data between client and server
// TCP is the communication channel that allows two computers to send data to each other reliably.

// assets in html file are called from the browser the browser make a request to the server and the server will send the asset to the browser
// assets are images, css, js, etc.
// assets are stored in the server and the browser will request the asset from the server

// Route (Resource based url) is used to access the resource on the server
// Route is the path of the resource on the server
// Routing implementing different actions for different routes

// set status code and headers as a response to the client


const server = http.createServer((request, response)=>{
    // url.parse is used to parse the url and return an object
    let {pathname:path, query} = url.parse(request.url, true);

    // Better default UX: opening "/" will show home page.
    if (path === '/') {
        path = '/home';
    }

    if (path === '/styles/style.css') {
        if (!styleCss) return sendServerError(response);
        response.writeHead(200, { 'Content-Type': 'text/css' });
        return response.end(styleCss);
    }
    else if (path === '/scripts/index.js') {
        if (!scriptJs) return sendServerError(response);
        response.writeHead(200, { 'Content-Type': 'text/javascript' });
        return response.end(scriptJs);
    }

    if(path ==='/home'){
        if (!template) return sendServerError(response);
        response.writeHead(200,{
            'Content-Type': 'text/html',
            'my-name': 'Mahmoud Alrisheq',
        })
        response.end(bindHtml(template, 'Home page '));
    }else if(path ==='/about'){
        if (!template) return sendServerError(response);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(bindHtml(template, 'About page '));
    }
    else if(path ==='/scripts/console.js'){
        if (!consoleJs) return sendServerError(response);
        response.writeHead(200, {'Content-type' : 'text/javascript'})
        response.end(consoleJs);
    }
    else if (path.toLowerCase() ==='/products'){
        if (!template || !productsHtml || !productDetailsHtml || !productsHtmlArray || !Array.isArray(products)) return sendServerError(response);
        response.writeHead(200,{
            'Content-Type': 'text/html',
        })
        if(query.id){
            const productDetailView = getProductDetailsHtml(query.id);
            if (!productDetailView) return sendServerError(response);
            response.end(bindHtml(template, productDetailView));
        }else{
            response.end(bindHtml(template, productsHtmlArray));
        }

        // response.end(template.replace('{{%CONTENT%}}', productsHtmlArray));

        // fs.readFile('./data/products.json', 'utf-8', (err, data) => {
        //     if(err){
        //         response.writeHead(500)
        //         response.end('Internal Server Error');
        //     }else{
        //         response.writeHead(200,{
        //             'Content-Type': 'application/json',
        //         })
        //         const dataObjectProducts = JSON.parse(data);
        //         response.end(data);
        //     }
        // })
    }
    // for Fallback Route
    else{
        response.writeHead(404, { 'Content-Type': 'text/plain' })
        response.end('Page not found');
    }
    // to send a response to client and stop loading the page

});

// Start the server (port, hostname, callback)
server.listen(8000,'127.0.0.1',()=>{
    console.log('Server is running on port 8000');
})



