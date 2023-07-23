const TicketService = require('../services/email-service');

const create = async (req, res) => {
    try {
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            message: "Successfully created notification",
            success: true,
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(501).json({
            message: "NotSuccessfully created notification",
            success: false,
            data: {},
            err: "Not working"
        })
    }
}

module.exports = {create};