'use client';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function CheckoutError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error('Checkout error:', error); }, [error]);

  return (
    <div className="min-h-screen bg-[#060f0a] flex items-center justify-center px-4">
      <div className="max-w-md text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <AlertCircle className="w-8 h-8 text-red-400" />
        </div>
        <h1 className="text-2xl font-bold text-white/90">Checkout Error</h1>
        <p className="text-white/50">Something went wrong during checkout. Please try again.</p>
        {process.env.NODE_ENV === 'development' && (
          <p className="text-sm font-mono text-red-400 bg-red-500/10 rounded-lg p-3">{error.message}</p>
        )}
        <div className="flex gap-3 justify-center">
          <Button onClick={reset} size="lg">Try Again</Button>
          <Button variant="outline" size="lg" onClick={() => window.location.href = '/'}>Go Home</Button>
        </div>
      </div>
    </div>
  );
}
