module.exports = {
    name: "test1",
    description: "Comando di test1",
    aliases: ["prova", "testbot"],
    onlyStaff: true,
    execute(message, args) {
        message.channel.send(nome);
    }
}