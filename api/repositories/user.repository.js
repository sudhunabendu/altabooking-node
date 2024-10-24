const User = require('../models/users.model');
const UserDetail = require('../models/userDetails.model');

class userRepository {

    async checkEmailExists(payload) {
        const user = await User.findOne({ email: payload.email });
        if (user) {
            return user;
        }else{
            return false;
        }
    }

    async checkMobileExists(payload) {
        const user = await User.findOne({ mobile_number: payload.mobile_number });
        if (user) {
            return user;
        }else{
            return false;
        }
    }

    async getUserDetailByUserCode(payload) {
        try {
            let data = await UserDetail.findOne({ user_code: payload });
            if (!data) {
                return null;
            }
            return data;
        } catch (e) {
            throw e;
        }
    }

    async saveRegistrationData(payload){
        const user = new User({ ...payload, mobile_code: payload.dial_code });
        await user.save();
        // await user.save({ session });
        return { user };
        // return { user, userDetails };
    }

    async userCheckEmail(payload) {
        const user = await User.findOne({
            email: payload.email,
            role_id: { $ne: mongoose.Types.ObjectId('665d529d6caaa43c454087dc') }
        }).select('id first_name last_name email mobile_number mobile_code mobile_number_verified');
        if (user) {
            return user;
        } else {
            return false;
        }
    }
}

module.exports = new userRepository();