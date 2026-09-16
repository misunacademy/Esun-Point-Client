/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useInitiateEnrollmentMutation, useEnrollStudentManualMutation } from '@/redux/api/enrollmentApi';
import { useCurrentBatch } from './useCurrentBatch';

const enrollmentSchema = z.object({
  batchId: z.string().min(1, "Please select a batch"),
  paymentMethod: z.enum(["SSLCommerz", "phonePay"]),
});

export type EnrollmentForm = z.infer<typeof enrollmentSchema>;

interface PaymentError {
  data?: { message?: string };
  message?: string;
}

export function useEnrollment(courseSlug?: string) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [agreed, setAgreed] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [enrollmentData, setEnrollmentData] = useState<EnrollmentForm | null>(null);

  const [enrollStudent] = useInitiateEnrollmentMutation();
  const [enrollStudentManual] = useEnrollStudentManualMutation();

  const form = useForm<EnrollmentForm>({
    resolver: zodResolver(enrollmentSchema),
    mode: 'onChange',
    defaultValues: { batchId: "", paymentMethod: undefined },
  });

  const { course: resolvedCourse, batch: resolvedBatch, isLoading: batchLoading } = useCurrentBatch({
    courseSlug: courseSlug ?? 'english-for-professional-communication',
    fallbackToUpcoming: true,
  });

  const isDataLoading = !!courseSlug && batchLoading;

  const isEnrollmentOpen = resolvedBatch
    ? (() => {
        const now = Date.now();
        const start = new Date((resolvedBatch as any).enrollmentStartDate).getTime();
        const end = new Date((resolvedBatch as any).enrollmentEndDate).getTime();
        return now >= start && now <= end;
      })()
    : false;

  const manualPaymentAmount = typeof (resolvedBatch as any)?.manualPaymentPrice === 'number'
    ? (resolvedBatch as any).manualPaymentPrice : 0;
  const manualPaymentCurrency = (resolvedBatch as any)?.currency || 'BDT';

  useEffect(() => {
    if (!form.getValues('batchId') && (resolvedBatch as any)?._id) {
      form.setValue('batchId', (resolvedBatch as any)._id);
    }
  }, [form, resolvedBatch]);

  const processSSLCommerzPayment = async (data: EnrollmentForm) => {
    setIsProcessing(true);
    try {
      const res = await enrollStudent({ batchId: data.batchId }).unwrap();
      if (!res?.data?.paymentUrl) {
        toast.error("Failed to get payment URL. Please try again.");
        return;
      }
      toast.success("Redirecting to SSLCommerz...", {
        description: "You'll be redirected to complete your payment securely.",
      });
      router.push(res.data.paymentUrl);
    } catch (error: unknown) {
      const paymentError = error as PaymentError;
      toast.error(paymentError?.data?.message || "Payment initiation failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleManualPaymentComplete = async (paymentData: { senderNumber: string; transactionId: string }) => {
    if (!enrollmentData) {
      toast.error("Enrollment data missing!");
      return;
    }
    setIsProcessing(true);
    try {
      const res = await enrollStudentManual({
        batchId: enrollmentData.batchId,
        paymentData,
      }).unwrap();
      if (res?.success) {
        toast.success("Payment submitted successfully!", {
          description: "We'll verify your payment within 12-24 hours.",
        });
        router.push('/');
      }
    } catch (err: unknown) {
      const errM = err as { data: { message: string } };
      toast.error(errM?.data?.message || "Something went wrong!");
    } finally {
      setIsProcessing(false);
    }
  };

  const onSubmit = (data: EnrollmentForm) => {
    setEnrollmentData(data);
    if (data.paymentMethod === "SSLCommerz") {
      processSSLCommerzPayment(data);
    } else if (data.paymentMethod === "phonePay") {
      setCurrentStep(2);
    }
  };

  const goBack = () => {
    if (currentStep === 2) setCurrentStep(1);
    else window.history.back();
  };

  return {
    currentStep, setCurrentStep, agreed, setAgreed, isProcessing,
    form, resolvedCourse, resolvedBatch, isEnrollmentOpen, isDataLoading,
    manualPaymentAmount, manualPaymentCurrency, enrollmentData,
    onSubmit, handleManualPaymentComplete, goBack, courseData: resolvedCourse,
  };
}
