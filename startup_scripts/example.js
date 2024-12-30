// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ItemEvents.modification(event => {
  event.modify('nethersdelight:hoglin_sirloin', item => {
    item.foodProperties = food => {
      food.hunger(5)
      food.saturation(1.2)
    }
  })
  event.modify('candlelight:pancake', item => {
    item.foodProperties = food => {
      food.hunger(4)
      food.saturation(1)
    }
  })
  event.modify('candlelight:lettuce_tomato', item => {
    item.foodProperties = food => {
      food.hunger(3)
      food.saturation(0.2)
    }
  })
})