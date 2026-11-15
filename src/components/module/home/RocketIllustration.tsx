export function RocketIllustration({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="rocketBody" x1="24" y1="8" x2="40" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="0.55" stopColor="#f4f9ff" />
          <stop offset="1" stopColor="#bfdbfe" />
        </linearGradient>
        <linearGradient id="rocketCone" x1="32" y1="8" x2="32" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fb5f7a" />
          <stop offset="1" stopColor="#dc2626" />
        </linearGradient>
        <linearGradient id="rocketFin" x1="24" y1="34" x2="16" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2f4f83" />
          <stop offset="1" stopColor="#1a2c50" />
        </linearGradient>
        <linearGradient id="flameCore" x1="32" y1="46" x2="32" y2="62" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fde68a" />
          <stop offset="0.5" stopColor="#fbbf24" />
          <stop offset="1" stopColor="#f97316" />
        </linearGradient>
      </defs>

      <path
        d="M32 46 C28 54, 25 58, 32 63 C39 58, 36 54, 32 46 Z"
        fill="url(#flameCore)"
        className="animate-pulse"
      />
      <path
        d="M32 46 C30 51, 29 54, 32 58 C35 54, 34 51, 32 46 Z"
        fill="#fffbeb"
        opacity="0.95"
      />

      <path
        d="M23 34 L14 47 C14 47, 21 47, 24 42 Z"
        fill="url(#rocketFin)"
      />
      <path
        d="M23 34 L18 45 C19 45, 22 44, 23 42 Z"
        fill="#4a719f"
        opacity="0.65"
      />

      <path
        d="M41 34 L50 47 C50 47, 43 47, 40 42 Z"
        fill="url(#rocketFin)"
      />
      <path
        d="M41 34 L46 45 C45 45, 42 44, 41 42 Z"
        fill="#12203d"
        opacity="0.55"
      />

      <path
        d="M32 8 C25 18, 23 30, 23 45 L41 45 C41 30, 39 18, 32 8 Z"
        fill="url(#rocketBody)"
      />

      <path
        d="M32 8 C28.5 14, 26 20, 25 22 L39 22 C38 20, 35.5 14, 32 8 Z"
        fill="url(#rocketCone)"
      />

      <circle cx="32" cy="30" r="5.5" fill="#16233f" />
      <circle cx="32" cy="30" r="4.2" fill="#38bdf8" />
      <circle cx="32" cy="30" r="3.2" fill="#0284c7" />
      <circle cx="33.5" cy="28.5" r="1.3" fill="#ffffff" opacity="0.9" />

      <path
        d="M32 8 C36 18, 37 30, 37 45 L41 45 C41 30, 39 18, 32 8 Z"
        fill="#93b4d8"
        opacity="0.35"
      />

      <path
        d="M23 42 Q32 44 41 42"
        stroke="#bfdbfe"
        strokeWidth="1"
      />
    </svg>
  );
}
