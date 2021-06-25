import expectExport from 'expect';
import { describe } from 'yargs'
import age from './../src/js/scripts.js'

describe('scripts functions', () => {

  test('should be able to find age function', () => {
    const planetAge = new Age();
    expectExport(planetAge.checkType()).toEqual('');
  });
});