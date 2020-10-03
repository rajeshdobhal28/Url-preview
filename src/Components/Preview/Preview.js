import React from 'react';
import makeHttpRequest, { API_TYPE } from '../../Api/api';

const prvwBdy = {
    width: '20rem'
}

const prvwDtls = {
    display: 'flex',
    'flex-direction': 'column'
}

const ttl = {
    'font-weight': '600',
    'font-size': '1.2rem',
}

class Preview extends React.Component {

    render() {

        const { data } = this.props;

        return (
            <div>
                { Object.keys(data).length ? <div style={prvwBdy}>
                    <img src={data.images[0]} className="prvw-img" style={{width: '20rem', height: "10rem"}} />
                    <div style={prvwDtls}>
                        <span style={ttl}>{data.title}</span>
                        <span>{data.description}</span>
                        <span style={ttl}>{data.siteName}</span>
                    </div>
                </div> : null }
            </div>
        )
    }
}

export default Preview;
