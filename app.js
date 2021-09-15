var parser = require('tld-extract');
const fs = require('fs');

let file;


try {
    file = fs.readFileSync("./urls.txt").toString().split("\n");
} catch (error) {
    console.log("Error reading file");
}

function listOfURLstoObjs(list,cb){
    if (list.length >= 1) {
        let results = [{
            type: "heading"
        }];
        list.forEach(line => {
            line = line.toString().trim();
            let urlObj = parser(line,{allowPrivateTLD : true});
            let URLforReview = line;
            let isSubDomainFlag = ( urlObj.sub === '0' ) ?  urlObj.sub : true ;
            results.push({
                "type": "row",
                "page" : URLforReview,
                "isSubDomainFlag" : isSubDomainFlag,
                "domain" : urlObj.domain,
                "tld" : urlObj.tld
            });
    
        });
        cb(results)
    }
}

function printResults(arrayOfObjs){
    arrayOfObjs.forEach(url => {
        if (url.type === "heading") {
            console.log(`URL,Is a Subdomain?, Domain, TLD`);
        }
        if (url.type === "row") {
            console.log(`${url.page},${url.isSubDomainFlag},${url.domain},${url.tld} `)
        }
    });
}

listOfURLstoObjs(file,printResults);

