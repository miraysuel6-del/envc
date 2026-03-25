'use client';

import { NextStudio } from 'next-sanity/studio';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { projectId, dataset } from '../../../lib/sanity';
import { schema } from '../../../../sanity/schema';

const config = defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'ENVC Sanity Studio',
  schema,
  plugins: [structureTool()],
});

export default function StudioPage() {
  return <NextStudio config={config} />;
}
