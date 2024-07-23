const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true, // 빈칸없애기 jae yungim@naver.com -> jaeyungim@naver.com
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0 // 기본값
    },
    image: String,
    token: {
        type: String
    },
    tokenWxp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User } // 다른 파일에서도 사용하기위해 exports 하기 