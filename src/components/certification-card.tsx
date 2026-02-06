'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface CertificationCardProps {
  src: string;
  alt: string;
}

export default function CertificationCard({ src, alt }: CertificationCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            <Image src={src} alt={alt} width={500} height={350} className="rounded-lg" />
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-transparent border-none shadow-none">
        <Image src={src} alt={alt} width={1200} height={800} />
        <DialogClose className="absolute -top-8 -right-8 text-white hover:text-gray-300">
          <X className="h-8 w-8" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
