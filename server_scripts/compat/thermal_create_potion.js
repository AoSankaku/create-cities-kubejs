ServerEvents.recipes((event) => {
  event.custom({
    type: "create:filling",
    ingredients: [
      {
        item: "create:cinder_flour"
      },
      {
        amount: 25,
        fluid: "cofh_core:potion",
        nbt: {
          "Potion": "minecraft:night_vision"
        }
      }
    ],
    results: [
      {
        item: "minecraft:glowstone_dust"
      }
    ]
  })
})