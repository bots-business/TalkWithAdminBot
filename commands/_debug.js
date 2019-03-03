/*CMD
  command: /debug
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

info = "admin chat: " + String(Bot.getProperty("admin_chat")) + 
  "\ncur user chat: " + String(Bot.getProperty("cur_user_chat"))+
  "\ncur user: `" + String(Bot.getProperty("cur_user")) + "`";

Bot.sendMessage(info);
