const Discord = require("discord.js")
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]})

client.on("messageCreate", (message)  => {
    if (message.content == "!autoroles") {
        var embed = new Discord.MessageEmbed()
        .setTitle("Reaction roles")
        .setDescription("Clicca sulla reazione per ottenere il ruolo")

    message.channel.send({embeds: [embed] })
        .then(msg => {
            msg.react("👍")
            msg.react("👎")
        })
    }
})

client.on("messageReactionAdd", async function (messageReaction, user) {
    if (user.bot) return //Le reaction dei bot verranno escluse

    if (messageReaction.message.partial) await messageReaction.message.fetch();

    if (messageReaction.message.id == "988499318342287370") { //Settare id messaggio
        if (messageReaction._emoji.name == "👍") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("988499438106460160"); //Settare ruolo
        }
        if (messageReaction._emoji.name == "👎") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("988499497497788489");
        }
    }
})
//Quando viene rimossa una reazione
client.on("messageReactionRemove", async function (messageReaction, user) {
    if (user.bot) return

    if (messageReaction.message.partial) await messageReaction.message.fetch();

    if (messageReaction.message.id == "988499318342287370") {
        if (messageReaction._emoji.name == "👍") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.remove("988499438106460160");
        }
        if (messageReaction._emoji.name == "👎") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.remove("988499497497788489");
        }
    }
})
