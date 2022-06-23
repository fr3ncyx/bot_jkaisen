const {MessageEmbed} = require("discord.js")
const Commando = require("discord.js")

module.exports = class UserInfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'userinfo',
            group: 'commands',
            memberName: 'userinfo',
            descrtption: 'info riguardo questo utente'
        })
    }

    run = async (message) => {
      const {guild, channel} = message

      const user = message.mentions.users.first() || message.member.user
      const member = guild.member.cache.get(user.id)

      const embed = new MessageEmbed().setAuthor(
        `Info utente di ${user.username}`,
        userdisplayAvatarURL()
      )
      execute(message)
      channel.send({embeds: [embed] })
    }  
  }