ServerEvents.recipes((event) => {
  event.remove({
    type: "mekanism:crushing",
    output: {
      item: "mekanism:dust_gold",
      count: 1
    }
  })
  event.custom({
    type: "mekanism:crushing",
    input: {
      ingredient: {
        item: "minecraft:gold_ingot"
      }
    },
    output: {
      item: "mekanism:dust_gold",
      count: 1
    }
  })
})