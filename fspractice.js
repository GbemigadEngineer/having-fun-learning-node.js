// module required to read and write files in js.
const fs = require("fs");

// reading files

const readFile = fs.readFileSync("./practicefile.txt", "utf8");

console.log(readFile);

//  writing files

fs.writeFileSync("./practicefile2.txt", "1,2,3,4,5,6");

// when you use the writefile() or writefile() meethod on an existing file, it overwrites the file.

// Practicing the async method()

fs.readFile("./practicefile.txt", "utf8", (error, data) => {
  if (error) return console.log("Error!!");
  console.log(data);
  fs.writeFile("./practicefiles2.txt", `${data}\n A,B,C,D`, "utf8", (error) => {
    console.log(`Your file has been written!!`);
  });
});
