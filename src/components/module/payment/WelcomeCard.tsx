'use client';

import { CheckCircle2 } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

interface WelcomeCardProps {
  userName: string;
}

export function WelcomeCard({ userName }: WelcomeCardProps) {
  return (
    <Card className="mb-8 border-green-100 bg-gradient-to-r from-green-50 to-emerald-50">
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Congratulations, {userName.split(' ')[0]}!
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          You have successfully enrolled in the <strong>English For Professional Communication</strong> course.
          Download your welcome poster below and share your new journey!
        </p>
        <div className="mt-6 bg-white/60 border border-green-200 rounded-lg p-4 inline-block">
          <p className="text-green-800 font-medium">
            📩 Please check your email—there are a few important things for you to do next.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
