import { Event } from '../structures/Event/Event'

const readyListener = () => {
  console.log('hello!')
}

export const ReadyEvent = new Event('ready', 'ready', readyListener)
