const Discord = require("discord.js")
const client = new Discord.Client(
    {intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)
const fs = require("fs");

client.login(process.env.token)

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
            .setURL("")
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
        .setFooter({text: "Destroyerjkaisen"})
        .setImage("https://cdn.discordapp.com/attachments/926429282752946176/985201546411245619/IMG_20220611_171904.jpg")
        .setDescription(`Ciao ${member.toString()}, benvenuto nel server Djkaisen. test <#987775840009994253>`)
 
    client.channels.cache.get("987827065610960897").send({embeds: [embed]});
});

client.on("guildMemberRemove", member => {
    if(member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setFooter({text: "Destroyerjkaisen"})
        .setImage("https://cdn.discordapp.com/attachments/926429282752946176/985201546411245619/IMG_20220611_171904.jpg")
        .setDescription(`Addio ${member.toString()}, è uscito dal server . test <#988487931947778149>`)

    client.channels.cache.get("988487931947778149").send({embeds: [embed]});
})



global.nome = "Francy";
client.on("messageCreate", message => {
    if (message.content == "!ticket") {
        var button1 = new Discord.MessageButton()
            .setLabel("Apri ticket")
            .setCustomId("apriTicket")
            .setStyle("PRIMARY")

        var row = new Discord.MessageActionRow()
            .addComponents(button1)

        message.channel.send({ content: "Clicca sul bottone per aprire un ticket", components: [row] })
    }
})

client.on("interactionCreate", interaction => {
    if (interaction.customId == "apriTicket") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
            interaction.user.send("Hai gia un ticket aperto").catch(() => { })
            return
        }
        interaction.guild.channels.create(interaction.user.username, {
            type: "text",
            topic: `User ID: ${interaction.user.id}`,
            parent: "987775840009994251", //Settare la categoria,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                { //Aggiungere altri "blocchi" se si vogliono dare permessi anche a ruoli o utenti
                    id: "987828808709185566",
                    allow: ["VIEW_CHANNEL"]
                }
            ]
        }).then(canale => {
            canale.send("Grazie per aver aperto un ticket")
        })
    }
})

client.on("messageCreate", message => {
    if (message.content == "!close") {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                message.channel.delete();
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("!add")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (haIlPermesso) {
                    message.channel.send("Questo utente ha gia accesso al ticket")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: true
                })
                message.channel.send(`${utente.toString()} è stato aggiunto al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("!remove")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (!haIlPermesso) {
                    message.channel.send("Questo utente non ha gia accesso al ticket")
                    return
                }
                if (utente.permissions.has("MANAGE_CHANNELS")) {
                    message.channel.send("Non puoi rimuovere questo utente")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: false
                })
                message.channel.send(`${utente.toString()} è stato rimosso al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
});

client.on("messageCreate", message => {
    if (message.content == "!ms") {
        let embed = new Discord.MessageEmbed()
            .setTitle("Ping del bot")
            .setDescription("Ecco la latenza del bot")
            .addField("Ping", `${client.ws.ping}ms`)

        message.channel.send({embeds: [embed]})
    }
})

client.on("messageCreate", message => {
    if (message.content.startsWith("!clear")) {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send('Non hai il permesso');
        }
        if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send('Non ho il permesso');
        }
        let count = parseInt(message.content.split(/\s+/)[1]);
        if (!count) {
            return message.channel.send("Inserisci un numero valido")
        }
        if (count > 100) {
            return message.channel.send("Non puoi cancellare più di 100 messaggi")
        }
        message.channel.bulkDelete(count, true)
        message.channel.send(count + " messaggi eliminati").then(msg => {
            setTimeout(() => msg.delete(), 5000)
        })
    }
});

