import { CapitallizePipe } from './capitallize.pipe';

describe('CapitallizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitallizePipe();
    expect(pipe).toBeTruthy();
  });
});
