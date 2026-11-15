import Image from "next/image";
import { CreditCard, Smartphone } from "lucide-react";
import { FormField, FormItem, FormMessage, useFormField } from "@/components/ui/form";
import type { ControllerRenderProps, UseFormReturn } from "react-hook-form";
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

const GATEWAY_NAMES = [
  "bKash",
  "Nagad",
  "Rocket",
  "Upay",
  "Surecash",
  "Mastercard",
  "Visa",
  "Amex",
  "UnionPay",
  "Mobile Banking",
];

interface PaymentMethodSelectorProps {
  form: UseFormReturn<EnrollmentForm>;
}

type PaymentMethodValue = "SSLCommerz" | "phonePay";

function PaymentMethodOptions({
  field,
}: {
  field: ControllerRenderProps<EnrollmentForm, "paymentMethod">;
}) {
  const { formItemId, formMessageId, error } = useFormField();
  const selected = field.value;

  const options: Array<{
    value: PaymentMethodValue;
    label: string;
    icon: React.ReactNode;
    iconWrap: string;
    badge?: string;
    children: React.ReactNode;
  }> = [
    {
      value: "SSLCommerz",
      label: "SSLCommerz",
      icon: <CreditCard className="w-5 h-5 text-primary" />,
      iconWrap: "bg-primary/15 border border-primary/25",
      badge: "Popular",
      children: (
        <div className="space-y-3">
          <div className="items-center gap-2 pt-2 border-t border-primary/15">
            <span className="text-xs text-white/60 mb-2 block">Pay with:</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              {gatewayIcons.map((src, i) => (
                <div
                  key={i}
                  className="bg-white/[0.05] border border-white/10 rounded-lg overflow-hidden flex items-center justify-center h-[52px]"
                >
                  <Image
                    src={src}
                    alt={GATEWAY_NAMES[i] ?? "Payment gateway"}
                    className="object-contain w-full h-full p-1.5"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      value: "phonePay",
      label: "Phone Pay",
      icon: <Smartphone className="w-5 h-5 text-blue-400" />,
      iconWrap: "bg-blue-500/15 border border-blue-500/25",
      children: (
        <div className="border-t border-primary/15 pt-3">
          <p className="text-xs text-white/70 pb-2">Pay with your phone pay account:</p>
          <div className="bg-white/[0.05] border border-white/10 rounded-lg overflow-hidden flex items-center justify-center h-[56px] max-w-[200px]">
            <Image src={phonepay} alt="Phone Pay" className="object-contain w-full h-full p-2" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <fieldset
      aria-describedby={error ? formMessageId : undefined}
      aria-invalid={error ? true : undefined}
      className="grid gap-3"
    >
      <legend className="sr-only">Choose a payment method</legend>
      {options.map((option) => {
        const isSelected = selected === option.value;
        return (
          <label
            key={option.value}
            className={`relative block cursor-pointer rounded-xl border-2 p-4 transition-all duration-200 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-surface ${
              isSelected
                ? "border-primary bg-primary/10 shadow-[0_0_24px_hsl(217_91%_60%/0.2)]"
                : "border-primary/20 bg-primary/[0.04] hover:border-primary/40"
            }`}
          >
            <input
              type="radio"
              id={`${formItemId}-${option.value}`}
              name={field.name}
              value={option.value}
              checked={isSelected}
              onChange={() => field.onChange(option.value)}
              onBlur={field.onBlur}
              className="sr-only"
            />
            {option.badge && (
              <span className="absolute -top-2.5 right-4 px-2 py-0.5 rounded-full text-[10px] font-bold bg-yellow-500/15 border border-yellow-500/30 text-yellow-300">
                {option.badge}
              </span>
            )}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${option.iconWrap}`}>
                  {option.icon}
                </div>
                <div className="flex-1">
                  <span className="block font-semibold text-white/85">{option.label}</span>
                </div>
                <span
                  aria-hidden="true"
                  className={`w-4 h-4 rounded-full border-2 transition-colors ${
                    isSelected ? "border-primary bg-primary" : "border-white/30"
                  }`}
                >
                  {isSelected && (
                    <span className="w-full h-full rounded-full bg-white scale-[0.45] block" />
                  )}
                </span>
              </div>
              {option.children}
            </div>
          </label>
        );
      })}
    </fieldset>
  );
}

export function PaymentMethodSelector({ form }: PaymentMethodSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold flex items-center gap-2.5 text-white/90">
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
            <PaymentMethodOptions field={field} />
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
