const http = require("http");
const fs = require("fs");
var requests = require('requests');

const homeFile = fs.readFileSync("home.html","utf-8");

const replaceVal = (tempVal , orgVal)=>{
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);

    return temperature;

}

const server =http.createServer((req,res)=>{
    if(req.url == "/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=590615a4cf0b67905ae185691df79eaf")
        .on('data', (chunk)=> {
          const objData= JSON.parse(chunk);
          const arrData = [objData];

          //   console.log(arrData);
          // var celciusTemp = arrData[0].main.temp - 273.15 ;
          // var celciusTempMin = arrData[0].main.temp_min - 273.15 ;
          // var celciusTempMax = arrData[0].main.temp_max - 273.15 ;
          //   console.log(celciusTemp);

        const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join("");
        res.write(realTimeData);
        // console.log(realTimeData);
        })
        .on('end', (err)=> {
          if (err) return console.log('connection closed due to errors', err);
         res.end();
        });
    }
})

server.listen(8000,"127.0.0.1");
