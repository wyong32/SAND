const resourceImage = (title) => `/images/wiki/resources/${title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}.jpg`;

export const resources = [
  { id: 1, title: 'Repair Kit', guideLabel: 'REPAIR KIT', group: 'Common Resources', type: 'Repair', use: 'Repairs damaged modules during a run.', source: 'Robots that arrive after an orange flare signal.', fieldNote: 'For the 3-use kit, shut down the reactor before repairing a module. Drops are not guaranteed.' },
  { id: 2, title: 'Metal Scrap', guideLabel: 'METALL SCRAP', group: 'Common Resources', type: 'Crafting / Trade / Research', use: 'General material for crafting, trading, and research tree progress.', source: 'Specialized boxes.', fieldNote: 'Basic salvage item and a repeated early-route pickup.' },
  { id: 3, title: 'Fabric Scraps', guideLabel: 'FABRIC SCRAPS', group: 'Common Resources', type: 'Crafting / Trade / Research', use: 'Textile scrap for crafting, trading, and research tree progress.', source: 'Specialized boxes.', fieldNote: 'Lower-grade textile input before full Fabric becomes available.' },
  { id: 4, title: 'Threads', guideLabel: 'THEARDS', group: 'Common Resources', type: 'Crafting / Trade / Research', use: 'Thread material for crafting, trading, and research tree progress.', source: 'Specialized boxes.', fieldNote: 'The source guide uses the misspelled label THEARDS; this page normalizes it to Threads.' },
  { id: 5, title: 'Scrapped Ammo', guideLabel: 'SCRAPPED AMMO', group: 'Common Resources', type: 'Crafting / Trade / Research', use: 'Broken or defective ammunition used as a material input.', source: 'Specialized boxes.', fieldNote: 'Track separately from usable ammunition because it behaves like salvage.' },
  { id: 6, title: 'Mixtures', guideLabel: 'MIXTURES', group: 'Common Resources', type: 'Crafting / Trade / Research', use: 'Mixture material for crafting, trading, and research tree progress.', source: 'Specialized boxes.', fieldNote: 'Flexible basic input until exact recipe links are expanded.' },
  { id: 7, title: 'Crowns', guideLabel: 'CROWNS', group: 'Uncommon Resources', type: 'Currency', use: 'Main currency used to purchase many items.', source: 'Specialized boxes.', fieldNote: 'Good baseline value item when deciding what to extract.' },
  { id: 8, title: 'Metal Rods', guideLabel: 'METAL RODS', group: 'Uncommon Resources', type: 'Crafting / Trade / Research', use: 'Material for crafting, trading, and research tree progress.', source: 'Specialized boxes.', fieldNote: 'Likely tied to structural and mechanical upgrade paths.' },
  { id: 9, title: 'Weapon Parts', guideLabel: 'WEAPON PARTS', group: 'Uncommon Resources', type: 'Weapon Material', use: 'Used for crafting, trading, and research tree progress.', source: 'Specialized boxes.', fieldNote: 'Prioritize when building toward combat upgrades.' },
  { id: 10, title: 'Mechanical Parts', guideLabel: 'MECHANICAL PARTS', group: 'Uncommon Resources', type: 'Trampler Material', use: 'Used for Trampler crafting, trading, and research tree progress.', source: 'Specialized boxes; also purchasable at 1 part for 2 coins.', fieldNote: 'The Steam guide image line appears mislabeled as Fabric Scraps, but its description is Mechanical Parts.' },
  { id: 11, title: 'Coral Chunk', guideLabel: 'CORAL CHUNK', group: 'Uncommon Resources', type: 'Organic Material', use: 'Used in crafting, trade, or agriculture.', source: 'Specialized boxes.', fieldNote: 'Keep for routes involving organic crafting or agriculture.' },
  { id: 12, title: 'Weird Coral', guideLabel: 'WEIRO CORAL', group: 'Uncommon Resources', type: 'Organic Material', use: 'Used in crafting or research tree progress.', source: 'Infected enemies.', fieldNote: 'The source guide writes WEIRO CORAL; this page uses Weird Coral for readability.' },
  { id: 13, title: 'Fabric', guideLabel: 'FABRIC', group: 'Uncommon Resources', type: 'Crafting / Trade / Research', use: 'Textile material for crafting, trading, and research tree progress.', source: 'Specialized boxes.', fieldNote: 'Higher-value textile input than scraps.' },
  { id: 14, title: 'Leviathan Meat', guideLabel: 'LEVIATHAN MEAT', group: 'Uncommon Resources', type: 'Organic Material', use: 'Used for crafting or research tree progress.', source: 'Specialized crates.', fieldNote: 'Crate-linked organic item.' },
  { id: 15, title: 'Gunpowder', guideLabel: 'GUNPOWDER', group: 'Uncommon Resources', type: 'Weapon Material', use: 'Used for crafting or research tree progress.', source: 'Specialized boxes.', fieldNote: 'Useful for ammunition and combat-related crafting paths.' },
  { id: 16, title: 'Leviathan Skin', guideLabel: 'LEVIATHAN SKIN', group: 'Uncommon Resources', type: 'Organic Material', use: 'Used for crafting, trading, and research tree progress.', source: 'Specialized boxes.', fieldNote: 'Organic material with trade and crafting value.' },
  { id: 17, title: 'Coraldust', guideLabel: 'CORALDUST', group: 'Uncommon Resources', type: 'Organic Material', use: 'Used for crafting or research tree progress.', source: 'Specialized boxes.', fieldNote: 'Pairs naturally with coral resources.' },
  { id: 18, title: 'Canned Food', guideLabel: 'CANNED FOOD', group: 'Uncommon Resources', type: 'Consumable', use: 'Restores half of one health bar.', source: 'Specialized boxes.', fieldNote: 'Worth keeping for routes with boarding fights.' },
  { id: 19, title: 'Valuables', guideLabel: 'VALUABLES', group: 'Uncommon Resources', type: 'Trade Item', use: 'Used for trading.', source: 'Specialized boxes.', fieldNote: 'Extraction value item with less crafting pressure.' },
  { id: 20, title: 'NZ Mk2 Energy Rod', guideLabel: 'NZ MK2 ENERGY ROD', group: 'Uncommon Resources', type: 'Reactor Fuel', use: 'Refuels the reactor.', source: 'Forts, cities, vehicles, indoor spots, and extraction areas.', fieldNote: 'Extraction areas can hold three rods if another crew has not taken them.' },
  { id: 21, title: 'Pneumatic Parts', guideLabel: 'PNEUMATIC PARTS', group: 'Rare Resources', type: 'Trampler Material', use: 'Used for crafting, trading, research, and Trampler creation.', source: 'Specialized crates.', fieldNote: 'High-priority rare component for vehicle progression.' },
  { id: 22, title: 'Reinforced Leather Strips', guideLabel: 'Reinforced leather strips', group: 'Rare Resources', type: 'Crafting / Trade / Research', use: 'Used for crafting, trading, and research tree progress.', source: 'Specialized boxes.', fieldNote: 'Rare leather/textile resource.' },
  { id: 23, title: 'High-Grade Gunpowder', guideLabel: 'HIGH-GRADE GUNPOWDER', group: 'Rare Resources', type: 'Weapon Material', use: 'Used for crafting, trading, and research tree progress.', source: 'Specialized boxes.', fieldNote: 'Save for advanced combat crafting paths.' },
  { id: 24, title: 'Medkit', guideLabel: 'MEDKIT', group: 'Rare Resources', type: 'Consumable', use: 'Fully restores health.', source: 'Specialized boxes.', fieldNote: 'Strong safety item for longer routes.' },
  { id: 25, title: 'Valuable Papers', guideLabel: 'VALUABLE PAPERS', group: 'Rare Resources', type: 'Trade Item', use: 'Used for trade.', source: 'Specialized boxes.', fieldNote: 'Rare value pickup.' },
  { id: 26, title: 'Optical Lenses', guideLabel: 'OPTICAL LENSES', group: 'Rare Resources', type: 'Crafting / Trade', use: 'Used for crafting and trading.', source: 'Specialized boxes.', fieldNote: 'Likely tied to precision, optics, or advanced equipment paths.' },
  { id: 27, title: 'Computing Module', guideLabel: 'COMPUTING MODULE', group: 'Noteworthy Resources', type: 'Trampler Component', use: 'Used in Trampler construction.', source: 'Specialized boxes.', fieldNote: 'Key vehicle-building resource.' },
  { id: 28, title: 'Crystal', guideLabel: 'CRISTAL', group: 'Noteworthy Resources', type: 'Trade Item', use: 'Used for trade.', source: 'Crafted at a workbench from Raw Aurogen Crystal at a 1 to 4 ratio.', fieldNote: 'The source guide spells this CRISTAL; this page normalizes it to Crystal.' },
  { id: 29, title: 'Alloy Steel', guideLabel: 'ALOY STEEL', group: 'Noteworthy Resources', type: 'Crafting / Research', use: 'Used for crafting or research tree progress.', source: 'Specialized boxes.', fieldNote: 'Advanced structural material worth extracting.' },
  { id: 30, title: 'Raw Aurogen Crystal', guideLabel: 'RAW AUROGEN CRYSTAL', group: 'Noteworthy Resources', type: 'Hazardous Resource', use: 'Used for research tree progress and crystal crafting.', source: 'Large crystals among stone elevations.', fieldNote: 'Emits radiation and can explode on destruction, jamming electronics.' },
  { id: 31, title: "District Officer's Portable Safe", guideLabel: "DISTRICT OFFICER's PORTABLE SAFE", group: 'Noteworthy Resources', type: 'Trade Item', use: 'Used for trade.', source: 'Difficult urban areas closed with boards.', fieldNote: 'Route-specific urban value item.' },
  { id: 32, title: 'Canned Sea Deer XL', guideLabel: 'CANNED SEA DEER XL', group: 'Noteworthy Resources', type: 'Trade Item', use: 'Used for trade and exchanges for canned goods.', source: 'City hangars and boarded hard-to-reach areas.', fieldNote: 'Food-adjacent value item for city routes.' },
  { id: 33, title: 'Crate of 1889 Chardonnay', guideLabel: 'CRATE OF 1889 CHARDONNAY', group: 'Noteworthy Resources', type: 'Trade / Research', use: 'Used in research and trade, including weapon exchanges.', source: 'Top of the lighthouse under a table and closed rooms in cities.', fieldNote: 'Specific-route item with strong trade utility.' },
  { id: 34, title: 'Black Box', guideLabel: 'BLACK BOX', group: 'Noteworthy Resources', type: 'Trade / Research', use: 'Used for trade or research tree progress.', source: 'Near the destroyed reactor after defeating an enemy Trampler.', fieldNote: 'Combat reward tied to vehicle kills.' },
  { id: 35, title: 'Orbital Strike Pointer', guideLabel: 'ORBITAL STRIKE POINTER', group: 'Experimental Resources', type: 'Combat Utility', use: 'Calls an orbital strike on a marked target.', source: 'Forts.', fieldNote: 'The strike marker creates a visible beam and the spread is very large.' },
  { id: 36, title: 'The Great Silence', guideLabel: 'THE GREAT SILENCE', group: 'Experimental Resources', type: 'Energy Weapon', use: 'Single-use weapon that disables electronics within its radius.', source: 'Experimental resource finds.', fieldNote: 'A reactor hit can disable an enemy Trampler.' },
  { id: 37, title: 'NZ Mk2-RF Smokeless Energy Rod', guideLabel: 'NZ Mk2-RF SMOKELESS ENERGY ROD', group: 'Experimental Resources', type: 'Reactor Fuel', use: 'Runs the reactor for longer without smoke.', source: 'Robot drop boxes from orange flare events and forts.', fieldNote: 'High-value fuel for stealthier or longer operation.' },
  { id: 38, title: 'NZ MKI Modified Energy Rod', guideLabel: 'NZ MKI MODIFIED ENERGY ROD', group: 'Experimental Resources', type: 'Reactor Fuel', use: 'Provides a short-term Trampler speed increase.', source: 'Robot drop boxes from orange flare events and forts.', fieldNote: 'Best treated as a tactical mobility resource.' }
].map((resource) => ({
  ...resource,
  imageUrl: resourceImage(resource.title),
  imageAlt: `${resource.title} resource icon in SAND: Raiders of Sophie`
}));

