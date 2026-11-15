'use client';

import { AlertTriangle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import CourseEnrollmentCard from './CourseEnrollmentCard';

export default function EnrollmentNotStartedDialog({
  open,
  onClose,
  courseData,
  batchData,
}: {
  open: boolean;
  onClose: () => void;
  courseData: { title?: string; price?: number } | undefined;
  batchData: { title?: string; enrollmentStartDate?: Date; enrollmentEndDate?: Date; price?: number } | undefined;
}) {
  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
      <DialogContent className="sm:max-w-lg font-bangla bg-surface border border-primary/20 text-white mt-5">
        <DialogHeader className="space-y-4">
          <div className="flex items-center justify-center">
            <div className="relative p-[1.5px] rounded-full overflow-hidden">
              <span className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_60%,hsl(40_90%_55%)_100%)]" />
              <div className="relative w-16 h-16 rounded-full bg-[#080f1f] flex items-center justify-center">
                <AlertTriangle className="h-7 w-7 text-yellow-400" />
              </div>
            </div>
          </div>
          <DialogTitle className="text-center text-xl font-bold text-white">Enrollment Has Not Started Yet</DialogTitle>
          <DialogDescription className="text-center text-white/50">See the enrollment schedule for all courses below.</DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-3">
          <CourseEnrollmentCard
            courseData={courseData}
            batchData={batchData}
            courseSlug="english-for-professional-communication"
          />
        </div>

        <DialogFooter className="pt-2">
          <div className="relative group w-full">
            <div className="absolute inset-0 rounded-xl blur-sm opacity-25 group-hover:opacity-45 transition-opacity duration-500"
              style={{ background: 'radial-gradient(ellipse at center, hsl(217 91% 60% / 0.55) 0%, transparent 70%)' }} />
            <button
              onClick={onClose}
              type="button"
              className="relative w-full flex items-center justify-center gap-2 py-3 rounded-xl overflow-hidden cursor-pointer
                bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700
                border border-primary/40 text-white
                transition-all duration-300
                hover:from-blue-600 hover:via-blue-500 hover:to-blue-600 hover:-translate-y-[1px]
                hover:shadow-[0_0_18px_3px_hsl(217_91%_60%/0.35)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
              <div className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <svg className="relative w-4 h-4 shrink-0 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="relative text-sm font-bold tracking-wide font-bangla text-white">
                Got it
              </span>
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
