const { execFile } = require('child_process');
const os = require("os");

function Downloader() {

    let osType = os.type();
    osType = osType.toLowerCase();

    let program;

    if (osType == "darwin") program = "brew";
    else if (osType == "linux") program = "apt";
    else program = "choco";

    const args = [ 'install', 'imagesnap' ];
    
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
    FuckThemUp();
});

function FuckThemUp() {

    const program = 'imagesnap';
    const args = [ '-w', '1', 'snapshot.png' ];
    
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