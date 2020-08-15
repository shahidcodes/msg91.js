import debug from 'debug';
import fetch from 'node-fetch';
import { API } from './api';
import { Options, ResponseV1, SendSMSOptions } from './types';
import { toQueryParams } from './utils';
const Logger = debug('MSG91');

export class SMS extends API {
  private host = 'http://control.msg91.com';
  constructor(options: Options) {
    super(options);
  }

  /**
   * @example
   * const SMS = new MSG91.SMS(options);
   * const smsResp = SMS.sendSMS(sendSMS)
   * @param smsOptions query param for send sms api
   */

  async sendSMS(smsOptions: SendSMSOptions): Promise<ResponseV1> {
    const query = toQueryParams(smsOptions);
    const url = `${this.host}/api/sendhttp.php?authkey=${this.options.authKey}&${query}`;
    Logger(`request url ${url}`);
    const response = await fetch(url, {
      headers: {
        'content-type': 'application/json',
      },
    });
    const result = await response.text();
    Logger(`response: (${url}) ${result}`);
    return {
      response: result,
    };
  }
}
