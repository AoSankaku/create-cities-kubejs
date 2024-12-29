// Event listener for player joining
PlayerEvents.loggedIn(event => {
  // Define the player as well as the username to the event
  const { player, player: { username } } = event
  //Multiple colors version
  let message = Text.of("Hello ").green()
    .append(Text.of(`${username}, `).yellow())
    .append(Text.of(`and welcome to our server!`).green());

  const urls = {
    createTrainMap: "http://5.104.83.84:8123",
    mtrMap: "http://5.104.83.84:8888"
  }
  let createMapMsg = Text.of("Click here to open Create Train Track Map").blue().bold().hover(urls.createTrainMap).click(urls.createTrainMap)
  let mtrMapMsg = Text.of("Click here to open MTR Train Map Web").red().bold().hover(urls.mtrMap).click(urls.mtrMap)

  player.tell(message)
  player.tell(createMapMsg)
  player.tell(mtrMapMsg)

  event.player.playSound("mekanism:tile.machine.logistical_sorter", 2, 1)

  //Simple version
  //player.tell(`Hello, ${username} and welcome to minecraft!`)
});