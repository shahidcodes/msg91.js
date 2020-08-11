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
