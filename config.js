const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="smilthwilliams24@gmail.com"
global.location="osun, Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "234 701 254 5240" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "234 701 254 5240";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 4
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "234 701 254 5240,234xxxxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_03_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI4LFxuICAgICAgICA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDg5LFxuICAgICAgICA0MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA0LFxuICAgICAgICA5MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDM3LFxuICAgICAgICAyLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDM3LFxuICAgICAgICA4MCxcbiAgICAgICAgNixcbiAgICAgICAgNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMjM5LFxuICAgICAgICA2NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODUsXG4gICAgICAgIDQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEzLFxuICAgICAgICA1OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNixcbiAgICAgICAgMTU4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NCxcbiAgICAgICAgNixcbiAgICAgICAgODAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDIyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODksXG4gICAgICAgIDEzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODksXG4gICAgICAgIDIxNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNlclEyM0tjb2t6ckcwSWsxSmUyWGlxYzRMdTZaSCtVSnpZV0tkc0xKbWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAxMjU0NTI0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUVDQThBRjY3RDY1Njk3QzZCRjlDNDEyMDZDNjU0QjVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3MjIxNzc4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAxMjU0NTI0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTc2RjZGREQ1OEYxMzMwOUM4MjMzOEIyRDI2QTcwQTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3MjIxNzc5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImN5aW9sTUNpU3NtRlBzdnpxVEZaVFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWNhOTZiY2MtZjY4MS00MjIwLWJjN2UtZmJhOTdmMDExZDk4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ2LFxuICAgICAgMTAwLFxuICAgICAgMTM0LFxuICAgICAgMTUxLFxuICAgICAgMTg2LFxuICAgICAgNDAsXG4gICAgICAxNCxcbiAgICAgIDg2LFxuICAgICAgMTIyLFxuICAgICAgNTAsXG4gICAgICAxNTUsXG4gICAgICA1MyxcbiAgICAgIDExMSxcbiAgICAgIDI1MyxcbiAgICAgIDEwOCxcbiAgICAgIDEzNixcbiAgICAgIDEyMyxcbiAgICAgIDIzOSxcbiAgICAgIDE1NCxcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM3LFxuICAgICAgODAsXG4gICAgICAwLFxuICAgICAgMzIsXG4gICAgICAxMDQsXG4gICAgICAyNDAsXG4gICAgICA4MCxcbiAgICAgIDExMCxcbiAgICAgIDE5MSxcbiAgICAgIDEzOCxcbiAgICAgIDEwMixcbiAgICAgIDMsXG4gICAgICAxMjcsXG4gICAgICAxMTgsXG4gICAgICAxNzAsXG4gICAgICAyMDYsXG4gICAgICAxOTQsXG4gICAgICAxNTEsXG4gICAgICAyMDAsXG4gICAgICA4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHS0FNNllHUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxMjU0NTI0MDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwibXkgbG92ZWVcIixcbiAgICBcImxpZFwiOiBcIjIxNTU0NzUzMDcwNzE3OToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ltRGt2MEdFSWp6NnJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUTFxS2FBQWRMN2pGVFUvTWxqV1FRZGZQaWRxTE9ZMUJRa1FaVE0zUGtoVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuNmtvNllqTFFVS1h5MXZ0YWZEZ3RkcjNlSGJSb1hERGF6aUh0SXNqdnZCRFZ2dlFQRkgrWStVV3BkQnlkb29PN0l0dHBSc1FyUjh4M2VVUzc4Y2xCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDS3BVa0FHSzdsNVNMeWNyWnVZdmx1UTJjK3ZxaXkwY29pSWlxQktPR0tCWEQ1eUEvOHk2MG8zUzhFaWlNWWtjc05jOWVVUklBQUF5aDltUFdRTXRqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDEyNTQ1MjQwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MjIxNzcyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTXllXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNeWUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJURUJSN0RKcm9yV3dGRzJvaEpOOVJ5cURQTE5aZUpSUGZ6em9YMllqQ3ZvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NzMwNTIwNDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzIyMTc3NTY2MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || ".", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "joesph",
  packname: process.env.PACK_NAME || "Joseph brume",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Joseph",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "true",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
