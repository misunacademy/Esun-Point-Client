'use client';
import { Sparkles, ArrowLeft, Loader2 } from "lucide-react";
import { Form } from "@/components/ui/form";
import { useEnrollment } from "@/hooks/useEnrollment";
import { CourseInfoSidebar } from "./CourseInfoSidebar";
import { PriceSummary } from "./PriceSummary";
import { BatchInfoCard } from "./BatchInfoCard";
import { PaymentMethodSelector } from "./PaymentMethodSelector";
import { PaymentTutorial } from "./PaymentTutorial";
import ManualPaymentForm from "./ManualPaymentForm";
import { CornerAccent, Divider } from "@/components/shared/Decorative";
import { BatchResponse } from "@/redux/api/batchApi";

interface EnrollmentCheckoutProps {
  courseSlug?: string;
}

export default function EnrollmentCheckout({ courseSlug }: EnrollmentCheckoutProps) {
  const {
    currentStep, setCurrentStep, agreed, setAgreed, isProcessing,
    form, resolvedCourse, resolvedBatch, isEnrollmentOpen, isDataLoading,
    manualPaymentAmount, manualPaymentCurrency,
    onSubmit, handleManualPaymentComplete, goBack,
  } = useEnrollment(courseSlug);

  const batchPrice = (resolvedBatch as BatchResponse)?.price;
  const batchTitle = (resolvedBatch as BatchResponse)?.title;
  const enrollmentStartDate = (resolvedBatch as BatchResponse)?.enrollmentStartDate;

  return (
    <div className="min-h-screen bg-[#060f0a]">
      <div className="bg-[#060f0a]/90 backdrop-blur-sm border-b border-primary/15 sticky top-16 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button onClick={goBack}
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium px-3 py-1.5 rounded-lg border border-primary/20 hover:border-primary/40">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="font-semibold text-white/80">
                {currentStep === 1 ? 'Payment Method' : 'Manual Payment'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6 sm:sticky top-[8.5rem] self-start">
            <CourseInfoSidebar course={resolvedCourse} isLoading={isDataLoading} />
            <PriceSummary batch={resolvedBatch} />
          </div>

          <div className="lg:col-span-2 mt-10">
            <div className="relative overflow-hidden rounded-2xl bg-[#060f0a] border border-primary/15">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <CornerAccent />
              <div className="p-6 pb-2 border-b border-primary/10">
                <h2 className="text-2xl font-bold text-white/90">
                  {currentStep === 1 ? 'Choose Payment Method' : 'Manual Payment'}
                </h2>
                <p className="text-sm text-white/45 mt-1">
                  {currentStep === 1 ? 'Select your preferred payment method and complete enrollment' : 'Complete your payment details'}
                </p>
              </div>

              <div className="p-6">
                {currentStep === 1 ? (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {resolvedBatch ? (
                        <>
                          <BatchInfoCard batch={resolvedBatch} course={resolvedCourse} />
                          <Divider />
                        </>
                      ) : (
                        <div className="bg-yellow-500/8 border border-yellow-500/20 rounded-xl p-4 text-center">
                          <p className="text-yellow-400 font-medium">No upcoming batches available at the moment</p>
                          <p className="text-sm text-white/40 mt-1">Please check back later or contact support</p>
                        </div>
                      )}

                      <PaymentTutorial />
                      <Divider />

                      <PaymentMethodSelector form={form} />
                      <Divider />

                      <div className="space-y-4">
                        <div className="relative overflow-hidden rounded-xl bg-primary/8 border border-primary/20 p-4">
                          <div className="flex justify-between items-center font-semibold text-lg">
                            <span className="text-white/70">Total Amount:</span>
                            <span className="text-primary font-bold">৳{batchPrice?.toLocaleString('en-IN') || 0}</span>
                          </div>
                        </div>

                        {!isEnrollmentOpen && resolvedBatch && (
                          <div className="rounded-xl bg-yellow-500/8 border border-yellow-500/20 p-3 text-center">
                            <p className="text-sm text-yellow-400 font-medium">এনরোলমেন্ট উইন্ডো এখনো খোলা হয়নি</p>
                            {enrollmentStartDate && (
                              <p className="text-xs text-white/40 mt-1">
                                শুরু: {new Date(enrollmentStartDate).toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' })}
                              </p>
                            )}
                          </div>
                        )}

                        <label className="flex items-start gap-2.5 text-sm cursor-pointer">
                          <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} className="mt-1 accent-primary" />
                          <span className="text-white/50 leading-relaxed">
                            I have read and agree to the{' '}
                            <a href="/terms-and-conditions" target="_blank" className="text-primary hover:text-primary/80 underline underline-offset-2">Terms & Conditions</a>,{' '}
                            <a href="/privacy-policy" target="_blank" className="text-primary hover:text-primary/80 underline underline-offset-2">Privacy Policy</a>, and{' '}
                            <a href="/refund-policy" target="_blank" className="text-primary hover:text-primary/80 underline underline-offset-2">Return, Refund & Cancellation Policy</a>.
                          </span>
                        </label>

                        <button
                          type="submit"
                          disabled={!(form.formState.isValid && agreed && isEnrollmentOpen) || isProcessing}
                          className="relative w-full bg-primary hover:bg-blue-600 disabled:cursor-not-allowed transition-colors duration-300 text-white font-bold py-3.5 rounded-xl text-base shadow-md"
                        >
                          {isProcessing ? (
                            <span className="flex items-center justify-center gap-2">
                              <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                            </span>
                          ) : !isEnrollmentOpen && resolvedBatch ? (
                            'এনরোলমেন্ট শুরু হয়নি'
                          ) : (
                            'Complete Enrollment'
                          )}
                        </button>
                      </div>
                    </form>
                  </Form>
                ) : (
                  <ManualPaymentForm
                    onBack={() => setCurrentStep(1)}
                    onPaymentComplete={handleManualPaymentComplete}
                    manualAmount={manualPaymentAmount}
                    manualCurrency={manualPaymentCurrency}
                    batch={batchTitle?.split(' ')[1]}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
