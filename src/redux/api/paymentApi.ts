import { baseApi } from "./baseApi";

export interface PaymentVerification {
  verified: boolean;
  paymentStatus: string;
  courseSlug: string;
  transactionId: string;
  amount: number;
  currency: string;
}

const paymentApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    verifyMyPayment: build.query<{ data: PaymentVerification }, string>({
      query: (transactionId) => ({
        url: "/payments/verify",
        params: { t: transactionId },
      }),
      providesTags: (_r, _e, transactionId) => [{ type: "Payments" as const, id: transactionId }],
    }),
  }),
});

export const { useVerifyMyPaymentQuery } = paymentApi;
export default paymentApi;
