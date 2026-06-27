/**
 * SAND tech tree reference — live build, June 2026.
 * Node names, branch layout, and unlock costs maintained for hangar planning.
 */

import { resources } from '../wiki/resources.js';

const RESOURCES_PAGE = '/wiki/resources';

/** @type {Record<string, string>} */
export const wikiResourceHrefs = Object.fromEntries(
  resources.map((resource) => [resource.title, `${RESOURCES_PAGE}#resource-${resource.id}`])
);

/** In-game material labels that differ from wiki resource titles. */
const resourceAliases = {
  'Coral Dust': 'Coraldust',
  'Scrap Metal': 'Metal Scrap',
  'Optic Lenses': 'Optical Lenses'
};

for (const [alias, title] of Object.entries(resourceAliases)) {
  if (wikiResourceHrefs[title]) {
    wikiResourceHrefs[alias] = wikiResourceHrefs[title];
  }
}

const wikiPages = {
  weapons: '/wiki/weapons',
  ammunition: '/wiki/ammunition',
  resources: RESOURCES_PAGE,
  shotgunCannon: '/wiki/weapons/70mm-shotgun-cannon',
  autocannon: '/wiki/weapons/40mm-autocannon',
  navalCannon: '/wiki/weapons/80mm-naval-cannon',
  timeBomb: '/wiki/weapons/time-bomb',
  smokeGrenade: '/wiki/weapons/rg79s-smoke-grenade',
  contactGrenade: '/wiki/weapons/hg-6-contact-grenade',
  energyRod: `${RESOURCES_PAGE}#resource-20`,
  smokelessRod: `${RESOURCES_PAGE}#resource-37`,
  medkit: `${RESOURCES_PAGE}#resource-24`
};

/**
 * @param {string} materials
 * @returns {Array<{ prefix: string, name: string, href?: string }>}
 */
export function parseMaterialLinks(materials) {
  const names = Object.keys(wikiResourceHrefs).sort((a, b) => b.length - a.length);

  return materials.split(',').map((raw) => {
    const token = raw.trim();
    for (const name of names) {
      if (token.endsWith(name)) {
        const prefix = token.slice(0, token.length - name.length).trim();
        return { prefix: prefix ? `${prefix} ` : '', name, href: wikiResourceHrefs[name] };
      }
    }
    return { prefix: '', name: token, href: undefined };
  });
}

export const techTreeMeta = {
  lastUpdated: '2026-06-26',
  tierCount: 4,
  branchCount: 3,
  note:
    'Unlocking a node spends Crowns plus listed materials and opens the build recipe. You pay materials again when constructing the module in the hangar.',
  uiLayout:
    'The hangar Tech Tree uses three horizontal tracks (top → bottom): blue Godlewski, orange Kaiser\'s Friends, green K.K. Landwehr. Drag the board to reveal additional nodes on some tiers.'
};

/** @param {Array<{crowns: number|null}>} nodes */
function crownRange(nodes) {
  const values = nodes.map((n) => n.crowns).filter((v) => typeof v === 'number');
  if (!values.length) return 'Unconfirmed';
  const min = Math.min(...values);
  const max = Math.max(...values);
  return min === max
    ? min.toLocaleString('en-US')
    : `${min.toLocaleString('en-US')} – ${max.toLocaleString('en-US')}`;
}

