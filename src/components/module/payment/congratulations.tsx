'use client';

import { Skeleton } from 'boneyard-js/react';

import { usePosterGenerator } from '@/hooks/usePosterGenerator';
import { WelcomeCard } from './WelcomeCard';
import { TemplateSelector } from './TemplateSelector';
import { PhotoEditor } from './PhotoEditor';
import { PosterPreview } from './PosterPreview';

function CongratulationsPage() {
  const {
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
    batchNo,
    downloadPoster, sharePoster,
    setImageOffset, setImageZoom,
  } = usePosterGenerator();

  const isLoading = isAuthLoading || isEnrollmentsLoading;

  if (!user && !isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Please log in to view this page</p>
      </div>
    );
  }

  return (
    <Skeleton
      name="congratulations"
      loading={isLoading}
      fixture={
        <div className="min-h-screen">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/5 rounded-2xl p-8 mb-8">
                <div className="h-8 bg-white/10 rounded w-1/3 mb-2" />
                <div className="h-4 bg-white/10 rounded w-1/2" />
              </div>
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5 space-y-6">
                  <div className="bg-white/5 rounded-2xl p-6 h-64" />
                  <div className="bg-white/5 rounded-2xl p-6 h-80" />
                </div>
                <div className="lg:col-span-7">
                  <div className="bg-white/5 rounded-2xl p-6 h-[500px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    >
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <WelcomeCard userName={userName} />

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-6">
              <TemplateSelector
                templates={resolvedTemplates}
                selectedIndex={selectedTemplateIndex}
                onSelect={setSelectedTemplateIndex}
              />

              <PhotoEditor
                userName={userName}
                batchNo={batchNo}
                userImage={userImage}
                imageOffset={imageOffset}
                imageZoom={imageZoom}
                onNameChange={setUserName}
                onImageUpload={handleImageUpload}
                onMoveImage={moveImage}
                onZoomIn={zoomIn}
                onZoomOut={zoomOut}
                onZoomChange={setImageZoom}
                onPointerDown={onPreviewPointerDown}
                onPointerMove={onPreviewPointerMove}
                onPointerUp={onPreviewPointerUp}
                onResetImage={() => { setImageOffset({ x: 0, y: 0 }); setImageZoom(1); }}
                previewImgRef={previewImgRef}
              />
            </div>

            <div className="lg:col-span-7">
              <PosterPreview
                canvasRef={canvasRef}
                onDownload={downloadPoster}
                onShare={sharePoster}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Skeleton>
  );
}

export default CongratulationsPage;
