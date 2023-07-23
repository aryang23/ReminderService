const express = require('express');

const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
const { sendBasicEmail } = require('./services/email-service');


const setUpAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);

        sendBasicEmail('support@gmail.com',
        'aryannode@gmail.com',
        'This is a testing email',
        'Hey hope everythings fine');
    })
}

setUpAndStartServer();