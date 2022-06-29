const Discord = require("discord.js")
const client = new Discord.Client({intents: 32767})
const fs = require("fs");
const { userInfo } = require("os");

client.login(process.env.token)

client.on("guildMemberAdd", member => {
    if (member.user.bot) return
    member.roles.add("964853220008689694");
});

client.on("ready", () => {
    console.log("Bot online");
})
client.on("messageCreate", message => {
    if (message.content.startsWith("!ban")) {
        let utente = message.mentions.members.first();
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        if (!utente.bannable) {
            return message.channel.send('Io non ho il permesso');
        }
        utente.ban()
            .then(() => {
                let embed = new Discord.MessageEmbed()
                    .setTitle(`${utente.user.username} bannato`)
                    .setDescription(`Utente bannato da ${message.author.toString()}`)

                message.channel.send({ embeds: [embed] })
            })
    }
})

client.on("messageCreate", message => {
    if (message.content.startsWith("!clantag")) {
        let utente = message.mentions.members.first();
                let embed = new Discord.MessageEmbed()
                    .setColor("#ff0000")
                    .setTitle(`${utente.user.username}`)
                    .setDescription(`Ecco a te il tag del team ĐK*`)                    
  
                message.channel.send({ embeds: [embed] })
            } 
        })

client.on("messageCreate", message => {
    if (message.content.startsWith("!kick")) {
        let utente = message.mentions.members.first();
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        if (!utente.kickable) {
            return message.channel.send('Io non ho il permesso');
        }
        utente.kick()
            .then(() => {
                let embed = new Discord.MessageEmbed()
                    .setTitle(`${utente.user.username} kickato`)
                    .setDescription(`Utente kickato da ${message.author.toString()}`)

                message.channel.send({ embeds: [embed] })
            })
    }
})
client.on("messageCreate" , (message) => {
    if (message.content == "!teamtag") {
        message.author.send("Djk (provvisorio)")
    }
});

client.on("messageCreate", message => {
    var embed = new Discord.MessageEmbed()
    .setTitle("Test")
    .setDescription("Djk")

    if (message.content == "!tag") {
        message.author.send({embeds: [embed]})
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
});

function oraAttuale() {
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes();

    var canale = client.channels.cache.get("984573023900278824")
    if (hour == 15 && minutes == 17) {
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

client.on("messageReactionAdd", async function (messageReaction, user) {
    if (user.bot) return 

    var partials = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]})

    if (messageReaction.message.partial) await messageReaction.message.fetch();

    if (messageReaction.message.id == "990622416734650368") {
        if (messageReaction._emoji.name == "👍") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("988499438106460160");
        }
        if (messageReaction._emoji.name == "👎") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("988499497497788489");
        }
    }
})

client.on("messageReactionRemove", async function (messageReaction, user) {
    if (user.bot) return;

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

client.on("messageCreate", (message) => {
   
    if (message.content == "!cpita") {
        var embed = new Discord.MessageEmbed()
            .setColor("")
            .setTitle("")
            .setDescription("")
            .setThumbnail("")
            .addField("")
            .addField("")
            .addField("")

        message.channel.send({embeds: [embed] })
    }

    if(message.content == "!cpeng") {
        var embed = new Discord.MessageEmbed()
            .setColor("")
            .setTitle("")
            .setDescription("")
            .setThumbnail("")
            .addField("")
            .addField("")
            .addField("")

        message.channel.send({embeds: [embed] })
    }
});

client.on("guildMemberAdd", member => {
    if(member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setFooter({text: "Destroyerjkaisen"})
        .setImage("https://cdn.discordapp.com/attachments/926429282752946176/985201546411245619/IMG_20220611_171904.jpg")
        .setDescription(`Ciao ${member.toString()}, benvenuto nel server Djkaisen. test <#987775840009994253>`)
        .setTimestamp()
 
    client.channels.cache.get("987827065610960897").send({embeds: [embed]});
});

client.on("guildMemberRemove", member => {
    if(member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setFooter({text: "Destroyerjkaisen"})
        .setImage("https://cdn.discordapp.com/attachments/926429282752946176/985201546411245619/IMG_20220611_171904.jpg")
        .setDescription(`Addio ${member.toString()}, è uscito dal server . test <#988487931947778149>`)
        .setTimestamp()

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
            parent: "986769295927308378", 
        }).then(canale => {
            canale.send("Grazie per aver aperto un ticket aspetta che <@770613024129417256> ti risponda")
        })
    }
})

client.on("messageCreate", message => {
    if (message.content == "!close") {
        var topic = message.channel.topic;

        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send('Non hai il permesso');
        }
        if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send('Non ho il permesso');
        }
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
        if (count > 200) {
            return message.channel.send("Non puoi cancellare più di 100 messaggi")
        }
        message.channel.bulkDelete(count, true)
        message.channel.send(count + " messaggi eliminati").then(msg => {
            setTimeout(() => msg.delete(), 5000)
        })
    }
});

client.on("messageCreate", message => {
    var parolacce = ["porco dio", "cazzo", "diocane", "dio cane","merda", "DIOCANE", "NEGRO", "n3gro", "negr0", "Negro", "Cazzo", "Porco dio", "Dio cane", "Porca madonna", "PORCA MADONNA","gay", "G4y", "GAY"]
    var trovata = false; 

    parolacce.forEach(parola => {
        if (message.content.includes(parola)) {
             trovata = true;
        }
    })

    if(trovata) {
        message.delete();
        var utente = message.mentions.members.first();
        var embed = new Discord.MessageEmbed()
            .setTitle("Parola probita")
            .setDescription(`Hai scritto una parola proibita`)
        
        message.channel.send({embeds: [embed]})
    }
});