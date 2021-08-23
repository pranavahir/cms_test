const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PostSchema = new Schema({
    Postalt:{
        type:String
    },
    Keyword:{
        type:String
    },
    Image:{
        type:String
    },
    FromDate:{
        type:Date
    },
    ToDate:{
        type:Date
    },
    Place:{
        type:String
    },
    Country:{
        type:String
    }
})
module.exports = Post = mongoose.model('Post',PostSchema)