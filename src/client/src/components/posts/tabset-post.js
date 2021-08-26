import React, { Component, Fragment, useState } from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import {useMutation,gql} from '@apollo/client'
const IMAGE_UPLOADER = gql`
mutation($country: String, $fromDate: String, $image: Upload!, $keyword: String, $place: String, $postalt: String, $toDate: String,){
    imageUploader (country: $country,fromDate: $fromDate,image: $image,keyword: $keyword,place: $place,postalt: $postalt,toDate: $toDate){
      country
      fromDate
      image
      keyword
      place
      postalt
      toDate
    }
  }
`

/*
export class Tabset_post extends Component {
    
    render() {
        
        return (
            <Fragment>
                <form className="needs-validation ad-add" noValidate="">
                    <h4>Post Details</h4>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> Postalt</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom0" type="text" required="" />
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> Keyword</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom1" type="text" required="" />
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> Image</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom2" type="file" required="" />
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> From Date</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom3" type="date" required="" />
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> To Date</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom4" type="date" required="" />
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> Place</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom4" type="text" required="" />
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> Country</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom4" type="text" required="" />
                    </div>
                </form>

                <div className="pull-left">
                    <button type="button" className="btn btn-primary">Cancel</button>
                </div>
                <div className="pull-right">
                    <button type="button" className="btn btn-primary">Save</button>
                </div>
            </Fragment>
        )
    }
}
*/
export function Tabset_post(){
    const [postalt, setPostalt] = useState("")
    const [keyword, setKeyword] = useState("")
    const [image, setImage] = useState()
    const [fromDate, setfromDate] = useState("")
    const [toDate, setToDate] = useState("")
    const [country, setCountry] = useState("")
    const [place, setPlace] = useState("")
    const postaltChangeHandler = (event) => {
        setPostalt(event.target.value)
    }
    const keywordChangeHandler = (event) => {
        setKeyword(event.target.value)
    }
    const imageChangeHandler = (event) => {
        setImage(event.target.files[0])
    }
    const fromDateChangeHandler = (event) => {
        setfromDate(event.target.value)
    }
    const toDateChangeHandler = (event) => {
        setToDate(event.target.value)
    }
    const countryChangeHandler = (event) => {
         setCountry(event.target.value)
    }
    const placeChangeHandler = (event) => {
        setPlace(event.target.value)
    }
    const [imageUploader] = useMutation(IMAGE_UPLOADER,{
        onCompleted:data => console.log(data)
    })
    const submitHandler = (event) => {
        
        event.preventDefault()
        imageUploader({
            variables:{
                    postalt:postalt,
                    keyword:keyword,
                    image:image,
                    fromDate:fromDate,
                    toDate:toDate,
                    place:place,
                    country:country
        }})
        setPostalt('');
        setKeyword('');
        setImage('');
        setfromDate('');
        setToDate('');
        setCountry('');
        setPlace('')
    }
    return (
        <Fragment>
                <form className="needs-validation ad-add" noValidate="" onSubmit={submitHandler}>
                    <h4>Post Details</h4>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> Postalt</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom0" type="text" required="" 
                         onChange={postaltChangeHandler} />
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> Keyword</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom1" type="text" required=""
                         onChange={keywordChangeHandler} />
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> Image</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom2" type="file" required="" 
                          onChange={imageChangeHandler} />
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> From Date</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom3" type="date" required=""
                         onChange={fromDateChangeHandler} />
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> To Date</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom4" type="date" required="" 
                         onChange={toDateChangeHandler} />
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> Place</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom4" type="text" required=""
                         onChange={placeChangeHandler}  />
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> Country</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom4" type="text" required="" 
                         onChange={countryChangeHandler}/>
                    </div>
                    <div className="pull-left">
                    <button type="button" className="btn btn-primary">Cancel</button>
                </div>
                <div className="pull-right">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
                </form>

                
            </Fragment>
    )
}
export default Tabset_post
