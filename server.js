const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const app = express();

var litdate = process.argv[2];
console.log(litdate);
var usccburl = "http://www.usccb.org/bible/readings/" + litdate + ".cfm";
console.log(usccburl);

axios.get(usccburl).then(function(response) {
 
    var $ = cheerio.load(response.data);
    $(".bibleReadingsWrapper").each((i, element) => {
        var citation = $(element).children('h4');
        var citationText = $(citation).text();
        var poetry = $(element).children('.poetry');
        var poetryText = $(poetry).text();
        console.log(citationText);
        console.log(poetryText);
    })
})
    .catch(err => {
        console.log(err);
    });

// app.listen(3000, () => {
//         console.log("App running on port 3000!");
//     });