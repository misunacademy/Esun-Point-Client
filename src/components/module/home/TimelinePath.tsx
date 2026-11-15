'use client';

import { useCallback, useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  type MotionValue,
} from 'framer-motion';
import { RocketIllustration } from './RocketIllustration';

interface TimelinePathProps {
  path: string;
  width: number;
  height: number;
  progress: MotionValue<number>;
  scrollingUp: boolean;
}

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

export function TimelinePath({ path, width, height, progress, scrollingUp }: TimelinePathProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const rocketX = useMotionValue(0);
  const rocketY = useMotionValue(0);

  const placeRocket = useCallback(
    (value: number) => {
      const element = pathRef.current;
      if (!element) return;

      const point = element.getPointAtLength(element.getTotalLength() * clamp(value));
      rocketX.set(point.x);
      rocketY.set(point.y);
    },
    [rocketX, rocketY]
  );

  useEffect(() => {
    placeRocket(progress.get());
  }, [path, progress, placeRocket]);

  useMotionValueEvent(progress, 'change', placeRocket);

  return (
    <>
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          fill="none"
          className="absolute inset-0 overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="timelinePathGradient"
              x1="0"
              y1="0"
              x2="0"
              y2={height}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#60a5fa" />
              <stop offset="0.5" stopColor="#3b82f6" />
              <stop offset="1" stopColor="#38bdf8" />
            </linearGradient>
          </defs>

          <path
            ref={pathRef}
            d={path}
            stroke="rgba(59,130,246,0.28)"
            strokeWidth="2"
            strokeDasharray="7 9"
            strokeLinecap="round"
          />

          <motion.path
            d={path}
            stroke="url(#timelinePathGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.9"
            style={{ pathLength: progress }}
          />

          <motion.path
            d={path}
            stroke="url(#timelinePathGradient)"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.35"
            style={{ pathLength: progress, filter: 'blur(7px)' }}
          />
        </svg>
      </div>

      <motion.div
        style={{ x: rocketX, y: rocketY }}
        animate={{ rotate: scrollingUp ? 0 : 180 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="hidden md:block absolute left-0 top-0 z-30 pointer-events-none"
      >
        <div className="absolute -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-3 rounded-full bg-sky-400/20 blur-lg animate-pulse" />
            <RocketIllustration className="relative z-10 w-12 h-12 lg:w-14 lg:h-14 drop-shadow-[0_0_8px_rgba(96,165,250,0.45)]" />
          </div>
        </div>
      </motion.div>
    </>
  );
}
