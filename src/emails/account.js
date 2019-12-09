const sgMail = require('@sendgrid/mail');
const keys = require('../../config/keys');


sgMail.setApiKey(keys.sendGridApiKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'avnikolaou@gmail.com',
        subject: 'Welcome to task manager!',
        text: `Welcome to the app, ${name}! Let me know how you get along with the app.`
    })
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'no-reply@example.com',
        subject: 'Sorry to see you go!',
        text: `We are sorry to see you go ${name}. If there is anything we can do for you, please repl8y to this message.`
    })
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
};
