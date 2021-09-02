const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StaticTblSchema = new Schema({
    producttable:{
        type:Schema.Types.ObjectId,
        ref:"Product"
    },
    Panel:{
        type:String,
    },
    Category:{
        type:Number
    },
    FromCountry:{
        type:String
    },
    ToCountry:{
        type:String
    },
    minimumamount:{
        type:Number
    },
    MaximumAmount:{
        type:Number
    },
    margin:{
        type:Number
    },
    fees:{
        type:Number
    },
    Taxes:{
        type:Number
    },
    conversionrate:{
        type:Number
    },
    duty:{
        type:Number
    },
    weight_in_lbs:{
        type:Number
    },
    freightrate:{
        type:Number
    },
    purchasetax:{
        type:Number
    },
    pwfee:{
        type:Number
    },
    daystoship:{
        type:Number
    }
})
const FromCountryIndex = StaticTblSchema.index({FromCountry:1})
const ToCountryIndex = StaticTblSchema.index({ToCountry:1})
const PanelIndex = StaticTblSchema.index({Panel:1})
module.exports = StaticTbl = mongoose.model('StaticTbl',StaticTblSchema)