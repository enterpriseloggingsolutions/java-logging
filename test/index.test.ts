import { System } from '../lib/index'

test('can print', () => {
  System.out.print('important messages')
})

test('can println', () => {
  System.out.println('more important messages')
})

test.each([
  "an enterprise grade string",
  "another string because two is better than one, can never be too sure these days you know?",
  1994,
  23.1789,
  true,
  false,
  null,
  undefined,
])('can out.print all types', (value) => {
  System.out.print(value)
})

test.each([
  "an enterprise grade string",
  "another string because two is better than one, can never be too sure these days you know?",
  1994,
  23.1789,
  true,
  false,
  null,
  undefined,
])('can out.println all types', (value) => {
  System.out.println(value)
})

test('can err.print', () => {
  System.err.print('important messages')
})

test('can err.println', () => {
  System.err.println('more important messages')
})

test.each([
  "an enterprise grade string",
  "another string because two is better than one, can never be too sure these days you know?",
  1994,
  23.1789,
  true,
  false,
  null,
  undefined,
])('can err.print all types', (value) => {
  System.err.print(value)
})

test.each([
  "an enterprise grade string",
  "another string because two is better than one, can never be too sure these days you know?",
  1994,
  23.1789,
  true,
  false,
  null,
  undefined,
])('can err.println all types', (value) => {
  System.err.println(value)
})
