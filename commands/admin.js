const discord = require("discord.js");

module.exports.run = async (client, message, args) => {


    var User = message.guild.member(message.mentions.user.ferst());
    if(!User) return message.channel.send("Geen Gebruiker met deze naam Gevonden")

    var role = message.guid.roles.cach.find(r => r.name === "Bezoekers")
    if(!role) return message.channel.send("Geen rol met deze naam Gevonden")
    


}

module.exports.help = {
    name: "hallo",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}