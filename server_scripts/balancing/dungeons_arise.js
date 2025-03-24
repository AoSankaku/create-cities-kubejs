LootJS.modifiers((e) => {
  //for chests

  e.addLootTableModifier(/dungeons_arise(_seven_seas)?:chests\/.*/)
    .removeLoot(/minecraft:iron_.*/)
    .removeLoot("minecraft:oak_sapling")
    .randomChance(0.4) // 40% chance to generate anything at all
    .addWeightedLoot(
      [3, 8], // between 3 and 8 rolls
      [
        LootEntry.of("minecraft:copper_ingot").withWeight(3).limitCount([8, 20]),
        LootEntry.of("minecraft:iron_ingot").withWeight(2).limitCount([6, 16]),
        LootEntry.of("minecraft:gold_ingot").withWeight(2).limitCount([3, 14]),
        LootEntry.of("minecraft:diamond").withWeight(1).limitCount([1, 4]),
        LootEntry.of("minecraft:netherite_ingot").withWeight(1).limitCount([1, 2]),
        LootEntry.of("minecraft:netherite_scrap").withWeight(1).limitCount([2, 3]),
        LootEntry.of("minecraft:ancient_debris").withWeight(1).limitCount([2, 3]),
        LootEntry.of("mekanism:ingot_tin").withWeight(2).limitCount([6, 12]),
        LootEntry.of("mekanism:ingot_osmium").withWeight(2).limitCount([3, 8]),
        LootEntry.of("mekanism:ingot_steel").withWeight(2).limitCount([2, 3]),
        LootEntry.of("create:zinc_ingot").withWeight(2).limitCount([10, 26]),
        LootEntry.of("create:brass_ingot").withWeight(2).limitCount([5, 15]),
        LootEntry.of("minecraft:wither_skeleton_skull").withWeight(1).limitCount(1)
      ]);
});


