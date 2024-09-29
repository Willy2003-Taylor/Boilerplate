const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const iconsDirectory = await getDirectoryContents('../website/client/assets/icons');
    const lastCommand = await getLastCommand();
    const filesAreCorrect = websiteDirectory.indexOf('CodeAlly.svg') < 0 && iconsDirectory.indexOf('CodeAlly.svg') >= 0;

    assert(filesAreCorrect && lastCommand[0] === 'mv' && /CodeAlly\.svg$/.test(lastCommand[1]) && /client\/assets\/icons/.test(lastCommand[2]));
  });
});
