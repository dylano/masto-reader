import { expect, it } from 'vitest';
import { counter, increaseCounter } from '../src/server/test_data';

it('Counter is  zero by default', () => {
  expect(counter).eq(0);
});

it('Counter increments by one', () => {
  const initial = counter;

  increaseCounter();

  expect(counter).eq(initial + 1);
});
