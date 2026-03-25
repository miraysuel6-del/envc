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
  const query = `*[_type == "jobPosting" && slug.current == $slug][0] {
    _id,
    title,
    company,
    type,
    category,
    description,
    requirements,
    applicationLink,
    "slug": slug.current
  }`
  return client.fetch(query, { slug })
}

export async function fetchAllJobSlugs() {
  const query = `*[_type == "jobPosting" && isActive == true] {
    "slug": slug.current
  }`;
  if (projectId === 'vw5rjq9a' && !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return [];
  }
  try {
    const jobs = await client.fetch(query);
    return jobs || [];
  } catch (error) {
    console.error("Failed to fetch slugs:", error);
    return [];
  }
}
