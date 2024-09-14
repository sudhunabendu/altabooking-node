const mongoose = require("mongoose");

const userDetail = mongoose.model(
    "userDetail",
    new mongoose.Schema({
        user_id: [
            { type: mongoose.Schema.Types.ObjectId, ref: 'ab_users' }
        ],
        birthday: {
            type: mongoose.Schema.Types.Date,
            required: false,
        },
        person_type: {
            type: String,
            enum: ['BUSINESS', 'ORGANIZATION', 'SOLETRADER', 'NONE'],
            default: 'NONE'
        },
        nationality_id: {
            type: Number,
            required: false,
        },
        company_vat_number: {
            type: String,
            required: false,
        },
        company_name: {
            type: String,
            required: false,
        },
        address: {
            type: String,
            required: false,
        },
        account_origin: {
            type: String,
            enum: ['Facebook','Google','Linkedin','Self','Admin'],
            default: 'Self'
        },
        country_id: {
            type: Number,
            default: 0
        },
        state_id: {
            type: Number,
            default: 0
        },
        city: {
            type: String,
            required: false,
        },
        post_code: {
            type: String,
            required: false,
        },
        store_details: {
            type: String,
            required: false,
        },
        user_link: {
            type: String,
            required: true,
        },
        website: {
            type: String,
            required: false,
        },
        instagram_link: {
            type: String,
            required: false,
        },
        facebook_link: {
            type: String,
            required: false,
        },
        user_code: {
            type: String,
            required: false,
        },
        currency_id: {
            type: Number,
            default: 1
        },
        parent_id: {
            type: Number,
            default: 0
        },
        profile_image: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
    },{timestamps:true}),
    "ab_user_details"
);

module.exports = userDetail;