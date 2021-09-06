const CmsResolver = require("./cmsResolver");
const ProductResolver = require('./productsResolver')
// const { join, parse } = require("path");
// const { createWriteStream } = require("fs");
// const Post = require("../../../models/Post");
const { GraphQLUpload } = require("graphql-upload");
module.exports = {
  Upload: GraphQLUpload,
  Query:{
    product:(_,args) => ProductResolver.product(args),
    Getlist: async (_, args) => CmsResolver.Getlist(args),
    Getabanlist: async(_, args) =>CmsResolver.Getabanlist(args),
    Getcustomerlist: async(_, args) =>CmsResolver.Getcustomerlist(args),
    Getcartlist: async(_, args) =>CmsResolver.Getcartlist(args),
    Getwishlist: async(_, args) =>CmsResolver.Getwishlist(args)
  },
  Mutation: {
    imageUploader:(_, args) => CmsResolver.imageUploader(args),
    updateOverRidePrice:(_,args) => ProductResolver.updateOverRidePrice(args),
    updatePrice:(_,args) => ProductResolver.updatePrice(args),
    updateQuantity:(_,args) => ProductResolver.updateQuantity(args),
    updatepricequantity:(_,args) => ProductResolver.updatepricequantity(args),
    addcart: async (_,args) => CmsResolver.addcart(args),
    addwishlist: async (_,args) => CmsResolver.addwishlist(args)
  },
};

    
