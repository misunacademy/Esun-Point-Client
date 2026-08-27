'use client';

import Image from 'next/image';
import { CheckCircle2, LayoutTemplate } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PosterTemplate } from '@/constants/posterTemplates';

interface TemplateSelectorProps {
  templates: PosterTemplate[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export function TemplateSelector({ templates, selectedIndex, onSelect }: TemplateSelectorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <LayoutTemplate className="w-4 h-4" />
          Choose Template
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        {templates.map((template, index) => (
          <div
            key={template.id}
            role="button"
            tabIndex={0}
            onClick={() => onSelect(index)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(index); } }}
            className={`
              cursor-pointer rounded-lg border-2 overflow-hidden relative aspect-square transition-all
              ${selectedIndex === index ? 'border-green-600 ring-2 ring-green-100' : 'border-slate-100 hover:border-slate-300'}
            `}
          >
            <Image
              src={template.src}
              alt={template.name}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
            {selectedIndex === index && (
              <div className="absolute top-2 right-2 bg-green-600 text-white p-1 rounded-full">
                <CheckCircle2 className="w-3 h-3" />
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