export const techBranches = [
  {
    id: 'godlewski',
    name: "Godlewski's Expedition",
    shortLabel: 'Godlewski',
    colorPath: 'blue',
    focus: 'Chassis · Motor-Reactor · engines · crew',
    accent: 'power',
    summary:
      'Blue track — structural and propulsion research: chassis tiers, Motor-Reactors, engines, crew rooms, corridors, MedKit, Shovel, and Smokeless Rod.',
    playstyle: 'Unlock first for mobility, reactor output, and chassis size.',
    tiers: [
      {
        tier: 1,
        label: 'Tier I',
        get crownRange() {
          return crownRange(this.nodes);
        },
        nodes: [
          { name: 'Energy Rod', crowns: 1500, materials: '150 Coral Chunk, 15 Weird Coal', tag: 'Utility', href: wikiPages.energyRod },
          { name: 'Crew Room', crowns: 700, materials: null, tag: 'Crew' },
          { name: 'Stairs', crowns: 600, materials: null, tag: 'Structure', note: 'Multiple stair variants unlock from this node.' },
          { name: 'Motor-Reactor', crowns: 1000, materials: null, tag: 'Propulsion' },
          { name: 'Small Chassis', crowns: 900, materials: null, tag: 'Structure' },
          { name: 'MedKit', crowns: 1500, materials: '15 Weird Coral, 400 Mixtures', tag: 'Utility', href: wikiPages.medkit },
          { name: 'Framed Stairs', crowns: 1250, materials: '75 Coral Chunk', tag: 'Structure' },
          {
            name: 'Motor-Reactor',
            crowns: 1750,
            materials: '200 Mixtures, 15 Weird Coral',
            tag: 'Propulsion',
            note: 'Second Tier I Motor-Reactor node on the blue track.'
          }
        ]
      },
      {
        tier: 2,
        label: 'Tier II',
        get crownRange() {
          return crownRange(this.nodes);
        },
        nodes: [
          { name: 'Shovel', crowns: 5000, materials: '30 Weird Coral, 2 Raw Aurogen Crystal, 400 Coral Dust', tag: 'Utility' },
          { name: "Captain's Cabin", crowns: 2800, materials: '75 Coral Chunk', tag: 'Crew' },
          { name: 'Wooden Corridor', crowns: 2750, materials: '75 Coral Chunk', tag: 'Structure' },
          {
            name: 'Motor-Reactor II',
            crowns: 3250,
            materials: '4 Raw Aurogen Crystal, 375 Mixtures, 15 Alloy Steel',
            tag: 'Propulsion'
          },
          { name: 'Middling Chassis', crowns: 3200, materials: '375 Mixtures', tag: 'Structure' },
          {
            name: 'Middling Chassis (832U)',
            crowns: 3200,
            materials: '375 Mixtures',
            tag: 'Structure',
            note: '832U layout variant — same unlock cost as standard Middling Chassis.'
          },
          { name: 'Crew Room II', crowns: 3500, materials: '100 Coral Chunk', tag: 'Crew' },
          {
            name: 'Motor-Reactor II',
            crowns: 4000,
            materials: '475 Mixtures, 4 Raw Aurogen Crystal, 270 Coral Dust, 15 Alloy Steel',
            tag: 'Propulsion',
            note: 'Higher Tier II Motor-Reactor node.'
          },
          { name: 'Crew Room II', crowns: 4300, materials: '125 Coral Chunk', tag: 'Crew', note: 'Layout variant.' },
          {
            name: 'Small Engine II',
            crowns: 4900,
            materials: '550 Mixtures, 5 Raw Aurogen Crystal',
            tag: 'Mobility'
          }
        ]
      },
      {
        tier: 3,
        label: 'Tier III',
        get crownRange() {
          return crownRange(this.nodes);
        },
        nodes: [
          {
            name: 'Crafting Materials',
            crowns: 8000,
            materials: '100 Optic Lenses, 40 Weird Coral, 750 Coral Dust, 200 Coral Chunk',
            tag: 'Utility'
          },
          { name: 'Metal Corridor', crowns: 5500, materials: '360 Leviathan Skin, 150 Coral Chunk', tag: 'Structure' },
          {
            name: 'Motor-Reactor III',
            crowns: 6500,
            materials: '750 Mixtures, 6 Raw Aurogen Crystal, 30 Alloy Steel, 360 Coral Dust',
            tag: 'Propulsion'
          },
          {
            name: 'Medium Engine',
            crowns: 6300,
            materials: '750 Mixtures, 40 Weird Coral, 360 Coral Dust, 4 Raw Aurogen Crystal',
            tag: 'Mobility'
          },
          {
            name: 'Great Chassis',
            crowns: 5700,
            materials: '150 Coral Chunk, 5 Alloy Steel, 360 Leviathan Skin',
            tag: 'Structure'
          },
          {
            name: 'Smoke Grenade',
            crowns: 8000,
            materials: '3 Raw Aurogen Crystal, 200 Coral Chunk, 750 Leviathan Skin',
            tag: 'Utility',
            href: wikiPages.smokeGrenade
          },
          {
            name: 'Motor-Reactor III',
            crowns: 7600,
            materials: '30 Alloy Steel, 410 Coral Dust, 185 Coral Chunk, 6 Raw Aurogen Crystal',
            tag: 'Propulsion',
            note: 'Advanced Tier III Motor-Reactor node.'
          },
          {
            name: 'Great Chassis',
            crowns: 6700,
            materials: '410 Leviathan Skin, 5 Alloy Steel, 100 Optic Lenses, 1,100 Mixtures',
            tag: 'Structure',
            note: 'Layout variant A.'
          },
          {
            name: 'Great Chassis',
            crowns: 6700,
            materials: '5 Alloy Steel, 410 Coral Dust, 1,100 Mixtures, 100 Optic Lenses',
            tag: 'Structure',
            note: 'Layout variant B.'
          }
        ]
      },
      {
        tier: 4,
        label: 'Tier IV',
        get crownRange() {
          return crownRange(this.nodes);
        },
        nodes: [
          {
            name: 'Smokeless Rod',
            crowns: 12000,
            materials: '1 Ficus, 750 Coral Dust, 150 Optic Lenses, 3 Raw Aurogen Crystal',
            tag: 'Utility',
            href: wikiPages.smokelessRod
          },
          {
            name: 'Royal Chassis',
            crowns: 9000,
            materials: '150 Optic Lenses, 50 Crystal, 5 Raw Aurogen Crystal, 2 Ficus',
            tag: 'Structure',
            note: 'Endgame chassis — multiple blueprint variants share this unlock.'
          },
          {
            name: 'Royal Chassis',
            crowns: 9000,
            materials: '50 Crystal, 150 Optic Lenses, 2 Ficus, 5 Raw Aurogen Crystal',
            tag: 'Structure',
            note: 'Layout variant.'
          }
        ]
      }
    ]
  },
  {
    id: 'kaiser',
    name: "Kaiser's Friends",
    shortLabel: 'Kaiser',
    colorPath: 'orange',
    focus: 'Decks · cargo · cannons · storage',
    accent: 'cargo',
    summary:
      'Orange track — deck, cargo, and cannon research: Wooden Decks, Cargo Deck, Balconies, Cargo Hold/Bay lines, and Shotgun Cannon / Autocannon tiers.',
    playstyle: 'Prioritize for extraction economy and Trampler firepower.',
    tiers: [
      {
        tier: 1,
        label: 'Tier I',
        get crownRange() {
          return crownRange(this.nodes);
        },
        nodes: [
          {
            name: 'Shotgun Cannon',
            crowns: 1500,
            materials: '150 Threads',
            tag: 'Cannon',
            href: wikiPages.shotgunCannon
          },
          { name: 'Wooden Decks', crowns: 600, materials: null, tag: 'Structure', note: 'Multiple deck variants.' },
          { name: 'Cargo Deck', crowns: 1400, materials: null, tag: 'Storage' },
          {
            name: 'Autocannon',
            crowns: 1500,
            materials: '150 Fabric Straps',
            tag: 'Cannon',
            href: wikiPages.autocannon
          },
          { name: 'Small Chassis', crowns: 1700, materials: '200 Fabric Scraps', tag: 'Structure' },
          { name: 'Balconies', crowns: 1300, materials: '200 Threads', tag: 'Structure', note: 'Multiple balcony variants.' }
        ]
      },
      {
        tier: 2,
        label: 'Tier II',
        get crownRange() {
          return crownRange(this.nodes);
        },
        nodes: [
          {
            name: 'Cannon',
            crowns: 5000,
            materials: '2 Crate of 1889 Chardonnay, 300 Metal Rods, 10 Alloy Steel, 300 Fabric',
            tag: 'Cannon',
            href: wikiPages.navalCannon
          },
          { name: 'Armored Balconies', crowns: 2500, materials: '375 Threads', tag: 'Structure', note: 'Multiple variants.' },
          {
            name: 'Cargo Hold',
            crowns: 3500,
            materials: '15 Weird Coral, 1 Canned Sea Deer XL, 475 Threads, 1 Crate of 1889 Chardonnay',
            tag: 'Storage'
          },
          {
            name: 'Shotgun Cannon II',
            crowns: 5000,
            materials: '10 Alloy Steel, 300 Leviathan Skin, 300 Gunpowder, 2 Canned Sea Deer XL',
            tag: 'Cannon',
            href: wikiPages.shotgunCannon
          },
          { name: 'Middling Chassis', crowns: 3000, materials: '375 Fabric Scraps', tag: 'Structure', note: 'Layout variant A.' },
          { name: 'Middling Chassis', crowns: 3000, materials: '375 Fabric Scraps', tag: 'Structure', note: 'Layout variant B.' },
          {
            name: 'Autocannon II',
            crowns: 5000,
            materials: '2 District Officer\'s Portable Safe, 300 Gunpowder, 300 Metal Rods, 10 Alloy Steel',
            tag: 'Cannon',
            href: wikiPages.autocannon
          },
          {
            name: 'Cargo Bay',
            crowns: 6000,
            materials: '300 Leviathan Skin, 1 Canned Sea Deer XL, 500 Fabric Scraps',
            tag: 'Storage',
            note: 'Layout variant A.'
          },
          {
            name: 'Cargo Bay',
            crowns: 6000,
            materials: '300 Metal Rods, 500 Threads, 1 Crate of 1889 Chardonnay',
            tag: 'Storage',
            note: 'Layout variant B.'
          },
          {
            name: 'Cargo Bay',
            crowns: 6000,
            materials: '300 Fabric, 100 Reinforced Leather Strips, 500 Threads',
            tag: 'Storage',
            note: 'Layout variant C.'
          }
        ]
      },
      {
        tier: 3,
        label: 'Tier III',
        get crownRange() {
          return crownRange(this.nodes);
        },
        nodes: [
          {
            name: 'Resources',
            crowns: 7000,
            materials: '15 Alloy Steel, 410 Leviathan Skin, 410 Gunpowder, 1,100 Fabric Scraps',
            tag: 'Utility',
            href: wikiPages.resources
          },
          { name: 'Armored Deck', crowns: 6000, materials: '750 Threads, 360 Metal Rods', tag: 'Structure' },
          {
            name: 'Cargo Hold III',
            crowns: 6000,
            materials: '2 Crate of 1889 Chardonnay, 360 Metal Rods, 30 Weird Coral, 2 Canned Sea Deer XL',
            tag: 'Storage'
          },
          {
            name: 'Cannon III',
            crowns: 9000,
            materials: '1,100 Fabric Scraps, 2 Black Box, 500 Gunpowder, 20 Alloy Steel',
            tag: 'Cannon',
            href: wikiPages.navalCannon
          },
          { name: 'Great Chassis', crowns: 6000, materials: '360 Fabric, 750 Fabric Scraps', tag: 'Structure' },
          {
            name: 'Cargo Hold III',
            crowns: 7000,
            materials: '2 Crate of 1889 Chardonnay, 30 Weird Coral, 410 Leviathan Meat, 2 Canned Sea Deer XL',
            tag: 'Storage',
            note: 'Higher material variant.'
          },
          {
            name: 'Shotgun Cannon III',
            crowns: 9000,
            materials: '40 Weird Coral, 2 Black Box, 500 Metal Rods, 1,100 Threads',
            tag: 'Cannon',
            href: wikiPages.shotgunCannon
          },
          { name: 'Great Chassis', crowns: 7000, materials: '410 Fabric, 1,100 Fabric Scraps', tag: 'Structure', note: 'Variant A.' },
          { name: 'Great Chassis', crowns: 7000, materials: '1,100 Threads, 410 Metal Rods', tag: 'Structure', note: 'Variant B.' },
          {
            name: 'Autocannon III',
            crowns: 9000,
            materials: '2 Black Box, 500 Leviathan Skin, 150 Reinforced Leather Strips, 70 Weird Coral',
            tag: 'Cannon',
            href: wikiPages.autocannon
          }
        ]
      },
      {
        tier: 4,
        label: 'Tier IV',
        get crownRange() {
          return crownRange(this.nodes);
        },
        nodes: [
          {
            name: 'Resources',
            crowns: 9000,
            materials: '200 Reinforced Leather Strips, 2 Canned Sea Deer XL, 2 Crate of 1889 Chardonnay',
            tag: 'Utility',
            href: wikiPages.resources
          },
          {
            name: 'Royal Chassis',
            crowns: 9000,
            materials: '2 Ficus, 1,200 Fabric Scraps, 450 Metal Rods, 150 Reinforced Leather Strips',
            tag: 'Structure'
          },
          {
            name: 'Royal Chassis',
            crowns: 9000,
            materials: '50 Crystal, 1,100 Threads, 510 Leviathan Meat, 150 Reinforced Leather Strips',
            tag: 'Structure',
            note: 'Layout variant.'
          },
          {
            name: 'Cargo Bay IV',
            crowns: 9000,
            materials: '450 Metal Rods, 15 Crystal, 2 Crate of 1889 Chardonnay, 2 Canned Sea Deer XL',
            tag: 'Storage',
            note: 'Layout variant A.'
          },
          {
            name: 'Cargo Bay IV',
            crowns: 9000,
            materials: '15 Crystal, 450 Leviathan Meat, 2 Canned Sea Deer XL, 2 Crate of 1889 Chardonnay',
            tag: 'Storage',
            note: 'Layout variant B.'
          },
          {
            name: 'Cargo Bay IV',
            crowns: 9000,
            materials: '150 Reinforced Leather Strips, 15 Crystal, 2 Crate of 1889 Chardonnay, 2 Canned Sea Deer XL',
            tag: 'Storage',
            note: 'Layout variant C.'
          },
          {
            name: 'Cannon IV',
            crowns: 12000,
            materials: '150 Reinforced Leather Strips, 5 Black Box, 2 Ficus, 30 Crystal',
            tag: 'Cannon',
            href: wikiPages.navalCannon
          },
          {
            name: 'Shotgun Cannon IV',
            crowns: 12000,
            materials: '5 Black Box, 150 Reinforced Leather Strips, 80 Weird Coral, 2 Ficus',
            tag: 'Cannon',
            href: wikiPages.shotgunCannon
          },
          {
            name: 'Autocannon IV',
            crowns: 12000,
            materials: '150 Reinforced Leather Strips, 5 Black Box, 2 Ficus, 75 Alloy Steel',
            tag: 'Cannon',
            href: wikiPages.autocannon
          }
        ]
      }
    ]
  },
  {
    id: 'landwehr',
    name: 'K.K. Landwehr',
    shortLabel: 'Landwehr',
    colorPath: 'green',
    focus: 'Armor · weapons · steering · breaching',
    accent: 'combat',
    summary:
      'Green track — combat and defense research: personal Weapons, Artillery Decks, Armor, steering rooms, armament workshops, Time Bomb, and Enclosed Artillery Compartment.',
    playstyle: 'Weight this branch for PvP, boarding, and breaching.',
    tiers: [
      {
        tier: 1,
        label: 'Tier I',
        get crownRange() {
          return crownRange(this.nodes);
        },
        nodes: [
          { name: 'Weapons', crowns: 1500, materials: '200 Scrapped Ammo', tag: 'Personal', href: wikiPages.weapons },
          { name: 'Artillery Decks', crowns: 1000, materials: null, tag: 'Weapons' },
          { name: 'Framed Steering', crowns: 700, materials: null, tag: 'Steering' },
          { name: 'Small Armament Workshop', crowns: 700, materials: null, tag: 'Crafting' },
          { name: 'Wooden Vestibule', crowns: 1000, materials: null, tag: 'Structure' },
          { name: 'Armor', crowns: 1500, materials: '200 Scrap Metal', tag: 'Defense' },
          { name: 'Framed Artillery Deck', crowns: 1750, materials: '200 Scrapped Ammo', tag: 'Weapons' },
          { name: 'Large Open Steering', crowns: 1250, materials: '200 Scrap Metal', tag: 'Steering' },
          { name: 'Large Framed Steering', crowns: 2000, materials: '225 Scrap Metal', tag: 'Steering' }
        ]
      },
      {
        tier: 2,
        label: 'Tier II',
        get crownRange() {
          return crownRange(this.nodes);
        },
        nodes: [
          {
            name: 'Weapons II',
            crowns: 4000,
            materials: '1 District Officer\'s Portable Safe, 1 Black Box, 450 Weapon Parts',
            tag: 'Personal',
            href: wikiPages.weapons
          },
          {
            name: 'Armored Artillery Compartment',
            crowns: 3250,
            materials: '375 Scrapped Ammo, 2 Black Box',
            tag: 'Weapons'
          },
          {
            name: 'Steering II',
            crowns: 3000,
            materials: '1 District Officer\'s Portable Safe, 1 Black Box, 375 Scrap Metal',
            tag: 'Steering'
          },
          {
            name: 'Large Armament Workshop',
            crowns: 2750,
            materials: '375 Scrap Metal, 375 Scrapped Ammo',
            tag: 'Crafting'
          },
          {
            name: 'Time Bomb',
            crowns: 4000,
            materials: '450 Gunpowder, 1 Black Box, 1 District Officer\'s Portable Safe',
            tag: 'Breaching',
            href: wikiPages.timeBomb
          },
          {
            name: 'Armored Artillery Decks',
            crowns: 4000,
            materials: '2 Black Box, 475 Scrapped Ammo, 5 Alloy Steel',
            tag: 'Weapons'
          },
          { name: 'Armor Plate II', crowns: 3500, materials: '30 Weird Coral, 475 Scrap Metal', tag: 'Defense' },
          {
            name: 'Battering Ram',
            crowns: 4500,
            materials: '360 Weapon Parts, 40 Alloy Steel, 2 District Officer\'s Portable Safe',
            tag: 'Breaching'
          }
        ]
      },
      {
        tier: 3,
        label: 'Tier III',
        get crownRange() {
          return crownRange(this.nodes);
        },
        nodes: [
          {
            name: 'Armor III',
            crowns: 6000,
            materials: '750 Scrapped Ammo, 2 Black Box, 2 District Officer\'s Portable Safe, 750 Scrap Metal',
            tag: 'Defense'
          },
          {
            name: 'Framed Armored Artillery Deck',
            crowns: 6500,
            materials: '750 Scrapped Ammo, 10 Alloy Steel, 360 Weapon Parts, 3 Black Box',
            tag: 'Weapons'
          },
          { name: 'Armor Plate III', crowns: 5500, materials: '240 Weapon Parts, 500 Scrap Metal', tag: 'Defense' },
          {
            name: 'Steering III',
            crowns: 6000,
            materials: '410 Gunpowder, 750 Scrap Metal, 3 District Officer\'s Portable Safe, 10 Alloy Steel',
            tag: 'Steering',
            note: 'Variant A.'
          },
          {
            name: 'Armored Vestibule',
            crowns: 6000,
            materials: '1 District Officer\'s Portable Safe, 1 Black Box, 410 Gunpowder',
            tag: 'Structure'
          },
          {
            name: 'Grenade III',
            crowns: 7500,
            materials: '400 Gunpowder, 3 Black Box, 350 High-Grade Gunpowder',
            tag: 'Personal',
            href: wikiPages.contactGrenade
          },
          {
            name: 'Embrasure',
            crowns: 6000,
            materials: '270 Gunpowder, 270 Weapon Parts, 500 Scrapped Ammo',
            tag: 'Defense'
          },
          {
            name: 'Steering III',
            crowns: 6000,
            materials: '750 Scrap Metal, 3 Black Box, 410 Gunpowder, 40 Weird Coral',
            tag: 'Steering',
            note: 'Variant B.'
          }
        ]
      },
      {
        tier: 4,
        label: 'Tier IV',
        get crownRange() {
          return crownRange(this.nodes);
        },
        nodes: [
          {
            name: 'Improved Ammo',
            crowns: 9000,
            materials: '70 Weird Coral, 350 High-Grade Gunpowder, 1,000 Scrapped Ammo, 600 Gunpowder',
            tag: 'Crafting',
            href: wikiPages.ammunition
          },
          {
            name: 'Enclosed Artillery Compartment',
            crowns: 9000,
            materials: '350 High-Grade Gunpowder, 5 Black Box, 2 Ficus, 50 Crystal',
            tag: 'Weapons'
          },
          {
            name: 'Weapons IV',
            crowns: 12000,
            materials: '750 Weapon Parts, 3 Black Box, 15 Crystal, 1 Ficus',
            tag: 'Personal',
            href: wikiPages.weapons
          }
        ]
      }
    ]
  }
];

