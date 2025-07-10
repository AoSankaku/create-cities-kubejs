ServerEvents.recipes((event) => {
  event.custom({
    type: "mekanism:nucleosynthesizing",
    duration: 500,
    gasInput: {
      amount: 2,
      gas: "mekanism:antimatter"
    },
    itemInput: {
      ingredient: {
        item: "createaddition:brass_rod"
      }
    },
    output: {
      item: "minecraft:blaze_rod"
    }
  })

  event.custom({
    type: "mekanism:nucleosynthesizing",
    duration: 500,
    gasInput: {
      amount: 1,
      gas: "mekanism:antimatter"
    },
    itemInput: {
      ingredient: {
        item: "createaddition:electrum_rod"
      }
    },
    output: {
      item: "minecraft:blaze_rod"
    }
  })
})