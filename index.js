import * as core from '@actions/core';

async function run() {
  try {
    const nameToGreet = core.getInput('who-to-greet', { required: true });
    console.log(`Hello, ${nameToGreet}!`);
    core.setOutput('time', new Date().toTimeString());
  } catch (err: unknown) {
    const e = err as Error;
    core.setFailed(e.message ?? String(err));
  }
}

run();
