import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Dropzone from 'react-dropzone';
// import {gql,useMutation} from '@apollo/client'
// const uploadFileMutation = gql`
//   mutation($file: Upload!) {
//     uploadFile(file: $file){
//       url
//     }
//   }
// `;
const uploadFileMutation = gql`
  mutation($Image:Upload!) {
    uploadFile(Image:$Image){
      Image
    }
  }
`;
export default function App(){
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    console.log(file)
  }
  return(
    <div className="dropzone">
  <Mutation mutation={uploadFileMutation}>
    {mutate => (
      <Dropzone onDrop={([Image]) => mutate({ variables: { Image } })}>
      {dropzoneProps => {
        return (
          <div>
            <p>Drop some files here</p>
          </div>
        );
      }}
    </Dropzone>
      
    )}
  </Mutation>
  <div>
  <Mutation mutation={uploadFileMutation}>
    {mutate => (
      <div className="form-group row">
      <label className="col-xl-3 col-md-4"><span>*</span> Postalt</label>
      <input className="form-control col-xl-8 col-md-7" id="validationCustom0" type="text" required="" />
    </div>
      
    )}
  </Mutation>
        </div>
  </div>
  )
}