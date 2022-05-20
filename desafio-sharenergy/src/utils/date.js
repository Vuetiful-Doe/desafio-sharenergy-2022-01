export function createISODate(date){
  if(!date || typeof date != "string") return;
  return (new Date(date)).toISOString();
}

export function formatDate(date,options={}){
  if(!date || typeof date != "string") return;
  // console.log("@FORMAT DATE =>",date.replace("-","/"))
  const _date = new Date(date.replaceAll("-","/"));
  return _date.toLocaleDateString("pt-BR",options)
}