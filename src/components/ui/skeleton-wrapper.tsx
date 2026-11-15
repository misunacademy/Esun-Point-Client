import { cn } from "@/lib/utils"
import { Skeleton as ShadcnSkeleton } from "@/components/ui/skeleton"

interface SkeletonWrapperProps {
  loading?: boolean
  className?: string
  children: React.ReactNode
}

export function SkeletonWrapper({
  loading,
  className,
  children,
}: SkeletonWrapperProps) {
  // When loading, wrap children in skeleton for layout preservation
  if (loading) {
    return (
      <ShadcnSkeleton className={cn("min-h-[200px]", className)}>
        {children}
      </ShadcnSkeleton>
    )
  }
  
  // Not loading, render children directly
  return <>{children}</>
}
