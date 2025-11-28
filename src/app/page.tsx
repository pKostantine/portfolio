import Image from 'next/image';
import { Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PORTFOLIO_DATA } from '@/lib/data';
import ProjectCard from '@/components/project-card';
import AiSuggestionForm from '@/components/ai-suggestion-form';
import { Lightbulb } from 'lucide-react';

export default function Home() {

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <main className="flex-1">
        <section id="hero" className="w-full py-20 md:py-32 lg:py-40 bg-card border-b">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
                  {PORTFOLIO_DATA.name}
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl font-light">
                  {PORTFOLIO_DATA.title} at {PORTFOLIO_DATA.university}
                </p>
                <p className="max-w-lg text-foreground/80 md:text-lg">
                  {PORTFOLIO_DATA.about}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                   <Button asChild variant="outline" size="lg">
                     <a href={PORTFOLIO_DATA.contact.resumeUrl}>
                       <FileText className="mr-2 h-5 w-5" />
                       View Resume
                     </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                     <a href={`mailto:${PORTFOLIO_DATA.contact.email}`}>
                       <Mail className="mr-2 h-5 w-5" />
                       Email
                     </a>
                  </Button>
                  <Button asChild variant_outline" size="lg">
                     <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer">
                       <Linkedin className="mr-2 h-5 w-5" />
                       LinkedIn
                     </a>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/Pierre Kostantine PFP.png"
                  alt={`Portrait of ${PORTFOLIO_DATA.name}`}
                  data-ai-hint="man portrait"
                  width={350}
                  height={350}
                  priority
                  className="rounded-full aspect-square object-cover object-[center_20%] border-8 border-primary/10 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">My Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of projects that showcase my skills in hardware design, embedded systems, and robotics.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-1 md:gap-12 lg:grid-cols-2 mt-12">
              {PORTFOLIO_DATA.projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-12 md:my-24 max-w-4xl mx-auto" />

        <section id="ai-suggestions" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  <Lightbulb className="inline-block mr-2 h-4 w-4 text-accent" />
                  AI-Powered
                </div>
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">
                  Future Project Ideas
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Based on my current skills and interests, this AI tool suggests potential future projects for me to explore.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-3xl mt-12">
              <AiSuggestionForm />
            </div>
          </div>
        </section>

      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
