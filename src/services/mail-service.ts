import nodemailer from 'nodemailer';

export type EmailData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendContactEmail(data: EmailData) {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"KOVentures Site" <${process.env.SMTP_USER}>`,
      to: "contact@koventures.co.uk",
      replyTo: data.email,
      subject: `New Contact Form Submission: ${data.subject}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
      `,
      html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Subject:</strong> ${data.subject}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });
  } else {
    // Development Fallback
    console.log('----------------------------------------');
    console.log(' DEVELOPMENT MODE: Email not sent');
    console.log(' To: contact@koventures.co.uk');
    console.log(data);
    console.log('----------------------------------------');
  }
}
