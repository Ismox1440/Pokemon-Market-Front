import { IPokemon } from '../types/pokemon';

export const calculateLovePotionsToClaim = (pokemon: IPokemon) => {
  const { attack, defense, speed } = pokemon.stats;
  const now = new Date();
  const lastClaim = new Date(pokemon.lastLovePotion);

  const timeDiff = now.getTime() - lastClaim.getTime();
  const hoursDiff = timeDiff / 1000 / 60 / 60; // Convertir milisegundos a horas
  const statsValue = attack + defense + speed + pokemon.level; // Sumar las estadísticas de ataque, defensa, velocidad y nivel
  const rarityMultiplier =
    (pokemon.isLegendary ? 5 : 1) * (pokemon.isMythical ? 10 : 1);
  const potionsToGive = Math.floor(
    hoursDiff * (statsValue / 10) * rarityMultiplier
  );
  if (potionsToGive > 0) {
    return {count: potionsToGive, lastClaim, hoursDiff, isAllowed: hoursDiff >= 1};
  }
  return {count: potionsToGive, lastClaim,  hoursDiff, isAllowed: hoursDiff >= 1};
};
