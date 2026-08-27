import Container from '../ui/container';
import Image from 'next/image';
import FooterBg from '@/assets/images/footer.png';
import { FooterBrand, FooterLinks, FooterSocial, FooterTopSeparator } from './Footer/index';
import CurrentYear from '../shared/CurrentYear';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pb-12 md:pb-24 bg-[#060f0a]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={FooterBg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#060a12] via-[#060a12]/85 to-[#060a12]/60 pointer-events-none z-0" />

      <FooterTopSeparator />

      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-10 right-0 w-64 h-64 bg-blue-500/6 rounded-full blur-3xl pointer-events-none z-[1]" />

      <Container className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 py-16 px-6 md:px-0 max-w-7xl mx-auto">
        <FooterBrand />
        <FooterLinks />
        <FooterSocial />
      </Container>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-0">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="relative z-10 mt-6 mb-4 flex justify-center px-4 opacity-70 hover:opacity-100 transition-opacity">
        <Image
          src="https://securepay.sslcommerz.com/public/image/SSLCommerz-Pay-With-logo-All-Size-03.png"
          alt="Pay with SSLCommerz"
          width={900}
          height={390}
          sizes="(max-width: 640px) 350px, (max-width: 1024px) 560px, 980px"
          className="w-full max-w-[350px] sm:max-w-[560px] lg:max-w-[980px] h-auto"
        />
      </div>

      <div className="relative z-10 mt-2">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="flex w-full justify-center py-5">
          <p className="text-white/40 text-sm tracking-wide">
               © <CurrentYear />{' '}
            <span className="text-blue-500/70 font-medium">Misun Academy</span>
            {' '}— All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
