// use server'
'use server';

/**
 * @fileOverview Generates compelling narratives for donation campaigns using AI.
 *
 * - generateDonationStory - A function that generates donation stories.
 * - GenerateDonationStoryInput - The input type for the generateDonationStory function.
 * - GenerateDonationStoryOutput - The return type for the generateDonationStory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDonationStoryInputSchema = z.object({
  facts: z
    .string()
    .describe(
      'A few facts about the donation campaign to generate a compelling narrative from.'
    ),
});
export type GenerateDonationStoryInput = z.infer<typeof GenerateDonationStoryInputSchema>;

const GenerateDonationStoryOutputSchema = z.object({
  stories: z
    .array(z.string())
    .describe('An array of 2-3 generated donation stories.'),
});
export type GenerateDonationStoryOutput = z.infer<typeof GenerateDonationStoryOutputSchema>;

export async function generateDonationStory(input: GenerateDonationStoryInput): Promise<GenerateDonationStoryOutput> {
  return generateDonationStoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDonationStoryPrompt',
  input: {schema: GenerateDonationStoryInputSchema},
  output: {schema: GenerateDonationStoryOutputSchema},
  prompt: `You are an AI story generator specializing in creating compelling narratives for donation campaigns.

You will use the following facts to generate 2-3 short story options to attract and retain user interest.

Facts: {{{facts}}}`,
});

const generateDonationStoryFlow = ai.defineFlow(
  {
    name: 'generateDonationStoryFlow',
    inputSchema: GenerateDonationStoryInputSchema,
    outputSchema: GenerateDonationStoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
