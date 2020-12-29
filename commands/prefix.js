const discord = require("discord.js");
const fs  = require("fs");
const { arch } = require("os");
module.exports.run = async (client, message, args) => {


    if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Geen Toegang");

    if(!args[0]) return message.reply("Gebruik !prefix <prefix hier>");

}

module.exports.help = {
    name: "prefix",
    description: "verander een Prefix",
    category: "Informatie"
}