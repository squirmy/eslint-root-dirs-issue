import type { TypeFromAnotherRoot } from './types'

export interface TypeFromSourceRoot {
  text: string
}

export function good() {
  return { text: '' } satisfies TypeFromSourceRoot
}

export function bad() {
  return { text: '' } satisfies TypeFromAnotherRoot
}

export function badExplicit(): TypeFromAnotherRoot {
  return { text: '' }
}
