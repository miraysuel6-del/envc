import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-24';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false since job postings can be updated dynamically
});
