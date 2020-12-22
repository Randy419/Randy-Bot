const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("sorry jij kan dit niet");

    var noRoleUser = message.guild.member(message.mentions.user.ferst());
    if(!noRoleUser) return message.channel.send("Geen Gebruiker met deze naam Gevonden");

    var role = message.guid.roles.cach.find(r => r.name === "Bezoekers");
    if(!role) return message.channel.send("Geen rol met deze naam Gevonden");
    
    for (let index = 0; index < noRoleUser._roles.length; index++) {
        const role = noRoleUser._roles[index];
        

        noRoleUser.roles.remove(role);
    }

       var embed = new discord.MessageEmbed()
       .setTitle("Rollen Zijn Gereset naar Bezoeker")
       .setColor("#ff0000");

       noRoleUser.roles.add(role);

       return message.channel.send(embed);

}

module.exports.help = {
    name: "bezoeker",
    description: "Maak iemand Bezoeker",
    category: "Informatie"
}