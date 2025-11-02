ServerEvents.recipes((event) => {
  // Create way to get netherite scrap
  event.remove({ type: "create:crushing", output: "create:cinder_flour" })
  event.custom({
    type: "create:crushing",
    ingredients: [
      {
        item: "minecraft:netherrack"
      }
    ],
    processingTime: 350,
    results: [
      {
        item: "create:cinder_flour"
      },
      {
        chance: 0.5,
        item: "create:cinder_flour"
      },
      {
        chance: 0.0003,
        item: "mekanism:dirty_netherite_scrap"
      },
    ]
  })

  event.custom({
    type: "create:crushing",
    ingredients: [
      {
        item: "minecraft:netherrack"
      }
    ],
    processingTime: 350,
    results: [
      {
        item: "create:cinder_flour"
      },
      {
        chance: 0.2,
        item: "create:cinder_flour"
      },
      {
        chance: 0.0006,
        item: "mekanism:dirty_netherite_scrap"
      },
    ]
  })



  // Mekanism way to get netherite scrap
  event.custom({
    type: "mekanism:nucleosynthesizing",
    duration: 2000,
    gasInput: {
      amount: 16,
      gas: "mekanism:antimatter"
    },
    itemInput: {
      ingredient: {
        item: "minecraft:nether_brick"
      }
    },
    output: {
      item: "minecraft:netherite_ingot"
    }
  })

  event.custom({
    type: "mekanism:nucleosynthesizing",
    duration: 1500,
    gasInput: {
      amount: 12,
      gas: "mekanism:antimatter"
    },
    itemInput: {
      ingredient: {
        item: "minecraft:polished_basalt"
      }
    },
    output: {
      item: "minecraft:ancient_debris"
    }
  })

  // Or...
  event.custom({
    type: "mekanism:crushing",
    input: {
      ingredient: {
        item: "minecraft:netherrack"
      }
    },
    output: {
      count: 1,
      item: "create:cinder_flour"
    }
  })
  event.custom({
    type: "mekanism:crushing",
    input: {
      ingredient: {
        item: "minecraft:cracked_nether_bricks"
      }
    },
    output: {
      count: 5,
      item: "create:cinder_flour"
    }
  })
  event.custom({
    type: "mekanism:enriching",
    input: {
      amount: 64,
      ingredient: {
        item: "cratedelight:cinder_flour_bag"
      }
    },
    output: {
      item: "mekanism:dirty_netherite_scrap"
    }
  })

  // Lime Wool to Block of Experience
  event.custom({
    type: "mekanism:nucleosynthesizing",
    duration: 500,
    gasInput: {
      amount: 2,
      gas: "mekanism:antimatter"
    },
    itemInput: {
      ingredient: {
        item: "minecraft:lime_wool"
      }
    },
    output: {
      item: "create:experience_block"
    }
  })


})