export const constructionMaterials = [
  {
    name: 'Mechanical Parts',
    tier: 'Basic modules',
    rarity: 'Uncommon',
    note: 'Required for most Trampler parts; purchasable at the orbital shop.',
    href: '/wiki/resources#resource-10'
  },
  {
    name: 'Pneumatic Parts',
    tier: 'Advanced modules',
    rarity: 'Rare',
    note: 'Used for improved health and armor panels over mechanical-only builds.',
    href: '/wiki/resources#resource-21'
  },
  {
    name: 'Computing Module',
    tier: 'Top modules',
    rarity: 'Noteworthy',
    note: 'Salvaged from Black Boxes and landmark machinery for the most advanced compartments.',
    href: '/wiki/resources#resource-27'
  }
];

export const techWorkflow = [
  {
    step: '01',
    title: 'Unlock the node',
    detail: 'Spend Crowns and any listed unlock materials at the Tech Tree terminal in the orbital hangar. This only grants the recipe.',
    href: '/getting-started'
  },
  {
    step: '02',
    title: 'Build the module',
    detail: 'Pay construction materials again in the Trampler editor or blueprint workshop. Basic parts use Mechanical Parts; advanced tiers need Pneumatic Parts or Computing Modules.',
    href: '/wiki/resources'
  },
  {
    step: '03',
    title: 'Pack before launch',
    detail: 'Cannons, ammo, fuel rods, and kits must be loaded into cargo in the preparation lobby. Tramplers deploy unarmed unless you packed hardware.',
    href: '/wiki/weapons#mounted-weapons'
  },
  {
    step: '04',
    title: 'Install on Sophie',
    detail: 'After landing, install packed cannon kits into artillery decks and load shells. Reactor fuel is inserted manually from cargo.',
    href: '/wiki/ammunition'
  }
];

