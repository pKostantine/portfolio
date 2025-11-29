'use server';

import { suggestFutureProjects, type SuggestFutureProjectsInput } from '@/ai/flows/suggest-future-projects';
import { getResumeDataUri as getResumeFlow } from '@/ai/flows/get-resume-flow';
import { PORTFOLIO_DATA } from '@/lib/data';

export async function getAISuggestions(formData: { skills: string; interests: string }) {
  const skills = formData.skills.split(',').map(s => s.trim()).filter(Boolean);
  const interests = formData.interests.split(',').map(s => s.trim()).filter(Boolean);

  const input: SuggestFutureProjectsInput = {
    studentName: PORTFOLIO_DATA.name,
    university: PORTFOLIO_DATA.university,
    major: 'Electrical Engineering',
    currentProjects: PORTFOLIO_DATA.projects.map(p => p.title),
    skills: [...new Set([...PORTFOLIO_DATA.skills, ...skills])],
    interests: [...new Set([...PORTFOLIO_DATA.interests, ...interests])],
  };

  try {
    const result = await suggestFutureProjects(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('AI suggestion failed:', error);
    return { success: false, error: 'Failed to get suggestions. Please try again.' };
  }
}

export async function getResumeDataUri() {
  try {
    const dataUri = await getResumeFlow();
    return { success: true, data: dataUri };
  } catch (error) {
    console.error('Failed to get resume data URI:', error);
    return { success: false, error: 'Failed to load resume. Please try again.' };
  }
}
