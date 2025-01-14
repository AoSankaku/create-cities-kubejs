ServerEvents.recipes((event) => {
  event.custom({
    type: "thermal:tree_extractor",
    trunk: {
      Name: "thingamajigs:rubber_log",
      Properties: {
        axis: "y"
      }
    },
    leaves: {
      Name: "thingamajigs:rubber_leaves",
      Properties: {
        persistent: "false"
      }
    },
    sapling: "thingamajigs:rubber_sapling",
    min_height: 5,
    max_height: 13,
    min_leaves: 8,
    max_leaves: 32,
    result: {
      fluid: "thermal:latex",
      amount: 10
    }
  })
})