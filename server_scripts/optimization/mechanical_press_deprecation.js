ServerEvents.recipes((event) => {
  event.custom({
    type: "thermal:press",
    ingredients: [
      {
        tag: "c:seeds",
        count: 1
      },
      /*
      {
        item: "thermal:press_gear_die"
      }
      */
    ],
    result: [
      {
        fluid: "createaddition:seed_oil",
        amount: 100
      }
    ],
    energy: 40,
    // experience: 0.15
  })
})