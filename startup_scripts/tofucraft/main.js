// priority: 0

const tofucraft_fluids = [
  {
    id: 'tofucraft:soymilk_annin',
    color: 0xeef0ec,
  },
  {
    id: 'tofucraft:soymilk_apple',
    color: 0xebd983,
  },
  {
    id: 'tofucraft:soymilk_cocoa',
    color: 0x893b0d,
  },
  {
    id: 'tofucraft:soymilk_fruits_mix',
    color: 0xf4be0a,
  },
  {
    id: 'tofucraft:soymilk_honey',
    color: 0xfca155,
  },
  {
    id: 'tofucraft:soymilk_kinako',
    color: 0xd0b72b,
  },
  {
    id: 'tofucraft:soymilk_pudding',
    color: 0xebd983,
  },
  {
    id: 'tofucraft:soymilk_pumpkin',
    color: 0xfca155,
  },
  {
    id: 'tofucraft:soymilk_ramune',
    color: 0x9cc2f8,
  },
  {
    id: 'tofucraft:soymilk_sakura',
    color: 0xf8ccd1,
  },
  {
    id: 'tofucraft:soymilk_strawberry',
    color: 0xed9fb2,
  },
  {
    id: 'tofucraft:soymilk_tea',
    color: 0xf7cd94,
  }
]

StartupEvents.registry('fluid', event => {
  for (const fluid of tofucraft_fluids) {
    event.create(fluid.id)
      .thinTexture(fluid.color)
      .bucketColor(fluid.color)
      .displayName(
        fluid.id.replace('tofucraft:', '').split('_').map((e) => {
          return e.charAt(0).toUpperCase() + e.slice(1)
        }).join(' ')
      )
  }
})