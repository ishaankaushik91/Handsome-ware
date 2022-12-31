const folderEncrypt = require("folder-encrypt");

try {
    folderEncrypt.decrypt({
        password : 'Papa Ishaan',
        input : './temp.encrypted',
        output : './temp'
    });
} catch (error) {
    console.log("File encrypted!");
}