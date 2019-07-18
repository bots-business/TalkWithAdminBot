/*CMD
  command: /adminReply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🧔 admin
  answer: Please input reply for user
  keyboard: 
  aliases: 
CMD*/

tgid = options.tgid;

msg = "Answer from admin: " + "\n" + message + "\n\n Reply again: /message";
Bot.sendMessageToChatWithId(tgid, msg);

Bot.sendMessage("Message was sended")
