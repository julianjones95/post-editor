"use strict";
const { exec } = require('child_process');
const fileName = "foo.txt";
exec('wc -l foo.txt', (err, stdout, stderr) => {
    stdout = stdout.replace(fileName, "");
    stdout.trim();
    var numLines = +stdout;
    // console.log("stdout: " + numLines)
    for (let i = 0; i < numLines; i++) {
        // sed -n '7p' foo.txt  // prints the 7th line from file foo.txt
        var query = "sed -n " + "'" + i + "p' " + fileName;
        exec(query, (err, stdout, stderr) => {
            console.log("index: " + i + "," + stdout);
        });
    }
});
