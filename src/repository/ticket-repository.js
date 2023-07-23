const {NoficiationTicket} = require('../models/index');
const { Op } = require("sequelize");
class TicketRepository {
    async getAll() {
        try {
            const tickets = await NoficiationTicket.findAll();
            return tickets;
        } catch (error) {
            console.log("Something went wrong in repo layer");
            throw error;
        }
    }

    async create(data) {
        try {
            const ticket = await NoficiationTicket.create(data);
            return ticket;
        } catch (error) {
            console.log("Something went wrong in repo layer");
            throw error;
        }
    }

    async get(filter) {
        try {
            const tickets = await NoficiationTicket.findAll({
                where: {
                    status: filter.status,
                    notificationTime: {
                        [Op.lte]: new Date()
                    }
                }
            });
            return tickets;
        } catch (error) {
            console.log("Something went wrong in repo layer");
            throw error;
        }
    }

    async update(ticketId, data) {
        try {
            const ticket = await NoficiationTicket.findByPk(ticketId);
            if(data.status) {
                ticket.status = data.status;
            }
            ticket.save();
            return ticket;
        } catch (error) {
            console.log("Something went wrong in repo layer");
            throw error;
        }
    }
}

module.exports = TicketRepository;