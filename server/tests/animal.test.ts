import { describe, expect, test } from 'vitest'

import animalsGet from '../api/animals.get'

describe('The animalsGet endpoint', () => {
  test('returns 50 animals', () => {
    const animals = animalsGet()
    // console.log("animals.length: ", animals.length)
    expect(animals.length).toBe(50)
  })
})
