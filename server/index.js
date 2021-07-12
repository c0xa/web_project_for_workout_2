const express = require('express');

const app = express();
app.get('*', express.static('./dist'));

const port = process.env.PORT || 8003;

app.listen(port, () => {
    console.log(`App start on port ${port}`);
});