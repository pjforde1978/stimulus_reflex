import assert from 'assert'
import { attributeValues } from '../attributes'

describe('attributeValues', () => {
  it('returns empty array for no arguments', () => {
    assert(attributeValues().length === 0)
  })

  it('returns expected attribute values for single value', () => {
    const actual = attributeValues('one')
    const expected = ['one']
    assert.deepEqual(actual, expected)
  })

  it('returns expected attribute values for multiple values', () => {
    const actual = attributeValues('one two three')
    const expected = ['one', 'two', 'three']
    assert.deepEqual(actual, expected)
  })

  it('returns expected attribute values for multiple values with whitespace padding', () => {
    const actual = attributeValues(' one two   three ')
    const expected = ['one', 'two', 'three']
    assert.deepEqual(actual, expected)
  })
})
