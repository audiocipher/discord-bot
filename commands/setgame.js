exports.run = function(client, message, args) {

    console.log(args);

    str = args.join(' ');

    if(!str) client.user.setGame(null); // remove playing status if no game specified in command
    else client.user.setGame(str); // sets the game that the bot is playing

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
}; 

exports.help = {
  name: 'setgame',
  description: 'Changes the game Rem is playing.',
  usage: 'setgame'
};