import { Wedge } from './wedge-types';

export const wedges: Wedge[] = [
  // ─── 1. Vokey SM10 ────────────────────────────────────────────────────────────
  {
    id: 'vokey-sm10',
    name: 'Vokey SM10',
    manufacturer: 'vokey',
    category: 'wedge',
    year: 2025,
    msrp: 189,
    currency: 'USD',
    imageUrl: '/images/wedges/vokey-sm10.png',
    productUrl: 'https://www.vokey.com/wedges/sm10.html',
    playerType: ['low', 'mid'],
    description:
      'The Vokey SM10 builds on decades of tour-proven performance with a refined progressive center of gravity design and improved Spin Milled grooves. Bob Vokey and his team have optimized each loft for precise trajectory and spin control, making this the most complete wedge in the SM lineup to date.',
    pros: [
      'Tour-leading spin consistency across all lofts',
      'Six versatile grind options for every shot type',
      'Progressive CG placement optimizes trajectory by loft',
      'Durable Spin Milled grooves maintain performance over time',
    ],
    cons: [
      'Premium price point compared to competitors',
      'Limited finish options on certain grind/loft combos',
      'Requires fitting to pick the ideal grind for your game',
    ],
    specifications: {
      availableLofts: [46, 48, 50, 52, 54, 56, 58, 60, 62],
      availableBounces: [4, 6, 8, 10, 12, 14],
      availableGrinds: [
        { name: 'F Grind', description: 'Full sole grind for versatility on full shots and open-face work' },
        { name: 'S Grind', description: 'Mid-width sole with moderate heel and toe relief for shot-making versatility' },
        { name: 'M Grind', description: 'Crescent-shaped sole with significant heel, toe, and trailing-edge relief for maximum manipulation' },
        { name: 'D Grind', description: 'High-bounce full sole for players who dig and steep attack angles' },
        { name: 'K Grind', description: 'Wide sole with high bounce for soft conditions and bunker play' },
        { name: 'L Grind', description: 'Narrow sole with minimal bounce for firm conditions and shallow attack angles' },
      ],
      material: '8620 Carbon Steel',
      grooveDesign:
        'Spin Milled grooves individually cut for each loft to maximize spin. Lower lofts feature narrower, deeper grooves for full-shot control while higher lofts use wider, shallower grooves optimized for greenside spin on partial swings.',
      finish: ['Tour Chrome', 'Brushed Steel', 'Jet Black'],
      keyTechnologies: [
        'Progressive Center of Gravity',
        'Spin Milled Grooves',
        'Heat Treatment for durability',
        'Forward CG in lower lofts for penetrating flight',
        'Tour-validated sole grinds',
      ],
    },
    scores: {
      spinAndControl: 9.5,
      versatility: 9.3,
      feelAndFeedback: 9.2,
      turfInteraction: 9.0,
      value: 8.5,
    },
    // 9.5*0.25 + 9.3*0.25 + 9.2*0.20 + 9.0*0.15 + 8.5*0.15 = 2.375 + 2.325 + 1.84 + 1.35 + 1.275 = 9.165 => 9.2
    overallScore: 9.2,
    lastUpdated: '2025-02-19',
  },

  // ─── 2. Vokey BV Wings ────────────────────────────────────────────────────────
  {
    id: 'vokey-bv-wings',
    name: 'Vokey BV Wings',
    manufacturer: 'vokey',
    category: 'wedge',
    year: 2025,
    msrp: 399,
    currency: 'USD',
    imageUrl: '/images/wedges/vokey-bv-wings.png',
    productUrl: 'https://www.vokey.com/wedges/bv-wings.html',
    playerType: ['low'],
    description:
      'The Vokey BV Wings is an ultra-premium, hand-inspected forged wedge crafted from the finest materials for the most discerning players. Featuring a multi-piece forged construction with tungsten weighting for surgical precision, this wedge represents the pinnacle of Vokey craftsmanship and delivers an unmatched combination of feel, spin, and control.',
    pros: [
      'Exceptional soft forged feel unmatched by any competitor',
      'Tungsten weighting delivers pinpoint CG placement',
      'Hand-inspected quality control on every head',
      'Tour-tier spin performance with precision-milled grooves',
      'Stunning premium aesthetics',
    ],
    cons: [
      'Extremely high price limits accessibility',
      'Limited loft and grind availability',
      'Soft forged material wears faster than cast steel',
      'Overkill for mid-to-high handicap players',
    ],
    specifications: {
      availableLofts: [50, 52, 54, 56, 58, 60],
      availableBounces: [6, 8, 10, 12],
      availableGrinds: [
        { name: 'T Grind', description: 'Tour-only inspired narrow sole with precise trailing-edge relief for ultimate versatility' },
        { name: 'S Grind', description: 'Mid-width sole with moderate relief for all-around shot-making' },
        { name: 'M Grind', description: 'Crescent sole with maximum heel and toe relief for creative shotmaking' },
      ],
      material: 'Forged 1025 Carbon Steel with Tungsten Weighting',
      grooveDesign:
        'Precision CNC-milled micro-grooves with tighter tolerances than standard Spin Milled process. Each groove is individually inspected to ensure maximum spin consistency from the center and edges of the face.',
      finish: ['Raw', 'Tour Chrome'],
      keyTechnologies: [
        'Multi-piece forged construction',
        'Tungsten CG optimization',
        'CNC precision-milled micro-grooves',
        'Hand-inspected quality assurance',
        'Tour-validated shaping',
      ],
    },
    scores: {
      spinAndControl: 9.6,
      versatility: 9.0,
      feelAndFeedback: 9.8,
      turfInteraction: 9.3,
      value: 6.5,
    },
    // 9.6*0.25 + 9.0*0.25 + 9.8*0.20 + 9.3*0.15 + 6.5*0.15 = 2.4 + 2.25 + 1.96 + 1.395 + 0.975 = 8.98 => 9.0
    overallScore: 9.0,
    lastUpdated: '2025-02-19',
  },

  // ─── 3. Callaway Jaws Raw Full Toe ────────────────────────────────────────────
  {
    id: 'callaway-jaws-raw-full-toe',
    name: 'Jaws Raw Full Toe',
    manufacturer: 'callaway',
    category: 'wedge',
    year: 2025,
    msrp: 179,
    currency: 'USD',
    imageUrl: '/images/wedges/callaway-jaws-raw-full-toe.png',
    productUrl: 'https://www.callawaygolf.com/wedges/jaws-raw-full-toe.html',
    playerType: ['low', 'mid'],
    description:
      'The Callaway Jaws Raw Full Toe combines an aggressive raw face with a full-toe design that extends grooves across the entire face for maximum spin on open-face shots. The raw finish oxidizes over time for a unique look and reduced glare, while the offset groove-in-groove technology delivers extreme spin from any lie.',
    pros: [
      'Full-toe profile provides grooves across the entire face for open-face spin',
      'Raw face finish reduces glare and increases friction over time',
      'Aggressive Jaws grooves generate exceptional spin rates',
      'Excellent versatility around the greens on creative shots',
    ],
    cons: [
      'Raw finish requires acceptance of aesthetic change over time',
      'Full-toe shaping may look unconventional at address',
      'Aggressive grooves may be harder to control for beginners',
    ],
    specifications: {
      availableLofts: [54, 56, 58, 60, 64],
      availableBounces: [7, 9, 11],
      availableGrinds: [
        { name: 'W Grind', description: 'Wide sole with moderate camber for bunkers and soft turf conditions' },
        { name: 'Z Grind', description: 'Low-bounce grind with toe relief for versatile open-face shots on firm turf' },
      ],
      material: '8620 Mild Carbon Steel',
      grooveDesign:
        'Jaws groove-in-groove technology featuring aggressive 37-degree groove walls with micro-grooves between each full groove. The raw, unplated face increases friction over time as the surface oxidizes.',
      finish: ['Raw'],
      keyTechnologies: [
        'Jaws groove-in-groove technology',
        'Full-toe grooved face',
        'Raw unplated face for increasing friction',
        'Offset groove pattern for consistent spin',
        'Tungsten energy core',
      ],
    },
    scores: {
      spinAndControl: 9.3,
      versatility: 9.4,
      feelAndFeedback: 8.8,
      turfInteraction: 8.7,
      value: 8.7,
    },
    // 9.3*0.25 + 9.4*0.25 + 8.8*0.20 + 8.7*0.15 + 8.7*0.15 = 2.325 + 2.35 + 1.76 + 1.305 + 1.305 = 9.045 => 9.0
    overallScore: 9.0,
    lastUpdated: '2025-02-19',
  },

  // ─── 4. Callaway Jaws Full Toe ────────────────────────────────────────────────
  {
    id: 'callaway-jaws-full-toe',
    name: 'Jaws Full Toe',
    manufacturer: 'callaway',
    category: 'wedge',
    year: 2024,
    msrp: 169,
    currency: 'USD',
    imageUrl: '/images/wedges/callaway-jaws-full-toe.png',
    productUrl: 'https://www.callawaygolf.com/wedges/jaws-full-toe.html',
    playerType: ['low', 'mid'],
    description:
      'The Callaway Jaws Full Toe features a high-toe profile with grooves extending across the entire face for exceptional spin on open-face shots. Designed for maximum versatility around the greens, this wedge offers consistent spin whether the face is square or laid wide open for flop shots and bunker play.',
    pros: [
      'Extended grooves across the full face deliver spin on open-face shots',
      'High-toe design adds forgiveness on off-center hits',
      'C-shaped sole grind enhances versatility on various lies',
      'Competitive price for a premium wedge',
    ],
    cons: [
      'High-toe profile may look bulky to traditional players',
      'Limited grind options compared to Vokey SM10',
      'Chrome finish can produce glare in bright conditions',
    ],
    specifications: {
      availableLofts: [54, 56, 58, 60, 64],
      availableBounces: [8, 10, 12],
      availableGrinds: [
        { name: 'C Grind', description: 'C-shaped sole with heel and toe relief for open and square face versatility' },
      ],
      material: '8620 Mild Carbon Steel',
      grooveDesign:
        'Jaws grooves with 37-degree sidewall angles and a tight 5th groove spacing pattern across the entire face. Micro-positive surface roughness between grooves adds additional friction for spin on shorter shots.',
      finish: ['Chrome', 'Black Plasma'],
      keyTechnologies: [
        'Jaws grooves with 37-degree walls',
        'Full-toe groove coverage',
        'C-shaped sole grind',
        'Micro-positive roughness pattern',
      ],
    },
    scores: {
      spinAndControl: 9.0,
      versatility: 9.2,
      feelAndFeedback: 8.6,
      turfInteraction: 8.5,
      value: 8.8,
    },
    // 9.0*0.25 + 9.2*0.25 + 8.6*0.20 + 8.5*0.15 + 8.8*0.15 = 2.25 + 2.30 + 1.72 + 1.275 + 1.32 = 8.865 => 8.9
    overallScore: 8.9,
    lastUpdated: '2025-02-19',
  },

  // ─── 5. TaylorMade MG4 ────────────────────────────────────────────────────────
  {
    id: 'taylormade-mg4',
    name: 'MG4',
    manufacturer: 'taylormade',
    category: 'wedge',
    year: 2025,
    msrp: 179,
    currency: 'USD',
    imageUrl: '/images/wedges/taylormade-mg4.png',
    productUrl: 'https://www.taylormadegolf.com/wedges/mg4.html',
    playerType: ['low', 'mid'],
    description:
      'The TaylorMade MG4 is designed in collaboration with Tiger Woods and delivers precision-engineered spin and control for serious wedge players. Featuring a new RAW face that increases spin over time, refined sole geometries for each loft, and aggressive ZTP-17 grooves, the MG4 is built for tour-level performance on every wedge shot.',
    pros: [
      'RAW face finish increases spin performance as it wears',
      'ZTP-17 grooves deliver maximum legal spin rates',
      'Four grind options cover a wide variety of course conditions',
      'Tiger Woods collaboration ensures tour-level shaping',
    ],
    cons: [
      'RAW face oxidation changes aesthetics over time',
      'Not designed for game-improvement players',
      'Narrow sole grinds can be punishing from soft turf for beginners',
    ],
    specifications: {
      availableLofts: [46, 48, 50, 52, 54, 56, 58, 60],
      availableBounces: [5, 7, 9, 11, 13],
      availableGrinds: [
        { name: 'SB Grind', description: 'Standard bounce with balanced sole for all-around performance on full swings' },
        { name: 'LB Grind', description: 'Low bounce with trailing-edge relief for firm turf and shallow attack angles' },
        { name: 'HB Grind', description: 'High bounce for soft conditions and steep attack angles' },
        { name: 'TW Grind', description: 'Tiger Woods signature narrow sole grind for maximum greenside versatility' },
      ],
      material: '8620 Carbon Steel',
      grooveDesign:
        'ZTP-17 groove geometry with aggressive 17-degree sidewall angles and tighter groove spacing in scoring lofts. The unplated RAW face roughens over time to enhance spin on partial shots.',
      finish: ['RAW', 'Satin Chrome', 'Black'],
      keyTechnologies: [
        'ZTP-17 groove geometry',
        'RAW face technology',
        'Loft-specific sole geometry',
        'Tiger Woods signature grind',
        'Progressive hosel offset',
      ],
    },
    scores: {
      spinAndControl: 9.2,
      versatility: 9.0,
      feelAndFeedback: 9.0,
      turfInteraction: 8.8,
      value: 8.5,
    },
    // 9.2*0.25 + 9.0*0.25 + 9.0*0.20 + 8.8*0.15 + 8.5*0.15 = 2.3 + 2.25 + 1.8 + 1.32 + 1.275 = 8.945 => 8.9
    overallScore: 8.9,
    lastUpdated: '2025-02-19',
  },

  // ─── 6. TaylorMade Hi-Toe 3 ──────────────────────────────────────────────────
  {
    id: 'taylormade-hi-toe-3',
    name: 'Hi-Toe 3',
    manufacturer: 'taylormade',
    category: 'wedge',
    year: 2024,
    msrp: 179,
    currency: 'USD',
    imageUrl: '/images/wedges/taylormade-hi-toe-3.png',
    productUrl: 'https://www.taylormadegolf.com/wedges/hi-toe-3.html',
    playerType: ['low', 'mid'],
    description:
      'The TaylorMade Hi-Toe 3 features an expanded high-toe shape with full-face scoring lines for exceptional spin on open-face flop shots and bunker escapes. A raised center of gravity promotes a lower, more controlled launch while the full-face grooves ensure consistent spin regardless of where you strike the ball on the face.',
    pros: [
      'Full-face scoring lines provide spin across the entire face',
      'High-toe design raises CG for lower, controlled launch',
      'Excellent bunker and flop shot performance',
      'RAW face adds spin over time',
    ],
    cons: [
      'Larger high-toe profile may not suit traditional eye preferences',
      'Limited to scoring lofts only (no pitching wedge option)',
      'RAW finish requires tolerance for rust-like appearance',
    ],
    specifications: {
      availableLofts: [50, 52, 54, 56, 58, 60, 64],
      availableBounces: [7, 9, 10, 13],
      availableGrinds: [
        { name: 'SB Grind', description: 'Standard bounce sole for full shots and general greenside work' },
        { name: 'LB Grind', description: 'Low bounce sole with relief for open-face shots on firm turf' },
        { name: 'HB Grind', description: 'High bounce sole for soft conditions and aggressive bunker play' },
      ],
      material: '8620 Carbon Steel',
      grooveDesign:
        'Full-face ZTP raw scoring lines extending from heel to toe and up through the high-toe area. Each groove is precisely milled to maintain maximum spin on open-face shots where contact occurs higher on the face.',
      finish: ['RAW', 'Aged Copper', 'Chrome'],
      keyTechnologies: [
        'Full-face scoring lines',
        'High-toe CG placement',
        'RAW face technology',
        'ZTP groove geometry',
        'Progressive sole widths',
      ],
    },
    scores: {
      spinAndControl: 9.0,
      versatility: 9.3,
      feelAndFeedback: 8.7,
      turfInteraction: 8.5,
      value: 8.5,
    },
    // 9.0*0.25 + 9.3*0.25 + 8.7*0.20 + 8.5*0.15 + 8.5*0.15 = 2.25 + 2.325 + 1.74 + 1.275 + 1.275 = 8.865 => 8.9
    overallScore: 8.9,
    lastUpdated: '2025-02-19',
  },

  // ─── 7. Cleveland RTX 6 ZipCore ──────────────────────────────────────────────
  {
    id: 'cleveland-rtx-6-zipcore',
    name: 'RTX 6 ZipCore',
    manufacturer: 'cleveland',
    category: 'wedge',
    year: 2025,
    msrp: 159,
    currency: 'USD',
    imageUrl: '/images/wedges/cleveland-rtx-6-zipcore.png',
    productUrl: 'https://www.clevelandgolf.com/wedges/rtx-6-zipcore.html',
    playerType: ['low', 'mid'],
    description:
      'The Cleveland RTX 6 ZipCore continues Cleveland\'s legacy as a wedge specialist with an upgraded ZipCore insert that lowers CG and increases face flexibility for more consistent spin across the face. The new UltiZip grooves are sharper and more durable, delivering maximum spin on full shots and greenside finesse alike.',
    pros: [
      'ZipCore technology delivers low CG and consistent spin',
      'UltiZip grooves provide maximum legal spin rates',
      'Excellent value for a tour-quality wedge',
      'Multiple grind options for varied playing conditions',
    ],
    cons: [
      'ZipCore insert slightly alters feel compared to one-piece forged wedges',
      'Limited premium finish options',
      'Moderate versatility compared to full-toe designs',
    ],
    specifications: {
      availableLofts: [46, 48, 50, 52, 54, 56, 58, 60, 62],
      availableBounces: [6, 8, 10, 12, 14],
      availableGrinds: [
        { name: 'Mid Grind', description: 'Medium-width sole with moderate relief for all-around versatility' },
        { name: 'Low Grind', description: 'Narrow sole with trailing-edge relief for firm conditions and open-face shots' },
        { name: 'Full Grind', description: 'Wide sole with maximum bounce for soft conditions and bunker play' },
      ],
      material: '8620 Carbon Steel with ZipCore Insert',
      grooveDesign:
        'UltiZip grooves featuring sharper edge radii and tighter tolerances than previous RTX generations. A heat treatment process hardens groove edges for lasting sharpness. Lower lofts use a tour-zip pattern while higher lofts feature wider grooves for maximum greenside spin.',
      finish: ['Tour Satin', 'Tour Rack', 'Mid Black'],
      keyTechnologies: [
        'ZipCore low-density core insert',
        'UltiZip groove technology',
        'Heat-treated groove edges',
        'Progressive groove optimization',
        'Tour-designed sole grinds',
      ],
    },
    scores: {
      spinAndControl: 9.4,
      versatility: 8.8,
      feelAndFeedback: 8.7,
      turfInteraction: 9.0,
      value: 9.2,
    },
    // 9.4*0.25 + 8.8*0.25 + 8.7*0.20 + 9.0*0.15 + 9.2*0.15 = 2.35 + 2.2 + 1.74 + 1.35 + 1.38 = 9.02 => 9.0
    overallScore: 9.0,
    lastUpdated: '2025-02-19',
  },

  // ─── 8. Cleveland CBX 4 ZipCore ──────────────────────────────────────────────
  {
    id: 'cleveland-cbx-4-zipcore',
    name: 'CBX 4 ZipCore',
    manufacturer: 'cleveland',
    category: 'wedge',
    year: 2024,
    msrp: 149,
    currency: 'USD',
    imageUrl: '/images/wedges/cleveland-cbx-4-zipcore.png',
    productUrl: 'https://www.clevelandgolf.com/wedges/cbx-4-zipcore.html',
    playerType: ['mid', 'high'],
    description:
      'The Cleveland CBX 4 ZipCore is a cavity-back game-improvement wedge that bridges the gap between your iron set and your scoring wedges. Featuring a wider sole, cavity-back forgiveness, and the ZipCore insert for improved spin, the CBX 4 makes it easier for mid-to-high handicap players to get up and down from anywhere around the green.',
    pros: [
      'Cavity-back design delivers iron-like forgiveness on off-center hits',
      'Wider sole prevents digging for more consistent turf interaction',
      'ZipCore technology boosts spin even on mishits',
      'Excellent value as a game-improvement wedge',
    ],
    cons: [
      'Lower raw spin rates compared to tour-oriented wedges',
      'Limited grind options reduce versatility for shot shaping',
      'Cavity-back look may not appeal to low-handicap players',
      'Less workability for creative greenside shots',
    ],
    specifications: {
      availableLofts: [46, 48, 50, 52, 54, 56, 58, 60],
      availableBounces: [8, 10, 12],
      availableGrinds: [
        { name: 'V Grind', description: 'V-shaped sole designed for versatility and forgiveness across all lies' },
      ],
      material: 'Stainless Steel with ZipCore Insert',
      grooveDesign:
        'UltiZip grooves adapted for the cavity-back design with slightly wider spacing and optimized edge radii to maximize spin on the moderate swing speeds typical of game-improvement players.',
      finish: ['Tour Satin', 'Black Satin'],
      keyTechnologies: [
        'ZipCore low-density insert',
        'Cavity-back forgiveness design',
        'Gelback dampening insert',
        'Wide V-sole for turf interaction',
        'UltiZip grooves',
      ],
    },
    scores: {
      spinAndControl: 7.8,
      versatility: 7.5,
      feelAndFeedback: 8.0,
      turfInteraction: 9.2,
      value: 9.3,
    },
    // 7.8*0.25 + 7.5*0.25 + 8.0*0.20 + 9.2*0.15 + 9.3*0.15 = 1.95 + 1.875 + 1.6 + 1.38 + 1.395 = 8.2 => 8.2
    overallScore: 8.2,
    lastUpdated: '2025-02-19',
  },

  // ─── 9. Ping s159 ────────────────────────────────────────────────────────────
  {
    id: 'ping-s159',
    name: 's159',
    manufacturer: 'ping',
    category: 'wedge',
    year: 2024,
    msrp: 179,
    currency: 'USD',
    imageUrl: '/images/wedges/ping-s159.png',
    productUrl: 'https://ping.com/en-us/shop/wedges/s159',
    playerType: ['low', 'mid'],
    description:
      'The Ping s159 is precision-milled from 303 stainless steel to deliver exceptional spin and soft feel. Each groove is individually machined with emery wheel sharpening to maximize edge sharpness and spin. The compact, tour-inspired shape and multiple grind options give skilled players the versatility they need for every scoring situation.',
    pros: [
      'Precision-milled 303 stainless steel for soft, buttery feel',
      'Emery wheel groove sharpening for maximum legal spin',
      'Compact tour shape inspires confidence at address',
      'Four grind options for comprehensive versatility',
    ],
    cons: [
      'Stainless steel construction may feel different from carbon steel wedges',
      'Compact blade shape is less forgiving on mishits',
      'Premium feel but price is mid-range — could offer more grinds',
    ],
    specifications: {
      availableLofts: [46, 48, 50, 52, 54, 56, 58, 60],
      availableBounces: [6, 8, 10, 12, 14],
      availableGrinds: [
        { name: 'S Grind', description: 'Standard sole with moderate bounce for all-around playability' },
        { name: 'T Grind', description: 'Thin sole with trailing-edge relief for firm conditions and open-face versatility' },
        { name: 'W Grind', description: 'Wide sole for bunker play and soft turf conditions' },
        { name: 'Eye2 Grind', description: 'Classic Eye2 sole geometry for a traditional toe-down setup and turf forgiveness' },
      ],
      material: '303 Stainless Steel',
      grooveDesign:
        'Precision-milled grooves with emery wheel sharpening process that hones each groove edge to the maximum sharpness allowed by USGA rules. The milling process creates micro-roughness between grooves for additional friction on partial shots.',
      finish: ['Matte Chrome', 'Midnight'],
      keyTechnologies: [
        'Precision-milled 303 stainless steel',
        'Emery wheel groove sharpening',
        'Micro-roughness face texture',
        'Eye2-inspired grind option',
        'Tour-compact shaping',
      ],
    },
    scores: {
      spinAndControl: 9.1,
      versatility: 8.9,
      feelAndFeedback: 9.1,
      turfInteraction: 8.8,
      value: 8.5,
    },
    // 9.1*0.25 + 8.9*0.25 + 9.1*0.20 + 8.8*0.15 + 8.5*0.15 = 2.275 + 2.225 + 1.82 + 1.32 + 1.275 = 8.915 => 8.9
    overallScore: 8.9,
    lastUpdated: '2025-02-19',
  },

  // ─── 10. Ping Glide 4.0 ──────────────────────────────────────────────────────
  {
    id: 'ping-glide-4',
    name: 'Glide 4.0',
    manufacturer: 'ping',
    category: 'wedge',
    year: 2023,
    msrp: 169,
    currency: 'USD',
    imageUrl: '/images/wedges/ping-glide-4.png',
    productUrl: 'https://ping.com/en-us/shop/wedges/glide-4.0',
    playerType: ['mid', 'high'],
    description:
      'The Ping Glide 4.0 is engineered for consistent turf interaction and reliable spin for a wide range of skill levels. Featuring a slightly larger head profile and optimized sole grinds, the Glide 4.0 provides added forgiveness while still delivering the spin performance that scoring demands. An excellent option for players transitioning from game-improvement irons.',
    pros: [
      'Slightly larger head provides confidence and forgiveness',
      'Consistent turf interaction with optimized sole widths',
      'Precision grooves deliver reliable spin rates',
      'Good value for the quality of engineering',
    ],
    cons: [
      'Not as tour-refined as the Ping s159',
      'Larger head may feel bulky for low-handicap players',
      'Fewer grind options limit versatility for shot creators',
    ],
    specifications: {
      availableLofts: [46, 48, 50, 52, 54, 56, 58, 60],
      availableBounces: [6, 8, 10, 12],
      availableGrinds: [
        { name: 'S Grind', description: 'Standard sole for versatile performance on full and partial shots' },
        { name: 'W Grind', description: 'Wide sole for maximum forgiveness in bunkers and soft turf' },
        { name: 'T Grind', description: 'Thin sole for open-face versatility on firmer turf' },
      ],
      material: '431 Stainless Steel',
      grooveDesign:
        'Precision-milled grooves with a wheel-cut process for sharp, consistent edges. Hydropearl 2.0 chrome finish repels moisture to maintain spin in wet conditions.',
      finish: ['Hydropearl Chrome', 'Stealth Matte'],
      keyTechnologies: [
        'Hydropearl 2.0 finish',
        'Precision-milled wheel-cut grooves',
        'Optimized progressive sole widths',
        'Elastomer back cavity insert for feel',
      ],
    },
    scores: {
      spinAndControl: 8.5,
      versatility: 8.4,
      feelAndFeedback: 8.5,
      turfInteraction: 8.8,
      value: 8.9,
    },
    // 8.5*0.25 + 8.4*0.25 + 8.5*0.20 + 8.8*0.15 + 8.9*0.15 = 2.125 + 2.1 + 1.7 + 1.32 + 1.335 = 8.58 => 8.6
    overallScore: 8.6,
    lastUpdated: '2025-02-19',
  },

  // ─── 11. Mizuno T24 ──────────────────────────────────────────────────────────
  {
    id: 'mizuno-t24',
    name: 'T24',
    manufacturer: 'mizuno',
    category: 'wedge',
    year: 2024,
    msrp: 150,
    currency: 'USD',
    imageUrl: '/images/wedges/mizuno-t24.png',
    productUrl: 'https://www.mizunogolf.com/wedges/t24.html',
    playerType: ['low', 'mid'],
    description:
      'The Mizuno T24 is a Grain Flow Forged wedge crafted from a single billet of 1025E Boron steel at Mizuno\'s iconic Hiroshima facility. The forging process aligns the grain structure of the steel for an unmatched soft feel, while Hydroflow micro-grooves channel away moisture for reliable wet-weather spin. A quintessential player\'s wedge from Mizuno.',
    pros: [
      'Grain Flow Forged construction delivers exceptional soft feel',
      'Hydroflow micro-grooves maintain spin in wet conditions',
      'Excellent value for a premium forged wedge',
      'Beautiful, clean aesthetics at address',
    ],
    cons: [
      'Forged boron steel wears faster than harder materials',
      'Compact shaping offers less forgiveness than cavity-back options',
      'Limited mainstream availability compared to larger brands',
    ],
    specifications: {
      availableLofts: [46, 48, 50, 52, 54, 56, 58, 60],
      availableBounces: [4, 6, 8, 10, 12],
      availableGrinds: [
        { name: 'S Grind', description: 'Standard sole with moderate heel relief for versatile full-swing and greenside play' },
        { name: 'C Grind', description: 'Crescent sole with significant heel and toe relief for maximum open-face creativity' },
        { name: 'D Grind', description: 'Wide sole with higher bounce for soft turf and bunker play' },
      ],
      material: 'Grain Flow Forged 1025E Boron Steel',
      grooveDesign:
        'Hydroflow micro-grooves milled between each main groove channel moisture away from the face for consistent spin in all conditions. CNC-milled main grooves are cut to USGA-maximum sharpness for premium spin.',
      finish: ['Satin Chrome', 'Blue Ion', 'Raw'],
      keyTechnologies: [
        'Grain Flow Forging at Hiroshima facility',
        'Hydroflow micro-groove technology',
        'CNC-milled USGA-max grooves',
        '1025E Boron steel for feel and durability balance',
        'Progressive sole widths by loft',
      ],
    },
    scores: {
      spinAndControl: 9.0,
      versatility: 8.7,
      feelAndFeedback: 9.3,
      turfInteraction: 8.7,
      value: 9.0,
    },
    // 9.0*0.25 + 8.7*0.25 + 9.3*0.20 + 8.7*0.15 + 9.0*0.15 = 2.25 + 2.175 + 1.86 + 1.305 + 1.35 = 8.94 => 8.9
    overallScore: 8.9,
    lastUpdated: '2025-02-19',
  },

  // ─── 12. Cobra Snakebite ─────────────────────────────────────────────────────
  {
    id: 'cobra-snakebite',
    name: 'Snakebite',
    manufacturer: 'cobra',
    category: 'wedge',
    year: 2024,
    msrp: 149,
    currency: 'USD',
    imageUrl: '/images/wedges/cobra-snakebite.png',
    productUrl: 'https://www.cobragolf.com/wedges/snakebite.html',
    playerType: ['low', 'mid'],
    description:
      'The Cobra Snakebite features three distinct grind profiles with loft-optimized groove patterns to deliver maximum spin and versatility at every yardage. Progressive Snakebite grooves use tighter spacing in higher lofts for greenside spin, while the versatile, classic, and wide-low grinds ensure players can find the right sole for their swing and course conditions.',
    pros: [
      'Three distinct grind profiles for tailored sole interaction',
      'Progressive groove spacing optimized by loft',
      'Outstanding value for the spin and versatility offered',
      'Clean, confidence-inspiring shaping',
    ],
    cons: [
      'Not as widely recognized as Vokey or Cleveland on tour',
      'Fewer total grind/bounce combos than top-tier competitors',
      'Raw finish is not available',
    ],
    specifications: {
      availableLofts: [46, 48, 50, 52, 54, 56, 58, 60],
      availableBounces: [6, 8, 10, 12],
      availableGrinds: [
        { name: 'Versatile Grind', description: 'Medium sole width for all-around playability from any lie' },
        { name: 'Classic Grind', description: 'Traditional bounce and sole for full-swing consistency' },
        { name: 'Widelow Grind', description: 'Wide sole with low bounce for bunker play and open-face shots' },
      ],
      material: '8620 Carbon Steel',
      grooveDesign:
        'Snakebite progressive grooves feature tighter groove spacing in scoring lofts (54-60) for maximum greenside spin, while gap and pitching wedge lofts use wider spacing for full-swing ball flight control. CNC-milled to USGA-maximum edge sharpness.',
      finish: ['Satin Chrome', 'Black'],
      keyTechnologies: [
        'Snakebite progressive groove technology',
        'CNC-milled groove edges',
        'Three dedicated grind profiles',
        'Progressive sole width by loft',
      ],
    },
    scores: {
      spinAndControl: 8.8,
      versatility: 8.7,
      feelAndFeedback: 8.5,
      turfInteraction: 8.6,
      value: 9.2,
    },
    // 8.8*0.25 + 8.7*0.25 + 8.5*0.20 + 8.6*0.15 + 9.2*0.15 = 2.2 + 2.175 + 1.7 + 1.29 + 1.38 = 8.745 => 8.7
    overallScore: 8.7,
    lastUpdated: '2025-02-19',
  },

  // ─── 13. Srixon WRX ──────────────────────────────────────────────────────────
  {
    id: 'srixon-wrx',
    name: 'WRX',
    manufacturer: 'srixon',
    category: 'wedge',
    year: 2024,
    msrp: 150,
    currency: 'USD',
    imageUrl: '/images/wedges/srixon-wrx.png',
    productUrl: 'https://www.srixon.com/wedges/wrx.html',
    playerType: ['low', 'mid'],
    description:
      'The Srixon WRX is a tour-inspired forged wedge featuring a rotational flow forging process for soft, responsive feel and a compact, workable shape. S-Grind sole technology provides clean turf interaction while the Spin Skin coating with progressive groove patterns delivers reliable spin from fairway and rough alike.',
    pros: [
      'Forged construction provides premium soft feel',
      'Spin Skin coating enhances friction for improved spin',
      'Compact tour shaping for confident shot-making',
      'Strong value for a forged tour wedge',
    ],
    cons: [
      'Limited brand recognition compared to Vokey or Cleveland in the wedge category',
      'Fewer grind options than some competitors',
      'Compact shape requires more precision from the player',
    ],
    specifications: {
      availableLofts: [48, 50, 52, 54, 56, 58, 60],
      availableBounces: [6, 8, 10, 12],
      availableGrinds: [
        { name: 'S Grind', description: 'Standard sole for balanced turf interaction on full and partial shots' },
        { name: 'M Grind', description: 'Mid sole with heel and toe relief for open-face versatility' },
      ],
      material: 'Forged 1020 Carbon Steel',
      grooveDesign:
        'Progressive groove pattern with tour-spec edge sharpness. Higher lofts feature tighter groove spacing for maximum greenside spin, while lower lofts use wider grooves for full-swing control. Spin Skin micro-roughness coating adds friction between grooves.',
      finish: ['Tour Satin', 'Stealth Black'],
      keyTechnologies: [
        'Rotational flow forging process',
        'Spin Skin coating',
        'Progressive groove pattern',
        'S-Grind sole technology',
        'Tour-compact shaping',
      ],
    },
    scores: {
      spinAndControl: 8.9,
      versatility: 8.5,
      feelAndFeedback: 9.0,
      turfInteraction: 8.6,
      value: 9.0,
    },
    // 8.9*0.25 + 8.5*0.25 + 9.0*0.20 + 8.6*0.15 + 9.0*0.15 = 2.225 + 2.125 + 1.8 + 1.29 + 1.35 = 8.79 => 8.8
    overallScore: 8.8,
    lastUpdated: '2025-02-19',
  },

  // ─── 14. Wilson Staff Model Hi Toe ────────────────────────────────────────────
  {
    id: 'wilson-staff-model-hi-toe',
    name: 'Staff Model Hi Toe',
    manufacturer: 'wilson',
    category: 'wedge',
    year: 2024,
    msrp: 139,
    currency: 'USD',
    imageUrl: '/images/wedges/wilson-staff-model-hi-toe.png',
    productUrl: 'https://www.wilson.com/en-us/golf/wedges/staff-model-hi-toe.html',
    playerType: ['low', 'mid'],
    description:
      'The Wilson Staff Model Hi Toe is a high-toe wedge designed to deliver maximum spin and versatility at an accessible price point. Featuring full-face milling, a raw face finish, and a high-toe profile with extended grooves, this wedge punches well above its weight class for players seeking tour-level greenside performance without the premium price tag.',
    pros: [
      'Exceptional value — tour-quality performance at the lowest price in class',
      'Full-face milling and high-toe design for open-face spin',
      'Raw face finish enhances spin over time',
      'Extended grooves on the toe for versatile shotmaking',
    ],
    cons: [
      'Wilson brand perception lags behind Vokey, Callaway, and Cleveland',
      'Fewer grind options than premium competitors',
      'Raw finish aesthetics may not appeal to all players',
    ],
    specifications: {
      availableLofts: [50, 52, 54, 56, 58, 60, 64],
      availableBounces: [8, 10, 12],
      availableGrinds: [
        { name: 'Standard Grind', description: 'All-purpose sole with moderate bounce for full shots and greenside versatility' },
        { name: 'Low Grind', description: 'Narrow sole with reduced bounce for open-face shots on firm conditions' },
      ],
      material: '8620 Carbon Steel',
      grooveDesign:
        'Full-face CNC-milled grooves extending through the high-toe area. Each groove is milled to USGA-maximum edge sharpness with micro-milling between grooves for added friction. The raw, unplated face increases spin as the surface roughens through play.',
      finish: ['Raw'],
      keyTechnologies: [
        'Full-face CNC milling',
        'High-toe extended groove design',
        'Raw face technology',
        'Micro-milled face texture',
        'Progressive sole widths',
      ],
    },
    scores: {
      spinAndControl: 8.7,
      versatility: 9.0,
      feelAndFeedback: 8.4,
      turfInteraction: 8.4,
      value: 9.5,
    },
    // 8.7*0.25 + 9.0*0.25 + 8.4*0.20 + 8.4*0.15 + 9.5*0.15 = 2.175 + 2.25 + 1.68 + 1.26 + 1.425 = 8.79 => 8.8
    overallScore: 8.8,
    lastUpdated: '2025-02-19',
  },

  // ─── 15. PXG 0311 Forged ─────────────────────────────────────────────────────
  {
    id: 'pxg-0311-forged',
    name: '0311 Forged',
    manufacturer: 'pxg',
    category: 'wedge',
    year: 2024,
    msrp: 199,
    currency: 'USD',
    imageUrl: '/images/wedges/pxg-0311-forged.png',
    productUrl: 'https://www.pxg.com/en-us/wedges/0311-forged.html',
    playerType: ['low', 'mid'],
    description:
      'The PXG 0311 Forged wedge is precision-forged from 8620 carbon steel and features a Milled DualREHAB Sole that provides clean contact from tight lies, thick rough, and bunkers. PXG\'s progressive spin technology delivers aggressive grooves in scoring lofts for maximum greenside control, while the forged construction ensures a soft, responsive feel at impact.',
    pros: [
      'Precision-forged 8620 carbon steel for excellent feel',
      'DualREHAB sole provides versatile turf interaction',
      'Progressive spin technology optimizes grooves by loft',
      'Premium build quality and aesthetics',
    ],
    cons: [
      'Higher price than competing forged wedges',
      'PXG brand may carry less wedge-specific credibility than Vokey or Cleveland',
      'Limited availability at retail fitting locations',
    ],
    specifications: {
      availableLofts: [46, 48, 50, 52, 54, 56, 58, 60],
      availableBounces: [5, 7, 9, 11, 13],
      availableGrinds: [
        { name: 'Standard Grind', description: 'All-purpose sole geometry for versatile performance across conditions' },
        { name: 'Low Grind', description: 'Narrow sole with reduced bounce for firm conditions and creative shotmaking' },
        { name: 'High Grind', description: 'Wide sole with added bounce for soft conditions and bunker-heavy courses' },
      ],
      material: 'Forged 8620 Carbon Steel',
      grooveDesign:
        'Precision CNC-milled progressive grooves with aggressive edge sharpness in scoring lofts (54-60) for maximum spin. Lower lofts feature optimized groove geometry for full-swing distance control. Milled face texture between grooves adds secondary spin on partial shots.',
      finish: ['Chrome', 'Xtreme Dark', 'Battle Ready'],
      keyTechnologies: [
        'Precision forging process',
        'Milled DualREHAB sole technology',
        'Progressive spin groove design',
        'CNC-milled face texture',
        'Tour-validated shaping',
      ],
    },
    scores: {
      spinAndControl: 9.0,
      versatility: 8.8,
      feelAndFeedback: 9.0,
      turfInteraction: 8.7,
      value: 8.0,
    },
    // 9.0*0.25 + 8.8*0.25 + 9.0*0.20 + 8.7*0.15 + 8.0*0.15 = 2.25 + 2.2 + 1.8 + 1.305 + 1.2 = 8.755 => 8.8
    overallScore: 8.8,
    lastUpdated: '2025-02-19',
  },
];

export default wedges;
