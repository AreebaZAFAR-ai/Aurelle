/** Editorial stills (pearls, rings, earrings) used in the About and Journal heroes. */
const still = (name: string) => `/media/img/edit-${name}.webp`;

export const editorial = {
  sculptedGold: still("sculpted-gold"),
  pearlDrop: still("pearl-drop"),
  layeredPearls: still("layered-pearls"),
  stackedRings: still("stacked-rings"),
  pearlPendant: still("pearl-pendant"),
  pearlChoker: still("pearl-choker"),
  eveningPearls: still("evening-pearls"),
};

export const editorialAll = Object.values(editorial);
