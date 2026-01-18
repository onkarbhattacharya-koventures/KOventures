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

  // In a real application, you would send an email, save to a database, etc.
  console.log('Contact form submitted successfully:');
  console.log(validatedFields.data);

  return {
    message: 'Thank you for your message! We will get back to you shortly.',
    fields: {},
    issues: [],
  };
}
