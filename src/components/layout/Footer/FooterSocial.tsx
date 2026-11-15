import Link from 'next/link';
import Image from 'next/image';
import { Facebook, YouTube } from '@/assets/icons';
import SSLLogo from '@/assets/images/ssl_logo.png';
import SSLCommerz from '@/assets/images/SSL_commerz.png';

export default function FooterSocial() {
  return (
    <div className="space-y-6 order-3 mb-8">
      <div>
        <h3 className="text-base font-semibold bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent mb-3 tracking-wide">
          Follow Us
        </h3>
        <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500/60 to-transparent rounded-full mb-5" />

        <div className="flex items-center gap-3">
          <Link
            href="https://www.facebook.com/esunpoint"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="group relative p-[1.5px] rounded-xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            <span className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_60%,hsl(217_91%_60%)_100%)]" />
            <div className="relative bg-surface rounded-xl p-2.5 transition-colors group-hover:bg-blue-500/10">
              <Facebook />
            </div>
          </Link>
          <Link
            href="https://www.youtube.com/@EsunPoint"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our YouTube channel"
            className="group relative p-[1.5px] rounded-xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            <span className="absolute inset-[-100%] animate-[spin_4s_linear_infinite_0.5s] bg-[conic-gradient(from_0deg,transparent_60%,hsl(217_91%_60%)_100%)]" />
            <div className="relative bg-surface rounded-xl p-2.5 transition-colors group-hover:bg-blue-500/10">
              <YouTube />
            </div>
          </Link>
        </div>

        <div className="mt-6 relative overflow-hidden rounded-xl border border-blue-500/15 bg-blue-500/5 px-4 py-3">
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-blue-500/40 rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-blue-500/40 rounded-tr-xl" />
          <p className="text-white/75 text-sm leading-relaxed">
            Trade License No:{' '}
            <span className="font-semibold text-blue-400">27/536</span>
            <br />
            <span className="text-xs text-white/60">(Khulna City Corporation)</span>
          </p>
        </div>

        <div className="w-full mt-6 text-center">
          <p className="text-sm font-semibold text-white mb-3">Pay with</p>

          <div className="mt-4 flex flex-wrap justify-center gap-3 md:gap-4 max-w-[720px] mx-auto">
            <Image
              src={SSLLogo}
              alt="SSLCommerz secure logo"
              width={120}
              height={120}
              className="h-auto max-h-[64px] w-auto object-contain"
            />
            <Image
              src={SSLCommerz}
              alt="SSLCommerz payment gateway"
              width={400}
              height={200}
              className="h-auto max-h-[90px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
