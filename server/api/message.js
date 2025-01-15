import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event); // Parse the incoming request body
    

    // Validate required fields
    const { name, email_address, message } = body;

    if (!name || !email_address || !message) {
      throw new Error("All fields are required.");
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'kin.webb.1024@gmail.com',
        pass: 'oqlg vmxv othm swkk', // Use your Gmail App Password here
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${email_address}>`,
      to: 'kin.webb.1024@gmail.com', // Replace with the recipient email
      replyTo: `${email_address}`,
      subject: `New Message from ${name} <${email_address}>`,
      text: message,
    };

    const myReply = {
      from: `"KinWebb" <${email_address}>`,
      to: `${email_address}`,
      replyTo: 'kin.webb.1024@gmail.com',
      subject: 'Greetings from KinWebb!',
      text: 'Thank you for reaching out! Feel free to express your inquiries below and I will reply in a minute. 🧐'
    }

    // Send the email
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(myReply);

    return { success: true, message: "Message sent successfully." };
  } catch (error) {
    return sendError(event, new Error(error.message));
  }
});

