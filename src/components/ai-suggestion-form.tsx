'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { getAISuggestions } from '@/app/actions';
import type { SuggestFutureProjectsOutput } from '@/ai/flows/suggest-future-projects';
import { Loader2, Wand2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { PORTFOLIO_DATA } from '@/lib/data';

const formSchema = z.object({
  skills: z.string().optional(),
  interests: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function AiSuggestionForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SuggestFutureProjectsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: '',
      interests: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    setResult(null);

    const response = await getAISuggestions(values);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: response.error || 'An unknown error occurred.',
      });
    }

    setLoading(false);
  };

  return (
    <Card className="p-6 md:p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Skills</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Machine Learning, Quantum Computing"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    My base skills are: {PORTFOLIO_DATA.skills.join(', ')}.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Interests</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Sustainable Energy, Medical Devices"
                      {...field}
                    />
                  </FormControl>
                   <FormDescription>
                    My base interests are: {PORTFOLIO_DATA.interests.join(', ')}.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full sm:w-auto">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Suggest Projects
              </>
            )}
          </Button>
        </form>
      </Form>

      {loading && (
        <div className="mt-8 text-center" aria-live="polite">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
          <p className="mt-2 text-muted-foreground">The AI is thinking, please wait...</p>
        </div>
      )}

      {result && (
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-headline font-bold">Suggested Projects:</h3>
          <Card>
            <CardContent className="p-6">
              <ul className="list-decimal pl-5 space-y-2 text-foreground/90">
                {result.suggestedProjects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </Card>
  );
}
