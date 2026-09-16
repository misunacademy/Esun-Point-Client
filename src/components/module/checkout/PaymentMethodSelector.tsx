import Image from "next/image";
import { CreditCard, Smartphone } from "lucide-react";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import type { UseFormReturn } from "react-hook-form";
import type { EnrollmentForm } from "@/hooks/useEnrollment";
import one from "@/assets/images/payments/one.png";
import two from "@/assets/images/payments/two.png";
import three from "@/assets/images/payments/three.png";
import four from "@/assets/images/payments/four.png";
import five from "@/assets/images/payments/five.png";
import six from "@/assets/images/payments/six.png";
import seven from "@/assets/images/payments/seven.png";
import eight from "@/assets/images/payments/eight.png";
import nine from "@/assets/images/payments/nine.png";
import ten from "@/assets/images/payments/ten.png";
import phonepay from "@/assets/images/payments/phonepay.png";

const gatewayIcons = [one, two, three, four, six, seven, eight, nine, ten, five];

interface PaymentMethodSelectorProps {
  form: UseFormReturn<EnrollmentForm>;
}

export function PaymentMethodSelector({ form }: PaymentMethodSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold flex items-center gap-2.5 text-white/80">
        <div className="w-6 h-6 bg-primary/15 border border-primary/30 text-primary rounded-full flex items-center justify-center text-xs font-bold">
          2
        </div>
        Payment Method
      </h3>
      <FormField
        control={form.control}
        name="paymentMethod"
        render={({ field }) => (
          <FormItem>
            <div className="grid gap-3">
              <div
                className={`relative cursor-pointer rounded-xl border-2 p-4 transition-all duration-200 ${
                  field.value === 'SSLCommerz'
                    ? 'border-primary bg-primary/10 shadow-[0_0_24px_hsl(217_91%_60%/0.2)]'
                    : 'border-primary/20 bg-primary/4 hover:border-primary/40'
                }`}
                onClick={() => field.onChange('SSLCommerz')}
              >
                <span className="absolute -top-2.5 right-4 px-2 py-0.5 rounded-full text-[10px] font-bold bg-yellow-500/15 border border-yellow-500/30 text-yellow-400">
                  Popular
                </span>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white/85">SSLCommerz</h4>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 transition-colors ${
                      field.value === 'SSLCommerz' ? 'border-primary bg-primary' : 'border-white/30'
                    }`}>
                      {field.value === 'SSLCommerz' && (
                        <div className="w-full h-full rounded-full bg-white scale-[0.45]" />
                      )}
                    </div>
                  </div>
                  <div className="items-center gap-2 pt-2 border-t border-primary/15">
                    <span className="text-xs text-white/40 mb-2 block">Pay with:</span>
                    <div className="grid grid-cols-3 gap-1.5">
                      {gatewayIcons.map((src, i) => (
                        <div key={i} className="bg-white rounded-lg overflow-hidden flex items-center justify-center h-[52px]">
                          <Image src={src} alt="payment gateway" className="object-contain w-full h-full p-1.5" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`relative cursor-pointer rounded-xl border-2 p-4 transition-all duration-200 ${
                  field.value === 'phonePay'
                    ? 'border-primary bg-primary/10 shadow-[0_0_24px_hsl(217_91%_60%/0.2)]'
                    : 'border-primary/20 bg-primary/4 hover:border-primary/40'
                }`}
                onClick={() => field.onChange('phonePay')}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/15 border border-blue-500/25 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white/85">Phone Pay</h4>
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 transition-colors ${
                    field.value === 'phonePay' ? 'border-primary bg-primary' : 'border-white/30'
                  }`}>
                    {field.value === 'phonePay' && (
                      <div className="w-full h-full rounded-full bg-white scale-[0.45]" />
                    )}
                  </div>
                </div>
                <div className="border-t border-primary/15 pt-3">
                  <p className="text-xs text-white/45 pb-2">Pay with your phone pay account:</p>
                  <div className="bg-white rounded-lg overflow-hidden flex items-center justify-center h-[56px] max-w-[200px]">
                    <Image src={phonepay} alt="Phone Pay" className="object-contain w-full h-full p-2" />
                  </div>
                </div>
              </div>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
