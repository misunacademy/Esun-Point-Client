import { BatchResponse } from '@/redux/api/batchApi';

interface PriceSummaryProps {
  batch: BatchResponse | null | undefined;
}

export function PriceSummary({ batch }: PriceSummaryProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#060f0a] border border-primary/15">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="p-5">
        <div className="space-y-3">
          {batch ? (
            <>
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-primary/70 mb-3">Price Summary</p>
              <div className="flex justify-between items-center text-lg font-semibold">
                <span className="text-white/70">Course Price</span>
                <span className="text-primary font-bold">
                  ৳{(batch.price?.toLocaleString('en-IN') || 0)}
                </span>
              </div>
              {batch.currency && batch.currency !== 'BDT' && (
                <p className="text-xs text-white/35">Currency: {batch.currency}</p>
              )}
            </>
          ) : (
            <div className="text-center">
              <p className="text-sm text-white/40">Select a batch to see pricing</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
