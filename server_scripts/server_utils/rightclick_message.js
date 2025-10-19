BlockEvents.rightClicked(event => {
  const player = event.getPlayer();
  if (player == null) {
    return;
  }
  let itemStack = event.getItem();
  if (itemStack.id == "mtr:brush") {
    return;
  }
  if (event.block != "mtr:station_name_entrance") {
    return;
  }
  if (!event.hand == 'main_hand') {
    return;
  }
  const mtrMapMsg = Text.of("クリックでMTR鉄道マップを開く").red().bold().hover(urls.mtrMap).click(urls.mtrMap)
  player.tell(mtrMapMsg)
})