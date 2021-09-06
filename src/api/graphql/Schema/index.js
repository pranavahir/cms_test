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

   type orderdetail{
    orderreferencenumber:String
    orderdate:String
    asin:String
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
    gst:String
    productimage:String
  }
   
  type abandetail{
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
  }
   
  type customerdetail{
    customerid:String
    customername:String
    phonenumber:String
    address1:String
    address2:String
    city:String
    state:String
    country:String
    emailid:String
    googleid:String
    facebookid:String
  }
  
  type cartdetail{
    seqid:String	
    userid:String	
    isactive:String	
    quantity:String	
  }
  
  type wishlistdetail{
  title:String
  customerid:String
  description:String
  asin:String
  sku:String
  brand:String
  category:String
  large_image:String
  additional_image_1:String
  additional_image_2:String
  additional_image_3:String
  additional_image_4:String
  additional_image_5:String
  }

type Mutation {
  imageUploader(postalt:String,keyword:String,image:Upload!,fromDate:String,toDate:String,place:String,country:String):Post
  updateOverRidePrice(sku:String!,overrideprice:Int):Boolean
  updatePrice(sku:String!,price:Int):Boolean
  updateQuantity(sku:String!,quantity:Int):Boolean
  updatepricequantity(sku:String!,quantity:Int,price:Int):Boolean
  addcart(seqid:String,userid:String,isactive:String,quantity:String):cartdetail
  addwishlist(title:String,customerid:String,description:String,asin:String,sku:String,
    brand:String,category:String,large_image:String,additional_image_1:String,additional_image_2:String,
    additional_image_3:String,additional_image_4:String,additional_image_5:String):wishlistdetail
}

type Query {
  product(asin: String!,country:String!,panel:String!): ProductMasterDetails
  Getlist:[ orderdetail]
  Getabanlist:[ abandetail]
  Getcustomerlist:[ customerdetail]
  Getcartlist:[ cartdetail]
  Getwishlist:[ wishlistdetail]
}     
`