const core = require('@actions/core');

(async () => {
  try {
    const nameToGreet = core.getInput('who-to-greet', { required: true });
    core.info(`Hello, ${nameToGreet}!`);
    core.setOutput('time', new Date().toTimeString());
  } catch (err) {
    core.setFailed(err instanceof Error ? err.message : String(err));
  }
})();
