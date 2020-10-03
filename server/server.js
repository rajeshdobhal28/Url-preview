const express = require('express');
const app = express();
const port = 3000;

const LinkPreviewJs = require('link-preview-js');

app.use('/', express.static('./dist', {index: "index.html"}));

app.get('/preview/url', (req, res) => {
    try {
        LinkPreviewJs.getLinkPreview(req.query.url)
        .then((data) => res.send(data))
        .catch((err) => {res.send({})});
    } catch(err) {
        return res.send({});
    }
});

app.listen(port, () => console.log(`App running on port ${port}!`));