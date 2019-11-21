const readline = require('readline');
const fs = require('fs');
const request = require('request')
let infile = process.argv[2];
let reader = readline.createInterface({
    input: fs.createReadStream(infile)
});

//Custom Header pass
var headersOpt = {  
    "content-type": "application/json",
};

function postImage(line, foodType) {
    return new Promise((resolve, reject) => {
        request.post({
            url: "http://localhost:3001/api/images",
            json: true,
            headers: headersOpt,
            json: {
                image_link: line,
                foodType: foodType
            },
            function(err) {
                if(err) {
                    reject(err);
                } else {
                    resolve();
                }
            }
        })
    
    })
}
let foodType;

reader.on('line', async function(line) {

    line = line.trim();
    
    if(line.length !== 0) {
        if(line.charAt(0) === "+") {
            foodType = line.substr(1);
            console.log(foodType)
        } else {
            // console.log(line)
            try {
                console.log(line,foodType)
                await postImage(line, foodType)

            } catch(err) {
                console.log(err);
            }
        }
    }
});

reader.on('close', function(line) {
    // process.exit();
});