const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AbandSchema = new Schema({
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
        type:String
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
    productimage:{
        type:String
    },
},
{timestamps:true}
)

module.exports = abandonedcarts = mongoose.model('abandonedcarts',AbandSchema)


/*
  productsku:String
  producttitle:String
  customerid:String
  customername:String
  paymentmethod:String
  paymentdate:String
  trackingnumber:String
  orderstatus:String
  address1:String
  address2:String
  city:String
  state:String
  country:String
  phone:String
  emailid:String
  productimage:String
*/
