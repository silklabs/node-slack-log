// Manage SSH keys we use to access machines we spin up in AWS

'use strict';

const Slack = require('node-slack');

let slack = null;
if (process.env.SLACK_HOOK) {
  slack = new Slack(process.env.SLACK_HOOK);
}

let display_log = console.log;

function slack_log() {
  let args = [];
  for (let i = 0; i < arguments.length; ++i) {
    args.push(arguments[i]);
  }
  let msg = args.join(' ');
  display_log.call(console, msg);
  if (slack) {
    slack.send({
      text: msg,
    });
  }
};

module.exports = slack_log;
