const readline = require('readline');
const fs = require('fs');
const request = require('request');
let infile = process.argv[2];
let reader = readline.createInterface({
    input: fs.createReadStream(infile)
});

//Custom Header pass
var headersOpt = {
    "content-type": "application/json",
};

function postImage(line, foodType, cuisineId) {
    return new Promise((resolve, reject) => {
        request.post({
            url: "http://localhost:3001/api/images",
            json: true,
            headers: headersOpt,
            json: {
                image_link: line,
                foodType: foodType,
                cuisineId: cuisineId
            },
            
            function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            }
        });
    });
};

// postImage(process.argv[3],process.argv[2]);
let foodType;
let cuisineId;

reader.on('line', async function (line) {

    line = line.trim();

    if (line.length !== 0) {
        if (line.charAt(0) === "+") {
            foodType = line.substr(1);
        } else if (line.charAt(0) === "*") {
            cuisineId = line.substr(1)
        } else {
            try {
                await postImage(line, foodType, cuisineId)

            } catch (err) {
                console.log(err);
            };
        };
    };
});

reader.on('close', function (line) {
//    process.exit();
});