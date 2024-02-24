const fs = require("fs");

fs.writeFile("result.txt", "Hello CodeBOLT", (err) => {
    if(err) throw err
    console.log("File saved successful");
});

fs.readFile("./result.txt","utf-8", (err, data) => {
    if(err) throw err
    console.log(data);
})