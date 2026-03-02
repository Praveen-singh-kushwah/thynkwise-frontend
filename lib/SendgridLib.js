"use server";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendEmail(body) {
  try {
    const res = await sendgrid.send({
      to: `${body.to_email}`, // Your email where you'll receive emails
      from: {
        email: `noreply@thynkwise.co.in`,
        // email: `amar@ksofttechnologies.com`,
        name: `thynkWISE`,
      },
      subject: `Important message from - ${body.company_name}`,
      html: `<!DOCTYPE html >
      <html lang="en">
      <head>
        <meta charset="utf-8">      
        <title>Email from thynkWISE</title>
        <meta name="description" content="Email from thynkWISE">       
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />      
      </head>      
      <body>
        <div style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${body.name}. </h3>
              <div style="font-size: 16px;">
              <p>Email: ${body.email}</p>
              <p>Phone: ${body.phone}</p> 
              <p>Position: ${body.position}</p>  
              <p>Message: ${body.message}</p>
              <br>
              </div>
              </div>
      </body>
      </html>`,
    });
    // console.log(res);
    return true;
  } catch (error) {
    console.error("Something went wrong:", error);
    return false;
  }
}

export default sendEmail;
