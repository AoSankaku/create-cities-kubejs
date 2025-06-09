// priority: 1

const recipeFilesPrefix = 'kubejs/server_scripts/TofuCreate/recipes/'

const soymilks = [
  'tofucraft:soymilk_annin',
  'tofucraft:soymilk_apple',
  'tofucraft:soymilk_cocoa',
  'tofucraft:soymilk_fruits_mix',
  'tofucraft:soymilk_honey',
  'tofucraft:soymilk_kinako',
  'tofucraft:soymilk_pudding',
  'tofucraft:soymilk_pumpkin',
  'tofucraft:soymilk_ramune',
  'tofucraft:soymilk_sakura',
  'tofucraft:soymilk_strawberry',
  'tofucraft:soymilk_tea'
]

ServerEvents.recipes((event) => {

  // Emptying

  soymilks.forEach(fluid => {
    event.custom({
      type: 'create:emptying',
      ingredients: [
        {
          item: fluid !== 'tofucraft:soymilk_fruits_mix' ? fluid : 'tofucraft:soymilk_fruits'
        }
      ],
      results: [
        {
          item: 'minecraft:glass_bottle'
        },
        {
          fluid: fluid,
          amount: 250
        }
      ]
    })
  })

  // Filling

  soymilks.forEach(fluid => {
    event.custom({
      type: 'create:filling',
      ingredients: [
        {
          fluid: fluid,
          amount: 250
        },
        {
          item: 'minecraft:glass_bottle'
        }
      ],
      results: [
        {
          item: fluid !== 'tofucraft:soymilk_fruits_mix' ? fluid : 'tofucraft:soymilk_fruits'
        }
      ]
    })
  })

  // Mixing

  soymilks.forEach(fluid => {
    event.forEachRecipe({
      type: "minecraft:crafting_shapeless",
      output: fluid !== 'tofucraft:soymilk_fruits_mix' ? fluid : 'tofucraft:soymilk_fruits'
    }, r => {
      const ingredients = r.originalRecipeIngredients
      const milkIngredients = []
      console.log("===log===")
      ingredients.forEach((i) => {
        const item = Item.of(i)
        if (
          item
          && item.id
          && item.id !== 'minecraft:air'
          && item.id !== 'minecraft:glass_bottle'
          && item.id !== 'tofucraft:bucket_soymilk'
          && item.id !== 'minecraft:honey_bottle'
        ) {
          console.log(item.id)
          milkIngredients.push({
            item: item.id,
            count: item.count
          })
        } else if (item.id === 'minecraft:honey_bottle') {
          milkIngredients.push({
            fluid: 'create:honey',
            amount: 250
          })
        }
      })
      milkIngredients.push({
        fluid: 'tofucraft:soymilk',
        amount: 1000
      })
      event.custom({
        type: 'create:mixing',
        ingredients: milkIngredients,
        results: [
          {
            fluid: fluid,
            amount: 1000
          }
        ]
      })
    })
  })

  // Mixing with CoFH Honey
  event.custom({
    type: 'create:mixing',
    ingredients: [

      {
        fluid: 'cofh_core:honey',
        amount: 250
      },
      {
        fluid: 'tofucraft:soymilk',
        amount: 1000
      }
    ],
    results: [
      {
        fluid: 'tofucraft:soymilk_honey',
        amount: 1000
      }
    ]
  })

  // New recipe for soymilk tea
  event.custom({
    type: 'create:mixing',
    ingredients: [

      {
        item: 'thermal:tea',
        count: 1,
      },
      {
        fluid: 'tofucraft:soymilk',
        amount: 1000
      }
    ],
    results: [
      {
        fluid: 'tofucraft:soymilk_tea',
        amount: 1000
      }
    ]
  })
  event.custom({
    type: 'create:mixing',
    ingredients: [

      {
        item: 'herbalbrews:tea_blossom',
        count: 1,
      },
      {
        fluid: 'tofucraft:soymilk',
        amount: 1000
      }
    ],
    results: [
      {
        fluid: 'tofucraft:soymilk_tea',
        amount: 1000
      }
    ]
  })
  event.custom({
    type: 'create:mixing',
    ingredients: [

      {
        item: 'herbalbrews:tea_leaf',
        count: 1,
      },
      {
        fluid: 'tofucraft:soymilk',
        amount: 1000
      }
    ],
    results: [
      {
        fluid: 'tofucraft:soymilk_tea',
        amount: 1000
      }
    ]
  })
  event.custom({
    type: 'create:mixing',
    ingredients: [

      {
        item: 'herbalbrews:dried_green_tea',
        count: 1,
      },
      {
        fluid: 'tofucraft:soymilk',
        amount: 1000
      }
    ],
    results: [
      {
        fluid: 'tofucraft:soymilk_tea',
        amount: 1000
      }
    ]
  })
  event.custom({
    type: 'create:mixing',
    ingredients: [

      {
        item: 'herbalbrews:dried_black_tea',
        count: 1,
      },
      {
        fluid: 'tofucraft:soymilk',
        amount: 1000
      }
    ],
    results: [
      {
        fluid: 'tofucraft:soymilk_tea',
        amount: 1000
      }
    ]
  })
  event.custom({
    type: 'create:mixing',
    ingredients: [

      {
        item: 'herbalbrews:dried_oolong_tea',
        count: 1,
      },
      {
        fluid: 'tofucraft:soymilk',
        amount: 1000
      }
    ],
    results: [
      {
        fluid: 'tofucraft:soymilk_tea',
        amount: 1000
      }
    ]
  })


})