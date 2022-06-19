const Discord = require("discord.js")
const client = new Discord.Client(
    {intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)
const fs = require("fs");

client.login(process.env.token)

client.on("messageCreate", (message) => {
    if (message.content.startsWith("!userinfo")) {
        if (message.content == "!userinfo") {
            let utente = message.member;
        }
        else {
            let utente = message.mentions.members.first();
        }

        if (!utente) {
            message.channel.send("Non ho trovato questo utente")
            return
        }

        let elencoPermessi = "";
        if (utente.permissions.has("ADMINISTRATOR")) {
            elencoPermessi = "👑 ADMINISTRATOR";
        }
        else {
            let permessi = ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "VIEW_GUILD_INSIGHTS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MANAGE_EMOJIS"]

            for (let i = 0; i < permessi.length; i++) {
                if (utente.permissions.has(permessi[i])) {
                    elencoPermessi += "- " + permessi[i] + "\r";
                }
            }
        }

        let embed = new Discord.MessageEmbed()
            .setTitle(utente.member.tag)
            .setDescription("Tutte le info di questo utente")
            .setThumbnail(utente.member.avatarURL())
            .addField("User id", "```" + utente.member.id + "```", true)
            .addField("Status", "```" + utente.member.presence.status + "```", true)
            .addField("Is a bot?", utente.member.bot ? "```Yes```" : "```No```", true)
            .addField("Account created", "```" + utente.member.createdAt.toDateString() + "```", true)
            .addField("Joined this server", "```" + utente.joinedAt.toDateString() + "```", true)
            .addField("Permissions", "```" + elencoPermessi + "```", false)
            .addField("Roles", "```" + utente.roles.cache.map(ruolo => ruolo.name).join("\r") + "```", false)

        message.channel.send({embeds: [embed]})
    }
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for(const file of commandFiles) {
    var command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const commandsFolder = fs.readdirSync("./commands");
for (const folder of commandsFolder) {
    const commandsFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
    for (const file of commandsFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

client.on("messageCreate", message => {
    const prefix = "!";

    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command) && !client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))) return

    var comando = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))

    if (comando.onlyStaff) {
        if (message.member.permissions.has("ADMINISTRATOR")) {
            message.channel.send("Non hai il permesso di eseguire")
            return
        }
    }

    comando.execute(message, args);
})

client.on("guildMemberAdd", member => {
    if (member.user.bot) return
    member.roles.add("987828808709185566");
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
            .setTitle("DestroyersJkaisen")
            .setDescription(`${message.author.username} ecco a te il link discord: https://discord.gg/Pkhx88T3Z4 `)
            .setTimestamp()
            .addField("Titolo1" , "Contenuto1", false)

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

client.on("messageCreate", (message) => {
   
    if (message.content == "!cpita") {
        var embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("丨CP SHOP - THE DESTROYERSKAISEN")
            .setDescription("Qui puoi trovare CP (punti COD) a prezzi molto più bassi rispetto al listino base. Fino al 60% in meno. Se vuoi ordinare o ricevere assistenza, apri un ticket nel canale 𝐒𝐮𝐩𝐩𝐨𝐫𝐭.")
            .setThumbnail("https://lh3.googleusercontent.com/MEbR9yl4_wmq-XucAkAIh3IT01HhQ9-yw--pXZC1ztmU1ULj4Noy5qWlJAYetIiQlSUbkqk=s151")
            .addField("Prezzo" , "1°> €10 - 1300 CP", false)
            .addField("Prezzo" , "2°> €15 - 2400 CP", true)
            .addField("Prezzo" , "3°> €20 - 3700 CP", false)

        message.channel.send({embeds: [embed] })
    }

    if(message.content == "!cpeng") {
        var embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("丨CP SHOP - THE DESTROYERSJKAISEN")
            .setDescription("Here you can find CPs (COD Points) at the lowest price possible. Up to 60% less than normal price. If you want to order to to receive support, open a ticket in the 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 channel.")
            .setThumbnail("https://lh3.googleusercontent.com/MEbR9yl4_wmq-XucAkAIh3IT01HhQ9-yw--pXZC1ztmU1ULj4Noy5qWlJAYetIiQlSUbkqk=s151")
            .addField("Price" , "1°> €10 - 1300 CP", false)
            .addField("Price" , "2°> €15 - 2400 CP", true)
            .addField("Price" , "3°> €20 - 3700 CP", false)

        message.channel.send({embeds: [embed] })
    }
});

client.on("guildMemberAdd", member => {
    if(member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setFooter({text: "Djkaisen"})
        .setImage("https://cdn.discordapp.com/attachments/926429282752946176/985201546411245619/IMG_20220611_171904.jpg")
        .setDescription(`Ciao ${member.toString()}, benvenuto nel server Djkaisen. test <#987775840009994253>`)
 
    client.channels.cache.get("987827065610960897").send({embeds: [embed]});
})

global.nome = "Francy";

