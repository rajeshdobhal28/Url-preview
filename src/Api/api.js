import axios from 'axios';

export const API = {
    PREVIEW_URL: { url: 'http://localhost:3000/preview/url', method: 'GET' }
}

export const API_TYPE = {}

for(var key in API) {
    API_TYPE[key] = key;
}

const makeHttpRequest = (key, options) => {
    return new Promise((resolve, reject) => {
        const apiOptions = {
            method: API[key].method,
            url: API[key].url
        };

        if(options.queryParams) {
            apiOptions.params = options.queryParams;
        }
    
        axios(apiOptions).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            reject(err);
        });
    })
    
}




export default makeHttpRequest;