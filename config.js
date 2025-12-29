const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Silva~H4sIAAAAAAAAA5VU25KiSBD9lY16bWMaUG5GdMQioggKKiLoxjyUUEC13KQKECf89w3s7ul52J3t5amoyjh5Ms/J/AHyAhNkog6Mf4Cywg2kqD/SrkRgDCZ1FKEKDEAIKQRjkK3OmjezTHxwNjd4LULGP2jKAmnecXk67G4RlxJ9ZTy3+eYF3AegrE8pDn4DWJWWfWN3nahJUbraCStOZ/ntRL/tM84g3USsyc4ZwX3hj17AvUeEuMJ5rJUJylAFUxN1a4irr9FfGcVR2k3h8nJcX0fPlyiPX5+OmWguh9rMkRteDjtfmfHukHyNfkGOW1NBGXRMxeVFGQpUSiqhLHRvLcyuiew7JuXTbMOu3ugTHOcoXIQop5h2X+77RsXsHj8dTFPWuRZnabyIc/5wmovz9lr5R8+5rdfD1BFd6WvE09HWZPC8cBMr3A13fPMcadetdsCvvmUpYrZZ0NAyBaWenX8lvq4+vHL+X303r9d4mWjEMr1Sk4uQ3Vd0lefa8fZU2uIm3rb1ebHtqO5+jT7Nmw3abHZFt/R3hn/Ipup1gqbJ4XVCntstbbdR7tX8cqNLn/QhravfsWy2wUY9W8unLJANKxe1Bc9s/HMYnGxab7e36+QGtSg5ynSVO06hle7ZTguoh+I+FT3WJydXWpU82r1ajbKaEfs6v6rKy6OiM+oWIRiz9wGoUIwJrSDFRf64Y6UBgGHjoKBC9NFeIAcdk7VBs+atJvOVypP8bWQwF+bJUC2Of/anxnOGBY934hcwAGVVBIgQFOqY0KLqVogQGCMCxn99H4AcXembcH26ITcAEa4IdfO6TAsYfqj68QiDoKhz6nR5oPYHVIEx83mNKMV5TPo+1jmsggQ3SE0gJWAcwZSgnxWiCoVgTKsa/ZxatQj7xtvWRBcMZggGIHsIgsO+Zm44HI5YZiQy0ngk/Em+tT0sLMtvOaJgANJHGMdJnCjyAscO+9A+sn8YgBz2YGBxTlJ4+UNJMhT2nX/n3acJEYU4JWAMVDOSu6JVNSOzu6CYzxUtVtRYAZ91fhjmTZB15+pix0XK4bzGry026qeLmjMuf1O5lWecUmjPlmuNNXPm5R9AwBgwLvJqrhwN/UM9P4XW1N5D1tzuqqg9iSqP90gwzpYp6vV5DxsPXd0E8TfiwZN7aLLAcCx1aM7OFzKcG+1yOUeWsVfblz5biBocoF+Tue1icrQTo0SmeD5WI8GYHPOUXJbmMJmFE6J6lkS6eWrQNZGcvbyq513WMeW0sZN6aS2F2BYs9pJxwk33w5O9Dqe+Er9Z+TFK6fsKww+T9Qr2vxFGj43wLsV/KvpGvDcecx/8gvG+Y/5lTic7KZ08STRv58Z0VEgLfGoucSnP7KClrzPs8d5r4tyullPK4H7/PgBlCmlUVBkYA5iHVfHwS1XUvZMXeVT8JpmquAsljq2+8hQSqnxOxw5niFCYlWDMioIgy7I04t+i1lVR6pAkYAxYc5Too97qnVKWDoX0Y9iA0n82T8H9bx9KS+iIBwAA",
// add your Session Id 
PREFIX: process.env.PREFIX || "*",
// add your prifix for bot
BOT_NAME: process.env.BOT_NAME || "✦ Silva ✦ Spark ✦ MD ✦",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "254700143167",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "✦ Silva ✦ Spark ✦ MD ✦",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ✦ Silva ✦ Spark ✦ MD ✦*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/BVt9McxS/photo-2025-06-15-12-14-29-7516148628621099032.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> SILVA SPARK IS SPARKING ACTIVE AND ALIVE\n\n\nKEEP USING SILVA SPARK FROM SILVA TECH INC⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true or false status antidelete
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// make true if you want auto reply on status 
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*🎉👀 Seen by Silva Spark MD 🚀🔥*",
// set the auto reply massage on status reply    
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 
OWNER_REACT: process.env.OWNER_REACT || "true",
// make it true or fasle for only react on owner msg only 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
