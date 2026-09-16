import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/about', label: 'About Us' },
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/refund-policy', label: 'Refund Policy' },
];

export default function FooterLinks() {
  return (
    <div className="flex flex-col gap-3 order-2 md:my-0">
      <h3 className="text-base font-semibold bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent mb-3 tracking-wide">
        Company
      </h3>
      <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500/60 to-transparent rounded-full -mt-2 mb-2" />
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="group flex items-center gap-2 text-white/60 hover:text-blue-500 transition-colors text-sm w-fit"
        >
          <span className="w-1 h-1 rounded-full bg-blue-500/40 group-hover:bg-blue-500 group-hover:shadow-[0_0_6px_hsl(217_91%_60%)] transition-all" />
          {label}
        </Link>
      ))}
    </div>
  );
}
