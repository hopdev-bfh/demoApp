import { MagicpipePipe } from './magicpipe.pipe';

describe('MagicpipePipe', () => {

  const pipe = new MagicpipePipe();

  it('create an instance', () => {
    const pipe = new MagicpipePipe();
    expect(pipe).toBeTruthy();
  });

  it('test if magic number is an interger', () => {
    expect(pipe.transform('test')).toBe('The inserted text is not an integer');
  });

  it( 'test that 109 is validated', () => {
    expect(pipe.transform('109')).toBe('Validated');
  });

  it ('test that 11 gives missing 9 message', () => {
    expect(pipe.transform('11')).toBe('The given string contains at least a 9');
  })

});
