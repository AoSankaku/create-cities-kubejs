ServerEvents.recipes((event) => {
  event.custom({
    type: "thermal:disenchantment_fuel",
    ingredient: {
      item: "create:experience_nugget"
    },
    energy: 9000
  })
})