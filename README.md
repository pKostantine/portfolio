# Pierre Kostantine — Engineering Portfolio

Personal engineering portfolio for **Pierre Kostantine**, an Electrical Engineering student at Toronto Metropolitan University.

The site highlights hands-on work across digital hardware, FPGA design, embedded systems, analog electronics, robotics, and electrical design, with dedicated project pages, technical write-ups, images, certifications, and a résumé.

**Live site:** [pierrek.ca](https://pierrek.ca)

## Featured projects

The portfolio currently includes:

- **Fixed-Point MAC Unit for Machine Learning Inference** — parameterised Verilog MAC datapath, verification, FPGA synthesis, timing analysis, and hardware testing.
- **FPGA Implementation of an 8-Bit Processor** — VHDL processor architecture implemented and verified on an Altera Cyclone II DE2 FPGA.
- **4-Stage MOSFET Amplifier** — multi-stage analog amplifier designed, calculated, and validated with SPICE simulation.
- **Autonomous Line-Following Car** — embedded control system using analog sensing and real-time motor control.
- **Revit Electrical Design** — coordinated power, lighting, panels, circuits, conduits, schedules, and documentation in Revit.

Each project has its own route with expanded technical details and supporting media.

## Tech stack

- **Next.js 15**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Radix UI**
- **Firebase App Hosting**
- **Google Genkit / Gemini** for AI-assisted project tooling

## Run locally

### Prerequisites

- Node.js
- npm

### Setup

```bash
git clone https://github.com/pKostantine/portfolio.git
cd portfolio
npm install
```

Copy the environment template:

```bash
cp .env.example .env
```

If you want to use the Gemini-powered features, add a valid key:

```env
GEMINI_API_KEY=your_key_here
```

Start the development server:

```bash
npm run dev
```

The development server runs on **http://localhost:9002**.

## Useful commands

```bash
npm run dev        # start the local development server
npm run build      # create a production build
npm run start      # run the production server
npm run typecheck  # run TypeScript checks
```

## Project structure

```text
src/
├── app/
│   ├── page.tsx                       main portfolio page
│   ├── fixed-point-mac-unit-project/ project detail page
│   ├── processor-project/            project detail page
│   ├── mosfet-amplifier-project/     project detail page
│   ├── car-project/                  project detail page
│   ├── revit-project/                project detail page
│   └── resume/                       résumé route
├── components/                       reusable UI and project components
├── lib/                              portfolio data and supporting utilities
└── ai/                               Genkit / Gemini flows

public/                                images and static assets
apphosting.yaml                        Firebase App Hosting configuration
```

## Content model

Most portfolio content is centralized in `src/lib/data.ts`, including:

- profile information
- skills and interests
- project titles and descriptions
- project tags
- project routes
- project image galleries

This keeps the main page and project cards driven by shared structured data rather than duplicated copy.

## Deployment

The repository includes `apphosting.yaml` for deployment with **Firebase App Hosting**. Production configuration and secrets should be supplied through the deployment environment rather than committed to the repository.

## Status

This portfolio is actively maintained as new engineering projects, certifications, and experience are added.
