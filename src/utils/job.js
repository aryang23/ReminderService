const cron = require('node-cron');
const emailService = require('../services/email-service');
const sender = require('./../config/email-config');

const setupJobs = () => {
    cron.schedule('*/5 * * * *', async () => {
        console.log("Running every 5 minutes");
        const response = await emailService.fetchPendingEmails();
        response.forEach((email)=>{
            sender.sendMail(
                {
                    from: "Notification@airline.com",
                    to: email.recepientEmail,
                    subject: email.subject,
                    text: email.content
                }, async (err, data) => {
                    if(err) {
                        console.log(err);
                    } else {
                        await emailService.updateTicket(email.id, {status: "SUCCESS"});
                    }
                }
            );
        })

    })
}
module.exports = setupJobs;