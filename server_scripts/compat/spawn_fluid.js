ServerEvents.recipes(event => {

  // Remove default mixing recipe
  event.remove({
    id: "create_mechanical_spawner:mixing/spawn_fluid_random_legacy"
  })
  event.remove({
    id: "create_mechanical_spawner:mixing/spawn_fluid_enchantment_industry_experience"
  })
  event.remove({
    id: "create_mechanical_spawner:mixing/spawn_fluid_enchantment_industry_hyper_experience"
  })

  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      {
        tag: "forge:rods/blaze"
      },
      {
        tag: "forge:ender_pearls"
      },
      {
        amount: 250,
        fluid: "sliceanddice:fertilizer",
        nbt: {}
      }
    ],
    processingTime: 250,
    results: [
      {
        amount: 250,
        fluid: "create_mechanical_spawner:spawn_fluid_random"
      }
    ]
  })

  // From https://github.com/oierbravo/create-mechanical-spawner/blob/mc1.20.1/dev/src/generated/resources/data/create_mechanical_spawner/recipes/mixing/spawn_fluid_enchantment_industry_experience.json 
  event.custom({
    "type": "create:mixing",
    "conditions": [
      {
        "type": "forge:mod_loaded",
        "modid": "create_enchantment_industry"
      }
    ],
    "heatRequirement": "heated",
    "ingredients": [
      {
        "amount": 500,
        "fluid": "create_enchantment_industry:experience",
        "nbt": {}
      },
      {
        "amount": 500,
        "fluid": "sliceanddice:fertilizer",
        "nbt": {}
      }
    ],
    "processingTime": 250,
    "results": [
      {
        "amount": 1000,
        "fluid": "create_mechanical_spawner:spawn_fluid_random"
      }
    ]
  })

  // From https://github.com/oierbravo/create-mechanical-spawner/blob/mc1.20.1/dev/src/generated/resources/data/create_mechanical_spawner/recipes/mixing/spawn_fluid_enchantment_industry_hyper_experience.json
  event.custom({
    "type": "create:mixing",
    "conditions": [
      {
        "type": "forge:mod_loaded",
        "modid": "create_enchantment_industry"
      }
    ],
    "heatRequirement": "superheated",
    "ingredients": [
      {
        "amount": 10,
        "fluid": "create_enchantment_industry:hyper_experience",
        "nbt": {}
      },
      {
        "amount": 1000,
        "fluid": "sliceanddice:fertilizer",
        "nbt": {}
      }
    ],
    "processingTime": 250,
    "results": [
      {
        "amount": 1000,
        "fluid": "create_mechanical_spawner:spawn_fluid_random"
      }
    ]
  })

})