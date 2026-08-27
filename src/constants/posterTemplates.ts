export type PosterTemplate = {
  id: number;
  name: string;
  src: string;
  config: {
    canvasWidth: number;
    canvasHeight: number;
    photo: { x: number; y: number; radius: number };
    name: { x: number; y: number; fontSize: number; color: string };
    batch: {
      x: number; y: number; fontSize: number; color: string;
      bgColor: string; minWidth?: number; minHeight?: number;
    };
  };
};

export const TEMPLATES: Record<'graphic' | 'english', PosterTemplate[]> = {
  graphic: [
    {
      id: 1, name: 'Green Neon Style', src: '/posters/templete-1.png',
      config: {
        canvasWidth: 1080, canvasHeight: 1080,
        photo: { x: 535, y: 578, radius: 155 },
        name: { x: 540, y: 870, fontSize: 58, color: '#FFFFFF' },
        batch: { x: 540, y: 930, fontSize: 28, color: '#000000', bgColor: '#88f400' },
      },
    },
    {
      id: 2, name: 'Teal Ribbon Style', src: '/posters/templete-2.png',
      config: {
        canvasWidth: 1080, canvasHeight: 1080,
        photo: { x: 535, y: 578, radius: 155 },
        name: { x: 540, y: 870, fontSize: 58, color: '#FFFFFF' },
        batch: { x: 540, y: 930, fontSize: 28, color: '#000000', bgColor: '#00ffb4' },
      },
    },
  ],
  english: [
    {
      id: 1, name: 'Blue Neon Style', src: '/posters/esun1.png',
      config: {
        canvasWidth: 1080, canvasHeight: 1080,
        photo: { x: 535, y: 578, radius: 155 },
        name: { x: 540, y: 870, fontSize: 58, color: '#FFFFFF' },
        batch: { x: 540, y: 936, fontSize: 28, color: '#000000', bgColor: '#1e90ff', minWidth: 220, minHeight: 62 },
      },
    },
    {
      id: 2, name: 'Sky Ribbon Style', src: '/posters/esun2.png',
      config: {
        canvasWidth: 1080, canvasHeight: 1080,
        photo: { x: 535, y: 578, radius: 155 },
        name: { x: 540, y: 870, fontSize: 58, color: '#FFFFFF' },
        batch: { x: 540, y: 936, fontSize: 28, color: '#000000', bgColor: '#38bdf8', minWidth: 220, minHeight: 62 },
      },
    },
  ],
};

export function getCourseType(title?: string | null): 'graphic' | 'english' | 'general' {
  const normalized = (title || '').toLowerCase().replace(/\s+/g, ' ').trim();
  if (/(graphic|design|freelancing|photoshop|illustrator)/i.test(normalized)) return 'graphic';
  if (/(english|spoken|ielts|language)/i.test(normalized)) return 'english';
  return 'general';
}

export function getBatchNumber(batchValue?: string | null): number | null {
  if (!batchValue) return null;
  const match = batchValue.match(/(\d+)/);
  if (!match) return null;
  const parsed = Number(match[1]);
  return Number.isFinite(parsed) ? parsed : null;
}

export function getTemplatePriority(courseType: 'graphic' | 'english' | 'general', batchNumber: number | null) {
  const isEvenBatch = batchNumber !== null ? batchNumber % 2 === 0 : false;
  if (courseType === 'graphic') return isEvenBatch ? [1, 0] : [0, 1];
  return isEvenBatch ? [0, 1] : [1, 0];
}

export const MIN_ZOOM = 0.5;
export const MAX_ZOOM = 3;
export const ZOOM_STEP = 0.1;
export const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
