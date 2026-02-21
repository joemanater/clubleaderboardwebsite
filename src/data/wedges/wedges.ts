import { Wedge } from './wedge-types';

export const wedges: Wedge[] = [
  // ─── 1. Titleist Vokey SM11 ──────────────────────────────────────────────────
  {
    id: 'vokey-sm11',
    name: 'Vokey SM11',
    manufacturer: 'titleist',
    category: 'wedge',
    year: 2026,
    msrp: 199,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000058242-01_pc',
    productUrl: 'https://www.titleist.com/product/vokey-sm11/MASTER-SM11.html',
    playerType: ['low', 'mid'],
    description:
      'The Vokey SM11 is the most complete wedge system Titleist has ever produced, featuring a progressive center of gravity that places the CG at the same precise point within each loft for unmatched trajectory consistency. Spin Milled grooves now deliver 5% more volume than SM10 for debris clearance and wet-condition spin retention. With 27 unique loft/grind/bounce configurations across six tour-validated grinds, the SM11 sets the standard for wedge performance in 2026.',
    pros: [
      'Progressive CG delivers consistent trajectory across all lofts and grinds',
      'Spin Milled grooves with 5% more volume for improved wet-condition spin',
      '27 configurations across six grinds for precise fitting',
      'Heat-treated grooves for double the durability of standard grooves',
    ],
    cons: [
      'Premium $199 price point is above many competitors',
      'Requires proper fitting to select from 27 configurations',
      'Raw finish carries a $40 upcharge over standard finishes',
    ],
    specifications: {
      availableLofts: [44, 46, 48, 50, 52, 54, 56, 58, 60],
      availableBounces: [4, 6, 8, 10, 12, 14],
      availableGrinds: [
        { name: 'F Grind', description: 'Full sole grind for full wedge shots; most played sand wedge grind on the PGA Tour. Traditional sole provides forgiveness and confidence from fairway and greens.' },
        { name: 'S Grind', description: 'Full sole narrowed by trailing-edge grind for faster turf feel. Versatile in a variety of conditions for players who control loft with hands ahead or behind the ball.' },
        { name: 'M Grind', description: 'Bob Vokey\'s favorite grind, designed for players who rotate the face to manufacture greenside shots. Ideal balance of bounce and versatility.' },
        { name: 'D Grind', description: 'Built for steep swings with forward bounce angle. Protects in soft, grainy conditions while opening the face lowers leading edge for greenside versatility.' },
        { name: 'K Grind', description: 'Wide full sole with enhanced camber for forgiveness in bunkers and variable turf. High-bounce 12K for soft conditions; low-bounce 06K for tighter, firmer lies.' },
        { name: 'T Grind', description: 'Low bounce narrow sole with maximum heel, toe, and trailing-edge relief for ultimate shot-making versatility in any condition.' },
      ],
      material: '8620 Carbon Steel (heat-treated)',
      grooveDesign:
        'Spin Milled grooves individually cut per loft with 5% more volume than SM10. Angled face texture, shot-specific groove shapes, and deeper grooves combine for optimal spin from any lie. Heat-treated to double groove durability for lasting sharpness.',
      finish: ['Tour Chrome', 'Nickel', 'Jet Black', 'Raw'],
      keyTechnologies: [
        'Progressive Center of Gravity (3 distinct CG positions by loft range)',
        'Spin Milled grooves with 5% more volume',
        'Heat-treated grooves for 2x durability',
        'Angled face texture for spin consistency',
        'Tour-validated 27 configurations across 6 grinds',
      ],
    },
    scores: {
      spinAndControl: 9.6,
      versatility: 9.5,
      feelAndFeedback: 9.3,
      turfInteraction: 9.2,
      value: 8.5,
    },
    // 9.6*0.25 + 9.5*0.25 + 9.3*0.20 + 9.2*0.15 + 8.5*0.15 = 2.4 + 2.375 + 1.86 + 1.38 + 1.275 = 9.29 => 9.3
    overallScore: 9.3,
    lastUpdated: '2026-02-19',
  },

  // ─── 2. TaylorMade Milled Grind 5 (MG5) ─────────────────────────────────────
  {
    id: 'taylormade-mg5',
    name: 'Milled Grind 5',
    manufacturer: 'taylormade',
    category: 'wedge',
    year: 2026,
    msrp: 199,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000051585-01_pc',
    productUrl: 'https://www.taylormadegolf.com/MG5-Wedge/DW-TC647.html',
    playerType: ['low', 'mid'],
    description:
      'The TaylorMade MG5 is the first fully forged Milled Grind wedge, crafted from soft carbon steel for a premium feel that previous cast MG models could not achieve. Saw-milled grooves push geometry to the legal limit with tighter tolerances, while the Spin Tread RAW face retains 13% more spin than MG4 in wet conditions. Six grind options including the Tiger Woods signature TW grind provide comprehensive versatility.',
    pros: [
      'First fully forged construction in the Milled Grind line for superior feel',
      'Saw-milled grooves with legal-limit geometry for maximum spin',
      '13% more wet spin retention than MG4 via Spin Tread technology',
      'Six grind options including Tiger Woods TW signature grind',
    ],
    cons: [
      'RAW face finish oxidizes and changes appearance over time',
      'TW grind carries a $20 premium at $219.99',
      'Forged construction may wear grooves faster than cast alternatives',
    ],
    specifications: {
      availableLofts: [46, 48, 50, 52, 54, 56, 58, 60],
      availableBounces: [9, 10, 12],
      availableGrinds: [
        { name: 'SB Grind', description: 'Standard Bounce: the most universal grind with four-way camber for all-around performance. Ideal for a wide variety of golfers and conditions.' },
        { name: 'SC Grind', description: 'Standard Camber: lowest mid-bounce option with cambered midsole plus heel, toe, and trailing-edge relief. Ideal for shallow attacks and tight, firm lies.' },
        { name: 'SX Grind', description: 'Standard eXtended: widest sole in the MG5 lineup with pronounced leading-edge bevel and rearward bounce. Ideal for neutral to steep swings in soft conditions.' },
        { name: 'LB Grind', description: 'Low Bounce: designed for the shallowest attack angles with precision-first performance. Excels on tight, firm turf.' },
        { name: 'HB Grind', description: 'High Bounce: versatile high-bounce grind with relieved heel and tapered trailing edge. Higher bounce toward the toe with more versatility than traditional high-bounce designs.' },
        { name: 'TW Grind', description: 'Tiger Woods signature grind updated with his current preferences: increased camber, new leading-edge blend for added effective bounce, and additional heel relief.' },
      ],
      material: 'Fully Forged Soft Carbon Steel',
      grooveDesign:
        'Saw-milled grooves using a new machining process that pushes geometry to the USGA legal limit with tighter tolerances than any previous MG model. Spin Tread RAW face channels away moisture for 13% more wet spin retention versus MG4.',
      finish: ['Satin Chrome', 'Charcoal'],
      keyTechnologies: [
        'Fully forged soft carbon steel construction (first in MG line)',
        'Saw-milled grooves at legal-limit geometry',
        'Spin Tread RAW face technology',
        '13% improved wet spin retention vs. MG4',
        'Six tour-crafted grinds by Greg Cesario',
      ],
    },
    scores: {
      spinAndControl: 9.4,
      versatility: 9.3,
      feelAndFeedback: 9.2,
      turfInteraction: 9.0,
      value: 8.5,
    },
    // 9.4*0.25 + 9.3*0.25 + 9.2*0.20 + 9.0*0.15 + 8.5*0.15 = 2.35 + 2.325 + 1.84 + 1.35 + 1.275 = 9.14 => 9.1
    overallScore: 9.1,
    lastUpdated: '2026-02-19',
  },

  // ─── 3. Callaway CB 12 ──────────────────────────────────────────────────────
  {
    id: 'callaway-cb12',
    name: 'CB 12',
    manufacturer: 'callaway',
    category: 'wedge',
    year: 2025,
    msrp: 179,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000053316-01_pc',
    productUrl: 'https://www.callawaygolf.com/golf-clubs/wedges/wedges-2025-cb12.html',
    playerType: ['mid', 'high'],
    description:
      'The Callaway CB 12 is a game-improvement wedge that redistributes 12 grams of perimeter weight via its cavity-back design to deliver iron-like forgiveness around the greens. Opus grooves with a 37-degree angled sidewall provide spin consistency, while urethane microspheres dampen vibration for improved feel. The Tri-Level sole grind with a chamfered leading edge resists digging, making this an ideal wedge for mid-to-high handicap players.',
    pros: [
      '12 grams of perimeter weighting for maximum forgiveness on mishits',
      'Opus groove platform with 37-degree sidewalls for consistent spin',
      'Tri-Level sole with chamfered leading edge prevents fat shots',
      'Urethane microspheres improve sound and feel at impact',
    ],
    cons: [
      'Single sole grind limits versatility for creative shot-making',
      'Not suited to low-handicap players seeking workability',
      'Thicker topline and larger head may not appeal to traditional tastes',
    ],
    specifications: {
      availableLofts: [50, 52, 54, 56, 58, 60],
      availableBounces: [12, 14],
      availableGrinds: [
        { name: 'Tri-Level Sole', description: 'Single grind across all lofts featuring a wide sole with chamfered leading edge to resist digging, heel and backside relief, and extra bounce for forgiveness. Gap/lob lofts have 12 degrees, sand lofts have 14 degrees.' },
      ],
      material: '8620 Carbon Steel with Urethane Microspheres',
      grooveDesign:
        'Opus groove platform with tighter pitch and 37-degree angled sidewalls to engage more groove edges with the ball. Provides consistent spin and grab across the face, adapted from the tour-level Opus Platinum line.',
      finish: ['Chrome'],
      keyTechnologies: [
        '12g perimeter weight redistribution',
        'Opus groove platform with 37-degree sidewalls',
        'Tri-Level sole grind with chamfered leading edge',
        'Urethane microspheres for feel and sound',
        'Raised CG for lower launch control',
      ],
    },
    scores: {
      spinAndControl: 8.0,
      versatility: 7.5,
      feelAndFeedback: 8.2,
      turfInteraction: 9.0,
      value: 8.8,
    },
    // 8.0*0.25 + 7.5*0.25 + 8.2*0.20 + 9.0*0.15 + 8.8*0.15 = 2.0 + 1.875 + 1.64 + 1.35 + 1.32 = 8.185 => 8.2
    overallScore: 8.2,
    lastUpdated: '2026-02-19',
  },

  // ─── 4. PING s259 ───────────────────────────────────────────────────────────
  {
    id: 'ping-s259',
    name: 's259',
    manufacturer: 'ping',
    category: 'wedge',
    year: 2026,
    msrp: 217,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000041799-01_pc',
    productUrl: 'https://ping.com/en-us/clubs/wedges/s259',
    playerType: ['low', 'mid'],
    description:
      'The PING s259 is PING\'s most extensive wedge offering ever, with 25 loft/grind combinations across six grinds. Cast from 8620 carbon steel, the s259 features refined shaping that frames the ball for confident low-flight control, wheel-cut grooves with loft-specific dimensions, and MicroMax groove spacing on higher lofts for enhanced greenside spin. A larger elastomer insert improves feel, while Hydropearl 2.0 Chrome repels moisture for wet-condition consistency.',
    pros: [
      '25 loft/grind combinations provide the most comprehensive fitting in PING history',
      'Loft-specific wheel-cut grooves with MicroMax spacing on scoring lofts',
      'Hydropearl 2.0 Chrome finish repels moisture for wet-condition spin',
      'Refined shaping with progressive CG placement by loft range',
    ],
    cons: [
      'Premium $217 price point is the highest among mainstream wedge brands',
      'Cast 8620 steel may feel firmer than forged alternatives to some players',
      'Extensive options can make fitting decisions overwhelming',
    ],
    specifications: {
      availableLofts: [46, 48, 50, 52, 54, 56, 58, 60, 62],
      availableBounces: [6, 8, 10, 12, 14],
      availableGrinds: [
        { name: 'S Grind', description: 'Standard grind available across all lofts (46-60) with 12 degrees of bounce (10 at 58/60). The go-to option for versatile full-swing and greenside play.' },
        { name: 'W Grind', description: 'Wide sole with 14 degrees of bounce for steeper attack angles. Available 50-60 degrees. Ideal for soft conditions and bunker play.' },
        { name: 'H Grind', description: 'Inspired by PING WRX half-moon grind. Steeper trail-edge relief lets the face sit low when opened. Excels on tight lies and versatile conditions. Available 54-60 degrees.' },
        { name: 'B Grind', description: 'Low bounce profile (8 degrees) for shallow attack angles and square setups. Sits tight to the turf. Available 58-60 degrees.' },
        { name: 'T Grind', description: 'Steepest trail-edge relief in the lineup. Face sits extremely low on open-face shots. Available 58-62 degrees with 6 degrees of bounce.' },
        { name: 'E Grind', description: 'Re-shaped for 2026, delivers familiar look at address while maintaining strong sand performance with 8 degrees of bounce. Available 58-60 degrees.' },
      ],
      material: '8620 Carbon Steel (cast)',
      grooveDesign:
        'Wheel-cut grooves precision-milled to varying dimensions by loft. Higher lofts (54-62) feature tightly spaced MicroMax grooves for enhanced greenside spin. Lower lofts (46-52) use 20-degree sidewalls to maximize groove volume for full-shot control. Enhanced face blast adds surface roughness for maximum spin.',
      finish: ['Hydropearl 2.0 Chrome', 'Midnight (QPQ)'],
      keyTechnologies: [
        'Wheel-cut grooves with loft-specific dimensions',
        'MicroMax groove spacing on 54-62 degree lofts',
        'Hydropearl 2.0 hydrophobic chrome finish',
        'Progressive CG placement by loft range',
        'Larger elastomer insert for improved feel',
        '25 unique loft/grind combinations',
      ],
    },
    scores: {
      spinAndControl: 9.3,
      versatility: 9.4,
      feelAndFeedback: 9.0,
      turfInteraction: 9.1,
      value: 8.2,
    },
    // 9.3*0.25 + 9.4*0.25 + 9.0*0.20 + 9.1*0.15 + 8.2*0.15 = 2.325 + 2.35 + 1.80 + 1.365 + 1.23 = 9.07 => 9.1
    overallScore: 9.1,
    lastUpdated: '2026-02-19',
  },

  // ─── 5. Mizuno Pro T-1 ──────────────────────────────────────────────────────
  {
    id: 'mizuno-pro-t1',
    name: 'Mizuno Pro T-1',
    manufacturer: 'mizuno',
    category: 'wedge',
    year: 2025,
    msrp: 179,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000050592-01_pc',
    productUrl: 'https://mizunogolf.com/us/golf-clubs/mp-series/mizuno-pro-t1/',
    playerType: ['low', 'mid'],
    description:
      'The Mizuno Pro T-1 is a Grain Flow Forged HD wedge crafted at Mizuno\'s exclusive Hiroshima facility from 1025 Pure Select Mild Carbon Steel with a Copper Underlay for unparalleled soft feel. The compact teardrop shape with a straighter leading edge creates a refined profile, while Quad Cut+ Grooves and Hydroflow Micro Grooves deliver exceptional spin in both dry and wet conditions. Six sole profiles ensure every swing style is covered.',
    pros: [
      'Grain Flow Forged HD construction with Copper Underlay for premium buttery feel',
      'Quad Cut+ and Hydroflow Micro Grooves for all-weather spin consistency',
      'Six sole profiles (S, M, P, C, V, X) offer comprehensive versatility',
      'Beautiful teardrop shaping with three finish options',
    ],
    cons: [
      'Compact blade shape is less forgiving on off-center strikes',
      'Limited left-hand options (White Satin only)',
      'Soft forged material may wear faster than cast alternatives',
    ],
    specifications: {
      availableLofts: [46, 48, 50, 52, 54, 56, 58, 60],
      availableBounces: [6, 8, 10, 12],
      availableGrinds: [
        { name: 'S Sole', description: 'Standard full-swing wedge with straight bevel relief. Available across most lofts for all-purpose play.' },
        { name: 'M Sole', description: 'Mid bounce with moderate relief for gentle face manipulation. Replaces the T24 D-Grind.' },
        { name: 'P Sole', description: 'Plus bounce with enhanced relief, offering additional bounce over the M sole for added forgiveness.' },
        { name: 'C Sole', description: 'Aggressive heel and toe relief creating a C-shape. Allows opening or closing the face without raising the leading edge.' },
        { name: 'V Sole', description: 'Most aggressive relief for versatility with higher effective bounce. Ideal for creative shot-making.' },
        { name: 'X Sole', description: 'Most aggressive relief for versatility with lower effective bounce. For players who want maximum shot manipulation.' },
      ],
      material: 'Grain Flow Forged HD 1025 Pure Select Mild Carbon Steel with Copper Underlay',
      grooveDesign:
        'Quad Cut+ Grooves for maximum edge sharpness and spin control, combined with Hydroflow Micro Grooves between each main groove that channel moisture away from the face for consistent spin in wet conditions.',
      finish: ['Blue Ion', 'Black Ion', 'Soft White Satin'],
      keyTechnologies: [
        'Grain Flow Forged HD at Hiroshima facility',
        'Copper Underlay for enhanced feel',
        'Quad Cut+ Grooves for premium spin',
        'Hydroflow Micro Grooves for wet-condition performance',
        'Six sole profiles for comprehensive fitting',
      ],
    },
    scores: {
      spinAndControl: 9.2,
      versatility: 9.1,
      feelAndFeedback: 9.5,
      turfInteraction: 8.9,
      value: 8.7,
    },
    // 9.2*0.25 + 9.1*0.25 + 9.5*0.20 + 8.9*0.15 + 8.7*0.15 = 2.3 + 2.275 + 1.9 + 1.335 + 1.305 = 9.115 => 9.1
    overallScore: 9.1,
    lastUpdated: '2026-02-19',
  },

  // ─── 6. Cleveland RTX 6 ZipCore ──────────────────────────────────────────────
  {
    id: 'cleveland-rtx-6-zipcore',
    name: 'RTX 6 ZipCore',
    manufacturer: 'cleveland',
    category: 'wedge',
    year: 2024,
    msrp: 139,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000033892-01_pc',
    productUrl: 'https://us.dunlopsports.com/cleveland-golf/clubs/wedges/rtx-6-zipcore/',
    playerType: ['low', 'mid'],
    description:
      'The Cleveland RTX 6 ZipCore remains one of the best value-to-performance wedges on the market, featuring the proprietary HydraZip face technology with a dynamic blast and laser-milled line system that delivered 43% more wet-condition spin than RTX 5. The ZipCore low-density insert repositions mass for optimized CG, and UltiZip grooves provide maximum legal spin. Four grind options including the new Low+ make this an exceptional all-around wedge.',
    pros: [
      'HydraZip face delivers 43% more wet spin than previous generation',
      'Outstanding value at $139 for tour-quality performance',
      'ZipCore technology optimizes CG and dampens vibrations',
      'Four grinds including new Low+ option for sand wedge lofts',
    ],
    cons: [
      'ZipCore insert may produce a different feel than one-piece forged wedges',
      'Starting to be superseded as the RTX 7 approaches',
      'Tour Satin finish can show wear more quickly than chrome',
    ],
    specifications: {
      availableLofts: [46, 48, 50, 52, 54, 56, 58, 60],
      availableBounces: [6, 8, 10, 12, 14],
      availableGrinds: [
        { name: 'Low Grind', description: 'C-shaped sole with heel, toe, and trailing-edge relief for firm conditions, tight lies, and open-face/flop shots.' },
        { name: 'Low+ Grind', description: 'New for RTX 6: a Low grind with 2 additional degrees of bounce in the same C-shaped sole. Tour-inspired blend of versatility and sand performance. Sand wedge lofts only.' },
        { name: 'Mid Grind', description: 'V-shaped sole with extra trailing-edge relief to keep the leading edge low on open-face shots. The most versatile option.' },
        { name: 'Full Grind', description: 'Traditional wide sole with extra bounce for stability on full shots. Ideal for soft conditions and around the greens.' },
      ],
      material: '8620 Carbon Steel with ZipCore Insert',
      grooveDesign:
        'UltiZip grooves with sharper edge radii and tighter tolerances than RTX 5. HydraZip face combines a dynamic blast and laser-milled line system to create surface roughness that enhances friction for 43% more wet spin. Heat-treated groove edges for lasting sharpness.',
      finish: ['Tour Satin', 'Black Satin'],
      keyTechnologies: [
        'HydraZip face technology (dynamic blast + laser-milled lines)',
        'ZipCore low-density core insert',
        'UltiZip groove technology',
        '43% more wet spin than RTX 5',
        'New Low+ grind for sand wedge lofts',
      ],
    },
    scores: {
      spinAndControl: 9.4,
      versatility: 8.9,
      feelAndFeedback: 8.7,
      turfInteraction: 9.0,
      value: 9.4,
    },
    // 9.4*0.25 + 8.9*0.25 + 8.7*0.20 + 9.0*0.15 + 9.4*0.15 = 2.35 + 2.225 + 1.74 + 1.35 + 1.41 = 9.075 => 9.1
    overallScore: 9.1,
    lastUpdated: '2026-02-19',
  },

  // ─── 7. Cobra King Wedge (2025) ──────────────────────────────────────────────
  {
    id: 'cobra-king-wedge-2025',
    name: 'KING Wedge',
    manufacturer: 'cobra',
    category: 'wedge',
    year: 2025,
    msrp: 170,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000035550-01_pc',
    productUrl: 'https://www.cobragolf.com/products/king-wedge-2025',
    playerType: ['low', 'mid'],
    description:
      'The Cobra KING Wedge is crafted using an evolved MIM (Metal Injection Molding) process from 8620 steel that brings 50% tighter tolerances than casting, with a grain structure practically identical to forging. Four new grind profiles (Drop, Widelow, Versatile, Tour) and a redesigned Speed Notch that is 67% larger deliver smooth turf interaction and high spin. Flight Window Technology moves CG to optimal locations by loft range for trajectory control.',
    pros: [
      'MIM process delivers forging-like precision at 50% tighter tolerances',
      'Four distinct grinds including the Tour grind developed with PGA Tour staff',
      '67% larger Speed Notch for improved turf glide and spin',
      'Flight Window Technology optimizes CG by loft range',
    ],
    cons: [
      'MIM construction may not feel as soft as fully forged alternatives',
      'Less brand recognition in the wedge category than Vokey or Cleveland',
      'Raw finish carries a $20 premium at $190',
    ],
    specifications: {
      availableLofts: [48, 50, 52, 54, 56, 58, 60],
      availableBounces: [8, 10, 12],
      availableGrinds: [
        { name: 'Versatile (V) Grind', description: 'The most popular grind, available in every loft 48-60. Heel and toe relief for face manipulation. Works in medium to firm conditions for neutral to shallow attack angles.' },
        { name: 'Drop (D) Grind', description: 'First Cobra wedge with no notch. Designed for a clean, traditional sole interaction.' },
        { name: 'Widelow (W) Grind', description: 'Wide sole with low bounce (8 degrees) for soft bunkers and overall soft conditions. Resistant to digging.' },
        { name: 'Tour (T) Grind', description: 'Maximum heel and toe relief combined with a scallop for ultimate versatility. Best for medium to firm conditions, tight lies, and shallow, precise deliveries.' },
      ],
      material: '8620 Steel (MIM - Metal Injection Molding, heat-treated)',
      grooveDesign:
        'CNC-milled Snakebite grooves that are 11% deeper with 40% sharper edges. Progressive notch design inspired by classic Phil Rodgers notch design. Tighter groove spacing in scoring lofts for maximum greenside spin.',
      finish: ['Satin Chrome', 'QPQ Black', 'Raw (custom order)'],
      keyTechnologies: [
        'MIM (Metal Injection Molding) with 50% tighter tolerances',
        'Flight Window Technology (progressive CG by loft)',
        '67% larger Speed Notch',
        'CNC-milled Snakebite grooves (11% deeper, 40% sharper)',
        'Four new grind profiles',
      ],
    },
    scores: {
      spinAndControl: 9.0,
      versatility: 9.0,
      feelAndFeedback: 8.7,
      turfInteraction: 8.9,
      value: 8.9,
    },
    // 9.0*0.25 + 9.0*0.25 + 8.7*0.20 + 8.9*0.15 + 8.9*0.15 = 2.25 + 2.25 + 1.74 + 1.335 + 1.335 = 8.91 => 8.9
    overallScore: 8.9,
    lastUpdated: '2026-02-19',
  },

  // ─── 8. PXG Sugar Daddy III ──────────────────────────────────────────────────
  {
    id: 'pxg-sugar-daddy-iii',
    name: 'Sugar Daddy III',
    manufacturer: 'pxg',
    category: 'wedge',
    year: 2025,
    msrp: 299,
    currency: 'USD',
    imageUrl: 'https://www.pxg.com/cdn/shop/files/Sugar-Daddy-III-S-Grind-Wedge-Chrome-Beauty_ad946397-1eb7-4acb-aec7-17001a11f9b2.jpg?v=1765308881',
    productUrl: 'https://www.pxg.com/products/sugar-daddy-iii-wedges',
    playerType: ['low', 'mid'],
    description:
      'The PXG Sugar Daddy III is a 3X forged, 100% CNC milled premium wedge crafted from 8620 soft carbon steel. Triple forging creates a tight grain structure that increases strength, extends groove life, and delivers exceptional feel. A unique wide groove pattern engages the ball cover 0.002 inches deeper than competitor narrow grooves, supporting approximately 25% more volume in cross-sectional area. Three innovative sole designs and swing weight adjustability make this a fitting-focused premium offering.',
    pros: [
      'Triple-forged 8620 steel with 100% CNC milling for extreme precision',
      'Wide groove pattern grabs 0.002" deeper with 25% more cross-sectional volume',
      'Three sole designs (S, BP, C) cover all playing styles',
      'Swing weight adjustability during fitting for personalized performance',
    ],
    cons: [
      'Premium $299 price ($349 for Xtreme Dark) limits accessibility',
      'C Grind only available in 58 and 60 degrees',
      'PXG carries less wedge-specific credibility than Vokey or Cleveland',
    ],
    specifications: {
      availableLofts: [50, 52, 54, 56, 58, 60],
      availableBounces: [7, 10, 12],
      availableGrinds: [
        { name: 'S Grind (10)', description: 'Classic head shape with traditional sole. 10-degree bounce that tapers heel to toe for moderate bounce and versatility in square or open positions. Available in all lofts 50-60.' },
        { name: 'BP Grind (12)', description: 'High toe design with full face grooves. Wider sole with 12-degree bounce, slight heel-to-toe taper. Maximum forgiveness for lush turf, soft sand, and steep attack angles. Available 54-60.' },
        { name: 'C Grind (07)', description: 'Classic shape with narrow sole. 7-degree bounce with aggressive heel-to-toe taper. Lower bounce for greater versatility on tight lies and firm conditions. Available 58-60 only.' },
      ],
      material: '3X Forged 8620 Soft Carbon Steel (100% CNC Milled)',
      grooveDesign:
        'Wide groove pattern that engages the ball cover 0.002" deeper than competitor narrow-groove designs, with approximately 25% more volume in cross-sectional areas. Each groove is 100% CNC milled for precision consistency. Triple forging extends groove life.',
      finish: ['Chrome', 'Xtreme Dark'],
      keyTechnologies: [
        'Triple forging (3X) for tight grain structure',
        '100% CNC milling on every surface',
        'Wide groove pattern (0.002" deeper engagement)',
        'Swing weight adjustability during fitting',
        'Full face grooves on BP Grind',
      ],
    },
    scores: {
      spinAndControl: 9.3,
      versatility: 8.8,
      feelAndFeedback: 9.3,
      turfInteraction: 8.8,
      value: 7.5,
    },
    // 9.3*0.25 + 8.8*0.25 + 9.3*0.20 + 8.8*0.15 + 7.5*0.15 = 2.325 + 2.2 + 1.86 + 1.32 + 1.125 = 8.83 => 8.8
    overallScore: 8.8,
    lastUpdated: '2026-02-19',
  },

  // ─── 9. Titleist Vokey WedgeWorks (Limited) ──────────────────────────────────
  {
    id: 'vokey-wedgeworks',
    name: 'Vokey WedgeWorks SM11',
    manufacturer: 'titleist',
    category: 'wedge',
    year: 2026,
    msrp: 275,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000041794-01_pc',
    productUrl: 'https://www.vokey.com/nav/wedgeworks.aspx',
    playerType: ['low'],
    description:
      'Vokey WedgeWorks is the custom arm of the SM11 platform, offering exclusive grind options, hand-ground finishes, personalized stamping, and limited-edition releases straight from Bob Vokey\'s workshop. The WedgeWorks-exclusive L Grind and special configurations like the 64-degree T Grind lob wedge provide options unavailable in the standard SM11 line. Each WedgeWorks wedge is hand-inspected and carries the same progressive CG and Spin Milled groove technology as the SM11.',
    pros: [
      'Exclusive grinds and loft options unavailable in the standard SM11 line',
      'Hand-ground finishes and personalized stamping from Bob Vokey\'s workshop',
      'Same progressive CG and Spin Milled groove technology as SM11',
      'Limited-edition releases with collectible value',
    ],
    cons: [
      'Premium $275+ pricing significantly above standard SM11',
      'Very limited availability and long wait times for custom work',
      'Primarily suited for low-handicap players and collectors',
    ],
    specifications: {
      availableLofts: [46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
      availableBounces: [4, 6, 8, 10, 12, 14],
      availableGrinds: [
        { name: 'F Grind', description: 'Full sole for full wedge shots (same as SM11 standard).' },
        { name: 'S Grind', description: 'Narrowed trailing-edge sole for faster turf feel (same as SM11 standard).' },
        { name: 'M Grind', description: 'Crescent sole for open-face shot manufacturing (same as SM11 standard).' },
        { name: 'D Grind', description: 'Forward bounce for steep swings (same as SM11 standard).' },
        { name: 'K Grind', description: 'Wide full sole for bunkers and soft conditions (same as SM11 standard).' },
        { name: 'T Grind', description: 'Low bounce narrow sole for maximum versatility (same as SM11 standard).' },
        { name: 'L Grind', description: 'WedgeWorks exclusive: low bounce with heel, toe, and trailing-edge relief for players seeking a precision low-bounce option.' },
      ],
      material: '8620 Carbon Steel (heat-treated)',
      grooveDesign:
        'Same Spin Milled grooves as SM11 with 5% more volume, individually cut per loft. WedgeWorks options may include hand-finished groove edges and custom groove configurations for tour players.',
      finish: ['Raw', 'Tour Chrome', 'Custom Hand-Ground'],
      keyTechnologies: [
        'SM11 Progressive Center of Gravity platform',
        'Spin Milled grooves with 5% more volume',
        'WedgeWorks-exclusive L Grind',
        'Hand-ground sole and finish options',
        'Personalized stamping and toe engraving',
      ],
    },
    scores: {
      spinAndControl: 9.6,
      versatility: 9.2,
      feelAndFeedback: 9.4,
      turfInteraction: 9.2,
      value: 7.0,
    },
    // 9.6*0.25 + 9.2*0.25 + 9.4*0.20 + 9.2*0.15 + 7.0*0.15 = 2.4 + 2.3 + 1.88 + 1.38 + 1.05 = 9.01 => 9.0
    overallScore: 9.0,
    lastUpdated: '2026-02-19',
  },

  // ─── 10. Callaway Opus Platinum ──────────────────────────────────────────────
  {
    id: 'callaway-opus-platinum',
    name: 'Opus Platinum',
    manufacturer: 'callaway',
    category: 'wedge',
    year: 2025,
    msrp: 229,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000030770-01_pc',
    productUrl: 'https://www.callawaygolf.com/golf-clubs/wedges/wedges-2024-opus-platinum-chrome.html',
    playerType: ['low'],
    description:
      'The Callaway Opus Platinum is Callaway\'s tour-tier wedge, fusing metal injection molding (MiM) with bonded tungsten high in the topline to create a naturally lower launch for more control and spin into greens. Spin Gen Face Technology features a tighter groove pitch, offset groove-in-groove design, and aggressive face blast for maximum spin on partial and full shots. Tour Certified Shaping with a higher toe peak and refined leading edge makes this the most tour-validated shape in Callaway history.',
    pros: [
      'MiM construction with tungsten topline weighting for precise launch control',
      'Spin Gen Face Technology maximizes spin on partial and open-face shots',
      'Tour Certified Shaping is the most validated shape in Callaway wedge history',
      'Premium Platinum Chrome and Platinum Blue finish options',
    ],
    cons: [
      'Premium $229 price point is above mainstream wedge pricing',
      'Limited to 54-60 degree lofts only (no gap wedge options)',
      'Only two grind options compared to more extensive competitors',
    ],
    specifications: {
      availableLofts: [54, 56, 58, 60],
      availableBounces: [8, 10, 12],
      availableGrinds: [
        { name: 'S Grind', description: 'Standard grind available in 54-60 degrees with 10 and 12 degrees of bounce. All-around versatile sole for full shots and greenside creativity.' },
        { name: 'Z Grind', description: 'Unique to Opus Platinum with 8 and 10 degrees of bounce. Designed for players seeking lower bounce with enhanced open-face versatility.' },
      ],
      material: 'Metal Injection Molded (MiM) with Bonded Tungsten Topline',
      grooveDesign:
        'Spin Gen Face Technology: tighter groove pitch increases groove count, offset groove-in-groove design delivers optimal spin when opening the face, and aggressive face blast maximizes spin and bite on partial shots. Tour-validated 37-degree sidewall geometry.',
      finish: ['Platinum Chrome', 'Platinum Blue'],
      keyTechnologies: [
        'Metal Injection Molding (MiM) construction',
        'Bonded tungsten topline weighting for lower launch',
        'Spin Gen Face Technology (tighter pitch, offset groove-in-groove)',
        'Tour Certified Shaping',
        'Aggressive face blast for partial shot spin',
      ],
    },
    scores: {
      spinAndControl: 9.5,
      versatility: 8.5,
      feelAndFeedback: 9.2,
      turfInteraction: 8.8,
      value: 8.0,
    },
    // 9.5*0.25 + 8.5*0.25 + 9.2*0.20 + 8.8*0.15 + 8.0*0.15 = 2.375 + 2.125 + 1.84 + 1.32 + 1.2 = 8.86 => 8.9
    overallScore: 8.9,
    lastUpdated: '2026-02-19',
  },

  // ─── 11. Wilson Staff Model ZM ───────────────────────────────────────────────
  {
    id: 'wilson-staff-model-zm',
    name: 'Staff Model ZM',
    manufacturer: 'wilson',
    category: 'wedge',
    year: 2025,
    msrp: 150,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000043519-01_pc',
    productUrl: 'https://www.wilson.com/en-us/product/staff-model-wedge-zm-wg1p0345',
    playerType: ['low', 'mid'],
    description:
      'The Wilson Staff Model ZM is a forged 8620 carbon steel wedge developed with tour player input, featuring precision-milled ZM grooves that are deeper and more aggressive than standard grooves, combined with garnet face blasting for enhanced spin in wet conditions. A straighter leading edge and elevated CG provide precise trajectory control, while the Dynamic Gold Spinner shaft further elevates spin rates with its more active tip section.',
    pros: [
      'Forged 8620 carbon steel delivers soft, tour-quality feel',
      'ZM grooves with garnet face blasting maximize wet-condition spin',
      'Dynamic Gold Spinner shaft enhances spin rates on short shots',
      'Outstanding $150 price for a tour-caliber forged wedge',
    ],
    cons: [
      'Wilson brand perception in wedges lags behind Vokey, Cleveland, and Callaway',
      'Fewer grind/bounce combinations than the most extensive competitors',
      'Compact shape demands more precision from the player',
    ],
    specifications: {
      availableLofts: [46, 48, 50, 52, 54, 56, 58, 60],
      availableBounces: [6, 8, 10, 12],
      availableGrinds: [
        { name: 'Low Bounce', description: '6-degree bounce option for firm conditions, tight lies, and players with shallow attack angles.' },
        { name: 'Mid Bounce', description: '8-10 degree bounce options for versatile all-around performance in varying conditions.' },
        { name: 'High Bounce', description: '12-degree bounce option for soft conditions, bunker play, and steeper attack angles.' },
      ],
      material: 'Forged 8620 Carbon Steel',
      grooveDesign:
        'Precision-milled ZM grooves that are deeper and more aggressive than standard Wilson grooves, combined with garnet face blasting that creates a rough surface texture for enhanced spin, particularly in wet conditions.',
      finish: ['Chrome with Polished Strip Accent'],
      keyTechnologies: [
        'Forged 8620 carbon steel construction',
        'Precision-milled ZM grooves',
        'Garnet face blasting for wet-spin enhancement',
        'Elevated CG for trajectory control',
        'True Temper Dynamic Gold Spinner stock shaft',
      ],
    },
    scores: {
      spinAndControl: 9.0,
      versatility: 8.6,
      feelAndFeedback: 9.0,
      turfInteraction: 8.6,
      value: 8.5,
    },
    // 9.0*0.25 + 8.6*0.25 + 9.0*0.20 + 8.6*0.15 + 8.5*0.15 = 2.25 + 2.15 + 1.80 + 1.29 + 1.275 = 8.765 => 8.8
    overallScore: 8.8,
    lastUpdated: '2026-02-19',
  },

  // ─── 12. Mizuno Pro T-3 ──────────────────────────────────────────────────────
  {
    id: 'mizuno-pro-t3',
    name: 'Mizuno Pro T-3',
    manufacturer: 'mizuno',
    category: 'wedge',
    year: 2025,
    msrp: 179,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000050593-01_pc',
    productUrl: 'https://mizunogolf.com/us/golf-clubs/mp-series/mizuno-pro-t3/',
    playerType: ['mid', 'high'],
    description:
      'The Mizuno Pro T-3 is the game-improvement counterpart to the tour-oriented T-1, featuring a shallow cavity design and longer head length for increased stability and forgiveness on off-center strikes. Grain Flow Forged HD from the same Hiroshima facility as the T-1, the T-3 shares Quad Cut+ and Hydroflow Micro Groove technology for spin consistency. Three sole grinds and a sole Soft White Satin finish provide a clean, approachable option for players who need more help around the greens.',
    pros: [
      'Shallow cavity and longer head provide extra forgiveness for mid/high handicaps',
      'Same Grain Flow Forged HD process and groove tech as the tour-level T-1',
      'Hydroflow Micro Grooves deliver reliable spin in wet conditions',
      'Excellent $179 price for a premium forged cavity-back wedge',
    ],
    cons: [
      'Only available in Soft White Satin finish (no color options)',
      'Three grind options is fewer than the T-1\'s six',
      'Longer head length may look bulky to better players',
    ],
    specifications: {
      availableLofts: [46, 48, 50, 52, 54, 56, 58, 60],
      availableBounces: [6, 8, 10, 12],
      availableGrinds: [
        { name: 'S Grind', description: 'Full-swing grind with straight bevel relief. Available across most lofts for standard play.' },
        { name: 'M Grind', description: 'Mid bounce with moderate relief for gentle manipulation. Offers a balanced option for varied conditions.' },
        { name: 'C Grind', description: 'Mid/high bounce with generous relief for a wide range of players and conditions. The most forgiving option.' },
      ],
      material: 'Grain Flow Forged HD 1025 Pure Select Mild Carbon Steel',
      grooveDesign:
        'Same Quad Cut+ Grooves and Hydroflow Micro Grooves as the T-1 for maximum spin consistency in all conditions. Groove geometry optimized for the slightly larger cavity-back head shape.',
      finish: ['Soft White Satin'],
      keyTechnologies: [
        'Grain Flow Forged HD at Hiroshima facility',
        'Shallow cavity design for increased stability',
        'Quad Cut+ Grooves for premium spin',
        'Hydroflow Micro Grooves for wet performance',
        'Longer head length for added forgiveness',
      ],
    },
    scores: {
      spinAndControl: 8.8,
      versatility: 8.4,
      feelAndFeedback: 9.2,
      turfInteraction: 8.8,
      value: 8.8,
    },
    // 8.8*0.25 + 8.4*0.25 + 9.2*0.20 + 8.8*0.15 + 8.8*0.15 = 2.2 + 2.1 + 1.84 + 1.32 + 1.32 = 8.78 => 8.8
    overallScore: 8.8,
    lastUpdated: '2026-02-19',
  },

  // ─── 13. Srixon ZX7 Mk II Wedge ─────────────────────────────────────────────
  {
    id: 'srixon-zx7-mkii-wedge',
    name: 'ZX7 Mk II Wedge',
    manufacturer: 'srixon',
    category: 'wedge',
    year: 2025,
    msrp: 185,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000034229-01_pc',
    productUrl: 'https://us.dunlopsports.com/srixon/clubs/irons/zx7-mk-ii/',
    playerType: ['low'],
    description:
      'The Srixon ZX7 Mk II Wedge is a single-piece forged blade wedge designed for skilled players who demand maximum workability and precision. PureFrame technology places an 80% thicker region of 1020 Carbon Steel directly behind the impact zone for soft yet solid feel. The Tour V.T. Sole combines bounce angles, sole widths, and notches for consistent contact. Paired with the Nippon N.S. PRO Modus3 Tour 120 shaft for controlled spin and trajectory.',
    pros: [
      'PureFrame technology delivers exceptionally soft and solid forged feel',
      'Compact blade shape provides maximum workability and shot control',
      'Tour V.T. Sole ensures consistent turf interaction',
      'N.S. PRO Modus3 Tour 120 shaft minimizes unwanted spin for precision',
    ],
    cons: [
      'Blade shape offers minimal forgiveness and demands precision',
      'Functions as an iron-set extension rather than a dedicated wedge design',
      'Fewer grind/bounce options than dedicated wedge models',
    ],
    specifications: {
      availableLofts: [50, 52, 54, 56, 58, 60],
      availableBounces: [8, 10, 12],
      availableGrinds: [
        { name: 'Tour V.T. Sole', description: 'Combination of bounce angles, sole widths, and notches designed for consistent contact across all turf conditions.' },
      ],
      material: 'Forged 1020 Carbon Steel with PureFrame',
      grooveDesign:
        'Tour-spec precision-milled grooves with aggressive edge sharpness. PureFrame\'s thicker region behind the impact zone enhances feedback on every strike. Spin Skin coating adds micro-roughness for additional friction.',
      finish: ['Tour Satin Chrome'],
      keyTechnologies: [
        'PureFrame (80% thicker impact zone)',
        'Single-piece forged 1020 carbon steel',
        'Tour V.T. Sole technology',
        'Spin Skin micro-roughness coating',
        'Nippon N.S. PRO Modus3 Tour 120 stock shaft',
      ],
    },
    scores: {
      spinAndControl: 9.0,
      versatility: 8.0,
      feelAndFeedback: 9.2,
      turfInteraction: 8.4,
      value: 8.3,
    },
    // 9.0*0.25 + 8.0*0.25 + 9.2*0.20 + 8.4*0.15 + 8.3*0.15 = 2.25 + 2.0 + 1.84 + 1.26 + 1.245 = 8.595 => 8.6
    overallScore: 8.6,
    lastUpdated: '2026-02-19',
  },

  // ─── 14. Tour Edge TGS ──────────────────────────────────────────────────────
  {
    id: 'tour-edge-tgs',
    name: 'TGS Triple Grind Sole',
    manufacturer: 'tour-edge',
    category: 'wedge',
    year: 2024,
    msrp: 59,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000023957-01_pc',
    productUrl: 'https://www.touredge.com/products/tour-edge-tgs-triple-grind-sole-wedge',
    playerType: ['mid', 'high', 'beginner'],
    description:
      'The Tour Edge TGS (Triple Grind Sole) is an ultra-affordable wedge that punches above its weight with a tour-inspired triple grind sole that eliminates bounce from the heel and toe areas for versatile turf interaction. CNC-milled grooves at maximum allowable depth generate reliable spin, and a pear-shaped head design with a straight-taper shaft transmits maximum feel. Available individually or as a budget-friendly 3-piece set.',
    pros: [
      'Exceptional value at under $60 per wedge for budget-conscious golfers',
      'CNC-milled grooves at maximum USGA-allowable depth for spin',
      'Triple grind sole eliminates heel/toe bounce for versatile turf interaction',
      'Available as individual wedges or value-oriented 3-piece set',
    ],
    cons: [
      '431 stainless steel construction lacks the soft feel of carbon steel wedges',
      'Limited loft selection (52, 56, 60 only)',
      'Fewer grind and bounce options than premium competitors',
    ],
    specifications: {
      availableLofts: [52, 56, 60],
      availableBounces: [10],
      availableGrinds: [
        { name: 'Triple Grind Sole', description: 'Tour-inspired sole design that removes bounce from the heel and toe areas for versatile interaction from various lies and turf conditions.' },
      ],
      material: '431 Stainless Steel',
      grooveDesign:
        'CNC-milled grooves at the maximum allowable depth per USGA rules to generate optimal spin and control. Classic tour-inspired groove spacing for consistent ball interaction.',
      finish: ['Chrome', 'Black Carbon'],
      keyTechnologies: [
        'Triple Grind Sole technology',
        'CNC-milled maximum-depth grooves',
        'Pear-shaped head design',
        'Straight-taper shaft for feel',
        'Tour-taper grip for control',
      ],
    },
    scores: {
      spinAndControl: 7.2,
      versatility: 7.0,
      feelAndFeedback: 7.0,
      turfInteraction: 7.5,
      value: 9.8,
    },
    // 7.2*0.25 + 7.0*0.25 + 7.0*0.20 + 7.5*0.15 + 9.8*0.15 = 1.8 + 1.75 + 1.4 + 1.125 + 1.47 = 7.545 => 7.5
    overallScore: 7.5,
    lastUpdated: '2026-02-19',
  },

  // ─── 15. Cleveland CBX4 ZipCore ──────────────────────────────────────────────
  {
    id: 'cleveland-cbx4-zipcore',
    name: 'CBX4 ZipCore',
    manufacturer: 'cleveland',
    category: 'wedge',
    year: 2024,
    msrp: 170,
    currency: 'USD',
    imageUrl: 'https://cdn.media.amplience.net/i/pgatss/2000000041612-01_pc',
    productUrl: 'https://us.dunlopsports.com/cleveland-golf/clubs/wedges/cbx-price-drop/cbx-4-zipcore-wedge/MCBX4ZC.html',
    playerType: ['mid', 'high'],
    description:
      'The Cleveland CBX4 ZipCore bridges the gap between your cavity-back irons and your scoring wedges with premium spin technologies in a forgiving package. HydraZip face technology enhances surface friction in wet and dry conditions, ZipCore reduces vibrations while boosting MOI, and UltiZip grooves deliver sharper, deeper, tighter grooves for maximum spin. Progressive sole shapes (V, S, C) by loft range ensure optimal turf interaction for each shot type.',
    pros: [
      'Cavity-back design with ZipCore provides iron-like forgiveness',
      'HydraZip face technology maximizes spin in all weather conditions',
      'Three progressive sole shapes optimized by loft range',
      'Excellent bridge from game-improvement irons to dedicated wedges',
    ],
    cons: [
      'Lower raw spin rates compared to tour-oriented blade wedges',
      'Cavity-back aesthetic may not appeal to better players',
      'Less open-face versatility than player-style wedges',
    ],
    specifications: {
      availableLofts: [44, 46, 48, 50, 52, 54, 56, 58, 60],
      availableBounces: [10, 12, 14],
      availableGrinds: [
        { name: 'V-Sole (44-52)', description: 'V-shaped sole for full-swing and square-faced shots. Glides over turf without digging for consistent contact.' },
        { name: 'S-Sole (54-56)', description: 'S-shaped sole with added bounce, ideal for bunker shots and open-face finesse shots from rough or fairway.' },
        { name: 'C-Sole (58-60)', description: 'C-shaped grind perfect for lob shots with an open face, providing maximum greenside creativity.' },
      ],
      material: 'Stainless Steel with ZipCore Insert',
      grooveDesign:
        'UltiZip grooves featuring a specialized sequence of sharper, deeper, and tighter grooves for maximum spin, control, and bite. HydraZip dynamic blast and laser-milled line system enhances surface friction for wet and dry consistency.',
      finish: ['Tour Satin'],
      keyTechnologies: [
        'ZipCore low-density insert (reduces vibration, boosts MOI)',
        'HydraZip face technology (dynamic blast + laser-milled lines)',
        'UltiZip groove technology',
        'Progressive sole shapes by loft range (V, S, C)',
        'Cavity-back design for forgiveness',
      ],
    },
    scores: {
      spinAndControl: 8.2,
      versatility: 7.8,
      feelAndFeedback: 8.2,
      turfInteraction: 9.2,
      value: 9.0,
    },
    // 8.2*0.25 + 7.8*0.25 + 8.2*0.20 + 9.2*0.15 + 9.0*0.15 = 2.05 + 1.95 + 1.64 + 1.38 + 1.35 = 8.37 => 8.4
    overallScore: 8.4,
    lastUpdated: '2026-02-19',
  },
];

export default wedges;
