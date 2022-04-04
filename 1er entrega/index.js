const express = require('express');
const apiRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT || 8080;

    app.use('/', apiRoutes);

    
    const connectedServer = app.listen(PORT, ()=> {
    console.log(`Server is up and running on port ${PORT}`);
    });

    connectedServer.on('error', e => {
    console.log(e.message);
    })