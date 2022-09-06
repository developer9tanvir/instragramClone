import nodemailer from 'nodemailer';


// create Email
export const sendEmail = async (to, subject, text) => {
    try {

        let transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
              user: "tanverrahman548@gmail.com",
              pass: "fmycjbdgavghirzb"
            }
          });

         await transport.sendMail({
            from : 'tanverrahman548@gmail.com',
            to : to,
            subject : subject,
            text : text

          });
          
        

    } catch (error) {
        console.log(error);
    }

}