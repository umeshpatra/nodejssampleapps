const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const crawlurl = "https://www.flipkart.com/search?q=mobiles";

request(crawlurl, function(err, res, body){
    if(err)
    {
        console.log(err);
    }
    else{
        const arr = [];
        let $ = cheerio.load(body); 

        printfunc($, arr);
        console.log(arr.toString());
    }
});

let printfunc = function($, arr){
    let x = 0;

    $('div._2kHMtA').each(function(index, itm){
        
        const newobj = createobj($, itm);
        arr.push(JSON.stringify(obj));
        x++;
        if( x > 1 )         return false;
    });    
};

function createobj($, itm){
    const objurl = $(itm).find('a._1fQZEK').attr('href');
    const objtext = $(itm).find('div._4rR01T').text();
    const objprice = $(itm).find('div._30jeq3._1_WHN1').text();
    return obj = {
        objurl : objurl,
        objtext : objtext,
        objprice : objprice
    };        
}