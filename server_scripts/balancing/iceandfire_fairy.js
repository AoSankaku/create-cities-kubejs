LootJS.modifiers((event) => {
  event
    .addEntityLootModifier("iceandfire:pixie")
    .addLoot("iceandfire:pixie_dust")
    .limitCount([1, 3]);
  event
    .addEntityLootModifier("iceandfire:pixie")
    .randomChance(0.6)
    .addLoot("iceandfire:pixie_dust")
    .limitCount([1, 3]);
});