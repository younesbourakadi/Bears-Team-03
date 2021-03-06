const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gravatar: {
    type: String,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  volunteerField: {
    type: [String],
  },
  hours: {
    type: String,
    required: true,
  },
  days: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  stateOrProvince: {
    type: String,
  },
  zipCode: {
    type: String,
  },
});

/*
FROM A GeeksForGeeks article:https://www.geeksforgeeks.org/node-js-password-hashing-crypto-module/

PBKDF2 = Password-Based Key Derivation Function 2
It requires:
 - password to encrypt
 - salt as unique and secret string used inside the encryption algorithm
  - iterations as number of cycle executed by the encryption algorithm
  - key length as the length ( in byte ) of the returned key
  - digest as the selected HMAC
 */

userSchema.pre('validate', function encryptPwd(next) {
  /*   Generates cryptographically strong pseudo-random bytes;
  the resultant buffer is transformed to a hexadecimal string and used as salt   */
  this.salt = crypto.randomBytes(16).toString('hex');
  this.passwordHash = crypto
    .pbkdf2Sync(this.passwordHash, this.salt, 1000, 64, 'sha512')
    .toString('hex');
  next();
});

userSchema.methods.isValidPassword = function comparePwd(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');

  return this.passwordHash === hash;
};

module.exports = mongoose.model('User', userSchema);
