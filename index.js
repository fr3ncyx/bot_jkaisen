const Discord = require("discord.js")
const client = new Discord.Client(
    {intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)
const fs = require("fs")

client.login(process.env.token)

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