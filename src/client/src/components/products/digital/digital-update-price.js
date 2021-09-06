import React, { Component, Fragment, useState } from 'react'
import Breadcrumb from '../../common/breadcrumb';
import Datatable from '../../common/datatable'
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import './style.css'
const Digital_update_price = () => {
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
    const EDIT_PRICE = gql`
    mutation updatePrice($sku: String!, $price: Int){
      updatePrice(sku: $sku,price: $price)
    }
   `

    const EDIT_QUANTITY = gql`
    mutation updateQuantity($sku: String!, $quantity: Int){
        updateQuantity(sku: $sku,quantity: $quantity)
    }
    `
    const EDIT_PRICEQUANTITY = gql`
    mutation updatepricequantity($sku: String!, $quantity: Int, $price: Int){
        updatepricequantity(sku: $sku,quantity: $quantity,price: $price)
      }
    `
    const [asin, setAsin] = useState('')
    const [panel, setPanel] = useState('')
    const [country, setCountry] = useState('')
    const [sku, setEditSku] = useState('')
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
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
    const [updatePrice] = useMutation(EDIT_PRICE, {
        onCompleted: (data) => console.log("data", data)
    })
    const [updateQuantity] = useMutation(EDIT_QUANTITY, {
        onCompleted: (data) => console.log("data", data)
    })
    const [updatepricequantity] = useMutation(EDIT_PRICEQUANTITY, {
        onCompleted: (data) => console.log("data", data)
    })
    const editPriceHandler = (event) => {
        setPrice(event.target.value)
    }
    const editQuantityHandler = (event) => {
        setQuantity(event.target.value)
    }
    const [Search, { loading, error, data }] = useLazyQuery(GET_PRODUCT, {
        variables: { asin: asin, country: country, panel: panel }
    });

    console.log("setPrice:", setPrice, "setQuantity:", setQuantity)

    const editSubmitHandler = (event) => {
        event.preventDefault()
        console.log("price:", price, "quantity:", quantity)
        if (price && !quantity) {
            updatePrice({
                variables: {
                    sku: sku,
                    price: parseInt(price)
                }
            })
        }
        if (quantity && !price) {
            updateQuantity({
                variables: {
                    sku: sku,
                    quantity: parseInt(quantity)
                }
            })
        }
        if (quantity && price) {
            updatepricequantity({
                variables: {
                    sku: sku,
                    price: parseInt(price),
                    quantity: parseInt(quantity)
                }
            })
        }
        Search()
        alert("Form Updated Sucessfully! Click on OK to Submit it")
    }

    const viewHandler = (event) => {
        event.preventDefault()
        Search()
    }

    return (
        <Fragment>
            <Breadcrumb title="Digital Update" parent="Digital" />
            {/* <!-- Container-fluid starts--> */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Update Price And Quantity</h5>
                            </div>
                            <div className="card-body">
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
                                            <label >Price
                                            </label><br />
                                            <input
                                                className="input"
                                                id="validationCustom3"
                                                type="text"
                                                pattern="[0-9]*"
                                                // required={true}
                                                onChange={editPriceHandler}
                                                placeholder="Price"
                                            />
                                        </div>
                                        <div class="group">
                                            <label >Quantity
                                            </label><br />
                                            <input
                                                className="input"
                                                id="validationCustom3"
                                                type="text"
                                                pattern="[0-9]*"
                                                // required={true}
                                                onChange={editQuantityHandler}
                                                placeholder="Quantity"
                                            />
                                        </div>
                                    </section>
                                    <div className="pull-right">
                                        <button type="button" className="btn btn-primary" onClick={editSubmitHandler} >UPDATE</button>
                                    </div>
                                    <div className="pull-left">
                                        <button type="button" className="btn btn-primary" onClick={viewHandler} >VIEW</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card">
                            <form onSubmit={viewHandler}>
                                <div className="card-header">
                                    <h5>Product List</h5>
                                </div>
                                {<div className="card-body order-datatable">
                                    {data ?
                                        <Datatable
                                            multiSelectOption={true}
                                            myData={[data.product]}
                                            pageSize={10}
                                            pagination={true}
                                            class="-striped -highlight"
                                        /> : ""}
                                </div>}
                            </form>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h5>Product Updated List</h5>
                            </div>
                            <form >
                                {<div className="card-body order-datatable">
                                    {data ?
                                        <Datatable
                                            multiSelectOption={true}
                                            myData={[data.product]}
                                            pageSize={10}
                                            pagination={true}
                                            class="-striped -highlight"
                                        /> : ""}
                                </div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Digital_update_price
