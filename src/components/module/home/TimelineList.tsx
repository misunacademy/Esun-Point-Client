'use client';

import { motion, useTransform } from 'framer-motion';
import TimelineCard from './TimelineCard';
import { TimelinePath } from './TimelinePath';
// import { RocketIllustration } from './RocketIllustration';
import { features } from '@/constants/whyUs';
import { useTimelinePath } from '@/hooks/useTimelinePath';

export default function TimelineList() {
  const { containerRef, path, size, scrollYProgress, activeIndex, scrollingUp } = useTimelinePath();
  const mobileRocketTop = useTransform(scrollYProgress, [0, 1], ['2%', '97%']);

  return (
    <div ref={containerRef} className="relative flex flex-col gap-12 sm:gap-14 py-8">
      <div className="md:hidden absolute left-5 top-4 bottom-4 w-px border-l-2 border-dashed border-blue-500/30 pointer-events-none" />

      <motion.div
        style={{ top: mobileRocketTop }}
        className="md:hidden absolute left-5 -translate-x-1/2 z-30 pointer-events-none"
      >
        <div className="absolute -inset-3 rounded-full bg-sky-400/20 blur-lg animate-pulse" />
        {/* <RocketIllustration className="relative z-10 w-11 h-11 drop-shadow-[0_0_8px_rgba(96,165,250,0.45)]" /> */}
      </motion.div>

      {path && (
        <TimelinePath
          path={path}
          width={size.width}
          height={size.height}
          progress={scrollYProgress}
          scrollingUp={scrollingUp}
        />
      )}

      {features.map((feature, index) => {
        const isEven = index % 2 === 0;
        const Icon = feature.icon;
        const isActive = index === activeIndex;
        const isPassed = index < activeIndex;

        return (
          <div key={feature.title} data-timeline-row={index} className="relative flex items-center">
            <div className="hidden md:flex flex-1 justify-start pl-10">
              {isEven && (
                <motion.div
                  className="w-full flex justify-start"
                  initial={{ opacity: 0, x: -36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TimelineCard
                    feature={feature}
                    Icon={Icon}
                    isEven
                    isActive={isActive}
                    isPassed={isPassed}
                  />
                </motion.div>
              )}
            </div>

            <div className="hidden md:block flex-shrink-0 w-4" />

            <div className="hidden md:flex flex-1 justify-end pr-10">
              {!isEven && (
                <motion.div
                  className="w-full flex justify-end"
                  initial={{ opacity: 0, x: 36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TimelineCard
                    feature={feature}
                    Icon={Icon}
                    isEven={false}
                    isActive={isActive}
                    isPassed={isPassed}
                  />
                </motion.div>
              )}
            </div>

            <motion.div
              className="flex md:hidden items-start w-full pl-12 sm:pl-14"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <TimelineCard
                feature={feature}
                Icon={Icon}
                isEven={false}
                isActive={isActive}
                isPassed={isPassed}
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
