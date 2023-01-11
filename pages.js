const http = require('http')
const Url = require('url')
const fs = require('fs')
const changeLink = require('./moduels/chooseLink')
const datatypeCheck = require('./moduels/datatypecheck')

const server = http.createServer((req, res) => {
    const url = Url.parse(req.url, true);
    let currntPath = changeLink(url.pathname)
    let dataPath = ''
    if(typeof currntPath === 'object'){
        dataPath = 'object';
    } else {
        dataPath = currntPath.split('.')[2];
    }
    let currentDataType = datatypeCheck(dataPath)  
    console.log(currentDataType);
    try {
        const data = fs.readFileSync(currntPath, 'utf8')
        res.writeHead(200, { 'content-type': currentDataType });
        res.end(data)
    }
    catch (err) {
        console.error(err)
    }
}).listen(8085)