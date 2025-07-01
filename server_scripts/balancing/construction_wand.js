ServerEvents.recipes((event) => {
  event.custom({
    type: "mekanism:nucleosynthesizing",
    duration: 6000,
    gasInput: {
      amount: 3,
      gas: "mekanism:antimatter"
    },
    itemInput: {
      ingredient: {
        item: "constructionwand:diamond_wand"
      }
    },
    output: {
      item: "constructionwand:infinity_wand"
    }
  })
})