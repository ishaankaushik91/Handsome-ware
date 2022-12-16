const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

const filePath = "./fuckYou.wav";
const url = "http://103.83.137.87";

const form = new FormData();
form.append("audio", fs.createReadStream(filePath));

axios.post(url, form, { headers: form.getHeaders() });