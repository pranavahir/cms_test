import React, { Component,Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb';
import Single_Product from './single-product';
//
export class Create_Product extends Component {
    render() {
        return (
            <Fragment>
                <Breadcrumb title="Create Post" parent="Post" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5> Add Post</h5>
                                </div>
                                <div className="card-body">
                                    <Single_Product/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Create_Product
