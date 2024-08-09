export const levels = [
  {
    label: 'A1 Beginner',
    value: 'A1 Beginner',
  },
  {
    label: 'A2 Elementary',
    value: 'A2 Elementary',
  },
  {
    label: 'B1 Intermediate',
    value: 'B1 Intermediate',
  },
  {
    label: 'B2 Upper-Intermediate',
    value: 'B2 Upper-Intermediate',
  },
  {
    label: 'C1 Advanced',
    value: 'C1 Advanced',
  },
  {
    label: 'C2 Proficient',
    value: 'C2 Proficient',
  },
];

export const prices = [
  {
    label: '10 $',
    value: '10',
  },
  {
    label: '20 $',
    value: '20',
  },
  {
    label: '30 $',
    value: '30',
  },
  {
    label: '40 $',
    value: '40',
  },
];

export const formatLanguagesForSelect = languages => {
  return languages.map(language => ({ label: language._id, value: language._id }));
};
