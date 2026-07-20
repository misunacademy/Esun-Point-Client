import Image from "next/image";
import { Clock, CheckCircle } from "lucide-react";
import { Divider } from "@/components/shared/Decorative";

import { CourseResponse } from '@/redux/api/courseApi';

interface CourseInfoSidebarProps {
  course: CourseResponse | undefined;
  isLoading: boolean;
}

export function CourseInfoSidebar({ course, isLoading }: CourseInfoSidebarProps) {
  if (isLoading) {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-[#060f0a] border border-primary/15">
        <div className="p-5">
          <div className="aspect-video rounded-lg mb-4 bg-primary/8 animate-pulse" />
        </div>
      </div>
    );
  }

  if (!course) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#060f0a] border border-primary/15">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="p-5">
        <div className="aspect-video rounded-lg mb-4 relative overflow-hidden">
          <Image
            src={course.thumbnailImage ?? ''}
            alt={course.title || 'Course'}
            width={400}
            height={280}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-bold text-lg mb-2 text-white/90">{course.title}</h3>
        <div className="flex items-center gap-4 text-sm text-white/50">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-primary/70" />
            <span>{course.durationEstimate != null ? String(course.durationEstimate) : '0'} Months</span>
          </div>
        </div>
      </div>

      {course.highlights && (
        <div className="px-5 pb-5">
          <div className="space-y-4">
            <Divider />
            <div>
              <h4 className="font-semibold mb-3 text-white/70 text-sm">What you&apos;ll learn:</h4>
              <div className="grid gap-2 grid-cols-1 sm:grid-cols-2">
                {course.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="text-center px-2 py-1.5 bg-primary/8 border border-primary/15 rounded-md">
                    <span className="text-xs text-white/60">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <Divider />

            {course.features && (
              <div>
                <h4 className="font-semibold mb-2 text-white/70 text-sm">Course includes:</h4>
                <ul className="space-y-1.5 text-sm">
                  {course.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-white/60">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
