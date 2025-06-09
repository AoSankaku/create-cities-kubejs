ServerEvents.recipes((event) => {

  // Create way to get naquadah dust
  event.custom({
    type: "create:crushing",
    ingredients: [
      {
        item: "minecraft:end_stone"
      }
    ],
    processingTime: 350,
    results: [
      {
        chance: 0.01,
        item: "mekanism_extras:dirty_dust_naquadah"
      },
    ]
  })

  // Cobblestone to End Stone
  event.custom({
    type: "mekanism:nucleosynthesizing",
    duration: 200,
    gasInput: {
      amount: 1,
      gas: "mekanism:antimatter"
    },
    itemInput: {
      ingredient: {
        item: "minecraft:cobblestone"
      }
    },
    output: {
      item: "minecraft:end_stone",
      count: 16,
    }
  })

  // Netherite Ingot to Naquadah Ingot
  event.custom({
    type: "mekanism:nucleosynthesizing",
    duration: 200,
    gasInput: {
      amount: 1,
      gas: "mekanism:antimatter"
    },
    itemInput: {
      ingredient: {
        item: "minecraft:netherite_ingot"
      }
    },
    output: {
      item: "mekanism_extras:ingot_naquadah"
    }
  })

})