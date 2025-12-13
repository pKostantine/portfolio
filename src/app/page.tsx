'use client';

import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ProjectCard from '@/components/project-card';
import ContactForm from '@/components/contact-form';
import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12">
      <div className="w-full max-w-6xl">
        <header className="flex flex-col sm:flex-row items-center justify-between gap-8 py-8">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/Pierre Kostantine PFP.png" alt={PORTFOLIO_DATA.name} />
              <AvatarFallback>{PORTFOLIO_DATA.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-primary font-headline">
                {PORTFOLIO_DATA.name}
              </h1>
              <p className="text-lg text-muted-foreground">{PORTFOLIO_DATA.title}</p>
              <p className="text-sm text-muted-foreground">{PORTFOLIO_DATA.university}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline">
              <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button onClick={handleScrollToContact}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </header>

        <Separator className="my-8" />

        <section id="about" className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-primary font-headline mb-4">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">{PORTFOLIO_DATA.about}</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <section id="skills" className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-primary font-headline mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {PORTFOLIO_DATA.skills.map(skill => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </section>
          <section id="interests">
            <h2 className="text-2xl font-bold tracking-tight text-primary font-headline mb-4">Interests</h2>
            <div className="flex flex-wrap gap-2">
              {PORTFOLIO_DATA.interests.map(interest => (
                <Badge key={interest} variant="secondary">{interest}</Badge>
              ))}
            </div>
          </section>
        </div>

        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-primary font-headline mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.projects.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-primary font-headline mb-4">Contact Me</h2>
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
