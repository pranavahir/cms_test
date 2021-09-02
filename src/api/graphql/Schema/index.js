const { gql } = require('apollo-server-express');

module.exports = gql`
scalar Upload
type Post{
  postalt:String
  keyword:String
  image:String
  fromDate:String
  toDate:String
  place:String
  country:String
} 
input PostInput{
  postalt:String
  keyword:String
  image:String
  fromDate:String
  toDate:String
  place:String
  country:String
}
type File{
  url:String!
}
type ProductMasterDetails {
  sku:String
  asin:String
  brandname:String
  subcategory:String
  brandid:String
  bullepoints:String
  title:String
  description:String
  category:Float
  categoryid:Float
  categoryvalue:String
  productgroup:String,
  fromcountry:String
  promoflag:String
  insertts:String
  packagelength:String
  packagewidth:String
  packageheight:String
  weight:Float
  height:Float
  width:Float
  length:Float
  isactive:String
  seqid:String
      mpn:String
      partnumber:String
      isbn:String
      screendisplaysize:String,
      maxscreenresolution:String
      processor:String
      ram:String
      memoryspeed:String
      harddrive:String
      graphiccoprocessor:String
      chipsetbrand:String
      carddescription:String
      wirelesstype:String
      numberofusb2port:Int
      numberofusb3port:Int
      avgbaterrylife:String
      series:String
      operatingsystem:String
      processorbrand:String
      processorcount:String
      flashmemorysize:String
      harddriveinterface:String
      harddriverotationalspeed:String
      batteries:String
      itemdimension:String
      productdimension:String
      opticalzoom:String
      publisher:String
      size:Int

  productid:String
  color:String
  #size:Int

  graphics:String
  price:Float
  discount:Int
  quantity:Int
  domesticfreight:String

  daystoship:Int
  pwfee:Float
  purchasetax:Float
  conversionrate:Float
  frieghtrate:Float
  duty:Float
  taxes:Float
  fees:Float
  margin:Float
  overrideprice:Int
  mainimageurl: String
  additionalimage1: String
  additionalimage2: String
  additionalimage3: String
  additionalimage4: String
  additionalimage5: String
  
}
type specifications{
     
  seqid:String
     
      upc:String
      mpn:String
      partnumber:String
      isbn:String
      screendisplaysize:String,
      maxscreenresolution:String
      processor:String
      ram:String
      memoryspeed:String
      harddrive:String
      graphiccoprocessor:String
      chipsetbrand:String
      carddescription:String
      wirelesstype:String
      numberofusb2port:Int
      numberofusb3port:Int
      avgbaterrylife:String
      series:String
      operatingsystem:String
      processorbrand:String
      processorcount:String
      flashmemorysize:String
      harddriveinterface:String
      harddriverotationalspeed:String
      batteries:String
      itemdimension:String
      productdimension:String
      opticalzoom:String
      publisher:String
      size:Int
}
type Images {
  productid:ID!

  mainimageurl: String
  additionalimage1: String
  additionalimage2: String
  additionalimage3: String
  additionalimage4: String
  additionalimage5: String
}
type Variants {
  sku:String
  productid:String
  color:String
  #size:Int
  processor:String
  graphics:String
  price:Float
  discount:Int
  quantity:Int
  domesticfreight:String

  daystoship:Int
  pwfee:Float
  purchasetax:Float
  conversionrate:Float
  frieghtrate:Float
  duty:Float
  taxes:Float
  fees:Float
  margin:Float
  overrideprice:Int

   }
type Mutation {
  imageUploader(postalt:String,keyword:String,image:Upload!,fromDate:String,toDate:String,place:String,country:String):Post
  updateOverRidePrice(sku:String!,overrideprice:Int):Boolean
}

type Query {
  product(asin: String!,country:String!,panel:String!): ProductMasterDetails
}     
`