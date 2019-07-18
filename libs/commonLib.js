function getNameFor(member){
  let haveAnyNames = member.username||member.first_name||member.last_name;
  if(!haveAnyNames){ return ""}

  if(member.username){
    return "@" + member.username
  }

  return member.first_name ? member.first_name : member.last_name
}

function getLinkFor(member){
  return "[" + getNameFor(member) + "](tg://user?id=" + member.telegramid + ")";
}

publish({
    getNameFor: getNameFor,
    getLinkFor: getLinkFor
})

