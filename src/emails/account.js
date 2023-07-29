const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pabloemi1998@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pabloemi1998@gmail.com',
        subject: 'See you later',
        text: `we wait for come back, ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}