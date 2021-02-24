//Use the Client that are provided by @typeit/discord
import { Discord, CommandMessage, CommandNotFound, ArgsOf, Client, On } from "@typeit/discord";
import * as Path from 'path'

@Discord('', {
    import: [
        Path.join(__dirname, "commands", "*.ts"),
        Path.join(__dirname, "events", "*.ts"),
        
        // If you compile your bot, the file extension will be .js
        Path.join(__dirname, "commands", "*.js"),
        Path.join(__dirname, "events", "*.js")
    ]
})
abstract class AppDiscord {
    @On("ready")
    private async onReady(
      [message]: ArgsOf<"message">,
      client: Client
    ) {
      console.log(`Bot connected`)
  
      timezone(client)
    }
    
    @CommandNotFound()
    async notFound(command: CommandMessage) {
        command.channel.send(`Command not found, try \`!help\``)
    }
}

function timezone(client: Client) {
    const TIMEZONE_OPTIONS = {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Australia/Sydney',
      weekday: 'short'
    }

    const time = new Date()

    client.guilds.cache.forEach(guild => {
      guild.members.fetch(client.user!.id).then((bot) => {
        bot.setNickname(time.toLocaleTimeString('en-US', TIMEZONE_OPTIONS))
      })
    })

    setTimeout(() => {
        timezone(client)
    }, 60 * 1000)
  }