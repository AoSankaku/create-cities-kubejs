const fleshTargets = [
  "#forge:foods/meat/raw",
  "#forge:foods/meat/cooked",
  "#forge:raw_beef",
  "#forge:raw_chicken",
  "#forge:raw_pork",
  "#forge:raw_mutton",
  "nethersdelight:hoglin_loin",
  "nethersdelight:hoglin_sirloin",
  "meadow:raw_buffalo_meat",
  "meadow:cooked_buffalo_meat",
  "ends_delight:shulker_meat",
  "ends_delight:shulker_meat_slice",
  "ends_delight:roasted_shulker_meat",
  "ends_delight:roasted_shulker_meat_slice",
  "ice_and_fire_delight:sea_serpent_meat",
  "ice_and_fire_delight:cooked_sea_serpent_meat",
  "ice_and_fire_delight:sea_serpent_slice",
  "ice_and_fire_delight:cooked_sea_serpent_slice",
  "ice_and_fire_delight:troll_meat",
  "ice_and_fire_delight:cooked_troll_meat",
  "ice_and_fire_delight:cyclops_meat",
  "ends_delight:raw_dragon_meat",
  "ends_delight:roasted_dragon_meat",
  "ends_delight:raw_dragon_meat_cuts",
  "ends_delight:roasted_dragon_meat_cuts",
  "ends_delight:raw_ender_mite_meat",
  "ends_delight:dried_endermite_meat",
  "iceandfire:fire_dragon_flesh",
  "iceandfire:ice_dragon_flesh",
  "iceandfire:lightning_dragon_flesh",
  "aethersdelight:raw_moa",
  "aethersdelight:cooked_moa",
  "aethersdelight:raw_moa_cuts",
  "aethersdelight:cooked_moa_cuts",
  "alexsmobs:moose_ribs",
  "alexsmobs:cooked_moose_ribs",
  "alexsmobs:kangaroo_meat",
  "alexsmobs:cooked_kangaroo_meat",
]

ServerEvents.recipes((event) => {
  fleshTargets.forEach(e => {
    event.custom({
      type: "mekanism:injecting",
      chemicalInput: {
        amount: 1,
        gas: "mekanism:oxygen"
      },
      itemInput: {
        ingredient:
          e.startsWith("#")
            ? {
              tag: e.slice(1)
            }
            : {
              item: e
            }
      },
      output: {
        item: "minecraft:rotten_flesh"
      }
    })
  })
})
