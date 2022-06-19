module.exports = {
    name: "test1",
    description: "Comando di test1",
    aliases: ["prova", "testbot"],
    execute(message, args) {
        message.channel.send(nome);
    }
}