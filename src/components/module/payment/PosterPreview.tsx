'use client';

import { Download, Share2 } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PosterPreviewProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  onDownload: () => void;
  onShare: () => void;
}

export function PosterPreview({ canvasRef, onDownload, onShare }: PosterPreviewProps) {
  return (
    <Card className="h-full border-0 shadow-lg bg-slate-900/5 backdrop-blur-sm sticky top-24 flex items-center justify-center">
      <CardContent className="p-6">
        <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-white shadow-inner mb-6">
          <canvas ref={canvasRef} className="w-full h-full object-contain" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button onClick={onDownload} className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg">
            <Download className="w-5 h-5 mr-2" />
            Download Poster
          </Button>
          <Button onClick={onShare} variant="outline" className="w-full h-12 text-lg">
            <Share2 className="w-5 h-5 mr-2" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
