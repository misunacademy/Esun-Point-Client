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
      <Skeleton
        name="checkout-page"
        loading
        fixture={
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white/5 rounded-2xl p-6 h-48" />
                <div className="bg-white/5 rounded-2xl p-6 h-64" />
              </div>
              <div className="lg:col-span-1">
                <div className="bg-white/5 rounded-2xl p-6 h-96" />
              </div>
            </div>
          </div>
        }
      >
        <div />
      </Skeleton>
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
