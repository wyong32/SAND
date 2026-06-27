const defaultIcon = '/images/wiki/resources/mechanical-parts.jpg';
const weaponIcon = '/images/wiki/weapons/anti-reactor-rifle.png';
const pistolIcon = '/images/wiki/weapons/blitz-pistol.png';
const ammoIcon = '/images/wiki/ammunition/40mm-shell.png';
const resourceIcon = '/images/wiki/resources/nz-mk2-energy-rod.jpg';
const resourceAltIcon = '/images/wiki/resources/repair-kit.jpg';
const guideIcon = '/images/wiki/weapons/orbital-strike-pointer.png';
const explosiveIcon = '/images/wiki/weapons/time-bomb.png';
const mapIcon = '/images/map-locations/sophie-regional-field-map.png';
const routeIcon = '/images/map-locations/sophie-ruins-route.jpg';
const tramplerIcon = '/images/map-locations/sophie-desert-trampler.jpg';
const combatIcon = '/images/map-locations/sophie-trampler-combat.jpg';
const safeIcon = '/images/wiki/resources/district-officer-s-portable-safe.jpg';
const papersIcon = '/images/wiki/resources/valuable-papers.jpg';

export const sidebarHeadIcons = {
  home: tramplerIcon,
  gettingStarted: resourceAltIcon,
  wiki: pistolIcon,
  weapons: weaponIcon,
  ammunition: ammoIcon,
  resources: resourceIcon,
  database: defaultIcon,
  map: mapIcon,
  guides: guideIcon,
  guideEntry: pistolIcon,
  weaponEntry: weaponIcon,
  ammunitionEntry: ammoIcon
};

const routeIcons = [
  ['/getting-started', resourceAltIcon],
  ['/guides/first-stable-runs-survival-guide', pistolIcon],
  ['/guides', guideIcon],
  ['/map-locations', mapIcon],
  ['/wiki/weapons', weaponIcon],
  ['/wiki/ammunition', ammoIcon],
  ['/wiki/resources', resourceIcon],
  ['/wiki', pistolIcon],
  ['/database', defaultIcon]
];

const keywordIcons = [
  [/weapon|rifle|pistol|shotgun|combat|mounted|cannon/i, weaponIcon],
  [/ammo|ammunition|shell|rocket|caliber/i, ammoIcon],
  [/resource|loot|material|fuel|cargo|economy|group|box|crate|amplifier/i, resourceIcon],
  [/map|route|location|field|poi|wreck|evac|radio|storm|voyage/i, mapIcon],
  [/guide|raid|extract|survival|dispatch/i, guideIcon],
  [/database|tech|tree|branch|workflow|priority|construction/i, defaultIcon],
  [/faq|about|source|review|note/i, papersIcon],
  [/start|prepare|loop|trampler|systems/i, resourceAltIcon],
  [/all|home|index|entry|open|back/i, safeIcon]
];

export const getSidebarIcon = (label = '', href = '') => {
  if (href.startsWith('#branch-godlewski')) return resourceIcon;
  if (href.startsWith('#branch-kaiser')) return '/images/wiki/weapons/40mm-autocannon.png';
  if (href.startsWith('#branch-landwehr')) return weaponIcon;
  if (href.startsWith('#interactive-map')) return mapIcon;
  if (href.startsWith('#route-plans')) return routeIcon;
  if (href.startsWith('#sources')) return papersIcon;
  if (href.startsWith('#faq')) return safeIcon;
  if (href.startsWith('#about')) return papersIcon;

  for (const [route, icon] of routeIcons) {
    if (href === route || (route !== '/guides' && href.startsWith(`${route}/`))) return icon;
  }

  const haystack = `${label} ${href}`.trim();
  for (const [pattern, icon] of keywordIcons) {
    if (pattern.test(haystack)) return icon;
  }

  return defaultIcon;
};

export const sidebarUtilityIcons = {
  faq: safeIcon,
  sources: papersIcon,
  branches: defaultIcon,
  route: routeIcon,
  combat: combatIcon
};
