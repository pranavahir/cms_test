import React, { Component,Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb';
import Tabset_ad from './tabset-ad';

export class Create_ad extends Component {
    render() {
        return (
            <Fragment>
                <Breadcrumb title="Create Ads" parent="Ads" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5> Add ADs</h5>
                                </div>
                                <div className="card-body">
                                    <Tabset_ad />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Create_ad
