
const fs = require("fs");

fs.writeFile("message.txt", "Henry", (err) => {
    if(err) throw err
    console.log("file created successfully");
})



fs.readFile('./message.txt', 'utf8', (err, data) => {
    if(err) throw err
    console.log(data);
});
