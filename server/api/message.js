import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const smtphost = config.smtpHost;
  const smtpport = config.smtpPort;
  const smtpuser = config.smtpUser;
  const smtppass = config.smtpPass;

  try {
    const body = await readBody(event); // Parse the incoming request body

    // Validate required fields
    const { name, email_address, message } = body;

    if (!name || !email_address || !message) {
      throw new Error("All fields are required.");
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      host: smtphost,
      port: Number(smtpport),
      secure: false,
      auth: {
        user: smtpuser,
        pass: smtppass,
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${email_address}>`,
      to: smtpuser, // Replace with the recipient email
      replyTo: `${email_address}`,
      subject: `New Message from ${name} <${email_address}>`,
      text: message,
    };

    const myReply = {
      from: `"KinWebb" <${smtpuser}>`,
      to: `${email_address}`,
      replyTo: smtpuser,
      subject: "Greetings from KinWebb!",
      html: `
            <div style="font-family: Arial, sans-serif; background: #f7f7f7; padding: 20px;">
              <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px;">
                <h1 style="color: #333;">Thank you for reaching out! 👋</h1>
                <p style="font-size: 16px; color: #555; line-height: 1.5;">
                  Feel free to express your inquiries below, and I’ll get back to you in a minute. 
                </p>
                <p style="margin-top: 25px; color: #222;">Best regards,</p>
                <p style="font-weight: bold; color: #000;">KinWebb 😎</p>
              </div>
            </div>
          `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(myReply);

    return {
      success: true,
      message: "Message sent successfully.",
      data: { email_address },
    };
  } catch (error) {
    console.error("Email sending failed:", error);
    return {
      success: false,
      message:
        error.message || "Something went wrong while sending your message.",
    };
  }
});
