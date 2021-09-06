import React, { Component, Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb';
// import data from '../../assets/data/orders';
import Datatable from '../common/datatable';
import { useQuery, gql } from "@apollo/client";

const CART_DATA =gql`
query{
    Getcartlist {
      isactive
      quantity
      seqid
      userid
    }
  }
`

export default function Carts(){
    
    const { loading, error, data } = useQuery(CART_DATA)
    if(error){
        console.log("error",error)
    }
    if(loading){
        console.log("the page was loading")
    }
    console.log("data",data)
        return (
            <Fragment>
                <Breadcrumb title="Carts" parent="cart" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Manage Cart</h5>
                                </div>
                                <div className="card-body carts-datatable">
                                    {data?
                                     
                                <Datatable
                                            multiSelectOption={true}
                                            myData={data.Getcartlist}
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