import React, { Component, Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb';
import Datatable from '../common/datatable';
import { useQuery, gql } from "@apollo/client";

const WISHLIST_DATA =gql`
query{
    Getwishlist {
      additional_image_1
      additional_image_2
      additional_image_3
      additional_image_4
      additional_image_5
      asin
      brand
      category
      customerid
      description
      large_image
      sku
      title
    }
  }
`

export default function Wishlist(){
    
    const { loading, error, data } = useQuery(WISHLIST_DATA)
    if(error){
        console.log("error",error)
    }
    if(loading){
        console.log("the page was loading")
    }
    console.log("data",data)
        return (
            <Fragment>
                <Breadcrumb title="Wishlist" parent="cart" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Manage Cart</h5>
                                </div>
                                <div className="card-body Wishlist-datatable">
                                    {data?
                                     
                                <Datatable
                                            multiSelectOption={true}
                                            myData={data.Getwishlist}
                                            pageSize={10}
                                            pagination={true}
                                            class="-striped -highlight"
                                        />:"page was empty"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
}