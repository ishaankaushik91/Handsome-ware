const folderEncrypt = require("folder-encrypt");

folderEncrypt.encrypt({
    password : 'Papa Ishaan',
    input : './temp',
    output : './temp.encrypted'
});