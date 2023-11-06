import { ensureArray } from './ensureArray';

describe('ensureArray', () => {
  it('should return the same array if an array is provided', () => {
    const inputArray = [1, 2, 3];
    expect(ensureArray(inputArray)).toEqual(inputArray);
  });

  it('should convert a single value to an array', () => {
    const singleValue = 42;
    expect(ensureArray(singleValue)).toEqual([singleValue]);
  });

  it('should return an empty array if undefined is provided', () => {
    const undefinedValue = undefined;
    expect(ensureArray(undefinedValue)).toEqual([]);
  });

  it('should return an empty array if null is provided', () => {
    const nullValue = null;
    expect(ensureArray(nullValue)).toEqual([]);
  });

  it('should return an empty array if no argument is provided', () => {
    expect(ensureArray()).toEqual([]);
  });

  it('should work with various data types', () => {
    const stringValue = 'hello';
    const booleanValue = true;
    const objectValue = { key: 'value' };

    expect(ensureArray(stringValue)).toEqual([stringValue]);
    expect(ensureArray(booleanValue)).toEqual([booleanValue]);
    expect(ensureArray(objectValue)).toEqual([objectValue]);
  });
});
