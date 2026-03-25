export const jobPosting = {
  name: 'jobPosting',
  title: 'Job Posting',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'İlan Başlığı',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'company',
      title: 'Şirket Adı',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Çalışma Tipi',
      type: 'string',
      options: {
        list: [
          { title: 'Staj', value: 'Internship' },
          { title: 'Tam Zamanlı', value: 'Full-time' },
          { title: 'Yarı Zamanlı', value: 'Part-time' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'VC', value: 'VC' },
          { title: 'Startup', value: 'Startup' },
          { title: 'Tech', value: 'Tech' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'İlan Detayları',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'requirements',
      title: 'Aranan Nitelikler',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'applicationLink',
      title: 'Başvuru Linki',
      type: 'url',
    },
    {
      name: 'deadline',
      title: 'Son Başvuru Tarihi',
      type: 'date',
    },
    {
      name: 'isActive',
      title: 'İlan yayında mı?',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'postedAt',
      title: 'İlan Tarihi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
};
