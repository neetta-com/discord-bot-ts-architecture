export type AvailableLanguages = 'en-us' | 'pt-br'

export type PropertyInEveryLanguages<K> = {
  // eslint-disable-next-line no-unused-vars
  [key in AvailableLanguages]: K
}

export class Utils {}

export class Test {}
