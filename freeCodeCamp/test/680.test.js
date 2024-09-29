const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('tests', () => {
  it('should pass', async () => {
    const websiteDirectory = await getDirectoryContents('../website');
    const lastCommand = await getLastCommand();

    assert(websiteDirectory.indexOf('footer.jpeg') < 0 && lastCommand[0] === 'rm' && /footer\.jpeg$/.test(lastCommand[1]));
  });
});
