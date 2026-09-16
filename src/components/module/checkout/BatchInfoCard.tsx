import { BatchResponse } from '@/redux/api/batchApi';
import { CourseResponse } from '@/redux/api/courseApi';

interface BatchInfoCardProps {
  batch: BatchResponse;
  course: CourseResponse | undefined;
}


export function BatchInfoCard({ batch, course }: BatchInfoCardProps) {

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold flex items-center gap-2.5 text-white/80">
        <div className="w-6 h-6 bg-primary/15 border border-primary/30 text-primary rounded-full flex items-center justify-center text-xs font-bold">
          1
        </div>
        Enrolling in Current Batch
      </h3>
      <div className="bg-primary/6 border border-primary/20 rounded-xl p-4 space-y-3">
        <div>
          <p className="text-xs text-white/40 mb-0.5">Batch</p>
          <p className="font-semibold text-white/85">{batch.title}</p>
        </div>
        {course && (
          <div>
            <p className="text-xs text-white/40 mb-0.5">Course</p>
            <p className="font-medium text-white/70">{course.title}</p>
          </div>
        )}
        <div className="grid grid-cols-2 gap-3 pt-2 border-t border-primary/15">
          {batch.enrollmentStartDate && (
            <div>
              <p className="text-xs text-white/40">Enrollment Starts</p>
              <p className="text-sm font-medium text-white/70">
                {new Date(batch.enrollmentStartDate).toLocaleDateString()}
              </p>
            </div>
          )}
          {batch.enrollmentEndDate && (
            <div>
              <p className="text-xs text-white/40">Enrollment Ends</p>
              <p className="text-sm font-medium text-white/70">
                {new Date(batch.enrollmentEndDate).toLocaleDateString()}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
