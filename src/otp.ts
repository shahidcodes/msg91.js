import fetch from 'node-fetch';
import {
  OTPOptions,
  SendOTPParams,
  VerifyOTPParams,
  ResendOTPParams,
  Response,
} from './types';
import Constants from './constants';
import { toQueryParams } from './utils';
import debug from 'debug';

const Logger = debug('MSG91');
/**
 * OTP Class with `send`, `verify` and `resend`
 * ```
 * const OTP = new MSG91.OTP({
 *  authKey,
 * });
 * ```
 */
export class OTP {
  options: OTPOptions;

  host: string;

  /**
   * @param options Library Options
   */
  constructor(options: OTPOptions) {
    this.options = options;
    this.host = `${Constants.HOST}`;
  }

  /**
   * Send otp api from msg91
   * Example:
   * ```javascript
   * const OTP = new MSG91.OTP(options);
   * const sendOTPParams={
   *  template_id: '',
   *  mobile: '',
   * }
   * const sendOTP = OTP.send(sendOTPParams)
   * ```
   * @param sendOTPParams send otp params
   */

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
  /**
   * Verify otp api from msg91
   * Example:
   * ```javascript
   * const OTP = new MSG91.OTP(options);
   * const verifyOTPParams={
   *  otp: '',
   *  mobile: '',
   * }
   * const verifyOTP = OTP.verify(verifyOTPParams)
   * ```
   * @param verifyOTPParams verify otp params
   */
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

  /**
   * Resent otp api from msg91
   * Example:
   * ```javascript
   * const OTP = new MSG91.OTP(options);
   * const resentOTPParams={
   *  otp: '',
   *  mobile: '',
   * }
   * const resentOTP = OTP.resend(resentOTPParams)
   * ```
   * @param resentOTPParams resend otp params
   */

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
