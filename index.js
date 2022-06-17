const Discord = require("discord.js")
const client = new Discord.Client(
    {intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)
client.login(process.env.token)

client.on("guildMemberAdd", member => {
    if (member.user.bot) return

    member.roles.add("986317278129840168");
});

client.on("ready", () => {
    console.log("Bot online")
})

client.on("messageCreate" , (message) => {
    if (message.content == "!comando") {
        message.author.send("Hey ciao")
    }
})

client.on("messageCreate" , (message) => {
    if (message.content == "!test") {
        message.channel.send("Ciao" + " " + message.author.toString())
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "!ciao") {
        message.channel.send("ciao anche a te")
    }

    if (message.content == "!embed") {
        var embed = new Discord.MessageEmbed()
            .setTitle("Titolo embed")
            .setDescription(`${message.author.username} ha scritto il messaggio`)
            .setThumbnail("https://tuttoinformatico.com/wp-content/uploads/2019/10/call-of-duty-mobile-raggiunge-i-100-milioni-di-download.jpg")

        message.channel.send({embeds: [embed] })
    }

    if (message.content == "!team") {
        var embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("Jkaisen")
            .setDescription(`${message.author.username} ecco a te il link discord: https://discord.gg/Pkhx88T3Z4 `)
            .setThumbnail("https://lh3.googleusercontent.com/MTyHWidhk1Uu0yHSZzoTpMUG4ZoCXOdhY2qqjcK8OOfsMh4yjAUF3uigIZ6XFZENH2DfDQ=s99")
            .setTimestamp()
            .addField("Titolo1" , "Contenuto1", false)
            .addField("Titolo2" , "Contenuto2", true)

        message.channel.send({embeds: [embed] })
    }
});

function oraAttuale() {
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes();

    var canale = client.channels.cache.get("956662480875159646")
    if (hour == 7 && minutes == 2) {
        canale.send("Notifica")
    }
}
setInterval(oraAttuale, 1000*60);

client.on("guildMemberAdd", member => {
    var canale = client.channels.cache.get("984354539555659827")
    canale.setName("Members: " + member.guild.memberCount)
})

client.on("guildMemberRemove", member => {
    var canale = client.channels.cache.get("984354539555659827")
    canale.setName("Members: " + member.guild.memberCount)
});

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

client.on("messageReactionAdd", async function(messageReaction, user ) {
    if(user.bot) return

    if(messageReaction.message.partial) await messageReaction.message.fetch();

    if(messageReaction.message.id == "986546558898151545") {
        if(messageReaction.emoji.name == "👍") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("986534264000638976");
        }
        if(messageReaction.emoji.name == "👎") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("986534264000638976");
        }
    }
});

client.on("messageCreate", (message) => {
    if (message.content == "!ciao") {
        message.channel.send("ciao anche a te")
    }
   
    if (message.content == "!cp") {
        var embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("丨CP SHOP - THE DESTROYERSKAISEN丨")
            .setDescription("Qui puoi trovare CP (punti COD) a prezzi molto più bassi rispetto al listino base. Fino al 60% in meno. Se vuoi ordinare o ricevere assistenza, apri un ticket nel canale 𝐒𝐮𝐩𝐩𝐨𝐫𝐭.")
            .setThumbnail("https://lh3.googleusercontent.com/MEbR9yl4_wmq-XucAkAIh3IT01HhQ9-yw--pXZC1ztmU1ULj4Noy5qWlJAYetIiQlSUbkqk=s151")
            .addField("Prezzo" , "1°> 3700CP - 20€", false)
            .addField("Prezzo" , "2°> 7400CP - 35€", true)
            .addField("Prezzo" , "3°> 11.000CP - 50€", false)
            .addField("Prezzo" , "4°> 25.700CP - 100€", true)

        message.channel.send({embeds: [embed] })
    }
});