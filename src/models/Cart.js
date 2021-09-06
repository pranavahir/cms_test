const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CartSchema = new Schema({
        seqid:{
            type:String
        },
        userid:{
            type:String
        },
        isactive:{
            type:String
        },
        quantity:{
            type:String
        }
},
{timestamps:true}
)
module.exports = Cart = mongoose.model('Cart',CartSchema)

/*
seqid	
Select
userid	
Select
isactive	
Select
quantity	
Select
createdat	
Select
updatedat
*/