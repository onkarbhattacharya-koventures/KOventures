'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 text-center">
      <div className="bg-destructive/10 p-4 rounded-full mb-6">
        <AlertCircle className="h-12 w-12 text-destructive" />
      </div>
      <h2 className="text-3xl font-headline font-bold text-foreground mb-4">
        Something went wrong!
      </h2>
      <p className="text-muted-foreground max-w-md mb-8">
        We encountered an unexpected error. Please try again or contact our support if the problem persists.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="default" size="lg">
          Try again
        </Button>
        <Button onClick={() => window.location.href = '/'} variant="outline" size="lg">
          Go Home
        </Button>
      </div>
    </div>
  );
}
