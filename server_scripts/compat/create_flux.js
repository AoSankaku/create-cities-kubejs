ServerEvents.recipes((event) => {
  event.custom(
    {
      type: "create:compacting",
      ingredients: [
        {
          item: "minecraft:redstone"
        },
        {
          tag: "forge:dusts/obsidian"
        },
        {
          item: "fluxnetworks:flux_dust"
        }
      ],
      results: [
        {
          item: "fluxnetworks:flux_dust",
          count: 2
        }
      ]
    }
  )
})
