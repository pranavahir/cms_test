const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WishlistSchema = new Schema({
    title:{
        type:String
    },
    customerid:{
        type:String
    },
    description:{
        type:String
    },
    asin:{
        type:String
    },
    sku:{
        type:String
    },
    brand:{
        type:String
    },
    category:{
        type:String
    },
    large_image:{
        type:String
    },
    additional_image_1:{
        type:String
    },
    additional_image_2:{
        type:String
    },
    additional_image_3:{
        type:String
    },
    additional_image_4:{
        type:String
    },
    additional_image_5:{
        type:String
    }
},
{timestamps:true}
)

module.exports = Wishlist = mongoose.model('Wishlist',WishlistSchema)