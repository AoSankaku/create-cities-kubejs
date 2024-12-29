const mekanismCrushingPairs = [
  {
    target: "thermal:nickel_ingot",
    output: "thermal:nickel_dust"
  },
  {
    target: "minecraft:ender_pearl",
    output: "thermal:ender_pearl_dust"
  },
  {
    target: "#forge:ingots/silver",
    output: "thermal:silver_dust"
  },
  {
    target: "thermal:tin_ingot",
    output: "thermal:tin_dust"
  },
  {
    target: "thermal:lead_ingot",
    output: "thermal:lead_dust"
  },
  {
    target: "thermal:apatite",
    output: "thermal:apatite_dust"
  },
  {
    target: "thermal:apatite",
    output: "thermal:apatite_dust"
  },
  {
    target: "thermal:cinnabar",
    output: "thermal:cinnabar_dust"
  },
  {
    target: "thermal:niter",
    output: "thermal:niter_dust"
  },
  {
    target: "thermal:sulfur",
    output: "thermal:sulfur_dust"
  },
  {
    target: "#minecraft:logs",
    output: "thermal:sawdust"
  },
  {
    target: "#forge:plates/netherite",
    output: "thermal:netherite_dust"
  }
]

ServerEvents.recipes((event) => {
  mekanismCrushingPairs.forEach(e => {
    event.custom({
      type: "mekanism:crushing",
      input: {
        ingredient:
          e.target.startsWith("#")
            ? {
              tag: e.target.slice(1)
            }
            : {
              item: e.target
            }
      },
      output: { item: e.output, count: 1 }
    })
  })
})