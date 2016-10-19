// Manage SSH keys we use to access machines we spin up in AWS

'use strict';

const Slack = require('node-slack');

let slack = null;
if (process.env.SLACK_HOOK) {
  slack = new Slack(process.env.SLACK_HOOK);
}

module.exports = () => {
  console.log.apply(console, arguments);
  if (slack) {
    slack.send({
      text: arguments.join(' '),
    });
  }
};
