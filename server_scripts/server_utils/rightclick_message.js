const rightClickableBlocksToShowMap = [
  "mtr:station_name_entrance",
  "mtr:route_sign_standing_light",
  "mtr:route_sign_standing_metal",
  "mtr:route_sign_wall_light",
  "mtr:route_sign_wall_metal",
  "mtr:station_name_tall_block",
  "mtr:station_name_tall_block_double_sided",
  "mtr:station_name_tall_wall",
  "mtr:station_name_tall_standing",
  "mtr:station_name_wall",
  "mtr:station_name_wall_gray",
  "mtr:station_name_wall_black"
]

BlockEvents.rightClicked(event => {
  // console.log(Object.keys(event))
  // console.log(event.hand.toString())
  const player = event.getPlayer();
  if (player == null) {
    return;
  }
  let itemStack = event.getItem();
  if (itemStack.id == "mtr:brush") {
    return;
  }
  if (
    rightClickableBlocksToShowMap.includes(event.block.getId())
    && event.hand.toString() == 'MAIN_HAND'
  ) {
    const mtrMapMsg = Text.of("クリックでMTR鉄道マップを開く").red().bold().hover(urls.mtrMap).click(urls.mtrMap)
    player.tell(mtrMapMsg)
  }
})