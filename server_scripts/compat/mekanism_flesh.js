const fleshTargets = [
  "#forge:foods/meat/raw",
  "#forge:foods/meat/cooked",
  "#forge:raw_beef",
  "#forge:raw_chicken",
  "#forge:raw_pork",
  "#forge:raw_mutton",
  "meadow:raw_buffalo_meat",
  "meadow:cooked_buffalo_meat",
  "ice_and_fire_delight:sea_serpent_meat",
  "ice_and_fire_delight:cooked_sea_serpent_meat",
  "ice_and_fire_delight:sea_serpent_slice",
  "ice_and_fire_delight:cooked_sea_serpent_slice",
  "ice_and_fire_delight:troll_meat",
  "ice_and_fire_delight:cooked_troll_meat",
  "ice_and_fire_delight:cyclops_meat",
  "iceandfire:fire_dragon_flesh",
  "iceandfire:ice_dragon_flesh",
  "iceandfire:lightning_dragon_flesh",
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
