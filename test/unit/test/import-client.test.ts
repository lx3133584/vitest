// @ts-expect-error not typed import
import * as client from '/@vite/client'
import { expect, test } from 'vitest'

test('client is imported', () => {
  expect(client).toHaveProperty('createHotContext')
})

test('createHotContext returns hot context with data object', () => {
  const hot = client.createHotContext('/test.js')
  expect(hot).toBeDefined()
  expect(hot).toHaveProperty('data')
  expect(hot.data).toEqual({})
  expect(typeof hot.accept).toBe('function')
  expect(typeof hot.prune).toBe('function')
  expect(typeof hot.dispose).toBe('function')
  expect(typeof hot.decline).toBe('function')
  expect(typeof hot.invalidate).toBe('function')
  expect(typeof hot.on).toBe('function')
  expect(typeof hot.off).toBe('function')
  expect(typeof hot.send).toBe('function')
})
