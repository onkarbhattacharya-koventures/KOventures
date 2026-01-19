'use server';

import { z } from 'zod';
import { sendContactEmail } from '@/services/mail-service';

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
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    subject: formData.get('subject') as string,
    message: formData.get('message') as string,
  };

  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      message: 'Please check the fields below for errors.',
      fields: data,
      issues: validatedFields.error.issues.map((issue) => issue.message),
    };
  }

  try {
    await sendContactEmail(validatedFields.data);
  } catch (error) {
    console.error('Failed to send email:', error);
    return {
      message: 'Could not send message due to server error. Please try again later.',
      fields: data,
      issues: ['Server Configuration Error'],
    };
  }

  return {
    message: 'Thank you for your message! We will get back to you shortly.',
    fields: {},
    issues: [],
  };
}
