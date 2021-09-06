const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    // orderdetailid:{
    //     type:String
    // },
    orderreferencenumber:{
        type:String
    },
    orderdate:{
        type:Date
    },
    asin:{
        type:String
    },
    productsku:{
        type:String
    },
    producttitle:{
        type:String
    },
    customerid:{
        type:String
    },
    customername:{
        type:String
    },
    paymentmethod:{
        type:String
    },
    paymentdate:{
        type:Date
    },
    trackingnumber:{
        type:String
    },
    orderstatus:{
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
    phone:{
        type:String
    },
    emailid:{
        type:String
    },
    gst:{
        type:String
    },
    productimage:{
        type:String
    }
},
{timestamps:true}
)

module.exports = Order = mongoose.model('Order',OrderSchema)


/*
orderreferencenumber
orderdate
asin
productsku
producttitle
customerid
customername
paymentmethod
paymentdate
trackingnumber
orderstatus
address1
address2
city
state
country
phone
emailid
gst
productimage
*/
