const lootModificationTarget = {
  common: [
    "minecraft:zombie",
    "minecraft:skeleton",
    "minecraft:drowned",
    "minecraft:piglin",
    "minecraft:zombified_piglin",
    "minecraft:phantom",
    "minecraft:enderman",
    "minecraft:blaze",
  ],
  uncommon: [
    "minecraft:pillager",
    "minecraft:witch",
    "minecraft:vindicator",
    "minecraft:evoker",
    "minecraft:illager",
    "minecraft:ravager",
    "guardvillagers:illusioner",
    "friendsandfoes:illusioner",
  ]
}

LootJS.modifiers((event) => {

  const addNetheriteNuggetLoot = (target, chance, minLevel, maxLevel) => {
    event
      .addEntityLootModifier(target)
      .randomChance(chance)
      .customCondition({
        "condition": "autoleveling:level_check",
        "min": minLevel,
        "max": maxLevel,
      })
      .addLoot("thermal:netherite_nugget");
  }



  // Level 1-9 loot
  // 1% loot chance for uncommon mobs
  lootModificationTarget.uncommon.forEach((target) => {
    addNetheriteNuggetLoot(target, 0.01, 1, 9)
  })



  // Level 10-20 loot
  // 1% loot chance for common mobs
  lootModificationTarget.common.forEach((target) => {
    addNetheriteNuggetLoot(target, 0.01, 10, 20)
  })
  // 3% loot chance for uncommon mobs
  lootModificationTarget.uncommon.forEach((target) => {
    addNetheriteNuggetLoot(target, 0.03, 10, 20)
  })



  // Level 21-50 loot
  // 2% loot chance for common mobs
  lootModificationTarget.common.forEach((target) => {
    addNetheriteNuggetLoot(target, 0.02, 21, 50)
  })
  // 5% loot chance for uncommon mobs
  lootModificationTarget.uncommon.forEach((target) => {
    addNetheriteNuggetLoot(target, 0.05, 21, 50)
  })



  // Level 51-200 loot
  // 3% loot chance for common mobs
  lootModificationTarget.common.forEach((target) => {
    addNetheriteNuggetLoot(target, 0.03, 51, 200)
  })
  // 8% loot chance for uncommon mobs
  lootModificationTarget.uncommon.forEach((target) => {
    addNetheriteNuggetLoot(target, 0.08, 51, 200)
  })
});