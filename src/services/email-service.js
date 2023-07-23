const sender = require('./../config/email-config');

const TicketRepository = require('../repository/ticket-repository');

const ticketRepository = new TicketRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
    } catch (error) {
        console.log("Something went wrong in email service");
        throw error;
    }
}

const fetchPendingEmails = async (timestamp) => {
    try {
        const response = await ticketRepository.get({status: "PENDING"});
        return response;
    } catch (error) {
        console.log(error);
    }
}

const createNotification = async (data) => {
    try {
        const resp = await ticketRepository.create(data);
        return resp;
    } catch (error) {
        console.log(error);
    }
}

const updateTicket = async (id, data) => {
    try {
        const resp = await ticketRepository.update(id, data);
        return resp;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}