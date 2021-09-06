const { join, parse } = require("path");
const { createWriteStream } = require("fs");
const Post = require("../../../models/Post");
const Order = require("../../../models/Order");
const abandonedcarts = require("../../../models/abandonedcarts");
const customers = require("../../../models/Customers");
const Cart = require("../../../models/Cart");
const Wishlist = require("../../../models/Wishlist");
module.exports = {
  imageUploader: async (args) => {
    try {
      
      let { filename, createReadStream } = await args.image;
      let stream = createReadStream();
      let { ext, name } = parse(filename);
      name = name.replace(/([^a-z0-9 ]+)/gi, "-").replace(" ", "_");
      let serverFile = join(
        __dirname,
        `../../../uploads/${name}-${Date.now()}${ext}`
      );
      serverFile = serverFile.replace(" ", "_");
      let writeStream = await createWriteStream(serverFile);
      await stream.pipe(writeStream);
      serverFile = `http://localhost:5000${serverFile.split("uploads")[1]}`;
        
      const createpost = new Post({
        keyword: args.keyword,
        postalt: args.postalt,
        image: serverFile,
        fromDate: args.fromDate,
        toDate: args.toDate,
        place: args.place,
        country: args.country,
      });
      const postupload = await createpost.save();
      if (postupload) {
        return {
          postalt: postupload.postalt,
          keyword: postupload.keyword,
          image: postupload.image,
          fromDate: postupload.fromDate,
          toDate: postupload.toDate,
          place: postupload.place,
          country: postupload.country,
        };
      }
    } catch (error) {
      throw error;
    }
      },
      Getlist: async (args) => {
        const getorderbyID = await Order.find()
        // ({orderreferencenumber:args.orderreferencenumber});
        console.log(getorderbyID)
        if (getorderbyID) {
          return getorderbyID
        }
      },
      Getabanlist: async (args) => {
        // console.log("test")
        const getbyID = await abandonedcarts.find()
        if (getbyID) {
          return getbyID
        }
      },
      Getcustomerlist: async (args) => {
        // console.log("test")
        const getcustomerbyID = await customers.find()
        if (getcustomerbyID) {
          return getcustomerbyID
        }
    
      },
      addcart: async (args) => {
        try {
          const createcart = new Cart({
            seqid: args.seqid,
            userid: args.userid,
            isactive: args.isactive,
            quantity: args.quantity
          });
          const cartupload = await createcart.save();
          if (cartupload) {
            return {
              seqid: cartupload.seqid,
              userid: cartupload.userid,
              isactive: cartupload.isactive,
              quantity: cartupload.quantity
            };
          }
        } catch (error) {
          throw error;
        }
      },
      Getcartlist: async (args) => {
        // console.log("test")
        const getcartbyID = await Cart.find()
        if (getcartbyID) {
          return getcartbyID
        }
    
      },
      addwishlist: async (args) => {
        try {
          const createwishlist = new Wishlist({
            title: args.title,
            customerid: args.customerid,
            description: args.description,
            asin: args.asin,
            sku: args.sku,
            brand: args.brand,
            category: args.category,
            large_image: args.large_image,
            additional_image_1: args.additional_image_1,
            additional_image_2: args.additional_image_2,
            additional_image_3: args.additional_image_3,
            additional_image_4: args.additional_image_4,
            additional_image_5: args.additional_image_5
          });
          const wishlistupload = await createwishlist.save();
          if (wishlistupload) {
            return {
              title: wishlistupload.title,
              customerid: wishlistupload.customerid,
              description: wishlistupload.description,
              asin: wishlistupload.asin,
              sku: wishlistupload.sku,
              brand: wishlistupload.brand,
              category: wishlistupload.category,
              large_image: wishlistupload.large_image,
              additional_image_1: wishlistupload.additional_image_1,
              additional_image_2: wishlistupload.additional_image_2,
              additional_image_3: wishlistupload.additional_image_3,
              additional_image_4: wishlistupload.additional_image_4,
              additional_image_5: wishlistupload.additional_image_5
            };
          }
        } catch (error) {
          throw error;
        }
      },
      Getwishlist: async (args) => {
        // console.log("test")
        const getwishlistbyID = await Wishlist.find()
        if (getwishlistbyID) {
          return getwishlistbyID
        }
    
      }
}