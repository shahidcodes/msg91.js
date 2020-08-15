/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config({ path: __dirname + '/.env' });
const { mobile, authKey, template_id } = process.env;
module.exports = { mobile, authKey, template_id };
