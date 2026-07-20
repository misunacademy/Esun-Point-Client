import Image from 'next/image';
import { Globe2Icon, Locate, MailCheck, PhoneCall } from 'lucide-react';
import EsunLogo from '@/assets/svg/esun-logo.svg';

const contacts = [
  {
    icon: <Locate className="w-4 h-4 text-white" />,
    text: '85, Sultan Ahmed Road, Moulavipara, Ward Number: 27, Khulna',
  },
  {
    icon: <PhoneCall className="w-4 h-4 text-white" />,
    text: '+88 01778371211',
  },
  {
    icon: <MailCheck className="w-4 h-4 text-white" />,
    text: 'misunacademybd@gmail.com',
  },
  {
    icon: <Globe2Icon className="w-4 h-4 text-white" />,
    text: 'www.misun-academy.com',
  },
];

export default function FooterBrand() {
  return (
    <div className="order-1 col-start-1 col-span-1 row-start-1 space-y-6">
      <div className="mb-8 mt-2">
        <Image
          src={EsunLogo}
          alt="Misun Academy"
          width={120}
          height={120}
          className="h-10 w-auto"
        />
        <div className="mt-2 h-0.5 w-20 bg-gradient-to-r from-blue-500/60 to-transparent rounded-full" />
      </div>

      <div className="flex flex-col gap-4">
        {contacts.map(({ icon, text }) => (
          <div key={text} className="flex items-start gap-3 group">
            <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-blue-800 via-blue-500 to-blue-700 flex items-center justify-center shadow-[0_0_12px_hsl(217_91%_60%/0.25)] group-hover:shadow-[0_0_18px_hsl(217_91%_60%/0.45)] transition-shadow">
              {icon}
            </div>
            <p className="text-white/65 text-sm leading-relaxed group-hover:text-white/85 transition-colors">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
