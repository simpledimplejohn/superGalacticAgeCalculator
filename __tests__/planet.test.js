import expectExport from 'expect';
import { describe } from 'yargs'
import age from './../src/js/scripts.js'

describe('Tests of planets', () => {

  test('should be able to find age class', () => {
    const planetAge = new Age();
    expectExport(planetAge.checkType()).toEqual('');
  });
});