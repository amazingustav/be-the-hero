const express = require('express');
const app = express();

app.get('/', (request, response) => {
    return response.json({
        event: 'Hello World',
        user: 'Gustavo Amorim'
    })
});

app.listen(3333);