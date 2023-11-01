import { bad, badExplicit, good } from '@eslint-root-dirs-issue/one'

export function good_works() {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { text } = good()
}

export function bad_fails() {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { text } = bad()
}

export function badExplicit_fails() {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { text } = badExplicit()
}
