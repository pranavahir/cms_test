const Product = require('../../../models/Product')
const Price = require('../../../models/Price')
module.exports = {
  product: async (args) => {
    try {
      //get single product
      const conversionlookop = await Product.aggregate([
        { $match: { asin: args.asin } },
        {
          $lookup: {
            from: "prices",
            localField: "sku",
            foreignField: "sku",
            as: "Price",
          },
        },
        { $unwind: "$Price" },
        {
          $lookup: {
            from: "statictbls",
            let: {
              product_fromcountry: "$fromcountry",
              product_tocountry: args.country,
              product_panel: args.panel,
              product_weight: { $ceil: { $toDouble: "$weight" } },
              price_price: "$Price.price",
              product_category: { $toDouble: "$category" },
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$FromCountry", "$$product_fromcountry"] },
                      { $eq: ["$ToCountry", "$$product_tocountry"] },
                      { $eq: ["$Panel", "$$product_panel"] },
                      { $eq: ["$weight_in_lbs", "$$product_weight"] },
                      { $lte: ["$minimumamount", "$$price_price"] },
                      { $gte: ["$MaximumAmount", "$$price_price"] },
                      { $eq: ["$Category", "$$product_category"] },
                    ],
                  },

                  // }
                },
              },
            ],
            as: "StaticTable",
          },
        },
        { $unwind: "$StaticTable" },
        {
          $project: {
            _id: "$_id",
            sku: "$sku",
            asin: "$asin",
            title: "$title",
            description: "$description",
            brandname: "$brandname",
            bullepoints: "$bullepoints",
            category: "$category",
            isactive: "$isactive",
            weight: "$weight",
            height: "$height",
            width: "$width",
            length: "$length",
            categoryid: "$categoryid",
            brandname: "$brandname",
            fromcountry: "$fromcountry",
            promoflag: "$promoflag",
            insertts: "$insertts",
            packagelength: "$packagelength",
            packagewidth: "$packagewidth",
            packageheight: "$packageheight",
            
                mainimageurl: "$mainimageurl",
                additionalimage1: "$additionalimage1",
                additionalimage2: "$additionalimage2",
                additionalimage3: "$additionalimage3",
                additionalimage4: "$additionalimage4",
                additionalimage5: "$additionalimage5",
              
            
                mpn: "$mpn",
                partnumber: "$partnumber",
                screendisplaysize: "$screendisplaysize",
                ram: "$ram",
                harddrive: "$harddrive",
                operatingsystem: "$operatingsystem",
                processorbrand: "$processorbrand",
              
            
                sku: "$sku",
                productid: "$_id",
                color: "$color",
                processor: "$processor",
                graphics: "$graphics",
                //  price:"$Price.price",
                price: {
                  $convert: {
                    input: "$Price.price",
                    to: "double",
                    onError: 0.0,
                    onNull: 0.0,
                  },
                },
                discount: "$discount",
                //  quantity:"$Price.quantity",
                quantity: {
                  $convert: {
                    input: "$Price.quantity",
                    to: "double",
                    onError: 0.0,
                    onNull: 0.0,
                  },
                },
                daystoship: "$StaticTable.daystoship",
                pwfee: "$StaticTable.pwfee",
                purchasetax: "$StaticTable.purchasetax",
                conversionrate: "$StaticTable.conversionrate",
                frieghtrate: "$StaticTable.frieghtrate",
                duty: "$StaticTable.duty",
                taxes: "$StaticTable.Taxes",
                fees: "$StaticTable.fees",
                margin: "$StaticTable.margin",
                overrideprice: {
                  $convert: {
                    input: "$Price.overrideprice",
                    to: "int",
                    onError: 0,
                    onNull: 0,
                  },
                },
              
          },
        },
      ]);
      if (conversionlookop) {
        return conversionlookop[0];
      }
      else{
        throw new Error("Product Not Found!")
      }
    } catch (error) {
      throw error;
    }
  },
  updateOverRidePrice:async(args) => {
        try{
            const price = await Price.findOneAndUpdate({sku:args.sku},{$set:{overrideprice:args.overrideprice}})
            if(price){
              return true
            }
            else{
              throw new Error("Product Not Found")
            }
        }
        catch(error){
            throw error
        }
  }
};
