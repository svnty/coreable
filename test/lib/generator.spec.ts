import { describe, it } from 'mocha';;
import { generator } from '../../src/lib/generator';

describe('Test Data Generator [src/lib/generator.ts]', () => {

  it('should generate fake data and insert it into the database', async() => {
    return await generator();
  });

});