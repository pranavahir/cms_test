const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
        seqid:{
            type:String
        },
        statictable:{
            type:Schema.Types.ObjectId,
            ref:'StaticTbl'
        },
        sku:{
            type:String
        },
        title:{
            type:String,
            // index:'text'
        },
        description:{
            type:String
        },
        bullepoints:{
            type:String
        },
        brandid:{
            type:String
        },
        categoryid:{
            type:Number
        },
        isvisible:{
            type:Boolean
        },
        isactive:{
            type:Boolean
        },
        warehouseid:{
            type:String
        },
        metadetadescription:{
            type:String
        },
        seokeywords:{
            type:String
        },
        weight:{
            type:Number
        },
        height:{
            type:Number
        },
        width:{
            type:Number
        },
        length:{
            type:Number
        },
        fromcountry:{
            type:String
        },
        asin:{
            type:String
        },
        packagewidth:{
            type:Number
        },
        packageheight:{
            type:Number
        },
        packagelength:{
            type:Number
        },
        insertts:{
            type:Number
        },
        updts:{
            type:String
        },
        promoflag:{
            type:String
        },
        url:{
            type:String
        },
        //additional data
        mpn:{
            type:String
        },
        partnumber:{
            type:String
        },
        ram:{
            type:String
        },
        harddrive:{
            type:String
        },
        processorbrand:{
            type:String
        },
        operatingsystem:{
            type:String
        },
        screendisplaysize:{
            type:String
        },
        color:{
            type:String
        },
        mainimageurl:{
            type:String
        },
        additionalimage1:{
            type:String
        },
        additionalimage2:{
            type:String
        },
        additionalimage3:{
            type:String
        },
        additionalimage4:{
            type:String
        },
        additionalimage5:{
            type:String
        },
        upc:{
            type:String
        },
        //not present in database
        seqid:{
            type:String
        },
        sku:{
            type:String
        },
        
       
        
        brandid:{
            type:Number
        },
        
        isvisible:{
            type:Number
        },
        
        warehouseid:{
            type:Number
        },
        metatagdescription:{
            type:String
        },
        seokeywords:{
            type:String
        },
        
        fromcurrency:{
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
        },
        large_image:{
            type:String
        },
        processor:{
            type:String
        },
        panel:{
            type:String
        },
        categoryvalue:{
            type:String
        },
        category:{
            type:Number
        },
        brandname:{
            type:String,
            // index:'text'
        },
        subcategory:{
            type:String
        },
        productgroup:{
            type:String
        }
        
})

const AsinIndex = ProductSchema.index({asin:1})//Index for Category
const CategoryIDIndex = ProductSchema.index({categoryid:1})
const BrandIndex = ProductSchema.index({brandname:1})
const TextIndex = ProductSchema.index({brandname:"text",subcategory:"text",title:"text",asin:"text"})
const promoflagIndex = ProductSchema.index({promoflag:1})
module.exports = Product = mongoose.model('Product',ProductSchema)


