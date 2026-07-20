'use client';

import Image from 'next/image';
import {
  ArrowLeft, ArrowUp, ArrowDown, ArrowRight,
  Upload, ZoomIn, ZoomOut,
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { MIN_ZOOM, MAX_ZOOM, ZOOM_STEP } from '@/constants/posterTemplates';

interface PhotoEditorProps {
  userName: string;
  batchNo: string;
  userImage: string | null;
  imageOffset: { x: number; y: number };
  imageZoom: number;
  onNameChange: (value: string) => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMoveImage: (dx: number, dy: number) => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomChange: (value: number) => void;
  onPointerDown: (e: React.PointerEvent<HTMLDivElement>) => void;
  onPointerMove: (e: React.PointerEvent<HTMLDivElement>) => void;
  onPointerUp: (e: React.PointerEvent<HTMLDivElement>) => void;
  onResetImage: () => void;
  previewImgRef: React.RefObject<HTMLDivElement | null>;
}

export function PhotoEditor({
  userName, batchNo, userImage,
  imageOffset, imageZoom,
  onNameChange, onImageUpload,
  onMoveImage, onZoomIn, onZoomOut, onZoomChange,
  onPointerDown, onPointerMove, onPointerUp,
  onResetImage, previewImgRef,
}: PhotoEditorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Customize Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Student Name</Label>
          <Input
            value={userName}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Enter your full name"
          />
        </div>
        <div className="space-y-2 hidden">
          <Label>Batch ID</Label>
          <Input value={batchNo} readOnly placeholder="e.g. BATCH-06" />
        </div>

        <div className="space-y-2">
          <Label>Profile Photo</Label>
          <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 hover:bg-slate-50 transition-colors text-center">
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={onImageUpload}
              className="hidden"
            />
            <label htmlFor="image-upload" className="cursor-pointer block w-full h-full">
              {userImage ? (
                <div className="mx-auto">
                  <div
                    className="relative w-24 h-24 mx-auto rounded-full overflow-hidden touch-none cursor-grab"
                    ref={previewImgRef}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onPointerCancel={onPointerUp}
                    style={{ touchAction: 'none' }}
                  >
                    <Image src={userImage} alt="Preview" fill sizes="96px" className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 hover:opacity-100 transition-opacity">
                      <Upload className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="mt-3 space-y-3">
                    <div className="flex items-center justify-center gap-2">
                      <div className="grid grid-cols-3 gap-2 items-center">
                        <div className="col-span-3 flex justify-center">
                          <Button size="sm" variant="outline" aria-label="Move photo up" onClick={() => onMoveImage(0, -0.05)}>
                            <ArrowUp className="w-4 h-4" />
                          </Button>
                        </div>
                        <Button size="sm" variant="outline" aria-label="Move photo left" onClick={() => onMoveImage(-0.05, 0)}>
                          <ArrowLeft className="w-4 h-4" />
                        </Button>
                        <div className="flex items-center justify-center space-x-2">
                          <Button size="sm" variant="ghost" onClick={onResetImage}>Reset</Button>
                          <span className="text-xs text-slate-500">
                            X: {Math.round(imageOffset.x * 100)}% Y: {Math.round(imageOffset.y * 100)}% Zoom: {Math.round(imageZoom * 100)}%
                          </span>
                        </div>
                        <Button size="sm" variant="outline" aria-label="Move photo right" onClick={() => onMoveImage(0.05, 0)}>
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                        <div className="col-span-3 flex justify-center">
                          <Button size="sm" variant="outline" aria-label="Move photo down" onClick={() => onMoveImage(0, 0.05)}>
                            <ArrowDown className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                      <Button size="sm" variant="outline" aria-label="Zoom out" onClick={onZoomOut}>
                        <ZoomOut className="w-4 h-4" />
                      </Button>
                      <input
                        type="range"
                        aria-label="Zoom level"
                        min={MIN_ZOOM}
                        max={MAX_ZOOM}
                        step={ZOOM_STEP}
                        value={imageZoom}
                        onChange={(e) => onZoomChange(Number(e.target.value))}
                        className="w-40"
                      />
                      <Button size="sm" variant="outline" aria-label="Zoom in" onClick={onZoomIn}>
                        <ZoomIn className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (<div>
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-2 text-green-600">
                    <Upload className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium text-slate-600">Click to upload photo</span>
                </div>
              )}
            </label>
          </div></div>
      </CardContent>
    </Card>
  );
}

