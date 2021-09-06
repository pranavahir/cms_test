const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CustomersSchema = new Schema({

    customerid:{
        type:String
    },
    customername:{
        type:String
    },
    phonenumber:{
        type:String
    },
    address1:{
        type:String
    },
    address2:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    country:{
        type:String
    },
    emailid:{
        type:Date
    },
    googleid:{
        type:String
    },
    facebookid:{
        type:String
    }
},
{timestamps:true}
)

module.exports = Customers = mongoose.model('Customers',CustomersSchema)

