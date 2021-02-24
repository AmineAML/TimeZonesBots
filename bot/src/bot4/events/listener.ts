import { On, ArgsOf, Client } from '@typeit/discord'

let clients: any = []

export abstract class listener {
  // @On("ready")
  // private async onReady(
  //   [message]: ArgsOf<"message">,
  //   client: Client
  // ) {
  //   console.log(`Bot connected`)

  //   this.timezone_uk_london(client)
  // }

  // timezone_uk_london(client: Client) {
  //   const UK_LONDEN_OPTIONS = {
  //     hour: '2-digit',
  //     minute: '2-digit',
  //     timeZone: 'Europe/London',
  //     weekday: 'short'
  //   }

  //   const time = new Date()

  //   client.guilds.cache.forEach(guild => {
  //     guild.members.fetch(client.user!.id).then((bot) => {
  //       bot.setNickname(time.toLocaleTimeString('en-US', UK_LONDEN_OPTIONS))
  //     })
  //   })

  //   setTimeout(() => {
  //     this.timezone_uk_london(client)
  //   }, 60 * 1000)
  // }
}