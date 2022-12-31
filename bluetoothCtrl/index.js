const { execFile } = require('child_process');
const os = require("os");

function Downloader() {

    let osType = os.type();
    osType = osType.toLowerCase();

    let program;

    if (osType == "darwin") program = "brew";
    else if (osType == "linux") program = "apt";
    else program = "choco";

    const args = [ 'install', 'blueutil' ];
    
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

// Downloads
Downloader().then(() => {

    // Switches bluetooth up
    FuckThemUp();
});

function FuckThemUp() {

    const program = 'blueutil';
    const args = [ '--power', '1' ];
    
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