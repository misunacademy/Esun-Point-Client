'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, Clock, AlertCircle, Loader2 } from 'lucide-react';
import Congratulations from '@/components/module/payment/congratulations';

function PaymentStatusContent() {
    const searchParams = useSearchParams();
    const status = searchParams?.get('status') || 'failed';

    const getStatusContent = () => {
        switch (status) {
            case 'success':
                return {
                    icon: <CheckCircle2 className="h-8 w-8 text-green-500" />,
                    title: 'Payment Successful',
                    description: 'Your payment has been processed successfully. Check your email. Thank you!',
                    variant: 'default',
                };
            case 'pending':
                return {
                    icon: <Clock className="h-8 w-8 text-yellow-500" />,
                    title: 'Payment Pending',
                    description: 'Your payment is still being processed. Please check back later.',
                    variant: 'destructive',
                };
            case 'review':
                return {
                    icon: <Clock className="h-8 w-8 text-blue-500" />,
                    title: 'Payment Under Review',
                    description: 'Your payment is under review for verification. We will notify you once confirmed.',
                    variant: 'default',
                };
            case 'failed':
            default:
                return {
                    icon: <AlertCircle className="h-8 w-8 text-red-500" />,
                    title: 'Payment Failed',
                    description: 'There was an issue processing your payment. Please try again.',
                    variant: 'destructive',
                };
        }
    };

    const { icon, title, description } = getStatusContent();

    return (
        <div className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center  ">
            <Card className={`max-w-md mx-auto`}>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        {icon}
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Alert>
                        <AlertTitle>Payment Status: <span className={`capitalize ${status === 'success' ? 'text-green-600 font-bold' : status === 'review' ? 'text-blue-500' : status === 'pending' ? 'text-yellow-500' : 'text-red-500'}`}>{status}</span></AlertTitle>
                        <AlertDescription>{description}</AlertDescription>
                    </Alert>
                </CardContent>
            </Card>
            {
                status === 'success' && <Congratulations />
            }
        </div>
    );
}

function PaymentPageFallback() {
    return (
        <div className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-md w-full bg-white/5 rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <Loader2 className="w-5 h-5 text-primary animate-spin" />
                    </div>
                    <div className="h-6 bg-white/10 rounded w-48" />
                </div>
                <div className="bg-white/5 rounded-xl p-4 space-y-2">
                    <div className="h-4 bg-white/10 rounded w-32" />
                    <div className="h-5 bg-white/10 rounded w-64" />
                </div>
            </div>
        </div>
    );
}

export default function PaymentStatus() {
    return (
        <Suspense fallback={<PaymentPageFallback />}>
            <PaymentStatusContent />
        </Suspense>
    );
}
