var config = {
    channels: ["#kmitfoss", "#codecult", "kmitgsoc16"],
    server: "irc.freenode.net",
    botName: "iambot"
};

// Get the lib
var irc = require("irc");

// Create the bot name
var bot = new irc.Client(config.server, config.botName, {
    channels: config.channels
});

// Listen for joins
bot.addListener("join", function(channel, who) {
    // Welcome them in!
    bot.say(channel, who + "...dude...welcome back!");
});
