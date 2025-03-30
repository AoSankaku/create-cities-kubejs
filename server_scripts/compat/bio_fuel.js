ServerEvents.recipes((event) => {

  const bioTargets = []
  // KubejsではArray.prototype.flat()や...が使えないらしい…
  bioTargets.push(Ingredient.of(/^aether:(.*)(sapling|leaves|seeds)/).itemIds)
  bioTargets.push(Ingredient.of(/^biomesoplenty:(.*)(sapling|leaves|seeds)/).itemIds)
  bioTargets.push(Ingredient.of(/^bakery:(.*)(sapling|leaves|seeds)/).itemIds)
  bioTargets.push(Ingredient.of(/^beachparty:(.*)(sapling|leaves|seeds)/).itemIds)
  bioTargets.push(Ingredient.of(/^brewery:(.*)(sapling|leaves|seeds)/).itemIds)
  bioTargets.push(Ingredient.of(/^candlelight:(.*)(sapling|leaves|seeds)/).itemIds)
  bioTargets.push(Ingredient.of(/^deep_aether:(.*)(sapling|leaves|seeds)/).itemIds)
  bioTargets.push(Ingredient.of(/^farmersdelight:(.*)(sapling|leaves|seeds)(.*)/).itemIds)
  bioTargets.push(Ingredient.of(/^meadow:(.*)(sapling|leaves|seeds)/).itemIds)
  bioTargets.push(Ingredient.of(/^quark:(.*)(sapling|leaves|seeds)/).itemIds)
  bioTargets.push(Ingredient.of(/^supplementaries:(.*)(sapling|leaves|seeds)(.*)/).itemIds)
  bioTargets.push(Ingredient.of(/^tofucraft:(.*)(sapling|leaves|seeds)(.*)/).itemIds)
  bioTargets.push(Ingredient.of(/^thermal:(.*)(sapling|leaves|seeds)(.*)/).itemIds)
  bioTargets.push(Ingredient.of(/^vinery:(.*)(sapling|leaves|seeds)(.*)/).itemIds)

  const biofuelTargetModNames = [
    "meadow",
    "vinery",
    "beachparty",
    "bakery",
    "create",
    "tofucraft",
    "thermal",
  ]

  const items = [
    {
      ingredient: "supplementaries:flax",
      output: 4,
    },
    {
      ingredient: "farmersdelight:straw",
      output: 3,
    },
    {
      ingredient: "farmersdelight:cabbage",
      output: 5,
    },
    {
      ingredient: "farmersdelight:tomato",
      output: 5,
    },
    {
      ingredient: "farmersdelight:onion",
      output: 5,
    },
    {
      ingredient: "farmersdelight:rice_panicle",
      output: 5,
    },
    {
      ingredient: "farmersdelight:rotten_tomato",
      output: 6,
    },
    {
      ingredient: "farmersdelight:wheat_dough",
      output: 6,
    },
    {
      ingredient: "farmersdelight:raw_pasta",
      output: 6,
    },
    {
      ingredient: "farmersdelight:pumpkin_slice",
      output: 3,
    },
    {
      ingredient: "farmersdelight:cabbage_leaf",
      output: 3,
    },
    {
      ingredient: "farmersdelight:hamburger",
      output: 18,
    },
    {
      ingredient: "bakery:dough",
      output: 18,
    },
    {
      ingredient: "create:dough",
      output: 6,
    },
    {
      ingredient: "farmersdelight:wheat_dough",
      output: 4,
    },
    {
      ingredient: "tofucraft:leek",
      output: 4,
    },
    {
      ingredient: "tofucraft:tofu_terrain",
      output: 2,
    },
    {
      ingredient: "tofucraft:tofu_terrain_zunda",
      output: 3,
    },
    {
      ingredient: "tofucraft:blocktofuishi",
      output: 2,
    },
    {
      ingredient: "tofucraft:leaves_tofu",
      output: 2,
    },
    {
      ingredient: "tofucraft:tofucake",
      output: 8,
    },
    {
      ingredient: "tofucraft:zundatofucake",
      output: 8,
    },
    {
      ingredient: "tofucraft:blocktofugrilled",
      output: 12,
    },
    {
      ingredient: "tofucraft:leek_green_stem",
      output: 4,
    },
    {
      ingredient: "tofucraft:leek_stem",
      output: 4,
    },
    {
      ingredient: "tofucraft:edamame",
      output: 1,
    },
    {
      ingredient: "tofucraft:chili",
      output: 3,
    },
    {
      ingredient: "tofucraft:rice",
      output: 5,
    },
  ]


  bioTargets.forEach(e1 => {
    e1.forEach(e2 => {
      event.custom({
        type: "mekanism:crushing",
        input: {
          ingredient: {
            item: e2
          }
        },
        output: { item: "mekanism:bio_fuel", count: 2 }
      })
    })
  })


  biofuelTargetModNames.map(modName => {
    const items = Ingredient.of(new RegExp(`^${modName}:(.*)`)).stacks;
    items.forEach(item => {
      if (item.isEdible()) {
        const score = Math.floor(item.getFoodProperties(null).getNutrition() * (item.getFoodProperties(null).getSaturationModifier() + 1),)
        console.log(`${item}'s score is ${score}`)
        event.custom({
          type: "mekanism:crushing",
          input: {
            ingredient: item,
          },
          output: {
            count: score,
            item: "mekanism:bio_fuel"
          }
        })
      }
    })
  })


  items.forEach((e) => {
    event.custom({
      type: "mekanism:crushing",
      input: {
        ingredient: {
          item: e.ingredient
        }
      },
      output: {
        count: e.output,
        item: "mekanism:bio_fuel"
      }
    })
  })


})