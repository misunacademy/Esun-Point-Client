'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import TimelineCard from './TimelineCard';
import { features } from '@/constants/whyUs';

export default function TimelineList() {
  return (
    <div className="flex flex-col gap-10">
      {features.map((feature, index) => {
        const isEven = index % 2 === 0;
        const Icon = feature.icon;

        return (
          <div key={index} className="relative flex items-center gap-0 md:gap-0">
            <div className={`hidden md:flex flex-1 ${isEven ? 'justify-end pr-10' : 'justify-end pr-10 invisible pointer-events-none'}`}>
              {isEven && (
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, x: -48 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <TimelineCard feature={feature} Icon={Icon} />
                </motion.div>
              )}
            </div>

            <motion.div
              className="hidden md:flex flex-shrink-0 relative z-10"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className={cn("w-11 h-11 rounded-full bg-gradient-to-br from-blue-800 via-blue-500 to-blue-700", "flex items-center justify-center font-bold text-white text-sm", "shadow-lg shadow-blue-500/50 ring-4 ring-[#060a12]", "hover:scale-110 transition-transform duration-300")}>
                {index + 1}
              </div>
            </motion.div>

            <div className={`hidden md:flex flex-1 ${!isEven ? 'justify-start pl-10' : 'justify-start pl-10 invisible pointer-events-none'}`}>
              {!isEven && (
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, x: 48 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <TimelineCard feature={feature} Icon={Icon} />
                </motion.div>
              )}
            </div>

            <motion.div
              className="flex md:hidden items-start gap-5 w-full pl-2"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="flex-shrink-0 relative z-10 mt-1">
                <div className={cn("w-9 h-9 rounded-full bg-gradient-to-br from-blue-800 via-blue-500 to-blue-700", "flex items-center justify-center font-bold text-white text-xs", "shadow-md shadow-blue-500/40 ring-2 ring-[#060a12]")}>
                  {index + 1}
                </div>
              </div>
              <div className="flex-1">
                <TimelineCard feature={feature} Icon={Icon} />
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
