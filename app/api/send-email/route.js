import nodemailer from 'nodemailer';

export async function POST(req) {
  const { firstname, lastname, email, phone, service, message } = await req.json();

  // Set up the transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: process.env.EMAIL_SENDER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Setup email data
  const mailOptions = {
    from: process.env.EMAIL_SENDER,
    to: process.env.EMAIL_RECEIVER,
    subject: `New Contact Form Submission: ${service}`,
    text: `
      Name: ${firstname} ${lastname}
      Email: ${email}
      Phone: ${phone}
      Service: ${service}
      Message: ${message}
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
