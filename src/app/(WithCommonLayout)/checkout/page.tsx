'use client';
import { useEffect, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import ProtectedRoute from '@/components/shared/ProtectedRoute';
import EnrollmentCheckout from '@/components/module/checkout/EnrollmentCheckout';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import { v4 as uuid } from "uuid";
import { track } from '@/lib/metaPixel';
import { isWindowOpen } from '@/lib/date-utils';
import { useCurrentBatch } from '@/hooks/useCurrentBatch';
import Spinner from './Spinner';
import EnrollmentNotStartedDialog from './EnrollmentNotStartedDialog';
import { Skeleton } from 'boneyard-js/react';
import { Loader2 } from 'lucide-react';

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseSlug = searchParams.get('course') ?? 'english-for-professional-communication';

  const { user, isLoading: authLoading } = useAuth();
  const hasTracked = useRef(false);

  const { course, batch: currentBatch, isLoading: batchLoading } = useCurrentBatch({
    courseSlug,
    fallbackToUpcoming: true,
  });

  const enrollmentStart = currentBatch?.enrollmentStartDate;
  const enrollmentEnd = currentBatch?.enrollmentEndDate;
  const enrollmentRunning = isWindowOpen(enrollmentStart, enrollmentEnd);

  const courseFee = currentBatch?.price ?? course?.price ?? 3000;
  const courseTitle = course?.title ?? 'MISUN Academy Course Enrollment';

  const openModal = !batchLoading && !enrollmentRunning && !!user;

  useEffect(() => {
    if (!user?.email) return;
    if (hasTracked.current) return;
    hasTracked.current = true;
    const eventId = uuid();
    track('Purchase', {
      value: courseFee,
      currency: 'BDT',
      content_name: courseTitle,
      content_type: 'course',
    }, { eventID: eventId });
    fetch("/api/meta-conversion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName: "Purchase",
        email: user.email,
        value: courseFee,
        currency: "BDT",
        eventId,
      }),
    });
  }, [user?.email, courseFee, courseTitle]);

  const handleModalClose = () => {
    router.back();
  };

  if (authLoading || batchLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 text-primary animate-spin" />
          <p className="text-sm text-white/40 font-medium">Loading checkout...</p>
        </div>
      </div>
    );
  }
  if (!user) return null;

  if (!enrollmentRunning) {
    return (
      <EnrollmentNotStartedDialog
        open={openModal}
        onClose={handleModalClose}
        courseData={course}
        batchData={currentBatch ?? undefined}
      />
    );
  }

  return (
    <div>
      <BreadcrumbJsonLd />
      <Skeleton name="checkout-page" loading={false}>
        <EnrollmentCheckout courseSlug={courseSlug} />
      </Skeleton>
    </div>
  );
}

export default function Page() {
  return (
    <ProtectedRoute>
      <Suspense fallback={<Spinner />}>
        <CheckoutContent />
      </Suspense>
    </ProtectedRoute>
  );
}
