const discord = require("discord.js");
const fs  = require("fs");
const { arch } = require("os");
module.exports.run = async (client, message, args) => {


    if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Geen Toegang");

    if(!args[0]) return message.reply("Gebruik !prefix <prefix hier>");

    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));
    
    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFileSync("./prefixes.json", JSON.stringify(prefixes),(err) => {
        if (err) console.log(err);

    });

   var  stringEmbed = new discord.RichEmbed()
    .setcoler("f00")
    .setTitle("prefix")
    .setDescription('prefix aangepast naar ${args[0]}');
    message.channel.send(stringEmbed);}
    

module.exports.help = {
    name: "prefix",
    description: "verander een Prefix",
    category: "Informatie"
}