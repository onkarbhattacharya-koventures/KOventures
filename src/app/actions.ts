'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      message: 'Please check the fields below for errors.',
      fields: data as Record<string, string>,
      issues: validatedFields.error.issues.map((issue) => issue.message),
    };
  }

  // Create a transporter using environment variables
  // If these are not set, we will log the email to the console for development.
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const nodemailer = await import('nodemailer');
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"KOVentures Site" <${process.env.SMTP_USER}>`,
        to: "contact@koventures.co.uk",
        replyTo: data.email as string,
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
<p>${(data.message as string).replace(/\n/g, '<br>')}</p>
        `,
      });

      console.log('Email sent successfully to contact@koventures.co.uk');
    } catch (error) {
      console.error('Failed to send email:', error);
      return {
        message: 'Could not send message due to server error. Please try again later.',
        fields: data as Record<string, string>,
        issues: ['Server Configuration Error'],
      };
    }
  } else {
    // Development Fallback
    console.log('----------------------------------------');
    console.log(' DEVELOPMENT MODE: Email not sent');
    console.log(' To enable email sending, configure SMTP_HOST, SMTP_USER, SMTP_PASS in .env');
    console.log('----------------------------------------');
    console.log(' To: contact@koventures.co.uk');
    console.log(` Subject: New Contact Form Submission: ${data.subject}`);
    console.log(data);
    console.log('----------------------------------------');
  }

  return {
    message: 'Thank you for your message! We will get back to you shortly.',
    fields: {},
    issues: [],
  };
}
