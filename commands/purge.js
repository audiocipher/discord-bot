// moderator or higher can run this command, if the bot has manage messages permissions

exports.run = function(client, message, args) {
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
}; // permLevel was 2

exports.help = {
  name: 'purge',
  description: 'Purges <number> amount of messages from a given channel.',
  usage: 'purge <number>'
};