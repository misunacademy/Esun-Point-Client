/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { toast } from 'sonner';

import { useAuth } from '@/hooks/useAuth';
import { useGetEnrollmentsQuery } from '@/redux/api/enrollmentApi';
import { useGetBatchByIdQuery } from '@/redux/api/batchApi';
import {
  PosterTemplate, TEMPLATES, getCourseType, getBatchNumber,
  getTemplatePriority, MIN_ZOOM, MAX_ZOOM, ZOOM_STEP, clamp,
} from '@/constants/posterTemplates';

export function usePosterGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewImgRef = useRef<HTMLDivElement | null>(null);

  const { user, isLoading: isAuthLoading } = useAuth();
  const { data: enrollmentsData, isLoading: isEnrollmentsLoading } = useGetEnrollmentsQuery(undefined, { skip: !user?.id });

  const latestEnrollment =
    enrollmentsData?.data?.find((e: any) => e.status === 'active') ??
    enrollmentsData?.data?.[0];

  const { data: batchData } = useGetBatchByIdQuery(
    (latestEnrollment?.batchId as any)?._id || '',
    { skip: !latestEnrollment?.batchId }
  );

  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(0);
  const [userNameState, setUserNameState] = useState<{ value: string; edited: boolean }>({ value: '', edited: false });
  const [userImageState, setUserImageState] = useState<{ value: string | null; edited: boolean }>({ value: null, edited: false });

  const userName = userNameState.edited ? userNameState.value : (user?.name || userNameState.value);
  const userImage = userImageState.edited ? userImageState.value : (user?.image || userImageState.value);

  const setUserName = (value: string) => setUserNameState({ value, edited: true });
  const setUserImage = (value: string | null) => setUserImageState({ value, edited: true });

  const [imageOffset, setImageOffset] = useState({ x: 0, y: 0 });
  const [imageZoom, setImageZoom] = useState(1);
  const dragStateRef = useRef<{
    startX: number; startY: number; startOffsetX: number;
    startOffsetY: number; pointerId?: number;
  } | null>(null);

  const moveImage = (dx: number, dy: number) => setImageOffset(prev => ({
    x: clamp(prev.x + dx, -1, 1), y: clamp(prev.y + dy, -1, 1),
  }));

  const zoomIn = () => setImageZoom(prev => clamp(Number((prev + ZOOM_STEP).toFixed(2)), MIN_ZOOM, MAX_ZOOM));
  const zoomOut = () => setImageZoom(prev => clamp(Number((prev - ZOOM_STEP).toFixed(2)), MIN_ZOOM, MAX_ZOOM));

  const onPreviewPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    dragStateRef.current = {
      startX: e.clientX, startY: e.clientY,
      startOffsetX: imageOffset.x, startOffsetY: imageOffset.y,
      pointerId: e.pointerId,
    };
  };

  const onPreviewPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const state = dragStateRef.current;
    if (!state) return;
    const dx = e.clientX - state.startX;
    const dy = e.clientY - state.startY;
    const el = e.currentTarget as HTMLDivElement;
    const dw = el.clientWidth || 1;
    const dh = el.clientHeight || 1;
    setImageOffset({
      x: clamp(state.startOffsetX + dx / dw, -1, 1),
      y: clamp(state.startOffsetY + dy / dh, -1, 1),
    });
  };

  const onPreviewPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const state = dragStateRef.current;
    if (state && state.pointerId === e.pointerId) {
      (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
      dragStateRef.current = null;
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setUserImage(event.target?.result as string);
      setImageOffset({ x: 0, y: 0 });
    };
    reader.readAsDataURL(file);
  };

  const batchNo =
    batchData?.data?.title ??
    latestEnrollment?.batch?.title ??
    (batchData?.data ? `BATCH-${batchData.data.batchNumber}` : '');

  const courseTitle =
    (latestEnrollment as any)?.batchId?.courseId?.title ||
    (latestEnrollment as any)?.course?.title ||
    (latestEnrollment as any)?.courseId?.title || '';

  const batchNumber = getBatchNumber(batchNo);
  const selectedCourseType = getCourseType(courseTitle);
  const templatePriority = getTemplatePriority(selectedCourseType, batchNumber);

  const templateGroups: Record<string, PosterTemplate[]> = {
    graphic: TEMPLATES.graphic,
    english: TEMPLATES.english.length > 0 ? TEMPLATES.english : TEMPLATES.graphic,
    general: TEMPLATES.graphic,
  };

  const activeTemplateGroup = templateGroups[selectedCourseType];
  const courseTemplates = templatePriority.map(i => activeTemplateGroup[i]).filter(Boolean);
  const resolvedTemplates = courseTemplates.length > 0 ? courseTemplates : activeTemplateGroup;

  const generatePoster = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const template = resolvedTemplates[selectedTemplateIndex] || resolvedTemplates[0] || TEMPLATES.graphic[0];
    const { config } = template;
    const cssWidth = config.canvasWidth;
    const cssHeight = config.canvasHeight;
    const ratio = typeof window !== 'undefined' ? window.devicePixelRatio : 1;

    canvas.width = Math.round(cssWidth * ratio);
    canvas.height = Math.round(cssHeight * ratio);
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.maxWidth = `${cssWidth}px`;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(ratio, ratio);
    ctx.clearRect(0, 0, cssWidth, cssHeight);

    const bg = new window.Image();
    bg.src = template.src;
    bg.crossOrigin = 'anonymous';

    await new Promise<void>((resolve) => {
      bg.onload = () => {
        const sw = bg.naturalWidth || bg.width;
        const sh = bg.naturalHeight || bg.height;
        const srcAspect = sw / sh;
        const destAspect = cssWidth / cssHeight;

        let sx = 0, sy = 0, sWidth = sw, sHeight = sh;
        if (srcAspect > destAspect) {
          sHeight = sh;
          sWidth = Math.round(sh * destAspect);
          sx = Math.round((sw - sWidth) / 2);
        } else {
          sWidth = sw;
          sHeight = Math.round(sw / destAspect);
          sy = Math.round((sh - sHeight) / 2);
        }
        ctx.drawImage(bg, sx, sy, sWidth, sHeight, 0, 0, cssWidth, cssHeight);
        resolve();
      };
      bg.onerror = () => {
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(0, 0, cssWidth, cssHeight);
        resolve();
      };
    });

    if (userImage) {
      const img = new window.Image();
      img.src = userImage;
      img.crossOrigin = 'anonymous';
      await new Promise<void>((resolve) => {
        img.onload = () => {
          const { x, y, radius } = config.photo;
          const sw = img.naturalWidth || img.width;
          const sh = img.naturalHeight || img.height;
          const baseSize = Math.min(sw, sh);
          const z = clamp(imageZoom || 1, MIN_ZOOM, MAX_ZOOM);

          let sSize = baseSize;
          if (z >= 1) sSize = Math.max(1, Math.round(baseSize / z));
          const maxShiftX = Math.max(0, (sw - sSize) / 2);
          const maxShiftY = Math.max(0, (sh - sSize) / 2);
          const centerX = sw / 2 + imageOffset.x * maxShiftX;
          const centerY = sh / 2 + imageOffset.y * maxShiftY;
          let sx = Math.round(centerX - sSize / 2);
          let sy = Math.round(centerY - sSize / 2);
          sx = Math.max(0, Math.min(sx, sw - sSize));
          sy = Math.max(0, Math.min(sy, sh - sSize));

          const dx = Math.round(x - radius);
          const dy = Math.round(y - radius);
          const dSize = radius * 2;

          ctx.save();
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.clip();

          if (z >= 1) {
            ctx.drawImage(img, sx, sy, sSize, sSize, dx, dy, dSize, dSize);
          } else {
            const destSize = Math.round(dSize * z);
            ctx.drawImage(img, sx, sy, sSize, sSize, Math.round(x - destSize / 2), Math.round(y - destSize / 2), destSize, destSize);
          }
          ctx.restore();

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 8;
          ctx.stroke();
          resolve();
        };
        img.onerror = () => resolve();
      });
    }

    if (userName) {
      const { x, y, fontSize, color } = config.name;
      ctx.font = `bold ${fontSize}px Arial`;
      ctx.fillStyle = color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(userName, x, y);
    }

    if (batchNo) {
      const { x, y, fontSize, color, bgColor, minWidth, minHeight } = config.batch;
      ctx.font = `bold ${fontSize}px Arial`;
      const text = batchNo.toUpperCase();
      const metrics = ctx.measureText(text);
      const paddingX = 30;
      const paddingY = 12;
      const width = Math.max(metrics.width + paddingX * 2, minWidth ?? 0);
      const height = Math.max(fontSize + paddingY * 2, minHeight ?? 0);

      const r = height / 2;
      ctx.beginPath();
      ctx.moveTo(x - width / 2 + r, y - height / 2);
      ctx.lineTo(x + width / 2 - r, y - height / 2);
      ctx.quadraticCurveTo(x + width / 2, y - height / 2, x + width / 2, y - height / 2 + r);
      ctx.lineTo(x + width / 2, y + height / 2 - r);
      ctx.quadraticCurveTo(x + width / 2, y + height / 2, x + width / 2 - r, y + height / 2);
      ctx.lineTo(x - width / 2 + r, y + height / 2);
      ctx.quadraticCurveTo(x - width / 2, y + height / 2, x - width / 2, y + height / 2 - r);
      ctx.lineTo(x - width / 2, y - height / 2 + r);
      ctx.quadraticCurveTo(x - width / 2, y - height / 2, x - width / 2 + r, y - height / 2);
      ctx.closePath();

      ctx.fillStyle = bgColor;
      ctx.fill();
      ctx.fillStyle = color;
      ctx.fillText(text, x, y + 2);
    }
  }, [selectedTemplateIndex, userImage, userName, batchNo, imageOffset, imageZoom, resolvedTemplates]);

  useEffect(() => {
    const timer = setTimeout(generatePoster, 100);
    return () => clearTimeout(timer);
  }, [generatePoster]);

  const downloadPoster = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = url;
      link.download = `misun-academy-${userName || 'poster'}.png`;
      link.click();
      toast.success('Poster downloaded');
    } catch {
      toast.error('Download failed');
    }
  };

  const sharePoster = async () => {
    if (!canvasRef.current || !navigator.share) {
      toast.info('Sharing not supported');
      return;
    }
    canvasRef.current.toBlob(async (blob) => {
      if (!blob) return;
      await navigator.share({
        title: 'Misun Academy Enrollment',
        files: [new File([blob], 'poster.png', { type: 'image/png' })],
      });
    });
  };

  return {
    canvasRef, previewImgRef,
    user, isAuthLoading, isEnrollmentsLoading,
    userName, setUserName,
    userImage,
    selectedTemplateIndex, setSelectedTemplateIndex,
    resolvedTemplates,
    imageOffset, imageZoom,
    moveImage, zoomIn, zoomOut,
    onPreviewPointerDown, onPreviewPointerMove, onPreviewPointerUp,
    handleImageUpload,
    batchNo, courseTitle,
    downloadPoster, sharePoster,
    setImageOffset, setImageZoom,
  };
}