export const resourceGroups = ['Common Resources', 'Uncommon Resources', 'Rare Resources', 'Noteworthy Resources', 'Experimental Resources']
  .map((title) => ({
    title,
    id: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    items: resources.filter((resource) => resource.group === title)
  }));

export const resourceStats = [
  ['Total Resources', resources.length],
  ['Source Groups', resourceGroups.length],
  ['Box or Crate Finds', resources.filter((resource) => /box|crate/i.test(resource.source)).length],
  ['Reactor Items', resources.filter((resource) => resource.type.includes('Reactor')).length]
];

export const amplifierNotes = [
  { title: 'Projectile Damage Amplifier', description: 'Increases projectile damage from Trampler guns and personal weapons for about 1 minute.', imageUrl: '/images/wiki/amplifiers/projectile-damage-amplifier.jpg' },
  { title: 'Recovery Field Amplifier', description: 'Maintains health for players in the area of effect for about 1 minute; it does not heal the Trampler.', imageUrl: '/images/wiki/amplifiers/recovery-field-amplifier.jpg' },
  { title: 'Protective Field Amplifier', description: 'Creates a shield that blocks incoming projectiles for about 1 minute while allowing shots from inside.', imageUrl: '/images/wiki/amplifiers/protective-field-amplifier.jpg' }
];
