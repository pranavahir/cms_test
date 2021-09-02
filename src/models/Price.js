const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const mongooseElasticsearch = require('mongoose-elasticsearch-xp')

const PriceSchema = new Schema({
    sku:{
        type:String,
        // es_indexed:true
    },
    seqid:{
        type:Number
    },
    price:{
        type:Number,
        // es_indexed:true
    },
    quantity:{
        type:Number,
        // es_indexed:true
    },
    overrideprice:{
        type:Number
    }
})
const SkuIndex = PriceSchema.index({sku:1})
module.exports = Price = mongoose.model('Price',PriceSchema)