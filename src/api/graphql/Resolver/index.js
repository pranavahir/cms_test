const CmsResolver = require("./cmsResolver");
// const { join, parse } = require("path");
// const { createWriteStream } = require("fs");
// const Post = require("../../../models/Post");
const { GraphQLUpload } = require("graphql-upload");
module.exports = {
  Upload: GraphQLUpload,
  Mutation: {
    imageUploader: async (_, args) => CmsResolver.imageUploader(args)
  },
};
