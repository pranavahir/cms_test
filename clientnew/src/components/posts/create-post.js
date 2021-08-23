import React, { Component,Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb';
import Tabset_post from './tabset-post';

export class Create_Post extends Component {
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
                                    <Tabset_post />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Create_Post
