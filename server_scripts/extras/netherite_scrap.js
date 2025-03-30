ServerEvents.recipes((event) => {
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
        chance: 0.0002,
        item: "mekanism:dirty_netherite_scrap"
      },
    ]
  })
})