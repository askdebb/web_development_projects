/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";




inquirer.prompt([
    {
        "message": "Enter your favourite website?",
        "name": "URL"
    },

]).then((answers) => {
    // console.log(answers);
    const url = answers.URL;
    const qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('my_QR.png'));

    fs.writeFile("answer.txt", url, (err) => {
        if(err) throw err;
        console.log("File created successfully!");
    });

}).catch((error) => {
    if(error.isTtyError){
        console.log("Prompt couldn't be rendered in the current environment");
    } else {
        console.log("something else went wrong");
    }
});