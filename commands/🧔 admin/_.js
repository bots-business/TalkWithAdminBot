/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🧔 admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!message){
  // sometimes message can be blank
  return // exit from command
}

isAdminReply = message.indexOf("/reply") + 1
if(!isAdminReply){ return }

// only admin here!
var admin_chat = Bot.getProperty("admin_chat");
if(chat.chatid!=admin_chat){
 Bot.sendMessage("You are not admin!");
 return
}

tgid = message.split("/reply")[1]
if(!tgid){ return }

// run other command
Bot.run({
  command: "/adminReply",
  options: { tgid: tgid }  // pass tgid in options to that command
});

