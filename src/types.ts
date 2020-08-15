export type Options = {
  authKey: string;
};

export type OTPOptions = Options;

export type SendOTPParams = {
  template_id: string;
  extra_param: string;
  mobile: string;
  unicode?: string;
  invisible?: string;
  otp?: string;
  userip?: string;
  email?: string;
  otp_length?: string;
  otp_expiry?: string;
};

export type VerifyOTPParams = {
  mobile: string;
  otp: string;
};

export type ResendOTPParams = {
  mobile: string;
  retrytype?: 'text' | 'voice';
};

export type Response = {
  type: 'success' | 'error';
  error?: string;
  message?: string;
};

export type ResponseV1 = {
  response: string;
};

export type SendSMSOptions = {
  route: string;
  sender: string;
  country: string;
  mobiles: string;
  message: string;
};
