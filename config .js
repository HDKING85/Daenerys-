const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://avatars.ghithubusercontent.com/u/106251140?v=4",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello, i am daenerys i am alive now!",
};
