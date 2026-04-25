'use client';


import Image from 'next/image';
import { Linkedin, FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PORTFOLIO_DATA } from '@/lib/data';
import ProjectCard from '@/components/project-card';
import CertificationCard from '@/components/certification-card';
import { Lightbulb } from 'lucide-react';


export default function Home() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


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
                     <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer">
                       <Linkedin className="mr-2 h-5 w-5" />
                       LinkedIn
                     </a>
                  </Button>
                  <Button size="lg" onClick={handleScrollToContact}>
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/imgs/PierreKostantinePFP.png"
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

        {/* <Separator className="my-6 md:my-12 max-w-4xl mx-auto" /> */}
       
        

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">My Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of my personal projects.
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

        <Separator className="my-6 md:my-12 max-w-4xl mx-auto" />

        <section id="contact" className="w-full py-8 md:py-12">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-1">
                <h2 className="text-2xl font-headline font-bold tracking-tighter sm:text-3xl text-primary">Contact Me</h2>
                {/* <p className="max-w-[600px] text-muted-foreground text-sm sm:text-base">
                  I'm always open to new opportunities.
                </p> */}
              </div>
              <div className="pt-2 text-sm sm:text-base flex flex-col sm:flex-row gap-x-6 gap-y-2">
                  <p>
                    <strong>Email:</strong> <a href="mailto:pierrek3419@gmail.com" className="underline hover:text-primary">pierrek3419@gmail.com</a>
                  </p>
                  <p>
                    <strong>Phone:</strong> (647) 504-3982
                  </p>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-6 md:my-12 max-w-4xl mx-auto" />

        <section id="certifications" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">My Certifications and Achievements</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:gap-12 lg:grid-cols-2 mt-12">
              <CertificationCard src="/imgs/CertificateRevitElectrical.png" alt="Revit Electrical Certificate" />
              <CertificationCard src="/imgs/F2025_Deans_List.png" alt="Dean's List Achievement" />
            </div>
          </div>
        </section>

        <Separator className="my-6 md:my-12 max-w-4xl mx-auto" />

      </main>
    </div>
  );
}
