LootJS.modifiers((event) => {
  event
    .addEntityLootModifier("mowziesmobs:naga")
    .randomChance(0.5)
    .addLoot("thermal:netherite_nugget");

  event
    .addEntityLootModifier("mowziesmobs:naga")
    .randomChance(1)
    .addLoot("create:experience_nugget")
    .limitCount([1, 3]);
});