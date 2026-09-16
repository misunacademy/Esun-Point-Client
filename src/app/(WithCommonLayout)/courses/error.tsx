'use client';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function CoursesError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error('Courses error:', error); }, [error]);

  return (
    <div className="min-h-screen bg-[#060a12] flex items-center justify-center px-4">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-3xl font-bold text-white/90">Failed to Load Course</h1>
        <p className="text-white/50">We could not load the course information. Please try again.</p>
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
