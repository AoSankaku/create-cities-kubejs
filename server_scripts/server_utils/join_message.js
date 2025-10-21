// priority: 10

// This is a server script that sends a message to the player when they log in
// Set your URL for your server
// If not set, it will warn you to set it and not send the message
const urls = {
  createTrainMap: "http://yourserver.com:8888",
  mtrMap: "http://yourserver.com:8123",
}

// Event listener for player joining
PlayerEvents.loggedIn(event => {
  if (urls.createTrainMap === "http://yourserver.com:8888" || urls.mtrMap === "http://yourserver.com:8123") {
    console.warn("Please set your server URLs in server_scripts/server_message.js");
    return;
  } else {
    // Define the player as well as the username to the event
    const { player, player: { username } } = event
    //Multiple colors version
    let message = Text.of("Hello ").green()
      .append(Text.of(`${username}, `).yellow())
      .append(Text.of(`and welcome to our server!`).green());

    let createMapMsg = Text.of("Click here to open Create Train Track Map").blue().bold().hover(urls.createTrainMap).click(urls.createTrainMap)
    let mtrMapMsg = Text.of("Click here to open MTR Train Map Web").red().bold().hover(urls.mtrMap).click(urls.mtrMap)

    player.tell(message)
    player.tell(createMapMsg)
    player.tell(mtrMapMsg)

    event.player.playSound("mekanism:tile.machine.logistical_sorter", 2, 1)

    //Simple version
    //player.tell(`Hello, ${username} and welcome to minecraft!`)
  }
});