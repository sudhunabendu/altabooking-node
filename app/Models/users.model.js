
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    role_id: {
      type: String,
      required: true,
      default:"668821bfb121b12833468931"
    },
    title: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      default: 'Male'
    },
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    iso: {
      type: String,
      required: false,
    },
    mobile_code: {
      type: String,
      required: false,
    },
    mobile_number: {
      type: String,
      required: false,
      unique: true,
    },
    mobile_number_verified: {
      type: String,
      enum: ['0', '1'],
      default: '0'
    },
    total_rating: {
      type: String,
      default: '0'
    },
    avg_rating: {
      type: mongoose.Types.Decimal128,
      default: 0.00
    },
    total_review: {
      type: String,
      default: '0'
    },
    remember_token: {
      type: String,
      required: false,
    },
    registration_token: {
      type: String,
      required: false,
    },
    forgot_token: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ['Active', 'Inactive', 'Expired', 'Verified', 'Blocked'],
      default: 'Inactive',
    },
    is_otp_needed: {
      type: String,
      default: '0'
    },
    set_password_key: {
      type: String,
      required: false,
    },
    valid_upto: {
      type: String,
      required: false,
    },
    created_by: {
      type: String,
      default: '0'
    },
    updated_by: {
      type: String,
      default: '0'
    }
  }, {
    timestamps: true
  }),
  "ab_users"
);

module.exports = User;