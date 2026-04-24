'use client';

import Image from 'next/image';
import type { ElementType } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { Cpu, Car, Building, CircuitBoard, Lightbulb, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import ImageCarousel from './image-carousel';

const icons: { [key: string]: LucideIcon } = {
  Cpu,
  Car,
  Building,
  CircuitBoard,
  Lightbulb,
};

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: ImagePlaceholder;
  icon: string;
  link?: string;
  useCarousel?: boolean;
  carouselImages?: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const Icon = icons[project.icon];

  const card = (
    <Card className="w-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col group h-full">
      {project.useCarousel && project.carouselImages ? (
        <CardContent className="p-0">
            <ImageCarousel images={project.carouselImages} />
        </CardContent>
      ) : project.image && (
        <CardContent className="p-0">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={project.image.imageUrl}
              alt={`Image for ${project.title}`}
              data-ai-hint={project.image.imageHint}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </CardContent>
      )}
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="p-3 rounded-md bg-accent/10 text-accent flex-shrink-0">
          {Icon && <Icon className="h-6 w-6" />}
        </div>
        <div className="flex-1">
          <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
          <CardDescription>{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 flex flex-wrap gap-2 border-t mt-auto bg-card">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );

  if (project.link) {
    return <Link href={project.link} className="flex">{card}</Link>
  }

  return card;
}
