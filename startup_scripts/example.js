// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ItemEvents.modification(event => {
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
  event.modify('moredelight:simple_hamburger', item => {
    item.foodProperties = food => {
      food.hunger(8)
      food.saturation(0.5)
    }
  })
  event.modify('moredelight:hamburger_with_egg', item => {
    item.foodProperties = food => {
      food.hunger(9)
      food.saturation(0.6)
    }
  })
})