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
      branch: 'central',
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
      label: 'Jesuits',
      info: 'Order manipulating politics.',
      branch: 'occult',
      icon: `${BASE_URL}assets/icons/jesuits.svg`,
    },
  },
  {
    id: '5',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Freemasonry',
      info: 'Fraternal organization with occult ties.',
      branch: 'occult',
    },
  },
  {
    id: '6',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Illuminati',
      info: 'Society orchestrating events.',
      branch: 'occult',
      icon: `${BASE_URL}assets/icons/illuminati.svg`,
    },
  },
  {
    id: '7',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Knights of Malta',
      info: 'Military order with intelligence connections.',
      branch: 'occult',
    },
  },
  {
    id: '8',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Black Nobility',
      info: 'Aristocratic families controlling systems.',
      branch: 'occult',
    },
  },
  {
    id: '9',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Baal Worship',
      info: 'Ancient deity worship in modern rituals.',
      branch: 'occult',
    },
  },
  {
    id: '10',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Human Sacrifice', info: 'Ritualistic practices for power.', branch: 'occult' },
  },
  {
    id: '11',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Adrenochrome', info: 'Substance harvested for elite use.', branch: 'occult' },
  },
  // Military & Intelligence
  {
    id: '12',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Military & Intelligence',
      info: 'Agencies for covert operations.',
      branch: 'military',
    },
  },
  {
    id: '13',
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
    id: '14',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'NSA', info: 'Mass surveillance agency.', branch: 'military' },
  },
  {
    id: '15',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'FBI', info: 'Domestic control agency.', branch: 'military' },
  },
  {
    id: '16',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'MK-Ultra', info: 'Mind control program.', branch: 'military' },
  },
  {
    id: '17',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Operation Mockingbird',
      info: 'Media influence operation.',
      branch: 'military',
    },
  },
  {
    id: '18',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'D.U.M.B.s', info: 'Underground military bases.', branch: 'military' },
  },
  {
    id: '19',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'HAARP', info: 'Weather modification program.', branch: 'military' },
  },
  {
    id: '50',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Waco Assault',
      info: 'Federal assault on Branch Davidians.',
      branch: 'military',
    },
  },
  {
    id: '51',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Ruby Ridge', info: 'Federal assault incident.', branch: 'military' },
  },
  {
    id: '52',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Pulse Nightclub Shooting',
      info: 'Mass shooting linked to MK Ultra.',
      branch: 'military',
    },
  },
  {
    id: '53',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Parkland Shooting',
      info: 'Mass shooting linked to MK Ultra.',
      branch: 'military',
    },
  },
  {
    id: '54',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Aurora Shooting',
      info: 'Mass shooting linked to MK Ultra.',
      branch: 'military',
    },
  },
  {
    id: '55',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Sandy Hook Shooting',
      info: 'Mass shooting linked to MK Ultra.',
      branch: 'military',
    },
  },
  {
    id: '56',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Columbine Shooting',
      info: 'Mass shooting linked to MK Ultra.',
      branch: 'military',
    },
  },
  // Financial Control
  {
    id: '20',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Financial Control',
      info: 'Systems for debt and economic control.',
      branch: 'financial',
    },
  },
  {
    id: '21',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Federal Reserve (1913)',
      info: 'Central bank for manipulation.',
      branch: 'financial',
    },
  },
  {
    id: '22',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'IMF', info: 'Global debt control.', branch: 'financial' },
  },
  {
    id: '23',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Rothschilds',
      info: 'Banking family controlling finance.',
      branch: 'financial',
    },
  },
  {
    id: '24',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Petrodollar', info: 'Dollar dominance in oil.', branch: 'financial' },
  },
  {
    id: '25',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'War Debt', info: 'Wars for profit and debt.', branch: 'financial' },
  },
  // Political Control
  {
    id: '26',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Political Control',
      info: 'Manipulated governments and events.',
      branch: 'political',
    },
  },
  {
    id: '27',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Cabal', info: 'Secret group controlling leaders.', branch: 'political' },
  },
  {
    id: '28',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'G7', info: 'Economies with globalist agendas.', branch: 'political' },
  },
  {
    id: '29',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'JFK (1963)', info: 'Assassination against deep state.', branch: 'political' },
  },
  {
    id: '30',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'False Flags', info: 'Staged events for justification.', branch: 'political' },
  },
  {
    id: '31',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'New World Order', info: 'Plan for global government.', branch: 'political' },
  },
  {
    id: '57',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: '1993 WTC Attack', info: 'False flag event.', branch: 'political' },
  },
  {
    id: '58',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: '2001 WTC Attack', info: 'False flag event.', branch: 'political' },
  },
  {
    id: '59',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Anthrax Attacks',
      info: 'False flag on media and Senate.',
      branch: 'political',
    },
  },
  {
    id: '60',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Patriot Act',
      info: 'Pre-prepared legislation post-9/11.',
      branch: 'political',
    },
  },
  {
    id: '61',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Oklahoma City Bombing (1995)',
      info: 'False flag bombing.',
      branch: 'political',
    },
  },
  // Extraterrestrial & Tech
  {
    id: '32',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Extraterrestrial & Tech',
      info: 'Hidden technologies and aliens.',
      branch: 'extraterrestrial',
    },
  },
  {
    id: '33',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Roswell (1947)', info: 'UFO crash cover-up.', branch: 'extraterrestrial' },
  },
  {
    id: '34',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Area 51', info: 'Secret base for UFOs.', branch: 'extraterrestrial' },
  },
  {
    id: '35',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Majestic-12', info: 'Group handling ET matters.', branch: 'extraterrestrial' },
  },
  {
    id: '36',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Secret Space Program',
      info: 'Hidden space technologies.',
      branch: 'extraterrestrial',
    },
  },
  {
    id: '37',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Anunnaki',
      info: 'Ancient aliens creating humanity.',
      branch: 'extraterrestrial',
    },
  },
  {
    id: '38',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Archons', info: 'Entities controlling minds.', branch: 'extraterrestrial' },
  },
  // Media & Population Control
  {
    id: '39',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Media & Population Control',
      info: 'Tools for perception and health manipulation.',
      branch: 'media',
    },
  },
  {
    id: '40',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Hollywood', info: 'Industry for mind control.', branch: 'media' },
  },
  {
    id: '41',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Television', info: 'Propaganda tool.', branch: 'media' },
  },
  {
    id: '42',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Big Pharma', info: 'Health manipulation industry.', branch: 'media' },
  },
  {
    id: '43',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Chemtrails', info: 'Aerial spraying for control.', branch: 'media' },
  },
  {
    id: '44',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Vaccines', info: 'Used for depopulation.', branch: 'media' },
  },
  // Religious & Bloodlines
  {
    id: '45',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Religious & Bloodlines',
      info: 'Ancient lineages and control.',
      branch: 'religious',
    },
  },
  {
    id: '46',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Merovingian Bloodline', info: 'Royal bloodline.', branch: 'religious' },
  },
  {
    id: '47',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Khazarian Mafia',
      info: 'Secret cabal from ancient origins.',
      branch: 'religious',
    },
  },
  {
    id: '48',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Zionism', info: 'Movement in conspiracies.', branch: 'religious' },
  },
  {
    id: '49',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Mossad', info: 'Israeli intelligence ops.', branch: 'religious' },
  },
  {
    id: '72',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Sumerians',
      info: 'Ancient civilization tied to Anunnaki.',
      branch: 'religious',
    },
  },
  {
    id: '73',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Phoenicians',
      info: 'Ancient traders linked to Baal worship.',
      branch: 'religious',
    },
  },
  {
    id: '74',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Canaanites',
      info: 'Ancient people with ritual practices.',
      branch: 'religious',
    },
  },
  // Trump Era
  {
    id: '62',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Trump Era', info: 'QAnon eschatological endpoint.', branch: 'trump' },
  },
  {
    id: '63',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'QAnon', info: 'Movement against deep state.', branch: 'trump' },
  },
  {
    id: '75',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'The Great Awakening', info: 'Mass awareness of deep state.', branch: 'trump' },
  },
  {
    id: '76',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Operation Mjölnir',
      info: 'Alleged operation against deep state.',
      branch: 'trump',
    },
  },
  // Additional from image
  {
    id: '64',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Declassified Govt Projects',
      info: 'Hidden operations revealed.',
      branch: 'military',
    },
  },
  {
    id: '65',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Elitist Occultism', info: 'Elite occult practices.', branch: 'occult' },
  },
  {
    id: '66',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Aleister Crowley',
      info: 'Occultist influencing modern secret societies.',
      branch: 'occult',
    },
  },
  {
    id: '67',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Thelema', info: 'Religious philosophy founded by Crowley.', branch: 'occult' },
  },
  {
    id: '68',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Queen Elizabeth II',
      info: 'Alleged shapeshifter and deep state figure.',
      branch: 'occult',
    },
  },
  {
    id: '69',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Windsors', info: 'Royal family tied to global control.', branch: 'occult' },
  },
  {
    id: '70',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: { label: 'Amerois Castle', info: 'Site of alleged elite rituals.', branch: 'occult' },
  },
  {
    id: '71',
    type: 'CustomNode',
    position: { x: 0, y: 0 },
    data: {
      label: 'Arizona Wilder',
      info: 'Whistleblower on reptilian shapeshifters.',
      branch: 'occult',
    },
  },
];
