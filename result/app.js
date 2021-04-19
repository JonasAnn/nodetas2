const fetch = require('node-fetch');
const fs = require("fs");
const url = 'http://jsonplaceholder.typicode.com/posts';

function theData(){
    return fetch(url)
    .then(res => {
        return res.json()
    })

    .then((output) => {
        let result = output;
        // console.log(result);
        let data = JSON.stringify(result);

        fs.writeFile("posts.txt", data, function (err){
            if (err) throw err;
            console.log("it was created");
        });
        
    });
}

theData();
