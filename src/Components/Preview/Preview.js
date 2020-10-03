import React from 'react';
import makeHttpRequest, { API_TYPE } from '../../Api/api';

import './Preview.css';

class Preview extends React.Component {

    render() {

        const { data } = this.props;

        return (
            <div>
                { Object.keys(data).length ? <div className="prvw-bdy" >
                    <img src={data.images[0]} className="prvw-img" />
                    <div className="prvw-dtls">
                        <span className='ttl'>{data.title}</span>
                        <span>{data.description}</span>
                        <span className='ttl'>{data.siteName}</span>
                    </div>
                </div> : null }
            </div>
        )
    }
}

export default Preview;
