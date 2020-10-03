import React from 'react';
import Preview from '../Preview/Preview';

import makeHttpRequest, { API_TYPE } from '../../Api/api';
import { getUrlFromString } from '../../utils/util';

const inptStyl = {
    'margin-bottom': '1rem',
    border: '1px solid grey',
    'border-radius': '1rem'
}

class App extends React.Component {

     previewDebounceTime = null
    
    state = {
        text: '',
        preview: {}
    }

    fetchPreviewDetails = (url) => {
        makeHttpRequest(API_TYPE.PREVIEW_URL, {queryParams: {url} }).then((preview) => {
            this.setState({preview})
        })
    }

    onChangeInput = (evt) => {
        this.setState({text: evt.target.value});
        const urls = getUrlFromString(evt.target.value);
        if(urls && urls.length) {
            clearTimeout(this.previewDebounceTime);
            this.previewDebounceTime = setTimeout(() => {
                this.fetchPreviewDetails(urls[urls.length-1]);
            }, 300);
        }
    }

    render() {
        const { text, preview } = this.state;
        return (
            <div>
                <input type="text" placeholder="Enter text here" onChange={this.onChangeInput} value={text} style={inptStyl} />
                { Object.keys(preview).length ? <Preview data={preview}/> : null }
            </div>
        )
    }
}

export default App;
