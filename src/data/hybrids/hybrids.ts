import { Hybrid } from './hybrid-types';

export const hybrids: Hybrid[] = [
  // ============================================================
  // TaylorMade Qi35
  // ============================================================
  {
    id: 'taylormade-qi35-hybrid',
    name: 'TaylorMade Qi35',
    manufacturer: 'taylormade',
    category: 'hybrid',
    year: 2025,
    msrp: 299,
    currency: 'USD',
    imageUrl: '/images/hybrids/taylormade-qi35-hybrid.png',
    productUrl: 'https://www.taylormadegolf.com/qi35-rescue/qi35-rescue.html',
    playerType: ['low', 'mid'],
    description:
      'The TaylorMade Qi35 hybrid combines a compact head shape with a forged steel face for exceptional ball speed and distance. Its refined sole geometry and center of gravity placement deliver a penetrating ball flight with outstanding workability for skilled players.',
    pros: [
      'Exceptional ball speed from the forged steel face',
      'Penetrating, controllable ball flight',
      'Clean turf interaction from refined sole geometry',
      'Premium feel and acoustics at impact',
    ],
    cons: [
      'Less forgiving than the MAX model on off-center strikes',
      'Higher price point at $299',
      'May be too low-launching for slower swing speeds',
    ],
    lastUpdated: '2025-02-19',
    specifications: {
      lofts: [17, 19, 22, 25, 28],
      headDesign: 'mid',
      adjustable: true,
      adjustabilityFeatures: ['Loft sleeve (+/- 2 degrees)', '12-position adjustability'],
      stockShafts: ['Fujikura Speeder NX 65 (graphite)', 'KBS Tour 105 (steel)'],
      keyTechnologies: [
        'Qi Forged Steel Face',
        'Twist Face Technology',
        'Thru-Slot Speed Pocket',
        'Inverted Cone Technology',
        'Multi-Material Construction',
      ],
    },
    scores: {
      forgiveness: 8.5,
      distance: 9.2,
      versatility: 8.8,
      turfInteraction: 8.6,
      value: 8.0,
    },
    // 8.5*0.25 + 9.2*0.20 + 8.8*0.25 + 8.6*0.15 + 8.0*0.15 = 2.125 + 1.84 + 2.2 + 1.29 + 1.2 = 8.655 -> 8.7
    overallScore: 8.7,
  },

  // ============================================================
  // TaylorMade Qi35 MAX
  // ============================================================
  {
    id: 'taylormade-qi35-max-hybrid',
    name: 'TaylorMade Qi35 MAX',
    manufacturer: 'taylormade',
    category: 'hybrid',
    year: 2025,
    msrp: 299,
    currency: 'USD',
    imageUrl: '/images/hybrids/taylormade-qi35-max-hybrid.png',
    productUrl: 'https://www.taylormadegolf.com/qi35-max-rescue/qi35-max-rescue.html',
    playerType: ['mid', 'high'],
    description:
      'The TaylorMade Qi35 MAX hybrid is the ultimate forgiveness package with an oversized head profile and deeper center of gravity. Designed to launch the ball high and land softly, it is the ideal iron-replacement for golfers seeking maximum confidence and consistency.',
    pros: [
      'Maximum forgiveness across the entire face',
      'High, easy launch even from difficult lies',
      'Oversized head inspires confidence at address',
      'Excellent distance retention on off-center hits',
      'Smooth turf interaction with wide sole',
    ],
    cons: [
      'Limited shot-shaping ability due to oversized head',
      'Higher price point at $299',
      'May produce too much spin for faster swing speeds',
    ],
    lastUpdated: '2025-02-19',
    specifications: {
      lofts: [19, 22, 25, 28, 31],
      headDesign: 'oversized',
      adjustable: true,
      adjustabilityFeatures: ['Loft sleeve (+/- 2 degrees)', '12-position adjustability'],
      stockShafts: ['Fujikura Speeder NX 55 (graphite)', 'KBS Tour Lite 95 (steel)'],
      keyTechnologies: [
        'Qi Forged Steel Face',
        'Twist Face Technology',
        'Thru-Slot Speed Pocket',
        'Inverted Cone Technology',
        'Heavy Tungsten Weighting',
        'Oversized Profile Design',
      ],
    },
    scores: {
      forgiveness: 9.5,
      distance: 8.8,
      versatility: 8.0,
      turfInteraction: 9.0,
      value: 8.0,
    },
    // 9.5*0.25 + 8.8*0.20 + 8.0*0.25 + 9.0*0.15 + 8.0*0.15 = 2.375 + 1.76 + 2.0 + 1.35 + 1.2 = 8.685 -> 8.7
    overallScore: 8.7,
  },

  // ============================================================
  // TaylorMade Stealth 2
  // ============================================================
  {
    id: 'taylormade-stealth-2-hybrid',
    name: 'TaylorMade Stealth 2',
    manufacturer: 'taylormade',
    category: 'hybrid',
    year: 2023,
    msrp: 249,
    currency: 'USD',
    imageUrl: '/images/hybrids/taylormade-stealth-2-hybrid.png',
    productUrl: 'https://www.taylormadegolf.com/stealth-2-rescue/stealth-2-rescue.html',
    playerType: ['low', 'mid'],
    description:
      'The TaylorMade Stealth 2 hybrid offers a versatile mid-size profile backed by V Steel sole technology for clean turf interaction. With its lower center of gravity and optimized face construction, it delivers a strong combination of distance and control at a more accessible price point.',
    pros: [
      'V Steel sole cuts cleanly through any lie',
      'Strong distance performance from steel face',
      'Good blend of workability and forgiveness',
      'More affordable than the Qi35 line',
    ],
    cons: [
      'Previous-generation design lacks newest technologies',
      'Not as forgiving as the latest MAX models',
      'Sound at impact can be slightly metallic',
    ],
    lastUpdated: '2025-02-19',
    specifications: {
      lofts: [17, 19, 22, 25, 28],
      headDesign: 'mid',
      adjustable: true,
      adjustabilityFeatures: ['Loft sleeve (+/- 2 degrees)'],
      stockShafts: ['Fujikura Speeder NX 60 (graphite)', 'KBS Tour 90 (steel)'],
      keyTechnologies: [
        'V Steel Sole Design',
        'Twist Face Technology',
        'Thru-Slot Speed Pocket',
        'Multi-Material Construction',
      ],
    },
    scores: {
      forgiveness: 8.3,
      distance: 8.7,
      versatility: 8.5,
      turfInteraction: 8.8,
      value: 8.5,
    },
    // 8.3*0.25 + 8.7*0.20 + 8.5*0.25 + 8.8*0.15 + 8.5*0.15 = 2.075 + 1.74 + 2.125 + 1.32 + 1.275 = 8.535 -> 8.5
    overallScore: 8.5,
  },

  // ============================================================
  // Callaway Paradym Ai Smoke
  // ============================================================
  {
    id: 'callaway-paradym-ai-smoke-hybrid',
    name: 'Callaway Paradym Ai Smoke',
    manufacturer: 'callaway',
    category: 'hybrid',
    year: 2024,
    msrp: 299,
    currency: 'USD',
    imageUrl: '/images/hybrids/callaway-paradym-ai-smoke-hybrid.png',
    productUrl: 'https://www.callawaygolf.com/golf-clubs/hybrids/paradym-ai-smoke-hybrid.html',
    playerType: ['low', 'mid'],
    description:
      'The Callaway Paradym Ai Smoke hybrid uses AI-designed face architecture to optimize ball speed and spin across the entire hitting area. Its compact-to-mid profile and adjustable hosel give skilled players the versatility to shape shots while maintaining impressive distance consistency.',
    pros: [
      'AI-optimized face delivers exceptional ball speed consistency',
      'Outstanding distance even on off-center strikes',
      'Versatile shot-shaping capability',
      'Premium Jailbreak technology stiffens the body for more energy transfer',
    ],
    cons: [
      'Premium price at $299',
      'Compact profile may intimidate higher-handicap players',
      'Slightly lower launch than the Max model',
    ],
    lastUpdated: '2025-02-19',
    specifications: {
      lofts: [18, 20, 23, 26],
      headDesign: 'mid',
      adjustable: true,
      adjustabilityFeatures: ['Opti-Fit hosel (+/- 1.5 degrees)', '8-way adjustability'],
      stockShafts: ['Project X Cypher 2.0 50 (graphite)', 'Project X HZRDUS Black 4G 70 (graphite)'],
      keyTechnologies: [
        'Ai Smart Face Technology',
        'Jailbreak with Batwing Technology',
        'Tungsten Speed Cartridge',
        'Flash Face SS23',
        'Cutwave Sole Design',
      ],
    },
    scores: {
      forgiveness: 8.4,
      distance: 9.3,
      versatility: 8.9,
      turfInteraction: 8.4,
      value: 8.0,
    },
    // 8.4*0.25 + 9.3*0.20 + 8.9*0.25 + 8.4*0.15 + 8.0*0.15 = 2.1 + 1.86 + 2.225 + 1.26 + 1.2 = 8.645 -> 8.6
    overallScore: 8.6,
  },

  // ============================================================
  // Callaway Ai Smoke Max
  // ============================================================
  {
    id: 'callaway-ai-smoke-max-hybrid',
    name: 'Callaway Ai Smoke Max',
    manufacturer: 'callaway',
    category: 'hybrid',
    year: 2024,
    msrp: 299,
    currency: 'USD',
    imageUrl: '/images/hybrids/callaway-ai-smoke-max-hybrid.png',
    productUrl: 'https://www.callawaygolf.com/golf-clubs/hybrids/ai-smoke-max-hybrid.html',
    playerType: ['mid', 'high'],
    description:
      'The Callaway Ai Smoke Max hybrid pairs AI-engineered face technology with a larger, more forgiving head shape. With a draw bias and high MOI design, this hybrid is purpose-built to help mid-to-high handicap players get the ball airborne easily and hit straighter shots.',
    pros: [
      'AI face technology maximizes ball speed on mis-hits',
      'Oversized profile inspires confidence at address',
      'Excellent high launch and soft landing',
      'Draw bias helps reduce slices',
      'Smooth gliding Cutwave sole',
    ],
    cons: [
      'Draw bias limits ability to work the ball right-to-left players',
      'Premium price for a max-forgiveness hybrid',
      'Lower workability compared to the standard Paradym Ai Smoke',
    ],
    lastUpdated: '2025-02-19',
    specifications: {
      lofts: [18, 20, 23, 26, 29],
      headDesign: 'oversized',
      adjustable: true,
      adjustabilityFeatures: ['Opti-Fit hosel (+/- 1.5 degrees)', '8-way adjustability'],
      stockShafts: ['Project X Cypher 2.0 50 (graphite)', 'Aldila Ascent 45 (graphite)'],
      keyTechnologies: [
        'Ai Smart Face Technology',
        'Jailbreak with Batwing Technology',
        'Tungsten Speed Cartridge',
        'Cutwave Sole Design',
        'High MOI Oversized Head',
        'Draw Bias Weighting',
      ],
    },
    scores: {
      forgiveness: 9.4,
      distance: 8.9,
      versatility: 7.8,
      turfInteraction: 9.1,
      value: 8.0,
    },
    // 9.4*0.25 + 8.9*0.20 + 7.8*0.25 + 9.1*0.15 + 8.0*0.15 = 2.35 + 1.78 + 1.95 + 1.365 + 1.2 = 8.645 -> 8.6
    overallScore: 8.6,
  },

  // ============================================================
  // Titleist GT
  // ============================================================
  {
    id: 'titleist-gt-hybrid',
    name: 'Titleist GT',
    manufacturer: 'titleist',
    category: 'hybrid',
    year: 2025,
    msrp: 299,
    currency: 'USD',
    imageUrl: '/images/hybrids/titleist-gt-hybrid.png',
    productUrl: 'https://www.titleist.com/golf-clubs/hybrids/gt-hybrid',
    playerType: ['low', 'mid'],
    description:
      'The Titleist GT hybrid features a precision-crafted compact head with a high-strength steel face for tour-level performance. Its sleek profile and optimized weighting produce a penetrating ball flight with exceptional control, making it the preferred choice for better players who demand workability.',
    pros: [
      'Tour-level aesthetics with compact, clean look at address',
      'Excellent workability for shaping shots in both directions',
      'Strong ball speed from high-strength steel face',
      'Precise distance gapping throughout the set',
      'Premium sound and feel',
    ],
    cons: [
      'Compact head is less forgiving than game-improvement options',
      'Premium pricing at $299',
      'Lower launch profile may not suit slower swing speeds',
    ],
    lastUpdated: '2025-02-19',
    specifications: {
      lofts: [17, 19, 21, 24, 27],
      headDesign: 'compact',
      adjustable: true,
      adjustabilityFeatures: ['SureFit hosel (16 independent settings)', 'SureFit CG track weight'],
      stockShafts: ['Mitsubishi Tensei AV Blue 75 (graphite)', 'True Temper Dynamic Gold 105 (steel)'],
      keyTechnologies: [
        'High-Strength Steel Face',
        'SureFit Adjustable Hosel',
        'SureFit CG Track',
        'Active Recoil Channel 4.0',
        'Optimized Tungsten Weighting',
      ],
    },
    scores: {
      forgiveness: 7.8,
      distance: 8.9,
      versatility: 9.2,
      turfInteraction: 8.5,
      value: 7.8,
    },
    // 7.8*0.25 + 8.9*0.20 + 9.2*0.25 + 8.5*0.15 + 7.8*0.15 = 1.95 + 1.78 + 2.3 + 1.275 + 1.17 = 8.475 -> 8.5
    overallScore: 8.5,
  },

  // ============================================================
  // Ping G430
  // ============================================================
  {
    id: 'ping-g430-hybrid',
    name: 'Ping G430',
    manufacturer: 'ping',
    category: 'hybrid',
    year: 2023,
    msrp: 269,
    currency: 'USD',
    imageUrl: '/images/hybrids/ping-g430-hybrid.png',
    productUrl: 'https://ping.com/en-us/shop/hybrids/g430',
    playerType: ['low', 'mid'],
    description:
      'The Ping G430 hybrid delivers a versatile mid-size profile with a maraging steel face for consistent ball speeds. Its refined sole geometry and precision CG placement provide a blend of distance, control, and turf interaction that appeals to a wide range of skill levels.',
    pros: [
      'Maraging steel face delivers consistent ball speeds',
      'Excellent turf interaction from precision-ground sole',
      'Versatile enough for low and mid handicappers',
      'Slightly lower price than flagship competitors',
    ],
    cons: [
      'Non-adjustable hosel limits fitting options',
      'Previous generation compared to newest releases',
      'Slightly muted feel compared to some competitors',
    ],
    lastUpdated: '2025-02-19',
    specifications: {
      lofts: [17, 19, 22, 26, 30],
      headDesign: 'mid',
      adjustable: false,
      adjustabilityFeatures: [],
      stockShafts: ['Alta CB Black 70 (graphite)', 'Ping Tour 85 (steel)'],
      keyTechnologies: [
        'Maraging Steel Face',
        'Facewrap Technology',
        'Spinsistency Face Pattern',
        'Precision-Machined Sole',
        'Tungsten Toe Weight',
      ],
    },
    scores: {
      forgiveness: 8.6,
      distance: 8.8,
      versatility: 8.7,
      turfInteraction: 8.9,
      value: 8.5,
    },
    // 8.6*0.25 + 8.8*0.20 + 8.7*0.25 + 8.9*0.15 + 8.5*0.15 = 2.15 + 1.76 + 2.175 + 1.335 + 1.275 = 8.695 -> 8.7
    overallScore: 8.7,
  },

  // ============================================================
  // Ping G430 MAX
  // ============================================================
  {
    id: 'ping-g430-max-hybrid',
    name: 'Ping G430 MAX',
    manufacturer: 'ping',
    category: 'hybrid',
    year: 2023,
    msrp: 269,
    currency: 'USD',
    imageUrl: '/images/hybrids/ping-g430-max-hybrid.png',
    productUrl: 'https://ping.com/en-us/shop/hybrids/g430-max',
    playerType: ['mid', 'high'],
    description:
      'The Ping G430 MAX hybrid features an oversized head with maximum moment of inertia for unmatched forgiveness. Its wider sole and deeper CG promote an effortless high launch, making it an exceptional iron-replacement for golfers who prioritize consistency over workability.',
    pros: [
      'Industry-leading forgiveness with high MOI design',
      'Easy high launch from any lie',
      'Wide sole glides smoothly through turf and rough',
      'Excellent value compared to other premium hybrids',
      'Consistent distance even on off-center strikes',
    ],
    cons: [
      'Oversized head may not appeal to better players aesthetically',
      'Limited shot-shaping capability',
      'Non-adjustable hosel',
    ],
    lastUpdated: '2025-02-19',
    specifications: {
      lofts: [17, 19, 22, 26, 30],
      headDesign: 'oversized',
      adjustable: false,
      adjustabilityFeatures: [],
      stockShafts: ['Alta CB Black 65 (graphite)', 'Ping Tour 85 (steel)'],
      keyTechnologies: [
        'Maraging Steel Face',
        'Facewrap Technology',
        'Spinsistency Face Pattern',
        'High MOI Oversized Head',
        'Wide Sole Design',
        'Tungsten Back Weight',
      ],
    },
    scores: {
      forgiveness: 9.3,
      distance: 8.5,
      versatility: 7.9,
      turfInteraction: 9.2,
      value: 8.7,
    },
    // 9.3*0.25 + 8.5*0.20 + 7.9*0.25 + 9.2*0.15 + 8.7*0.15 = 2.325 + 1.7 + 1.975 + 1.38 + 1.305 = 8.685 -> 8.7
    overallScore: 8.7,
  },

  // ============================================================
  // Cobra Darkspeed
  // ============================================================
  {
    id: 'cobra-darkspeed-hybrid',
    name: 'Cobra Darkspeed',
    manufacturer: 'cobra',
    category: 'hybrid',
    year: 2024,
    msrp: 249,
    currency: 'USD',
    imageUrl: '/images/hybrids/cobra-darkspeed-hybrid.png',
    productUrl: 'https://www.cobragolf.com/darkspeed-hybrid',
    playerType: ['low', 'mid'],
    description:
      'The Cobra Darkspeed hybrid features a refined aerodynamic shape with PWR-BRIDGE weighting for optimized launch and spin. Its H.O.T. Face technology uses AI to design variable thickness zones that maximize ball speed, delivering impressive distance at a competitive price point.',
    pros: [
      'AI-designed H.O.T. Face for optimized ball speed',
      'PWR-BRIDGE technology lowers CG for higher launch',
      'Aerodynamic shaping increases clubhead speed',
      'Strong value at $249 with premium features',
    ],
    cons: [
      'Not quite as forgiving as oversized competitors',
      'Brand perception trails some premium competitors',
      'Limited steel shaft options from stock',
    ],
    lastUpdated: '2025-02-19',
    specifications: {
      lofts: [17, 19, 21, 24, 27],
      headDesign: 'mid',
      adjustable: true,
      adjustabilityFeatures: ['MyFly8 adjustable hosel (8 positions)'],
      stockShafts: ['Project X Denali Red 65 (graphite)', 'KBS Tour 90 (steel)'],
      keyTechnologies: [
        'H.O.T. Face AI Technology',
        'PWR-BRIDGE Weighting',
        'Aerodynamic Head Shape',
        'Carbon Fiber Crown',
        'Speed Pocket',
      ],
    },
    scores: {
      forgiveness: 8.4,
      distance: 9.0,
      versatility: 8.6,
      turfInteraction: 8.3,
      value: 8.8,
    },
    // 8.4*0.25 + 9.0*0.20 + 8.6*0.25 + 8.3*0.15 + 8.8*0.15 = 2.1 + 1.8 + 2.15 + 1.245 + 1.32 = 8.615 -> 8.6
    overallScore: 8.6,
  },

  // ============================================================
  // Cobra Air-X 2
  // ============================================================
  {
    id: 'cobra-air-x-2-hybrid',
    name: 'Cobra Air-X 2',
    manufacturer: 'cobra',
    category: 'hybrid',
    year: 2024,
    msrp: 179,
    currency: 'USD',
    imageUrl: '/images/hybrids/cobra-air-x-2-hybrid.png',
    productUrl: 'https://www.cobragolf.com/air-x-2-hybrid',
    playerType: ['mid', 'high', 'beginner'],
    description:
      'The Cobra Air-X 2 hybrid is an ultralight, oversized hybrid designed to help moderate and slower swing speed players generate maximum distance. At just $179, it offers an unbeatable combination of easy launch, forgiveness, and value for recreational golfers.',
    pros: [
      'Ultralight design maximizes swing speed for slower swingers',
      'Oversized head provides outstanding forgiveness',
      'Exceptional value at $179',
      'Easy high launch from any lie',
      'Offset design helps reduce slices',
    ],
    cons: [
      'Not suited for faster swing speed players',
      'Limited shot-shaping ability',
      'Lightweight feel may lack feedback for better players',
      'Non-adjustable',
    ],
    lastUpdated: '2025-02-19',
    specifications: {
      lofts: [19, 22, 25, 28],
      headDesign: 'oversized',
      adjustable: false,
      adjustabilityFeatures: [],
      stockShafts: ['Cobra Ultralight 50 (graphite)'],
      keyTechnologies: [
        'Ultralight Construction',
        'Offset Hosel Design',
        'H.O.T. Face Technology',
        'Low CG Design',
        'Wide Sole Profile',
      ],
    },
    scores: {
      forgiveness: 9.2,
      distance: 8.0,
      versatility: 7.4,
      turfInteraction: 8.8,
      value: 9.5,
    },
    // 9.2*0.25 + 8.0*0.20 + 7.4*0.25 + 8.8*0.15 + 9.5*0.15 = 2.3 + 1.6 + 1.85 + 1.32 + 1.425 = 8.495 -> 8.5
    overallScore: 8.5,
  },

  // ============================================================
  // Srixon ZX MK II
  // ============================================================
  {
    id: 'srixon-zx-mk-ii-hybrid',
    name: 'Srixon ZX MK II',
    manufacturer: 'srixon',
    category: 'hybrid',
    year: 2023,
    msrp: 229,
    currency: 'USD',
    imageUrl: '/images/hybrids/srixon-zx-mk-ii-hybrid.png',
    productUrl: 'https://www.srixon.com/us/golf-clubs/hybrids/zx-mk-ii-hybrid/',
    playerType: ['low', 'mid'],
    description:
      'The Srixon ZX MK II hybrid features a crown step design that lowers the center of gravity for a higher launch angle and improved forgiveness. Its compact-to-mid profile with a maraging steel face provides tour-caliber distance and a buttery feel that better players appreciate.',
    pros: [
      'Crown step design lowers CG for optimal launch',
      'Maraging steel face produces excellent ball speed',
      'Clean, tour-preferred look at address',
      'Great value at $229 for a players hybrid',
    ],
    cons: [
      'Smaller profile offers less forgiveness than game-improvement models',
      'Not adjustable',
      'Limited loft options compared to some competitors',
    ],
    lastUpdated: '2025-02-19',
    specifications: {
      lofts: [16, 19, 22, 25],
      headDesign: 'mid',
      adjustable: false,
      adjustabilityFeatures: [],
      stockShafts: ['UST Mamiya Recoil Dart HY 80 (graphite)', 'Nippon NS Pro Modus Tour 105 (steel)'],
      keyTechnologies: [
        'Crown Step Design',
        'Maraging Steel Face',
        'Cannon Sole Design',
        'Tungsten Weighting',
        'Tour VT Sole',
      ],
    },
    scores: {
      forgiveness: 8.1,
      distance: 8.8,
      versatility: 8.7,
      turfInteraction: 8.5,
      value: 8.7,
    },
    // 8.1*0.25 + 8.8*0.20 + 8.7*0.25 + 8.5*0.15 + 8.7*0.15 = 2.025 + 1.76 + 2.175 + 1.275 + 1.305 = 8.54 -> 8.5
    overallScore: 8.5,
  },

  // ============================================================
  // Mizuno ST-Max 230
  // ============================================================
  {
    id: 'mizuno-st-max-230-hybrid',
    name: 'Mizuno ST-Max 230',
    manufacturer: 'mizuno',
    category: 'hybrid',
    year: 2023,
    msrp: 249,
    currency: 'USD',
    imageUrl: '/images/hybrids/mizuno-st-max-230-hybrid.png',
    productUrl: 'https://www.mizunogolf.com/golf-clubs/hybrids/st-max-230-hybrid/',
    playerType: ['mid', 'high'],
    description:
      'The Mizuno ST-Max 230 hybrid features an oversized head with a low and deep CG for maximum launch and forgiveness. Known for Mizuno\'s legendary feel, it combines a Beta Ti face with a wide sole that glides effortlessly through turf, making it an excellent iron-replacement hybrid.',
    pros: [
      'Exceptional Mizuno feel and sound at impact',
      'Wide sole provides outstanding turf interaction',
      'High launch with soft landing for holding greens',
      'Good forgiveness from oversized head design',
    ],
    cons: [
      'Limited shot-shaping capability',
      'Non-adjustable hosel',
      'Not as long as some AI-designed competitors',
    ],
    lastUpdated: '2025-02-19',
    specifications: {
      lofts: [18, 21, 24, 27],
      headDesign: 'oversized',
      adjustable: false,
      adjustabilityFeatures: [],
      stockShafts: ['UST Mamiya Helium NanoCore (graphite)', 'Nippon NS Pro Modus Tour 105 (steel)'],
      keyTechnologies: [
        'Beta Titanium Face',
        'CORTECH Chamber',
        'HAZ Sole Design',
        'Wave Technology',
        'Low CG Deep Design',
      ],
    },
    scores: {
      forgiveness: 9.0,
      distance: 8.3,
      versatility: 7.9,
      turfInteraction: 9.1,
      value: 8.4,
    },
    // 9.0*0.25 + 8.3*0.20 + 7.9*0.25 + 9.1*0.15 + 8.4*0.15 = 2.25 + 1.66 + 1.975 + 1.365 + 1.26 = 8.51 -> 8.5
    overallScore: 8.5,
  },

  // ============================================================
  // Cleveland Launcher XL Halo
  // ============================================================
  {
    id: 'cleveland-launcher-xl-halo-hybrid',
    name: 'Cleveland Launcher XL Halo',
    manufacturer: 'cleveland',
    category: 'hybrid',
    year: 2022,
    msrp: 179,
    currency: 'USD',
    imageUrl: '/images/hybrids/cleveland-launcher-xl-halo-hybrid.png',
    productUrl: 'https://www.clevelandgolf.com/golf-clubs/hybrids/launcher-xl-halo-hybrid/',
    playerType: ['mid', 'high', 'beginner'],
    description:
      'The Cleveland Launcher XL Halo hybrid is a high-value, oversized hybrid with a gliderail sole system that delivers phenomenal turf interaction from any lie. Its large, forgiving head and low center of gravity make it one of the easiest-to-hit hybrids on the market at any price.',
    pros: [
      'Gliderail sole system provides best-in-class turf interaction',
      'Exceptional forgiveness from oversized design',
      'Outstanding value at just $179',
      'Very easy to launch from any lie',
      'Lightweight construction benefits moderate swing speeds',
    ],
    cons: [
      'Not designed for low-handicap shot shaping',
      'Non-adjustable',
      'Older design compared to 2024/2025 models',
      'Limited appeal for faster swing speeds',
    ],
    lastUpdated: '2025-02-19',
    specifications: {
      lofts: [18, 21, 24, 27, 30],
      headDesign: 'oversized',
      adjustable: false,
      adjustabilityFeatures: [],
      stockShafts: ['Action Ultralite 50 (graphite)'],
      keyTechnologies: [
        'Gliderail Sole Technology',
        'MainFrame Variable Face Thickness',
        'HiBore Crown Step',
        'Ultralight Hosel',
        'Launcher XL Head Design',
      ],
    },
    scores: {
      forgiveness: 9.3,
      distance: 8.1,
      versatility: 7.5,
      turfInteraction: 9.5,
      value: 9.4,
    },
    // 9.3*0.25 + 8.1*0.20 + 7.5*0.25 + 9.5*0.15 + 9.4*0.15 = 2.325 + 1.62 + 1.875 + 1.425 + 1.41 = 8.655 -> 8.7
    overallScore: 8.7,
  },

  // ============================================================
  // PXG 0311 GEN6
  // ============================================================
  {
    id: 'pxg-0311-gen6-hybrid',
    name: 'PXG 0311 GEN6',
    manufacturer: 'pxg',
    category: 'hybrid',
    year: 2024,
    msrp: 249,
    currency: 'USD',
    imageUrl: '/images/hybrids/pxg-0311-gen6-hybrid.png',
    productUrl: 'https://www.pxg.com/en-us/golf-clubs/hybrids/0311-gen6-hybrid',
    playerType: ['low', 'mid'],
    description:
      'The PXG 0311 GEN6 hybrid features a precision-milled face and multi-material construction to maximize ball speed and maintain tight dispersion. Its mid-size profile delivers a confident look at address while the adjustable hosel and movable weights allow extensive custom fitting.',
    pros: [
      'Precision-milled face for consistent performance',
      'Adjustable hosel and movable weight for custom fitting',
      'Strong ball speed and distance',
      'Much more affordable than previous PXG generations',
      'Clean, modern aesthetics',
    ],
    cons: [
      'Brand still carries a premium perception despite lower pricing',
      'Fitting customization can be overwhelming for casual players',
      'Mid-size head less forgiving than oversized options',
    ],
    lastUpdated: '2025-02-19',
    specifications: {
      lofts: [17, 19, 22, 25, 28],
      headDesign: 'mid',
      adjustable: true,
      adjustabilityFeatures: ['Adjustable hosel (+/- 1.5 degrees)', 'Movable sole weight'],
      stockShafts: ['Mitsubishi MMT 70 (graphite)', 'True Temper Elevate ETS 95 (steel)'],
      keyTechnologies: [
        'Precision-Milled Face',
        'Multi-Material Construction',
        'Robotic Polishing',
        'Adjustable Weighting System',
        'Variable Face Thickness',
      ],
    },
    scores: {
      forgiveness: 8.3,
      distance: 8.9,
      versatility: 8.8,
      turfInteraction: 8.4,
      value: 8.5,
    },
    // 8.3*0.25 + 8.9*0.20 + 8.8*0.25 + 8.4*0.15 + 8.5*0.15 = 2.075 + 1.78 + 2.2 + 1.26 + 1.275 = 8.59 -> 8.6
    overallScore: 8.6,
  },

  // ============================================================
  // Tour Edge Hot Launch E524
  // ============================================================
  {
    id: 'tour-edge-hot-launch-e524-hybrid',
    name: 'Tour Edge Hot Launch E524',
    manufacturer: 'tour-edge',
    category: 'hybrid',
    year: 2024,
    msrp: 179,
    currency: 'USD',
    imageUrl: '/images/hybrids/tour-edge-hot-launch-e524-hybrid.png',
    productUrl: 'https://www.touredge.com/golf-clubs/hybrids/hot-launch-e524-hybrid',
    playerType: ['mid', 'high', 'beginner'],
    description:
      'The Tour Edge Hot Launch E524 hybrid punches well above its $179 price point with a hollow body design and Diamond Face VFT technology that produces impressive ball speeds. Its oversized head and extreme low CG make it one of the easiest-to-hit hybrids available, offering outstanding performance for budget-conscious golfers.',
    pros: [
      'Incredible value at $179 with premium-level performance',
      'Diamond Face VFT maximizes ball speed across the face',
      'Very easy to hit with high launch',
      'Wide sole provides excellent turf interaction',
      'Lifetime warranty from Tour Edge',
    ],
    cons: [
      'Less name-brand recognition than major manufacturers',
      'Non-adjustable design',
      'Limited shot-shaping ability',
      'Fewer shaft options compared to premium models',
    ],
    lastUpdated: '2025-02-19',
    specifications: {
      lofts: [19, 22, 25, 28, 31],
      headDesign: 'oversized',
      adjustable: false,
      adjustabilityFeatures: [],
      stockShafts: ['Tour Edge Fujikura Metalix Z 55 (graphite)'],
      keyTechnologies: [
        'Diamond Face VFT Technology',
        'Hollow Body Construction',
        'Extreme Low CG',
        'Power Channel Sole',
        'Metal Injection Molding',
      ],
    },
    scores: {
      forgiveness: 9.1,
      distance: 8.2,
      versatility: 7.6,
      turfInteraction: 9.0,
      value: 9.5,
    },
    // 9.1*0.25 + 8.2*0.20 + 7.6*0.25 + 9.0*0.15 + 9.5*0.15 = 2.275 + 1.64 + 1.9 + 1.35 + 1.425 = 8.59 -> 8.6
    overallScore: 8.6,
  },
];

export default hybrids;
