// Use BASE_URL from import.meta.env or fallback to empty string for local dev
const BASE_URL = import.meta.env.BASE_URL || '';

export const initialNodes = [
  {
    id: '1',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Deep State',
      info: 'Central hidden network controlling global affairs.',
      icon: `${BASE_URL}assets/icons/default.svg`,
    },
  },
  // Occult & Secret Societies
  {
    id: '2',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Occult & Secret Societies',
      info: 'Groups using hidden knowledge and rituals.',
      branch: 'occult',
    },
  },
  {
    id: '3',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Vatican',
      info: 'Religious authority linked to global control.',
      branch: 'occult',
      icon: `${BASE_URL}assets/icons/default.svg`,
    },
  },
  {
    id: '4',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Illuminati',
      info: 'Society orchestrating events.',
      branch: 'occult',
      icon: `${BASE_URL}assets/icons/illuminati.svg`,
    },
  },
  // Military & Intelligence
  {
    id: '5',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Military & Intelligence',
      info: 'Agencies for covert operations.',
      branch: 'military',
    },
  },
  {
    id: '6',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'CIA (1947)',
      info: 'Agency linked to mind control.',
      branch: 'military',
      icon: `${BASE_URL}assets/icons/cia.svg`,
    },
  },
  {
    id: '7',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'MK-Ultra',
      info: 'Mind control program.',
      branch: 'military',
      icon: `${BASE_URL}assets/icons/default.svg`,
    },
  },
  // Financial Control
  {
    id: '8',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Financial Control',
      info: 'Systems for debt and economic control.',
      branch: 'financial',
    },
  },
  {
    id: '9',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Federal Reserve (1913)',
      info: 'Central bank for manipulation.',
      branch: 'financial',
      icon: `${BASE_URL}assets/icons/default.svg`,
    },
  },
  {
    id: '10',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Rothschilds',
      info: 'Banking family controlling finance.',
      branch: 'financial',
      icon: `${BASE_URL}assets/icons/default.svg`,
    },
  },
  // Political Control
  {
    id: '11',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Political Control',
      info: 'Manipulated governments and events.',
      branch: 'political',
    },
  },
  {
    id: '12',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Cabal',
      info: 'Secret group controlling leaders.',
      branch: 'political',
      icon: `${BASE_URL}assets/icons/default.svg`,
    },
  },
  {
    id: '13',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'False Flags',
      info: 'Staged events for justification.',
      branch: 'political',
    },
  },
  {
    id: '14',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: '2001 WTC Attack',
      info: 'False flag event.',
      branch: 'political',
      icon: `${BASE_URL}assets/icons/default.svg`,
    },
  },
  // Extraterrestrial & Tech
  {
    id: '15',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Extraterrestrial & Tech',
      info: 'Hidden technologies and aliens.',
      branch: 'extraterrestrial',
    },
  },
  {
    id: '16',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Roswell (1947)',
      info: 'UFO crash cover-up.',
      branch: 'extraterrestrial',
      icon: `${BASE_URL}assets/icons/default.svg`,
    },
  },
  {
    id: '17',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Area 51',
      info: 'Secret base for UFOs.',
      branch: 'extraterrestrial',
      icon: `${BASE_URL}assets/icons/default.svg`,
    },
  },
  // Media & Population Control
  {
    id: '18',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Media & Population Control',
      info: 'Tools for perception and health manipulation.',
      branch: 'media',
    },
  },
  {
    id: '19',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Hollywood',
      info: 'Industry for mind control.',
      branch: 'media',
      icon: `${BASE_URL}assets/icons/default.svg`,
    },
  },
  {
    id: '20',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Chemtrails',
      info: 'Aerial spraying for control.',
      branch: 'media',
      icon: `${BASE_URL}assets/icons/default.svg`,
    },
  },
];
