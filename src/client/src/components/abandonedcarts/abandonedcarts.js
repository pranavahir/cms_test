import React, { Component, Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb';
import Datatable from '../common/datatable';
import { useQuery, gql } from "@apollo/client";

const ABANDONED_DATA = gql`
query{
    Getabanlist {
      address1
      address2
      city
      country
      customerid
      customername
      emailid
      orderstatus
      paymentdate
      paymentmethod
      phone
      productimage
      productsku
      producttitle
      state
      trackingnumber
    }
  }
`


export default function Abandonedcarts() {
    const { loading, error, data } = useQuery(ABANDONED_DATA)
    if (error) {
        console.log("error", error)
    }
    if (loading) {
        console.log("the page was loading")
    }
    console.log("data", data)
    return (
        <Fragment>
            <Breadcrumb title="Abandoneds" parent="Abandoneds" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Manage Abandoned</h5>
                            </div>
                            <div className="card-body Abandoned-datatable">
                                {data ?

                                    <Datatable
                                        multiSelectOption={true}
                                        checkedValues={"city", "asin"}
                                        myData={data.Getabanlist}
                                        pageSize={10}
                                        pagination={true}
                                        class="-striped -highlight"
                                    /> : "page was empty"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}