export const levels = [
  {
    label: 'A1 Beginner',
    value: 'A1',
  },
  {
    label: 'A2 Elementary',
    value: 'A2',
  },
  {
    label: 'B1 Intermediate',
    value: 'B1',
  },
  {
    label: 'B2 Upper-Intermediate',
    value: 'B2',
  },
  {
    label: 'C1 Advanced',
    value: 'C1',
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
