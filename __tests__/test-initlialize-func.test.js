import initialize from '../src/modules/paint-app.js';

describe('Default initialize function', () => {
  test('Should be able to return function value', () => {
    const init = initialize();
    expect(init).toBe('Hello world');
  });
});
