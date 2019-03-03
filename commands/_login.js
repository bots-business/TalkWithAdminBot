/*CMD
  command: /login
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Please input password. Password is "123"
  keyboard: 
  aliases: 
CMD*/

   if(data.message=="123"){
     Bot.setProperty("admin_chat", data.chat.chatid, "string")
     Bot.sendMessage("You admin now. Please wait messages from users");
   }else{
     Bot.sendMessage("Access denied. Password is: 123 /login");
   }
