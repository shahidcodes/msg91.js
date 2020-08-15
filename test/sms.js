/* eslint-disable @typescript-eslint/no-var-requires */
const env = require('./env');
const MSG91 = require('../dist');
process.env.DEBUG = 'MSG91';

const SMS = new MSG91.SMS({
  authKey: env.authKey,
});

SMS.sendSMS({
  mobiles: '8179843053',
  country: '91',
  message: 'Hi there you are added to this queue',
  route: '4',
  sender: 'POPWAY',
}).then((resp) => {
  console.log(resp);
});
