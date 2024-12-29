ServerEvents.recipes(event => {
  event.remove("candlelight:mozzarella")
  event.custom({
    "type": "create:mixing",
    "heatRequirement": "heated",
    "ingredients": [
      {
        "amount": 500,
        "fluid": "minecraft:milk",
        "nbt": {}
      },
      {
        "amount": 250,
        "fluid": "minecraft:water",
        "nbt": {}
      }
    ],
    "results": [
      {
        "item": "candlelight:mozzarella"
      }
    ]
  })

  event.remove("candlelight:butter")
  event.custom({
    "type": "create:mixing",
    "heatRequirement": "heated",
    "ingredients": [
      {
        "amount": 200,
        "fluid": "minecraft:milk",
        "nbt": {}
      },
      {
        "amount": 50,
        "fluid": "createaddition:seed_oil",
        "nbt": {}
      }
    ],
    "results": [
      {
        "item": "candlelight:butter",
        "count": 3,
      }
    ]
  })

  event.remove("brewery:fried_chicken")
  event.custom({
    "type": "create:mixing",
    "heatRequirement": "heated",
    "ingredients": [
      {
        item: "minecraft:cooked_chicken"
      },
      {
        "amount": 100,
        "fluid": "createaddition:seed_oil",
        "nbt": {}
      }
    ],
    "results": [
      {
        "item": "brewery:fried_chicken",
        "count": 3,
      }
    ]
  })
})

/*
参考：

candlelight:pot_cooking/chicken_teriyaki,
Outputs: <item:candlelight:chicken_teriyaki> * 4,
Inputs: [
 <item:candlelight:veggie_plate>, <item:minecraft:chicken>, <tag:items:candlelight:crops/cabbage>
],
Recipe Class: net.satisfy.candlelight.recipe.CookingPotRecipe,
Recipe Serializer: candlelight:pot_cooking
*/