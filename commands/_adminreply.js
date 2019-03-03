/*CMD
  command: /adminreply
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Please input reply for <cur_user>
  keyboard: 
  aliases: 
CMD*/

cur_user_chat = Bot.getProperty("cur_user_chat");
msg = "Answer from admin: " + "\n" + data.message + "\n/reply";
Bot.sendMessageToChatWithId(cur_user_chat, msg);
