const { join, parse } = require("path");
const { createWriteStream } = require("fs");
const Post = require("../../../models/Post");
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
      }
}