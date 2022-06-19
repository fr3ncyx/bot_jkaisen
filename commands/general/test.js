module.exports = {
    name: "test1",
    description: "Comando di test1",
    execute(message, args) {
        message.channel.send("TEST1");
    }
}