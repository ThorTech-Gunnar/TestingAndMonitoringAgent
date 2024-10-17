const { exec } = require("child_process");

function runTests() {
    exec("npm test", (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing tests: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Test error: ${stderr}`);
            return;
        }
        console.log(`Test results: ${stdout}`);
    });
}

runTests();
