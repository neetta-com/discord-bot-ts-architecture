export class Event<EventName extends string = any> {
  public name: EventName
  public trigger: string
  public listener: (...data: any) => any

  constructor (
    name: EventName,
    trigger: string,
    listener: (...data: any) => any
  ) {
    this.name = name
    this.trigger = trigger
    this.listener = listener
  }
}
