const express = require('express');

const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');

const job = require('./utils/job');

const TicketController = require('./controllers/ticket-controller');

const {createChannel} = require('./utils/messageQueue');

const setUpAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    app.post('/api/v1/tickets', TicketController.create);

    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
        job();

        // sendBasicEmail('support@gmail.com',
        // 'aryannode@gmail.com',
        // 'This is a testing email',
        // 'Hey hope everythings fine');
    })
}

setUpAndStartServer();