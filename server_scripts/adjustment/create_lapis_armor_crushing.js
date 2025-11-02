ServerEvents.recipes((event) => {

  const lapis_lazuli_crushing_target = [
    "mekanismtools:lapis_lazuli_helmet",
    "mekanismtools:lapis_lazuli_chestplate",
    "mekanismtools:lapis_lazuli_leggings",
    "mekanismtools:lapis_lazuli_boots",
    "mekanismtools:lapis_lazuli_sword",
    "mekanismtools:lapis_lazuli_pickaxe",
    "mekanismtools:lapis_lazuli_hoe",
    "mekanismtools:lapis_lazuli_shovel",
    "mekanismtools:lapis_lazuli_axe",
    "mekanismtools:lapis_lazuli_paxel"
  ]

  for (e of lapis_lazuli_crushing_target) {
    event.custom({
      type: "create:crushing",
      ingredients: [
        {
          item: e
        }
      ],
      processingTime: 350,
      results: [
        {
          item: "mekanism:dust_lapis_lazuli"
        },
        {
          item: "mekanism:dust_lapis_lazuli",
          chance: 0.2
        },
      ]
    })

    event.custom({
      type: "mekanism:crushing",
      input: {
        ingredient: {
          item: e
        }
      },
      output: {
        count: 1,
        item: "mekanism:dust_lapis_lazuli"
      }
    })
  }

})