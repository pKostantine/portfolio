'use server';

/**
 * @fileOverview A simple flow to retrieve the resume PDF as a data URI.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import fs from 'fs';
import path from 'path';

export async function getResumeDataUri(): Promise<string> {
  return getResumeFlow();
}

const getResumeFlow = ai.defineFlow(
  {
    name: 'getResumeFlow',
    inputSchema: z.void(),
    outputSchema: z.string(),
  },
  async () => {
    const filePath = path.join(process.cwd(), 'src', 'assets', 'Pierre_Kostantine_Resume_November_2025.pdf');
    try {
      const fileBuffer = fs.readFileSync(filePath);
      const base64 = fileBuffer.toString('base64');
      return `data:application/pdf;base64,${base64}`;
    } catch (error) {
      console.error('Failed to read resume file:', error);
      throw new Error('Could not load resume file.');
    }
  }
);