export const priorityPaths = [
  {
    label: 'Solo learner',
    branches: ['Godlewski', 'Kaiser'],
    detail: 'Blue Motor-Reactor and chassis first, then orange Cargo Deck and one cannon tier — a stable baseline for solo extraction runs.',
    href: '/getting-started'
  },
  {
    label: 'PvP crew',
    branches: ['Landwehr', 'Kaiser'],
    detail: 'Green Artillery Decks, Armor, and Weapons before max cargo. Black Box routes feed Tier II–III Landwehr nodes.',
    href: '/guides'
  },
  {
    label: 'Economy focus',
    branches: ['Kaiser', 'Godlewski'],
    detail: 'Orange Cargo Hold / Cargo Bay lines and Chardonnay trade goods; blue reactors keep the hauler moving.',
    href: '/wiki/resources'
  }
];

export const techFaq = [
  {
    question: 'How does the SAND tech tree work?',
    answer:
      'The hangar Tech Tree has three horizontal tracks — blue Godlewski\'s Expedition (top), orange Kaiser\'s Friends (middle), and green K.K. Landwehr (bottom) — each with four unlock tiers. Paying Crowns and materials at a node unlocks its recipe; you pay materials again when building the module. Tier IV nodes commonly cost 9,000–12,000 Crowns.'
  },
  {
    question: 'Why are my cannons missing after I launch?',
    answer:
      'Tramplers are not pre-armed. Cannon kits and matching ammunition must be packed into cargo in the preparation lobby, then installed onto artillery decks after you land on Sophie.'
  },
  {
    question: 'Which branch should I unlock first?',
    answer:
      'Blue Godlewski for chassis and Motor-Reactors, orange Kaiser for decks and cannons, green Landwehr for armor, steering, and breaching. Solo players often split blue and orange; PvP crews weight green heavier.'
  },
  {
    question: 'What materials gate advanced Trampler parts?',
    answer:
      'Mechanical Parts cover most basic construction, Pneumatic Parts improve advanced compartments, and Computing Modules are required for top-tier builds. Black Boxes, trade goods, and Raw Aurogen Crystal appear frequently in Tier II–IV unlock lists.'
  },
  {
    question: 'Is this an official tech tree database?',
    answer:
      'No. SAND Guide is an independent player reference for the live game. Entries are organized for Trampler planning and search readability. Confirm patch-sensitive unlock costs in the hangar when a build depends on them.'
  }
];

export const techStats = {
  branches: techBranches.length,
  tiers: techTreeMeta.tierCount,
  trackedNodes: techBranches.reduce((sum, branch) => sum + branch.tiers.reduce((t, tier) => t + tier.nodes.length, 0), 0)
};
