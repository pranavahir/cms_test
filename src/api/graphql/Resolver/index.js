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
  },
  Mutation: {
    imageUploader:(_, args) => CmsResolver.imageUploader(args),
    updateOverRidePrice:(_,args) => ProductResolver.updateOverRidePrice(args)
  },
};
