LootJS.modifiers((event) => {
  event
    .addEntityLootModifier("minecraft:creeper")
    .randomChance(0.3) // 30% chance
    .customCondition({
      "condition": "autoleveling:level_check",
      "min": 5,
      "max": 10
    })
    .addLoot("minecraft:diamond");
});