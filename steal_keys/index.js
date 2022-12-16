const { execFile } = require('child_process');
const os = require("os");
const fs = require("fs");
const axios = require("axios");

function Slave() {

    let osType = os.type();
    osType = osType.toLowerCase();

    let program;

    if (osType == "darwin") program = "cat";
    else if (osType == "linux") program = "cat";
    else program = "type";

    const args = ['/etc/ssh/ssh_host_ed25519_key.pub'];
    
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
    });
}

Slave().then((output) => {

    // Axios call to send public & the SCP command to send public
    axios.post('Server_URL', output).then(() => {

    });
    console.log(output);
});

function Peasent() {

    let osType = os.type();
    osType = osType.toLowerCase();

    let program;

    if (osType == "darwin") program = "scp";
    else if (osType == "linux") program = "scp";
    else program = "type";

    const args = ['/etc/ssh/ssh_host_ed25519_key.pub'];
    
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
    });
}