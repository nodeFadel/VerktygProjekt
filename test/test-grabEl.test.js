require('./fakeDOM.js');

const { grabEl } = require('../frontend/helpers');

describe('Test grabEl', () => {

  test('Get the content of header tag is correct', () => {

    let content = grabEl('header h1').innerHTML.trim();

    expect(content).toBe('Our grocery shop');

  });

})
