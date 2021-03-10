const Discord = require("discord.js")
const fs = require("fs");
const clc = require("cli-color");
const ConsoleTitle = require("node-bash-title")

const bot = new Discord.Client({disableEveryone : true})


bot.on("ready", async () => {
    console.log(clc.green(`User Hosted IS $(bot.user.username)`))
    setTimeout( () => {
        console.clear();
        console.log(clc.green("BOT HAS STARTED"))
    }, 2000)
    })

bot.on("message", async message => {
    if(message.content === "2help")
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("Nardo Selfbot By mq OTW!")
        .addField('𝙉𝘼𝙍𝘿𝙊 𝙎𝙀𝙇𝙁𝘽𝙊𝙏', '𝘽𝙖𝙨𝙞𝙘 𝙃𝙚𝙡𝙥 𝘾𝙤𝙢𝙢𝙖𝙣𝙙 , 𝙏𝙝𝙞𝙨 𝙄𝙨 𝙇𝙞𝙩𝙚𝙧𝙖𝙡𝙡𝙮 𝙏𝙝𝙚 𝘾𝙤𝙢𝙢𝙖𝙣𝙙', true)
        .addField('𝘕𝘚𝘍𝘞 🔞', '𝙎𝙚𝙡𝙛 𝙀𝙭𝙥𝙡𝙖𝙣𝙖𝙩𝙤𝙧𝙮', true)
        .addField('𝙏𝙀𝙓𝙏', '𝙎𝙃𝙊𝙒𝙎 𝘼𝙇𝙇 𝙏𝙀𝙓𝙏 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎', true)
        .addField('𝘍𝘜𝘕', '𝘚𝘩𝘰𝘸𝘴 𝘉𝘢𝘴𝘪𝘤𝘢𝘭𝘭𝘺 𝘈𝘭𝘭 𝘛𝘩𝘦 𝘍𝘶𝘯 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘠𝘬?', true)
        .addField('𝘼𝘾𝘾𝙊𝙐𝙉𝙏','𝙎𝙝𝙤𝙬𝙨 𝘼𝙘𝙘𝙤𝙪𝙣𝙩 𝙈𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩', true)
        .setImage('https://media.discordapp.net/attachments/818211428959256616/819118782408032266/image0.gif')
        message.channel.send(embed)
    }
})

bot.login("token here")
