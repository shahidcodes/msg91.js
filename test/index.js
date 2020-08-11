/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config({ path: __dirname + '/.env' });
const { mobile, authKey, template_id } = process.env;
const MSG91 = require('../dist');
const OTP = new MSG91.OTP({
  authKey,
});

OTP.send({
  extra_param: '',
  mobile,
  template_id,
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// OTP.verify({
//   mobile,
//   otp: '2021',
// })
//   .then((data) => {
//     console.log('verify otp', data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
