import React, { Component, Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb';
// import data from '../../assets/data/orders';
import Datatable from '../common/datatable';
import { useQuery, gql } from "@apollo/client";

const CUSTOMER_DATA =gql`
query{
    Getcustomerlist {
      address1
      address2
      city
      country
      customerid
      customername
      emailid
      facebookid
      googleid
      phonenumber
      state
    }
  }
`

export default function Customerinfo(){
    
    const { loading, error, data } = useQuery(CUSTOMER_DATA)
    if(error){
        console.log("error",error)
    }
    if(loading){
        console.log("the page was loading")
    }
    console.log("data",data)
        return (
            <Fragment>
                <Breadcrumb title="customerinfo" parent="Customer" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Manage Customer</h5>
                                </div>
                                <div className="card-body customers-datatable">
                                    {data?
                                     
                                <Datatable
                                            multiSelectOption={true}
                                            myData={data.Getcustomerlist}
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