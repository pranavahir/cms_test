import React, { Component, Fragment, useState } from 'react'
import Breadcrumb from '../../common/breadcrumb';
import Datatable from '../../common/datatable'
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import './style.css'
const Digital_pro_list = () => {
    const GET_PRODUCT = gql`
    query($asin: String!, $country: String!, $panel: String!){
        product(asin: $asin, country: $country, panel: $panel) {
          asin
          sku
          brandname
          category
          description
         fromcountry
          height
          insertts
      isactive
      length
      promoflag
      title
      weight
      width
       mainimageurl        
        mpn
        partnumber
       purchasetax
        pwfee
        daystoship
        pwfee
        conversionrate
        discount
        domesticfreight
        duty
        fees
        frieghtrate
        margin
        price
        taxes
        overrideprice
        }
      }
    `
    const EDIT_OVERRIDE = gql`
    mutation($sku: String!, $overrideprice: Int){
      updateOverRidePrice(sku: $sku,overrideprice: $overrideprice)
    }
    `
   
    const [asin,setAsin] = useState('')
    const [panel,setPanel] = useState('')
    const [country,setCountry] = useState('')
    const [sku,setEditSku] = useState('')
    const [overrideprice,setEditOverRidePrice] = useState(0)
    const asinHandler = (event) => {
        setAsin(event.target.value)
    }
    const panelhandler = (event) => {
        setPanel(event.target.value)
    }
    const countryHandler = (event) => {
        setCountry(event.target.value)
    }
    const editSkuHandler = (event) => {
      setEditSku(event.target.value)
  }
  const editOverRideHandler = (event) => {
      setEditOverRidePrice(event.target.value)
  }
  const [updateOverRidePrice] = useMutation(EDIT_OVERRIDE,{
    onCompleted:(data) => console.log(data)
  })
  const [Search,{ loading, error, data }] = useLazyQuery(GET_PRODUCT, {
    variables: { asin:asin,country:country,panel:panel },
  });
  const editSubmitHandler = (event) => {
    event.preventDefault()
    updateOverRidePrice({
        variables:{
          sku:sku,
          overrideprice:parseInt(overrideprice)
        }
    })
    Search() 
    alert("Form Updated Sucessfully! Click on OK to Submit it")
  }
  
   
    
   
    return (
        <Fragment>
         <form onSubmit={editSubmitHandler}>
           <section>
        
        <div class="group">
          <label for="asin"> Asin
          </label><br />
          <input
            className="input"
            id="validationCustom0"
            type="text"
            maxLength="30"
            required={true}
            onChange={asinHandler}
            placeholder="Asin must be UPPERCASE"
          />
          </div>
          <div class="group">
          <label >Country</label><br />
          <input
            className="input"
            id="validationCustom1"
            type="text"
            required={true}
            onChange={countryHandler}
            placeholder="India or USA"
          />
          </div>
          <div class="group">
          <label >Panel
          </label><br />
          <input
            className="input"
            id="validationCustom3"
            type="text"
            required={true}
            onChange={panelhandler}
            placeholder="STW India or STW USA"
          />
          </div>
          <div class="group">
          <label >Sku
          </label><br />
          <input
            className="input"
            id="validationCustom3"
            type="text"
            required={true}
            onChange={editSkuHandler}
            placeholder="Sku must be UPPERCASE"
          />
        </div>
        <div class="group">
          <label >OverRidePrice
          </label><br />
          <input
            className="input"
            id="validationCustom3"
            type="text"
            pattern="[0-9]*"
            required={true}
            onChange={editOverRideHandler}
            placeholder="Price"
          />
          </div>
        <div className="pull-right">
        <center>
          <button type="submit" className="button">
            Edit OverRidePrice
          </button>
          </center>
        </div>
        {<div className="card-body order-datatable">
                                    {data? 
                                <Datatable
                                            multiSelectOption={true}
                                            hiddenColumns={"city","asin"}
                                            myData={[data.product]}
                                            // myData={data.Getlist.customername,data.Getlist.asin,data.Getlist.emailid,data.Getlist.address1,data.Getlist.gst,data.Getlist.orderdate}
                                            // myData={data.Getlist,hiddenColumns="city"}
                                            pageSize={10}
                                            pagination={true}
                                            class="-striped -highlight"
                                        />:"" }
                                </div>}
                                </section>
                                </form>
        </Fragment>
    )
}
export default Digital_pro_list
