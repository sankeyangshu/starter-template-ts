import { describe, expect, it } from 'vitest';
import { text } from '../src';

describe('should', () => {
  it('exported', () => {
    expect(text).toEqual('hello world');
  });
});
