import React, { Component, Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb';
// import data from '../../assets/data/orders';
import Datatable from '../common/datatable';
import { useQuery, gql } from "@apollo/client";

const ORDER_DATA =gql`
query{
    Getlist {
      address1
      address2
      asin
      city
      country
      customerid
      customername
      emailid
      gst
      orderdate
      orderreferencenumber
      orderstatus
    }
  }
`

// export class Orders extends Component {
    
//     render() {
//         return (
//             <Fragment>
//                 <Breadcrumb title="Orders" parent="Sales" />

//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="col-sm-12">
//                             <div className="card">
//                                 <div className="card-header">
//                                     <h5>Manage Order</h5>
//                                 </div>
//                                 <div className="card-body order-datatable">
//                                 <Datatable
//                                             multiSelectOption={false}
//                                             myData={data}
//                                             pageSize={10}
//                                             pagination={true}
//                                             class="-striped -highlight"
//                                         />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Fragment>
//         )
//     }
// }
export default function Order(){
    // const { loading, error, data } = useQuery(ORDER_DATA,{
    //     variables: {
            
    //     }
    // })
    const { loading, error, data } = useQuery(ORDER_DATA)
    if(error){
        console.log("error",error)
    }
    if(loading){
        console.log("the page was loading")
    }
    console.log("data",data)
        return (
            <Fragment>
                <Breadcrumb title="Orders" parent="Sales" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Manage Order</h5>
                                </div>
                                <div className="card-body order-datatable">
                                    {data? 
                                <Datatable
                                            multiSelectOption={true}
                                            hiddenColumns={"city","asin"}
                                            myData={data.Getlist}
                                            // myData={data.Getlist.customername,data.Getlist.asin,data.Getlist.emailid,data.Getlist.address1,data.Getlist.gst,data.Getlist.orderdate}
                                            // myData={data.Getlist,hiddenColumns="city"}
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