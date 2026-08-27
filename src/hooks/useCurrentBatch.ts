import { useGetCourseBySlugQuery, type CourseResponse } from '@/redux/api/courseApi';
import {
  useGetCurrentEnrollmentBatchQuery,
  useGetUpcomingBatchesQuery,
  type BatchResponse,
} from '@/redux/api/batchApi';

interface UseCurrentBatchOptions {
  courseSlug?: string;
  fallbackToUpcoming?: boolean;
}

interface UseCurrentBatchResult {
  course: CourseResponse | undefined;
  courseId: string | undefined;
  batch: BatchResponse | null | undefined;
  serverTimestamp?: number;
  isLoading: boolean;
  isError: boolean;
}

export function useCurrentBatch(options: UseCurrentBatchOptions = {}): UseCurrentBatchResult {
  const { courseSlug = 'english-for-professional-communication', fallbackToUpcoming = false } = options;

  const { data: courseData, isLoading: courseLoading, isError: courseError } = useGetCourseBySlugQuery(courseSlug);
  const courseId = courseData?.data?._id;

  const {
    data: currentRes,
    isLoading: currentLoading,
    isError: currentError,
  } = useGetCurrentEnrollmentBatchQuery(
    { courseId },
    { skip: !courseId }
  );

  const {
    data: upcomingRes,
    isLoading: upcomingLoading,
    isError: upcomingError,
  } = useGetUpcomingBatchesQuery(
    { courseId },
    { skip: !courseId || !fallbackToUpcoming || !!currentRes?.data }
  );

  const batch = fallbackToUpcoming
    ? (currentRes?.data ?? (upcomingRes?.data as BatchResponse[] | undefined)?.[0])
    : (currentRes?.data ?? null);

  return {
    course: courseData?.data,
    courseId,
    batch,
    serverTimestamp: currentRes?.serverTimestamp,
    isLoading: courseLoading || currentLoading || (fallbackToUpcoming && upcomingLoading),
    isError: courseError || currentError || (fallbackToUpcoming && upcomingError),
  };
}
