'use client';

import { useRef, useActionState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { submitContactForm, ContactFormState } from '@/app/actions';

const initialState: ContactFormState = {
  message: '',
  fields: {},
  issues: [],
};

export default function Contact() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (state.message) {
      if (state.issues && state.issues.length > 0) {
        toast({
          title: "Validation Error",
          description: state.message,
          variant: 'destructive',
        });
      } else if (state.message.includes('Thank you')) {
        toast({
          title: "Message Sent",
          description: state.message,
        });
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  const variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      },
    },
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <motion.div
        ref={sectionRef}
        className="container mx-auto px-4"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={variants}
      >
        <motion.div className="max-w-2xl mx-auto text-center" variants={variants}>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Have a project in mind or a question for us? We'd love to hear from you.
          </p>
        </motion.div>
        <motion.div className="max-w-2xl mx-auto mt-12" variants={variants}>
          <form ref={formRef} action={formAction} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="John Doe" 
                  required 
                  defaultValue={state.fields?.name}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="john.doe@example.com" 
                  required 
                  defaultValue={state.fields?.email}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input 
                id="subject" 
                name="subject" 
                placeholder="e.g., Residential Solar Inquiry" 
                required 
                defaultValue={state.fields?.subject}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Your Message</Label>
              <Textarea 
                id="message" 
                name="message" 
                placeholder="Tell us about your project or question..." 
                rows={5} 
                required 
                defaultValue={state.fields?.message}
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isPending} size="lg">
              {isPending ? 'Sending...' : 'Send Message'}
            </Button>
          </form>

          <AnimatePresence>
            {state.message && (
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <Alert variant={state.issues && state.issues.length > 0 ? "destructive" : "default"}>
                  {state.issues && state.issues.length > 0 ? (
                    <AlertCircle className="h-4 w-4" />
                  ) : (
                    <CheckCircle className="h-4 w-4" />
                  )}
                  <AlertTitle>
                    {state.issues && state.issues.length > 0 ? "Error" : "Success!"}
                  </AlertTitle>
                  <AlertDescription>
                    {state.message}
                  </AlertDescription>
                </Alert>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
