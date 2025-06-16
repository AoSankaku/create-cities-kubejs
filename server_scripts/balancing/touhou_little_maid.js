LootJS.modifiers((event) => {
  event
    .addEntityLootModifier("touhou_little_maid:fairy")
    .randomChance(0.6)
    .addLoot("create:experience_nugget")
    .limitCount([1, 3]);
  event
    .addEntityLootModifier("touhou_little_maid:fairy")
    .randomChance(0.8)
    .addLoot("minecraft:sugar")
    .limitCount([1, 6]);
});