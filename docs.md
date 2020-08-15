## API

### Send OTP

```javascript
const MSG91 = require('msg91.js');
const otp = new MSG91.OTP({ authKey });
const response = await otp.send({
  mobile: '',
  template_id: '',
  extra_params: '',
});
```

### Verify an OTP

```javascript
const MSG91 = require('msg91.js');
const otp = new MSG91.OTP({ authKey });
const response = await otp.verify({
  mobile: '',
  otp: '',
});
```

### Resend an OTP

```javascript
const MSG91 = require('msg91.js');
const otp = new MSG91.OTP({ authKey });
const response = await otp.resend({
  mobile: '',
  retrytype: 'text', // text | voice
});
```

### Response

#### Success

```javascript
{
  type: 'success',
  message: ''
}
```

#### Failure

```javascript
{
  type: 'error',
  error: ''
}
```

### V1 APIs

#### Send SMS

```javascript
const SMS = new MSG91.SMS({
  authKey: env.authKey,
});

await SMS.sendSMS({
  mobiles: '8899009988',
  country: '91',
  message: 'Hi beautiful, your package is delivered with order number 1234.',
  route: '4',
  sender: 'MSG91J',
});
```

#### Response (success|failure)

```javascript
{
  response: 'msg91 text response';
}
```
