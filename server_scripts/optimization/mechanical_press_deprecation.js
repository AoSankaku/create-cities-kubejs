ServerEvents.recipes((event) => {
  event.custom({
    type: "thermal:press",
    ingredients: [
      {
        tag: "forge:seeds",
        count: 1
      },
      /*
      {
        item: "thermal:press_gear_die"
      }
      */
    ],
    result: [
      {
        fluid: "createaddition:seed_oil",
        amount: 100
      }
    ],
    energy: 40,
    // experience: 0.15
  })

  event.custom({
    type: "thermal:compression_fuel",
    ingredient: {
      fluid: "createaddition:seed_oil"
    },
    energy: 16000,
  })

  event.custom({
    type: "thermal:compression_fuel",
    ingredient: {
      fluid: "createaddition:bioethanol"
    },
    energy: 256000,
  })


  event.custom({
    type: "mekanism:crushing",
    input: {
      ingredient: {
        item: "minecraft:honey_block"
      }
    },
    output: {
      item: "minecraft:sugar",
      count: 20
    }
  })
})