'use client';

import { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import {
  buildTimelinePath,
  type TimelinePoint,
} from '@/components/module/home/timelinePath';

interface MeasuredPoint extends TimelinePoint {
  index: number;
}

function offsetWithin(element: HTMLElement, container: HTMLElement) {
  let x = 0;
  let y = 0;
  let node: HTMLElement | null = element;

  while (node && node !== container) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }

  return { x, y };
}

function resolveActiveIndex(value: number, thresholds: number[]) {
  const progress = Math.min(1, Math.max(0, value));
  let next = 0;

  thresholds.forEach((threshold, index) => {
    if (progress >= threshold) next = index;
  });

  return next;
}

export function useTimelinePath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousProgress = useRef(0);
  const [path, setPath] = useState('');
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [thresholds, setThresholds] = useState<number[]>([0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 70%'],
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const rows = Array.from(
        container.querySelectorAll<HTMLElement>('[data-timeline-row]')
      );

      const points: MeasuredPoint[] = rows
        .map((row) => {
          const index = Number(row.dataset.timelineRow);
          const card = Array.from(
            row.querySelectorAll<HTMLElement>('[data-timeline-anchor]')
          ).find((element) => element.offsetWidth > 0);

          if (!card || Number.isNaN(index)) return null;

          const offset = offsetWithin(card, container);

          return {
            index,
            x: index % 2 === 0 ? offset.x + card.offsetWidth : offset.x,
            y: offset.y + card.offsetHeight / 2,
          };
        })
        .filter((point): point is MeasuredPoint => point !== null)
        .sort((a, b) => a.index - b.index);

      setSize({ width: container.offsetWidth, height: container.offsetHeight });

      if (points.length < 2) {
        setPath('');
        return;
      }

      const built = buildTimelinePath(points);
      setPath(built.d);
      setThresholds(built.thresholds);
      setActiveIndex(resolveActiveIndex(scrollYProgress.get(), built.thresholds));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);

    return () => observer.disconnect();
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    setScrollingUp(value < previousProgress.current);
    previousProgress.current = value;

    setActiveIndex((current) => {
      const next = resolveActiveIndex(value, thresholds);
      return current === next ? current : next;
    });
  });

  return { containerRef, path, size, scrollYProgress, activeIndex, scrollingUp };
}
