'use server';

/**
 * @fileOverview This file defines a Genkit flow that suggests future electrical engineering projects based on a student's current skills and projects.
 *
 * - suggestFutureProjects - An async function that takes a student's background and suggests future projects.
 * - SuggestFutureProjectsInput - The input type for the suggestFutureProjects function.
 * - SuggestFutureProjectsOutput - The return type for the suggestFutureProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestFutureProjectsInputSchema = z.object({
  studentName: z.string().describe('The name of the student.'),
  university: z.string().describe('The university the student attends.'),
  major: z.string().describe('The student major.'),
  currentProjects: z
    .array(z.string())
    .describe("A list of the student's current projects."),
  skills: z.array(z.string()).describe('A list of the student skills.'),
  interests: z.array(z.string()).describe('A list of the student interests.'),
});

export type SuggestFutureProjectsInput = z.infer<
  typeof SuggestFutureProjectsInputSchema
>;

const SuggestFutureProjectsOutputSchema = z.object({
  suggestedProjects: z
    .array(z.string())
    .describe('A list of suggested future projects.'),
});

export type SuggestFutureProjectsOutput = z.infer<
  typeof SuggestFutureProjectsOutputSchema
>;

export async function suggestFutureProjects(
  input: SuggestFutureProjectsInput
): Promise<SuggestFutureProjectsOutput> {
  return suggestFutureProjectsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestFutureProjectsPrompt',
  input: {schema: SuggestFutureProjectsInputSchema},
  output: {schema: SuggestFutureProjectsOutputSchema},
  prompt: `You are an AI assistant helping electrical engineering students discover potential projects.

  Given the following information about a student, suggest some future projects that align with their skills and interests.

  Student Name: {{{studentName}}}
  University: {{{university}}}
  Major: {{{major}}}
  Current Projects: {{#each currentProjects}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  Skills: {{#each skills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  Interests: {{#each interests}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  Please suggest a few projects that would be a good fit for this student. Consider projects that build upon their existing skills and interests, and also introduce them to new areas within electrical engineering.
  Be specific and provide project ideas that are reasonably achievable for a student. Format as a numbered list.
  `,
});

const suggestFutureProjectsFlow = ai.defineFlow(
  {
    name: 'suggestFutureProjectsFlow',
    inputSchema: SuggestFutureProjectsInputSchema,
    outputSchema: SuggestFutureProjectsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
