import React from 'react';
import Preview from '../Preview/Preview';

import makeHttpRequest, { API_TYPE } from '../../Api/api';
import { getUrlFromString } from '../../utils/util';
import './App.css';

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
                <input type="text" placeholder="Enter text here" className="inpt-styl" onChange={this.onChangeInput} value={text} />
                { Object.keys(preview).length ? <Preview data={preview}/> : null }
            </div>
        )
    }
}

export default App;
