PlayerEvents.loggedIn(event => {
  const { player, player: { username } } = event
  const durationTicks = 20 * 60 * 15 // 15 minutes
  event.server.scheduleRepeatingInTicks(durationTicks, () => {
    let mtrMapMsg = Text.of("Got stuck? Click here to open MTR Train Map Web!").red().bold().hover(urls.mtrMap).click(urls.mtrMap)
    player.tell(mtrMapMsg)
  })
})