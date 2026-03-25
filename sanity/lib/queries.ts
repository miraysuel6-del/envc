import { groq } from 'next-sanity';

export const activeJobPostingsQuery = groq`
  *[_type == "jobPosting" && isActive == true] | order(postedAt desc) {
    _id,
    title,
    slug,
    company,
    type,
    category,
    deadline,
    postedAt
  }
`;

export const jobPostingBySlugQuery = groq`
  *[_type == "jobPosting" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    company,
    type,
    category,
    description,
    requirements,
    applicationLink,
    deadline,
    isActive,
    postedAt
  }
`;

export interface JobPostingPreview {
  _id: string;
  title: string;
  slug: { current: string };
  company: string;
  type: string;
  category: string;
  deadline: string | null;
  postedAt: string;
}

export interface JobPostingDetails extends JobPostingPreview {
  description: string;
  requirements: string[] | null;
  applicationLink: string | null;
  isActive: boolean;
}
