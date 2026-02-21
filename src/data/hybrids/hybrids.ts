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
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000049399-01_pc',
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
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000049406-01_pc',
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
    msrp: 280,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000033757-01_pc',
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
    msrp: 280,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000040789-01_pc',
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
    msrp: 280,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000040790-01_pc',
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
    msrp: 329,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000050734-01_pc',
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
    msrp: 335,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000032563-01_pc',
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
    msrp: 335,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000033891-01_pc',
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
    msrp: 279,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000040748-01_pc',
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
    msrp: 199,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000039411-01_pc',
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
    msrp: 250,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000033975-01_pc',
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
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000042182-01_pc',
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
    msrp: 200,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000022412-01_pc',
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
    msrp: 290,
    currency: 'USD',
    imageUrl: 'https://www.pxg.com/cdn/shop/files/GEN6-0311-Hybrid-Beauty.jpg',
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
    msrp: 150,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000043569-01_pc',
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

  // ============================================================
  // TaylorMade Qi4D Rescue (2026)
  // ============================================================
  {
    id: 'taylormade-qi4d-rescue-hybrid',
    name: 'TaylorMade Qi4D Rescue',
    manufacturer: 'taylormade',
    category: 'hybrid',
    year: 2026,
    msrp: 299,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000040764-01_pc',
    productUrl: 'https://www.taylormadegolf.com/qi4d-rescue/qi4d-rescue.html',
    playerType: ['low', 'mid'],
    description:
      'The TaylorMade Qi4D Rescue is a players hybrid that combines a 450 stainless steel face with an ultralight carbon fiber crown for exceptional ball speed and a steep, green-holding landing angle. It delivered the highest ball speeds of any hybrid tested in 2026, with five extra yards of carry over comparable lofted competitors.',
    pros: [
      'Highest ball speed of any hybrid tested in 2026',
      'Steep landing angle holds greens effectively',
      'Twist Face corrective curvature tightens dispersion on mis-hits',
      'Cut-through Speed Pocket reduces spin on low-face strikes',
    ],
    cons: [
      'Compact profile less forgiving than the MAX model',
      'Premium price point at $299',
      'Lower loft options may launch too low for slower swings',
    ],
    lastUpdated: '2026-02-19',
    specifications: {
      lofts: [17, 19, 22, 25],
      headDesign: 'mid',
      adjustable: true,
      adjustabilityFeatures: ['3-degree adjustable loft sleeve', '8g TAS (Trajectory Adjustment System) weight'],
      stockShafts: ['KBS REAX HY 65 (graphite)'],
      keyTechnologies: [
        '450 Stainless Steel Face',
        'Ultralight Carbon Fiber Crown',
        'Twist Face Technology',
        'Cut-Through Speed Pocket',
        'TAS Sole Weight System',
      ],
    },
    scores: {
      forgiveness: 8.4,
      distance: 9.4,
      versatility: 8.9,
      turfInteraction: 8.6,
      value: 8.0,
    },
    // 8.4*0.25 + 9.4*0.20 + 8.9*0.25 + 8.6*0.15 + 8.0*0.15 = 2.1 + 1.88 + 2.225 + 1.29 + 1.2 = 8.695 -> 8.7
    overallScore: 8.7,
  },

  // ============================================================
  // TaylorMade Qi4D MAX Rescue (2026)
  // ============================================================
  {
    id: 'taylormade-qi4d-max-rescue-hybrid',
    name: 'TaylorMade Qi4D MAX Rescue',
    manufacturer: 'taylormade',
    category: 'hybrid',
    year: 2026,
    msrp: 299,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000040765-01_pc',
    productUrl: 'https://www.taylormadegolf.com/qi4d-max-rescue/qi4d-max-rescue.html',
    playerType: ['mid', 'high'],
    description:
      'The TaylorMade Qi4D MAX Rescue features a larger, more forgiving head with advanced multi-material construction including a lightweight carbon crown and rear CG tuning. Designed as an exceptionally forgiving and high-launching long-iron replacement with a slight draw bias for straighter shots.',
    pros: [
      'Larger head profile inspires confidence at address',
      'High launch with slight draw bias for straighter shots',
      'Carbon crown enables lower CG for improved stability',
      'Extended cut-through Speed Pocket protects ball speed on low strikes',
      'TAS sole weight allows flight optimization',
    ],
    cons: [
      'Draw bias limits shot-shaping for advanced players',
      'Oversized head may not appeal to better players aesthetically',
      'Premium price at $299 for a game-improvement hybrid',
    ],
    lastUpdated: '2026-02-19',
    specifications: {
      lofts: [20, 23, 26, 30, 34],
      headDesign: 'oversized',
      adjustable: true,
      adjustabilityFeatures: ['3-degree adjustable loft sleeve', '8g TAS sole weight (trailing edge)'],
      stockShafts: ['KBS REAX HY 50 (graphite)'],
      keyTechnologies: [
        '450 Stainless Steel Face',
        'Ultralight Carbon Fiber Crown',
        'Twist Face Technology',
        'Extended Cut-Through Speed Pocket',
        'Rear CG TAS Weighting',
        'Multi-Material Construction',
      ],
    },
    scores: {
      forgiveness: 9.4,
      distance: 8.8,
      versatility: 8.0,
      turfInteraction: 9.0,
      value: 8.0,
    },
    // 9.4*0.25 + 8.8*0.20 + 8.0*0.25 + 9.0*0.15 + 8.0*0.15 = 2.35 + 1.76 + 2.0 + 1.35 + 1.2 = 8.66 -> 8.7
    overallScore: 8.7,
  },

  // ============================================================
  // Callaway Elyte Hybrid (2026)
  // ============================================================
  {
    id: 'callaway-elyte-hybrid',
    name: 'Callaway Elyte',
    manufacturer: 'callaway',
    category: 'hybrid',
    year: 2026,
    msrp: 299,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000050404-01_pc',
    productUrl: 'https://www.callawaygolf.com/golf-clubs/hybrids/hybrids-2025-elyte.html',
    playerType: ['low', 'mid'],
    description:
      'The Callaway Elyte hybrid is Callaway\'s most adjustable hybrid ever, featuring the new Ai10x Face with 10x more control points for exceptionally fast ball speeds and tight dispersion. Swappable heel-toe weights (13g tungsten / 3g aluminum) combined with the OptiFit 4 hosel deliver up to 13 yards of shot-shape adjustability.',
    pros: [
      'Ai10x Face delivers elite ball speed and dispersion control',
      'Up to 13 yards of shot-shape adjustability via swappable weights',
      'OptiFit 4 hosel provides 7 unique loft/lie combinations',
      'Excellent all-round performance from multiple lie types',
    ],
    cons: [
      'Premium price point at $299',
      'Weight-swapping adjustability adds complexity for casual golfers',
      'Compact-to-mid profile less forgiving than Max Fast model',
    ],
    lastUpdated: '2026-02-19',
    specifications: {
      lofts: [19, 22, 26, 30],
      headDesign: 'mid',
      adjustable: true,
      adjustabilityFeatures: [
        'OptiFit 4 hosel (7 loft/lie settings, +/- 1 degree loft, up to 2 degrees lie)',
        'Swappable heel-toe weights (13g tungsten / 3g aluminum)',
      ],
      stockShafts: ['Project X Denali Charcoal 60/70 (graphite)', 'Mitsubishi Tensei 1K Black (graphite)'],
      keyTechnologies: [
        'Ai10x Face Technology',
        'OptiFit 4 Hosel System',
        'Adjustable Heel-Toe Weighting',
        'Tungsten Speed Cartridge',
        'Multi-Material Construction',
      ],
    },
    scores: {
      forgiveness: 8.5,
      distance: 9.3,
      versatility: 9.2,
      turfInteraction: 8.5,
      value: 8.0,
    },
    // 8.5*0.25 + 9.3*0.20 + 9.2*0.25 + 8.5*0.15 + 8.0*0.15 = 2.125 + 1.86 + 2.3 + 1.275 + 1.2 = 8.76 -> 8.8
    overallScore: 8.8,
  },

  // ============================================================
  // Callaway Quantum Max OS Hybrid (2026)
  // ============================================================
  {
    id: 'callaway-quantum-max-os-hybrid',
    name: 'Callaway Quantum Max OS',
    manufacturer: 'callaway',
    category: 'hybrid',
    year: 2026,
    msrp: 349,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000058220-01_pc',
    productUrl: 'https://www.callawaygolf.com/golf-clubs/hybrids/hybrids-2026-quantum-max-os.html',
    playerType: ['mid', 'high', 'beginner'],
    description:
      'The Callaway Quantum Max OS is the ultimate forgiveness hybrid with an oversized, draw-biased design built around high MOI and a shallower face depth for effortless launch off the turf. Speed Wave 2.0 technology boosts energy transfer on low-face strikes where most golfers lose the most distance.',
    pros: [
      'Highest MOI in the Quantum lineup for maximum forgiveness',
      'Speed Wave 2.0 recovers ball speed on low-face strikes',
      'Shallower face depth promotes easier launch off the turf',
      'OptiFit 4 hosel allows loft/lie fine-tuning',
      'Available in 6 lofts (3H through 8H) for full iron replacement',
    ],
    cons: [
      'Higher price at $349 for a game-improvement hybrid',
      'Draw bias limits shot-shaping versatility',
      'Oversized profile not preferred by better players',
    ],
    lastUpdated: '2026-02-19',
    specifications: {
      lofts: [18, 20, 23, 26, 29, 32],
      headDesign: 'oversized',
      adjustable: true,
      adjustabilityFeatures: ['OptiFit 4 hosel (7 settings, +1/-1 degree loft, up to 2 degrees lie)'],
      stockShafts: ['Aldila Ascent PL HB/IR (graphite)', 'Aerotech SteelFiber FC HY (graphite)'],
      keyTechnologies: [
        'Speed Wave 2.0',
        'OptiFit 4 Hosel',
        'Tungsten Forward Weighting',
        'Draw Bias Design',
        'Shallow Face Construction',
        'High MOI Oversized Head',
      ],
    },
    scores: {
      forgiveness: 9.5,
      distance: 8.5,
      versatility: 7.6,
      turfInteraction: 9.2,
      value: 7.5,
    },
    // 9.5*0.25 + 8.5*0.20 + 7.6*0.25 + 9.2*0.15 + 7.5*0.15 = 2.375 + 1.7 + 1.9 + 1.38 + 1.125 = 8.48 -> 8.5
    overallScore: 8.5,
  },

  // ============================================================
  // Callaway Apex UW (2026)
  // ============================================================
  {
    id: 'callaway-apex-uw-2026',
    name: 'Callaway Apex UW 2026',
    manufacturer: 'callaway',
    category: 'hybrid',
    year: 2026,
    msrp: 370,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000055264-01_pc',
    productUrl: 'https://www.callawaygolf.com/golf-clubs/woods/fwoods-2026-apex-utility.html',
    playerType: ['low', 'mid'],
    description:
      'The 2026 Callaway Apex UW utility wood bridges the gap between fairway wood power and hybrid versatility. A new TriAxial Carbon Crown and 41g+ Tungsten Speed Wave structure position mass low and forward, enhancing ball speed and launch, while a redesigned stepped sole geometry reduces turf drag for more consistent contact.',
    pros: [
      'Unique utility wood fills gap between fairway wood and hybrid',
      'Tungsten Speed Wave boosts ball speed on low-face strikes',
      'TriAxial Carbon Crown saves weight for lower CG',
      'Stepped sole geometry reduces turf drag across different lies',
    ],
    cons: [
      'Non-adjustable bonded hosel limits fitting flexibility',
      'Niche category may not suit all bag setups',
      'Premium price at $299 for a specialty club',
    ],
    lastUpdated: '2026-02-19',
    specifications: {
      lofts: [17, 19, 21, 23],
      headDesign: 'mid',
      adjustable: false,
      adjustabilityFeatures: [],
      stockShafts: ['Mitsubishi Tensei Blue (graphite)'],
      keyTechnologies: [
        'TriAxial Carbon Crown',
        'Tungsten Speed Wave (41g+)',
        'Stepped Sole Geometry',
        'Tour-Inspired Shaping',
        'Bonded Hosel Construction',
      ],
    },
    scores: {
      forgiveness: 8.0,
      distance: 9.2,
      versatility: 8.5,
      turfInteraction: 8.3,
      value: 7.8,
    },
    // 8.0*0.25 + 9.2*0.20 + 8.5*0.25 + 8.3*0.15 + 7.8*0.15 = 2.0 + 1.84 + 2.125 + 1.245 + 1.17 = 8.38 -> 8.4
    overallScore: 8.4,
  },

  // ============================================================
  // PING G440 Hybrid (2026)
  // ============================================================
  {
    id: 'ping-g440-hybrid',
    name: 'PING G440',
    manufacturer: 'ping',
    category: 'hybrid',
    year: 2026,
    msrp: 325,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000047710-01_pc',
    productUrl: 'https://ping.com/en-us/clubs/hybrids/g440',
    playerType: ['low', 'mid', 'high'],
    description:
      'The PING G440 hybrid is an all-rounder that integrates LST, MAX, and SFT characteristics across its six-loft lineup, with the 2-hybrid offering fade bias, 3-4 hybrids neutral flight, and 5-7 hybrids draw bias. A 12% lower CG from Free-Hosel Technology, 6% thinner and 8% shallower face, and CarbonFly Wrap crown deliver faster ball speed, higher launch, and elite forgiveness.',
    pros: [
      'Loft-specific ball flight bias (fade/neutral/draw) eliminates need for separate models',
      '12% lower CG from Free-Hosel Technology for higher launch',
      'CarbonFly Wrap crown saves weight and improves sound',
      'Outstanding forgiveness with consistent ball speed across the face',
    ],
    cons: [
      'Higher price at $325 than most competitors',
      'Ball flight bias varies by loft, limiting mix-and-match flexibility',
      'No separate MAX model for players wanting maximum forgiveness in lower lofts',
    ],
    lastUpdated: '2026-02-19',
    specifications: {
      lofts: [17, 20, 23, 26, 30, 34],
      headDesign: 'mid',
      adjustable: true,
      adjustabilityFeatures: ['8-position hosel (+/- 1.5 degrees loft, up to 3 degrees flat lie)'],
      stockShafts: [
        'PING Alta CB Blue 70 (graphite)',
        'PING Tour 2.0 Chrome 85 (graphite)',
        'PING Tour 2.0 Black 75 (graphite)',
        'Project X Denali Red 80 (graphite)',
      ],
      keyTechnologies: [
        'Free-Hosel Technology (12% lower CG)',
        'CarbonFly Wrap Crown',
        '6% Thinner / 8% Shallower Face',
        'Loft-Specific Ball Flight Bias',
        'Precision-Machined Sole',
      ],
    },
    scores: {
      forgiveness: 9.0,
      distance: 9.1,
      versatility: 9.3,
      turfInteraction: 9.0,
      value: 7.8,
    },
    // 9.0*0.25 + 9.1*0.20 + 9.3*0.25 + 9.0*0.15 + 7.8*0.15 = 2.25 + 1.82 + 2.325 + 1.35 + 1.17 = 8.915 -> 8.9
    overallScore: 8.9,
  },

  // ============================================================
  // Titleist TSR2 Hybrid (carry-over)
  // ============================================================
  {
    id: 'titleist-tsr2-hybrid',
    name: 'Titleist TSR2',
    manufacturer: 'titleist',
    category: 'hybrid',
    year: 2023,
    msrp: 299,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000034530-01_pc',
    productUrl: 'https://www.titleist.com/golf-clubs/hybrids/tsr2',
    playerType: ['low', 'mid'],
    description:
      'The Titleist TSR2 hybrid remains a reliable carry-over option featuring an extended blade length and deeper CG for improved forgiveness and fast ball speed. Added sole relief pockets reduce turf friction for cleaner contact, while its refined shape inspires confidence for skilled players seeking a dependable iron replacement.',
    pros: [
      'Extended blade length increases face flex and forgiveness',
      'Deeper CG improves inertia without impacting launch',
      'Sole relief pockets provide cleaner turf interaction',
      'Tour-trusted Titleist quality and aesthetics',
    ],
    cons: [
      'Previous-generation technology compared to 2026 releases',
      'Only three loft options limits gapping flexibility',
      'Non-adjustable weight system (hosel only)',
    ],
    lastUpdated: '2026-02-19',
    specifications: {
      lofts: [18, 21, 24],
      headDesign: 'mid',
      adjustable: true,
      adjustabilityFeatures: ['SureFit adjustable hosel (16 settings)', 'SureFit headweight adjustment'],
      stockShafts: [
        'Project X Red 4G HY 60 (graphite)',
        'Mitsubishi Tensei AV Blue X-Link HY 65 (graphite)',
      ],
      keyTechnologies: [
        'Extended Blade Length',
        'Deep CG Positioning',
        'Sole Relief Pockets',
        'SureFit Adjustable Hosel',
        'High-Strength Steel Face',
      ],
    },
    scores: {
      forgiveness: 8.2,
      distance: 8.7,
      versatility: 8.6,
      turfInteraction: 8.4,
      value: 8.0,
    },
    // 8.2*0.25 + 8.7*0.20 + 8.6*0.25 + 8.4*0.15 + 8.0*0.15 = 2.05 + 1.74 + 2.15 + 1.26 + 1.2 = 8.4
    overallScore: 8.4,
  },

  // ============================================================
  // Cobra OPTM Hybrid (2026)
  // ============================================================
  {
    id: 'cobra-optm-hybrid',
    name: 'Cobra OPTM',
    manufacturer: 'cobra',
    category: 'hybrid',
    year: 2026,
    msrp: 329,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000048100-01_pc',
    productUrl: 'https://www.cobragolf.com/optm-hybrid',
    playerType: ['low', 'mid'],
    description:
      'The Cobra OPTM hybrid features an industry-leading FutureFit33 hosel with 33 independent loft-and-lie combinations and H.O.T. Face AI technology for optimized ball speed. A slightly larger profile and shallower face height promote easier launch, while adaptive weighting improves CG placement for consistent, repeatable performance averaging 220 yards of carry.',
    pros: [
      'FutureFit33 hosel offers 33 unique loft/lie settings for unmatched fitting',
      'H.O.T. Face AI technology maximizes ball speed across the face',
      'Consistent carry with very low shot-to-shot variation',
      'Excellent sound and feel at impact',
    ],
    cons: [
      'Higher price at $329 than previous Cobra hybrids',
      '33-setting hosel complexity may overwhelm some golfers',
      'Only 4 loft options available',
    ],
    lastUpdated: '2026-02-19',
    specifications: {
      lofts: [19, 21, 24, 28],
      headDesign: 'mid',
      adjustable: true,
      adjustabilityFeatures: ['FutureFit33 adjustable hosel (33 loft/lie combinations, +/- 2 degrees)', 'SMARTPAD face-squaring technology'],
      stockShafts: ['KBS PG Hybrid 85 (S), 75 (R), 65 (A) (graphite)'],
      keyTechnologies: [
        'H.O.T. Face AI Technology',
        'FutureFit33 Adjustable Hosel',
        'SMARTPAD Technology',
        'Adaptive CG Weighting',
        'Carbon Fiber Crown',
        'Shallower Face Design',
      ],
    },
    scores: {
      forgiveness: 8.6,
      distance: 9.0,
      versatility: 9.0,
      turfInteraction: 8.5,
      value: 8.2,
    },
    // 8.6*0.25 + 9.0*0.20 + 9.0*0.25 + 8.5*0.15 + 8.2*0.15 = 2.15 + 1.8 + 2.25 + 1.275 + 1.23 = 8.705 -> 8.7
    overallScore: 8.7,
  },

  // ============================================================
  // Mizuno ST-Max 230 Hybrid (updated for 2026 carry-over)
  // ============================================================
  {
    id: 'mizuno-st-max-230-hybrid-2026',
    name: 'Mizuno ST-Max 230',
    manufacturer: 'mizuno',
    category: 'hybrid',
    year: 2024,
    msrp: 249,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000053016-01_pc',
    productUrl: 'https://mizunogolf.com/us/golf-clubs/st-series/st-max-hybrid/',
    playerType: ['mid', 'high'],
    description:
      'The Mizuno ST-Max 230 continues into 2026 as Mizuno\'s current hybrid offering, finishing third in best-overall hybrid rankings for the year. Its ultra-light waffle crown, expanded CORTECH chamber, and MAS1C steel face produce a high, straight, predictable ball flight with exceptional consistency for dispersion, carry, and spin.',
    pros: [
      'Ultra-light waffle crown enables very low CG for high launch',
      'Expanded CORTECH chamber increases both center and off-center ball speed',
      'Exceptional dispersion consistency shot-to-shot',
      'High spin rate holds greens effectively despite high launch',
    ],
    cons: [
      'Not a 2026-specific design; carry-over from prior year',
      'Limited loft adjustability (4 degrees only)',
      'Fewer shaft options compared to major OEM competitors',
    ],
    lastUpdated: '2026-02-19',
    specifications: {
      lofts: [19, 22, 25, 28],
      headDesign: 'oversized',
      adjustable: true,
      adjustabilityFeatures: ['Adjustable hosel (4 degrees of loft adjustability)'],
      stockShafts: ['UST Mamiya Linq (graphite)'],
      keyTechnologies: [
        'MAS1C High-Energy Steel Face',
        'Expanded CORTECH Chamber',
        'Ultra-Light Waffle Crown',
        'Low/Deep CG Profile',
        'Wave Technology Sole',
      ],
    },
    scores: {
      forgiveness: 9.0,
      distance: 8.4,
      versatility: 8.0,
      turfInteraction: 9.0,
      value: 8.5,
    },
    // 9.0*0.25 + 8.4*0.20 + 8.0*0.25 + 9.0*0.15 + 8.5*0.15 = 2.25 + 1.68 + 2.0 + 1.35 + 1.275 = 8.555 -> 8.6
    overallScore: 8.6,
  },

  // ============================================================
  // Srixon ZX Mk II Hybrid (updated for 2026 carry-over)
  // ============================================================
  {
    id: 'srixon-zx-mk-ii-hybrid-2026',
    name: 'Srixon ZX Mk II',
    manufacturer: 'srixon',
    category: 'hybrid',
    year: 2023,
    msrp: 250,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000033975-01_pc',
    productUrl: 'https://us.dunlopsports.com/srixon/clubs/hybrids/zx-mk-ii-hybrids/zx-mkii-hybrid/ZXMKIIHYB.html',
    playerType: ['low', 'mid'],
    description:
      'The Srixon ZX Mk II hybrid continues as Srixon\'s current offering into 2026, featuring Rebound Frame technology with dual flex zones that work like dual springs for efficient energy transfer. A deeper and lower CG with a larger internal sole weight creates higher launch, while a new face radius from leading edge to crown provides more consistent spin on high and low strikes.',
    pros: [
      'Rebound Frame dual flex zones maximize energy transfer',
      'Deeper and lower CG produces improved launch characteristics',
      'Consistent spin from new face radius design',
      'Excellent value at $179 for a quality players hybrid',
    ],
    cons: [
      'Non-adjustable design limits fitting flexibility',
      'Only four loft options available',
      'Compact profile requires more precise striking',
    ],
    lastUpdated: '2026-02-19',
    specifications: {
      lofts: [17, 19, 22, 25],
      headDesign: 'mid',
      adjustable: false,
      adjustabilityFeatures: [],
      stockShafts: ['Project X HZRDUS Smoke Red RDX 80 (graphite)'],
      keyTechnologies: [
        'Rebound Frame (Dual Flex Zones)',
        'Deep/Low CG Design',
        'New Face Radius Technology',
        'Internal Sole Weight',
        'Tour VT Sole',
      ],
    },
    scores: {
      forgiveness: 8.1,
      distance: 8.8,
      versatility: 8.6,
      turfInteraction: 8.4,
      value: 9.0,
    },
    // 8.1*0.25 + 8.8*0.20 + 8.6*0.25 + 8.4*0.15 + 9.0*0.15 = 2.025 + 1.76 + 2.15 + 1.26 + 1.35 = 8.545 -> 8.5
    overallScore: 8.5,
  },

  // ============================================================
  // Cleveland Halo XL 2 Hybrid (2026)
  // ============================================================
  {
    id: 'cleveland-halo-xl-2-hybrid',
    name: 'Cleveland Halo XL 2',
    manufacturer: 'cleveland',
    category: 'hybrid',
    year: 2025,
    msrp: 240,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000041024-01_pc',
    productUrl: 'https://us.dunlopsports.com/cleveland-golf/clubs/hybrids-and-hy-woods/halo-xl-hybrids/halo-xl-hybrids/MLHXLH.html',
    playerType: ['mid', 'high', 'beginner'],
    description:
      'The Cleveland Halo XL 2 hybrid builds on the original\'s game-improvement pedigree with MainFrame XL AI-designed face technology, triple GlideRail sole, and an 8-gram Action Mass CB counterbalance grip weight. With 2,961 g-cm2 MOI -- the most ever in a Cleveland hybrid -- it delivers maximum stability and forgiveness from any lie.',
    pros: [
      'Highest MOI ever in a Cleveland hybrid (2,961 g-cm2)',
      'Triple GlideRail sole delivers outstanding turf interaction from any lie',
      'MainFrame XL AI face maximizes ball speed and reshapes the sweet spot',
      'Action Mass CB counterbalance improves control without extra effort',
      'Strong value at $199',
    ],
    cons: [
      'Non-adjustable hosel limits fitting customization',
      'Oversized head not suited for shot-shaping players',
      'Counterbalanced grip feel may not suit all preferences',
    ],
    lastUpdated: '2026-02-19',
    specifications: {
      lofts: [18, 21, 24, 27, 30],
      headDesign: 'oversized',
      adjustable: false,
      adjustabilityFeatures: [],
      stockShafts: ['Mitsubishi Tensei AV Raw Blue HY 65 (graphite)', 'Aldila Ascent PL 50 HY (graphite, Senior)'],
      keyTechnologies: [
        'MainFrame XL AI Face Technology',
        'Triple GlideRail Sole',
        'Rebound Frame (Dual Flex Zones)',
        'Action Mass CB (8g counterbalance)',
        'XL Head Design (2,961 MOI)',
      ],
    },
    scores: {
      forgiveness: 9.4,
      distance: 8.2,
      versatility: 7.6,
      turfInteraction: 9.5,
      value: 9.2,
    },
    // 9.4*0.25 + 8.2*0.20 + 7.6*0.25 + 9.5*0.15 + 9.2*0.15 = 2.35 + 1.64 + 1.9 + 1.425 + 1.38 = 8.695 -> 8.7
    overallScore: 8.7,
  },

  // ============================================================
  // PXG Lightning Hybrid (2026)
  // ============================================================
  {
    id: 'pxg-lightning-hybrid',
    name: 'PXG Lightning',
    manufacturer: 'pxg',
    category: 'hybrid',
    year: 2026,
    msrp: 329,
    currency: 'USD',
    imageUrl: 'https://www.pxg.com/cdn/shop/files/GEN6-0311-Hybrid-Beauty.jpg',
    productUrl: 'https://www.pxg.com/products/lightning-hybrids',
    playerType: ['low', 'mid', 'high'],
    description:
      'The PXG Lightning hybrid features a 6% thinner face than Black Ops for 3% more face deflection, three precision weight ports allowing up to 20 grams of repositionable mass, and an eight-way adjustable hosel. Available in seven lofts from 17 to 34 degrees, it can replace half your iron set with unbelievable consistency in launch, spin, and ball speed.',
    pros: [
      'Industry-leading adjustability with 3 weight ports and 8-way hosel',
      'Seven loft options (17-34 degrees) for complete iron replacement',
      '6% thinner face boosts ball speed by 3% across the entire face',
      'High-strength carbon fiber crown with squared head design',
    ],
    cons: [
      'Higher price at $329 for a single hybrid',
      'Extensive adjustability options may overwhelm casual golfers',
      'Less established hybrid reputation compared to TaylorMade/Callaway',
    ],
    lastUpdated: '2026-02-19',
    specifications: {
      lofts: [17, 19, 22, 25, 28, 31, 34],
      headDesign: 'mid',
      adjustable: true,
      adjustabilityFeatures: [
        '8-way adjustable hosel (loft, lie, face angle)',
        '3 precision weight ports (2x 2.5g + 1x 12.5g, up to 20g repositionable)',
      ],
      stockShafts: ['Graphite Design Tour AD-IZ HY 65/75 (graphite)', 'KBS Tour Prototype HY 85/95 (graphite)'],
      keyTechnologies: [
        '6% Thinner Face (3% more deflection)',
        'High-Strength Carbon Fiber Crown',
        'Tri-Port Precision Weighting System',
        '8-Way Adjustable Hosel',
        'Squared Head Design',
      ],
    },
    scores: {
      forgiveness: 8.5,
      distance: 9.1,
      versatility: 9.4,
      turfInteraction: 8.4,
      value: 7.8,
    },
    // 8.5*0.25 + 9.1*0.20 + 9.4*0.25 + 8.4*0.15 + 7.8*0.15 = 2.125 + 1.82 + 2.35 + 1.26 + 1.17 = 8.725 -> 8.7
    overallScore: 8.7,
  },

  // ============================================================
  // Tour Edge Exotics Max Hybrid (2026)
  // ============================================================
  {
    id: 'tour-edge-exotics-max-hybrid-2026',
    name: 'Tour Edge Exotics Max 2026',
    manufacturer: 'tour-edge',
    category: 'hybrid',
    year: 2026,
    msrp: 229,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000027404-01_pc',
    productUrl: 'https://www.touredge.com/products/exotics-max-hybrid',
    playerType: ['mid', 'high'],
    description:
      'The 2026 Tour Edge Exotics Max hybrid features a larger head profile with deep CG placement, lightweight carbon crown, and precisely positioned tungsten sole weight for high launch and maximum stability. Pyramid Face Technology maintains ball speed consistency across the face, making it an outstanding value proposition for golfers seeking forgiving iron replacement.',
    pros: [
      'Excellent value at $229 with premium-level technology',
      'Carbon crown + tungsten sole weight optimize CG placement',
      'Pyramid Face Technology maintains speed on off-center hits',
      'Lifetime warranty from Tour Edge',
    ],
    cons: [
      'Less brand recognition than major OEMs',
      'Only 4 loft options available',
      'Non-adjustable hosel',
    ],
    lastUpdated: '2026-02-19',
    specifications: {
      lofts: [17, 19, 22, 25],
      headDesign: 'oversized',
      adjustable: false,
      adjustabilityFeatures: [],
      stockShafts: [
        'Fujikura Ventus Blue/Black 7R (74g) / 8S (84g) (graphite)',
        'Fujikura Ventus Red/Black 6R (63g) / 7S (74g) (graphite)',
      ],
      keyTechnologies: [
        'Pyramid Face Technology',
        'Lightweight Carbon Crown',
        'Tungsten Sole Weighting',
        'Deep CG Placement',
        'High-Launch Head Profile',
      ],
    },
    scores: {
      forgiveness: 9.0,
      distance: 8.5,
      versatility: 7.8,
      turfInteraction: 8.8,
      value: 9.2,
    },
    // 9.0*0.25 + 8.5*0.20 + 7.8*0.25 + 8.8*0.15 + 9.2*0.15 = 2.25 + 1.7 + 1.95 + 1.32 + 1.38 = 8.6
    overallScore: 8.6,
  },

  // ============================================================
  // Wilson Launch Pad 2 Hybrid
  // ============================================================
  {
    id: 'wilson-launch-pad-2-hybrid',
    name: 'Wilson Launch Pad 2',
    manufacturer: 'wilson',
    category: 'hybrid',
    year: 2024,
    msrp: 199,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000026969-01_pc',
    productUrl: 'https://www.wilson.com/en-us/golf/clubs/hybrids/launch-pad-2-hybrid',
    playerType: ['high', 'beginner'],
    description:
      'The Wilson Launch Pad 2 hybrid is an ultra-game-improvement club specifically designed for high-handicap golfers and those struggling with slices. Its lightweight, draw-biased design with a thin, high-strength Carpenter Custom 455 stainless steel face makes it exceptionally easy to launch from both good and bad lies at a budget-friendly price.',
    pros: [
      'Very affordable at $199',
      'Draw bias genuinely helps reduce slices',
      'Lightweight design benefits moderate and slower swing speeds',
      'Easy to hit from both good and bad lies',
    ],
    cons: [
      'Draw bias too pronounced for golfers who already draw the ball',
      'Limited appeal for low and mid handicappers',
      'Only 3 loft options (FY, 4H, 5H)',
      'Non-adjustable',
    ],
    lastUpdated: '2026-02-19',
    specifications: {
      lofts: [19.5, 22.5, 25.5],
      headDesign: 'oversized',
      adjustable: false,
      adjustabilityFeatures: [],
      stockShafts: ['Project X Evenflow (graphite)'],
      keyTechnologies: [
        'Carpenter Custom 455 Stainless Steel Face',
        'Draw Bias Weighting',
        'Lightweight Construction',
        'Wide Sole Profile',
        'High-Launch Design',
      ],
    },
    scores: {
      forgiveness: 9.2,
      distance: 7.8,
      versatility: 7.0,
      turfInteraction: 8.8,
      value: 9.4,
    },
    // 9.2*0.25 + 7.8*0.20 + 7.0*0.25 + 8.8*0.15 + 9.4*0.15 = 2.3 + 1.56 + 1.75 + 1.32 + 1.41 = 8.34 -> 8.3
    overallScore: 8.3,
  },
];

export default hybrids;
