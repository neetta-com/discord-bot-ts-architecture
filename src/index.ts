import { Intents } from 'discord.js'
import { allEvents } from './events/allEvents'
import { Client } from './structures/Client/Client'

// eslint-disable-next-line no-unused-vars
const client = new Client({
  discordClient: {
    options: { intents: [Intents.FLAGS.GUILDS] },
    token: 'ODI3MjY2MTY1NzgwMTE5NTUy.YGYhpw.yBBQ2qWW4Yg3dxkVVDNTpWV5rtQ',
    executeBeforeLogin: () => console.log('I am gonna try to login!'),
    events: allEvents
  }
})
