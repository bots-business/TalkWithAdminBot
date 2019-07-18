/*CMD
  command: /message
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👥 Users
  answer: Please input message for admin
  keyboard: 
  aliases: 
CMD*/

var admin_chat = Bot.getProperty("admin_chat");

if(!admin_chat){
  Bot.sendMessage("Sorry. Bot have not admin now");
  return // exit
}

user_link = Libs.commonLib.getLinkFor(user)

msg = "Message from: " + user_link +
     "\n" +
      message +
     "\n/reply" + user.telegramid;

Bot.sendMessageToChatWithId(admin_chat, msg);

Bot.sendMessage("Message was sended to admin");
