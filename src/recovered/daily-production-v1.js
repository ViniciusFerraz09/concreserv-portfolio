export const saoPauloDay=(instant=new Date())=>new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(instant);
export function validDay(value){return /^\d{4}-\d{2}-\d{2}$/.test(value||'')&&!Number.isNaN(Date.parse(value+'T12:00:00Z'))&&new Date(value+'T12:00:00Z').toISOString().slice(0,10)===value}
export function shiftDay(day,offset){const date=new Date(day+'T12:00:00Z');date.setUTCDate(date.getUTCDate()+offset);return date.toISOString().slice(0,10)}
export function dailySeries({workId,plan,entries,audit=[],from,to,team=''}){
 if(!validDay(from)||!validDay(to)||from>to)throw Error('Informe um período válido, com início anterior ou igual ao fim.');
 if(!plan||plan.work_id!==workId)return [];
 const rows=entries.filter(e=>e.work_id===workId&&e.plan_id===plan.id&&(!team||e.team_id===team));
 const history=audit.filter(a=>a.work_id===workId&&a.table_name==='cc_plans'&&a.record_id===plan.id).sort((a,b)=>a.at.localeCompare(b.at));
 const grouped=new Map();for(const row of rows){if(!grouped.has(row.date))grouped.set(row.date,[]);grouped.get(row.date).push(row)}
 const result=[];
 for(let date=from;date<=to;date=shiftDay(date,1)){
  const dayRows=grouped.get(date)||[];
  let snapshot=null;
  for(const event of history){if(saoPauloDay(new Date(event.at))>date)break;snapshot=event.action==='DELETE'?null:event.after_data;}
  const planned=snapshot?.daily_target;
  const recorded=dayRows.filter(e=>e.target!==null&&e.target!==undefined&&Number.isFinite(Number(e.target)));
  const target=planned!==null&&planned!==undefined&&Number.isFinite(Number(planned))?Number(planned):recorded.length?recorded.reduce((sum,e)=>sum+Number(e.target),0):null;
  result.push({date,quantity:dayRows.reduce((sum,e)=>sum+Number(e.quantity||0),0),target,entryIds:dayRows.map(e=>e.id),targetSource:planned!==null&&planned!==undefined?'planning':recorded.length?'entries':'unknown'});
 }
 return result;
}
