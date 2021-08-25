const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PostSchema = new Schema({
    postalt:{
        type:String
    },
    keyword:{
        type:String
    },
    image:{
        type:String
    },
    fromDate:{
        type:Date
    },
    toDate:{
        type:Date
    },
    place:{
        type:String
    },
    country:{
        type:String
    }
})
module.exports = Post = mongoose.model('Post',PostSchema)