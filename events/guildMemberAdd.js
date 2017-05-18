module.exports = member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Hi ${member.user.username}, welcome to the server~!`);
};