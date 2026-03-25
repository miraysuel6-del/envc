import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "vw5rjq9a";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-03-24";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

export async function fetchActiveJobs() {
  try {
    const jobs = await client.fetch(`
      *[_type == "jobPosting" && isActive == true] | order(postedAt desc) {
        _id,
        title,
        slug,
        company,
        type,
        category,
        deadline,
        postedAt,
        description,
        requirements,
        applicationLink
      }
    `);
    return jobs || [];
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return [];
  }
}

export async function fetchJobBySlug(slug: string) {
  const query = `*[_type == "jobPosting" && slug.current == $slug][0]`;
  return client.fetch(query, { slug });
}
