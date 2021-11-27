import Discord from 'discord.js'
import { Event } from '../Event'

export type ClientConstructor = {
  discordClient: {
    token?: string
    executeBeforeLogin?: (() => any | Promise<any>) | Array<() => any | Promise<any>>,
    events?: Event[]
    options: Discord.ClientOptions
  }
}

export class Client {
  public discordClient: Discord.Client

  constructor (data: ClientConstructor) {
    this.discordClient = new Discord.Client(data.discordClient.options)
    const token = data.discordClient.token || process.env.DISCORD_CLIENT_TOKEN

    if (!token) throw new Error('A default TOKEN was not found so you must provide in \'ClientConstructor#discordClient.token\'')

    this.handleEvents(data.discordClient.events)
    this.executeBeforeLogin(data.discordClient.executeBeforeLogin)
      .then(() => {
        this.loginDiscordClient(token)
      })
  }

  private async executeBeforeLogin (fn: ClientConstructor['discordClient']['executeBeforeLogin']) {
    if (!fn) return true

    if (Array.isArray(fn)) {
      for (const func of fn) {
        await func()
      }
    } else {
      await fn()
    }

    return true
  }

  private loginDiscordClient (token: string) {
    this.discordClient.login(token)
  }

  private handleEvents (events: ClientConstructor['discordClient']['events'], kill?: true) {
    if (events) {
      if (kill) {
        for (const event of events) {
          this.discordClient.removeListener(event.trigger, event.listener)
        }
      }

      for (const event of events) {
        this.discordClient.on(event.trigger, event.listener)
      }
    }
  }
}
