const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/udaralakmal2025-web/UDARA_MD02/refs/heads/main/images/Gemini_Generated_Image_t8tnint8tnint8tn.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 UDARA_MD Is Alive Now😍*",
BOT_OWNER: '94716724604',  // Replace with the owner's phone number



};
