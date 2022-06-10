const Discord = require("discord.js")
const client = new Discord.Client(
    { intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login(process.env.token)

client.on("messageCreate", (message) => {
    if (message.content.startsWith("!userinfo2")) {
        if (message.content == "!userinfo2") {
            var utente = message.member
        }
        else {
            var utente = message.mentions.members.first()
        }

        if (!utente) {
            message.channel.send("Non ho trovato questo utente")
            return
        }

        var elencoPermessi = ""
        if (utente.permissions.has("ADMINISTRATOR")) {
            elencoPermessi = "👑 ADMINISTRATOR"
        }
        else {
             var permessi = ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "VIEW_GUILD_INSIGHTS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS"]

            for (var i = 0; i < permessi.length; i++) {
                if (utente.permissions.has(permessi[i])) {
                    elencoPermessi += "- " + permessi[i] + "\r"
                }
            }
        }

        var embed = new Discord.MessageEmbed()
            .setTitle(utente.user.tag)
            .setDescription("Tutte le info di questo utente")
            .setThumbnail(utente.user.avatarURL())
            .addField("User id", "```" + utente.user.id + "```", true)
            .addField("Status", utente.presence ? utente.presence.status : "offline", true)
            .addField("Is a bot?", utente.user.bot ? "```Yes```" : "```No```", true)
            .addField("Account created", "```" + utente.user.createdAt.toDateString() + "```", true)
            .addField("Joined this server", "```" + utente.joinedAt.toDateString() + "```", true)
            .addField("Permissions", "```" + elencoPermessi + "```", false)
            .addField("Roles", "```" + utente.roles.cache.map(ruolo => ruolo.name).join("\r") + "```", false)

        message.channel.send({embeds: [embed] })

    }
})

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
setInterval(oraAttuale, 1000*60)

client.on("guildMemberAdd", member => {
    var canale = client.channels.cache.get("984354539555659827")
    canale.setName("Members: " + member.guild.memberCount)
})

client.on("guildMemberRemove", member => {
    var canale = client.channels.cache.get("984354539555659827")
    canale.setName("Members: " + member.guild.memberCount)
});

client.on("messageCreate", (message) => {
    if (message.content.startsWith("!userinfo")){
        if(message.content == "!userinfo"){
            var utente = message.member
        }

        var embed = new Discord.MessageEmbed()
        .setTitle(utente.user.tag)
        .setDescription("Tutte le info di questo utente")
        .setThumbnail(utente.user.avatarURL())
        .addField("User id", utente.user.id, true)
        .addField("Is a bot?", utente.user.bot ? "Yes" : "No")
        .addField("Account created", utente.user.createdAt.toDateString(), true)
        .addField("Joined this server", "```" + utente.joinedAt.toDateString() + "```", true)

        message.channel.send({embeds: [embed] })

    }
})
