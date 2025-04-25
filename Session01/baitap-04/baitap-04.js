const sendMail=(name, companyName) => {
    const mailuser=
        `Dear ${name},
    Thank you purchasing our product. We hope you enjoy it.
    Best regards,
    ${companyName}`
    return mailuser;
};

console.log(sendMail("[Name]", "[Your Company Name]"));





