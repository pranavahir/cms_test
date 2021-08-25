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
  image:Upload
  fromDate:String
  toDate:String
  place:String
  country:String
}
type File{
  url:String!
}
type Mutation {
  #imageUploader(file: Upload!,data:String):String
  imageUploader(postInput:PostInput):Post
}

type Query {
  info: String
}     
`