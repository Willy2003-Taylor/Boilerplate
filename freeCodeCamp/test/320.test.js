const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();
    const checkTouch = websiteDirectory.indexOf('index.html') >= 0 && lastCommand[0] === 'touch' && /index\.html$/.test(lastCommand[1]);
    const checkMV = websiteDirectory.indexOf('index.html') >= 0 && lastCommand[0] === 'mv' && /index\.html$/.test(lastCommand[2]);

    assert(checkTouch || checkMV);
  });
});
