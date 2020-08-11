import fetch from 'node-fetch';
import {
  OTPOptions,
  SendOTPParams,
  VerifyOTPParams,
  ResendOTPParams,
} from './types';
import Constants from './constants';
import { toQueryParams } from './utils';
import debug from 'debug';

const Logger = debug('MSG91');

export class OTP {
  options: OTPOptions;

  host: string;

  constructor(options: OTPOptions) {
    this.options = options;
    this.host = `${Constants.HOST}`;
  }

  async send(sendOTPParams: SendOTPParams): Promise<Response> {
    const query = toQueryParams(sendOTPParams);
    const url = `${this.host}/otp?authkey=${this.options.authKey}&${query}`;
    Logger(`request url: ${url}`);
    const response = await fetch(url, {
      headers: {
        'content-type': 'application/json',
      },
    });
    const result = await response.text();
    Logger(`response (${url}) \n ${result}`);
    const jsonResult = JSON.parse(result);
    return jsonResult;
  }

  async verify(verifyOTPParams: VerifyOTPParams): Promise<Response> {
    const query = toQueryParams(verifyOTPParams);
    const url = `${this.host}/otp/verify?authkey=${this.options.authKey}&${query}`;
    Logger(`request url: ${url}`);
    const response = await fetch(url, {
      headers: {
        'content-type': 'application/json',
      },
    });
    Logger(`response (${url}) \n ${response}`);
    const result = await response.text();
    const jsonResult = JSON.parse(result);
    return jsonResult;
  }

  async resend(resendOTPParams: ResendOTPParams): Promise<Response> {
    const query = toQueryParams(resendOTPParams);
    const url = `${this.host}/otp/verify?authkey=${this.options.authKey}&${query}`;
    Logger(`request url: ${url}`);
    const response = await fetch(url, {
      headers: {
        'content-type': 'application/json',
      },
    });
    const result = await response.text();
    Logger(`response (${url}) \n ${result}`);
    const jsonResult = JSON.parse(result);
    return jsonResult;
  }
}
