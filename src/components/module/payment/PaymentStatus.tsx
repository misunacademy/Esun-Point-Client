'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, AlertCircle, Loader2, Home, RefreshCw, LifeBuoy } from 'lucide-react';
import Congratulations from '@/components/module/payment/congratulations';
import { useVerifyMyPaymentQuery } from '@/redux/api/paymentApi';

type StatusKey = 'success' | 'pending' | 'review' | 'failed';

function PaymentStatusContent() {
    const searchParams = useSearchParams();
    const claimed = searchParams?.get('status') || 'failed';
    const transactionId = searchParams?.get('t');
    const claimedSuccess = claimed === 'success';

    // Success must be proven, not claimed: ?status=success is trivially
    // spoofable, so a claimed success with no transaction (or a failed server
    // verification) renders as failed. Genuine gateway callbacks carry ?t=.
    const { data: verifyRaw, isLoading: verifying } = useVerifyMyPaymentQuery(
        transactionId ?? '',
        { skip: !claimedSuccess || !transactionId },
    );
    const verified = (verifyRaw as { data?: { verified?: boolean } } | undefined)?.data?.verified === true;
    const stillVerifying = claimedSuccess && !!transactionId && !verifyRaw && verifying;
    const missingReference = claimedSuccess && !transactionId;
    const status: StatusKey = claimedSuccess
        ? (verified ? 'success' : (stillVerifying ? 'pending' : 'failed'))
        : (claimed as StatusKey);

    if (stillVerifying) {
        return (
            <div className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center">
                <Card className="max-w-md mx-auto">
                    <CardHeader>
                        <h1 className="flex items-center gap-2 text-lg font-semibold leading-none tracking-tight">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                            Verifying payment…
                        </h1>
                    </CardHeader>
                    <CardContent>
                        <Alert>
                            <AlertDescription>Confirming your payment with the server. Please wait.</AlertDescription>
                        </Alert>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const getStatusContent = () => {
        switch (status) {
            case 'success':
                return {
                    icon: <CheckCircle2 className="h-8 w-8 text-green-500" />,
                    title: 'Payment Successful',
                    description: 'Your payment has been processed successfully. Check your email. Thank you!',
                };
            case 'pending':
                return {
                    icon: <Clock className="h-8 w-8 text-yellow-500" />,
                    title: 'Payment Pending',
                    description: 'Your payment is still being processed. Please check back later.',
                };
            case 'review':
                return {
                    icon: <Clock className="h-8 w-8 text-blue-500" />,
                    title: 'Payment Under Review',
                    description: 'Your payment is under review for verification. We will notify you once confirmed.',
                };
            case 'failed':
            default:
                return {
                    icon: <AlertCircle className="h-8 w-8 text-red-500" />,
                    title: 'Payment Not Confirmed',
                    description: missingReference
                        ? 'We could not find a transaction reference for this page. If you just paid, wait a few minutes and refresh — otherwise contact support with your transaction ID.'
                        : 'There was an issue processing your payment. Please try again or contact support.',
                };
        }
    };

    const { icon, title, description } = getStatusContent();

    return (
        <div className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center">
            <Card className="max-w-md mx-auto">
                <CardHeader>
                    <h1 className="flex items-center gap-2 text-lg font-semibold leading-none tracking-tight">
                        {icon}
                        {title}
                    </h1>
                </CardHeader>
                <CardContent>
                    <div role="status" aria-live="polite">
                        <Alert>
                            <AlertTitle>Payment Status: <span className={`capitalize ${status === 'success' ? 'text-green-500 font-bold' : status === 'review' ? 'text-blue-400' : status === 'pending' ? 'text-yellow-400' : 'text-red-400'}`}>{status}</span></AlertTitle>
                            <AlertDescription>{description}</AlertDescription>
                        </Alert>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <Button asChild>
                            <Link href="/">
                                <Home className="mr-2 h-4 w-4" />
                                Back to Home
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/course-details">
                                <RefreshCw className="mr-2 h-4 w-4" />
                                View Course
                            </Link>
                        </Button>
                        <Button variant="secondary" asChild>
                            <a href="mailto:misunacademybd@gmail.com?subject=Payment%20enquiry">
                                <LifeBuoy className="mr-2 h-4 w-4" />
                                Contact Support
                            </a>
                        </Button>
                    </div>
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
            <div className="max-w-md w-full bg-white/[0.03] rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center">
                        <Loader2 className="w-5 h-5 text-primary animate-spin" />
                    </div>
                    <div className="h-6 bg-white/[0.05] rounded w-48" />
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 space-y-2">
                    <div className="h-4 bg-white/[0.05] rounded w-32" />
                    <div className="h-5 bg-white/[0.05] rounded w-64" />
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
