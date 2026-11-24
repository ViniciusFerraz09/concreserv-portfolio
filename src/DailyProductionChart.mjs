import {dailySeries,saoPauloDay,shiftDay,validDay} from './dailyProduction.mjs';
export function createDailyChart(React,{TableViewport,ArrowRight}){
 const h=React.createElement;
 return function DailyProductionChart({d,work,f,client,onDetails,onNavigate}){
  const key='concreserv-daily-chart-v1:'+work.id;
  const read=()=>{try{return JSON.parse(sessionStorage.getItem(key)||'{}')}catch{return {}}};
  const [settings,setSettings]=React.useState(read),[remote,setRemote]=React.useState(null),[error,setError]=React.useState('');
  const sequence=React.useRef(0);
  React.useEffect(()=>{sequence.current++;setRemote(null)},[d.entries,d.plans,d.audit,work.id]);
  React.useEffect(()=>{
   let active=true,busy=false;
   async function all(table){let rows=[];for(let offset=0;;offset+=1000){const {data,error}=await client.from(table).select('*').eq('work_id',work.id).order('id').range(offset,offset+999);if(error)throw error;rows.push(...(data||[]));if(!data||data.length<1000)return rows}}
   async function refresh(){if(!active||busy||document.visibilityState==='hidden')return;busy=true;const seq=++sequence.current;try{const [entries,plans,audit]=await Promise.all(['cc_entries','cc_plans','cc_audit'].map(all));if(active&&seq===sequence.current){setRemote({entries,plans,audit});setError('')}}catch{if(active)setError('Não foi possível atualizar o gráfico. Tentaremos novamente automaticamente.')}finally{busy=false}}
   const timer=setInterval(refresh,20000);window.addEventListener('focus',refresh);document.addEventListener('visibilitychange',refresh);
   return()=>{active=false;clearInterval(timer);window.removeEventListener('focus',refresh);document.removeEventListener('visibilitychange',refresh)};
  },[client,work.id]);
  React.useEffect(()=>{setSettings(read());setRemote(null)},[work.id]);
  const change=patch=>setSettings(previous=>{const next={...previous,...patch};try{sessionStorage.setItem(key,JSON.stringify(next))}catch{}return next});
  const current=remote?{...d,...remote}:d;
  const plans=current.plans.filter(p=>p.work_id===work.id&&(!f.service||p.service_id===f.service)&&(!f.type||p.type_id===f.type)&&(!f.front||p.front_id===f.front));
  const plan=plans.find(p=>p.id===settings.planId)||plans.find(p=>current.services.find(s=>s.id===p.service_id)?.name==='Concretagem')||plans[0];
  const today=saoPauloDay(),period=['7','15','30','custom'].includes(settings.period)?settings.period:'7';
  const from=period==='custom'?(settings.from||shiftDay(today,-6)):shiftDay(today,-(Number(period)-1));
  const to=period==='custom'?(settings.to||today):today;
  const valid=validDay(from)&&validDay(to)&&from<=to&&from>='1900-01-01'&&to<=today;
  const points=valid?dailySeries({workId:work.id,plan,entries:current.entries,audit:current.audit,from,to,team:f.team}):[];
  const max=Math.max(1,...points.flatMap(p=>[p.quantity,p.target||0]))*1.25;
  const format=n=>new Intl.NumberFormat('pt-BR',{maximumFractionDigits:2}).format(n);
  const label=p=>`${current.services.find(s=>s.id===p.service_id)?.name||'Atividade'} · ${current.types.find(t=>t.id===p.type_id)?.name||'Tipo'} · ${current.fronts.find(t=>t.id===p.front_id)?.name||'Trecho'}`;
  const unit=current.services.find(s=>s.id===plan?.service_id)?.unit||'';
  return h('section',{className:'panel production-chart daily-production'},
   h('div',{className:'panel-head'},h('div',null,h('h3',null,'Produção diária ',h('span',{className:'muted'},'×'),' meta'),h('p',null,plan?`${current.types.find(t=>t.id===plan.type_id)?.name} · ${current.services.find(s=>s.id===plan.service_id)?.name} (${unit})`:'Configure o planejamento para começar')),h('div',{className:'chart-legend'},h('span',null,h('i',{className:'gold-bg'}),'Realizado'),h('span',null,h('i',{className:'gray-bg'}),'Meta'))),
   h('div',{className:'daily-chart-controls'},h('label',null,'Atividade / tipo / trecho',h('select',{'aria-label':'Atividade do gráfico diário',value:plan?.id||'',onChange:e=>change({planId:e.target.value})},plans.length?plans.map(p=>h('option',{key:p.id,value:p.id},label(p))):h('option',{value:''},'Nenhuma atividade planejada'))),h('label',null,'Período do gráfico',h('select',{'aria-label':'Período do gráfico diário',value:period,onChange:e=>change({period:e.target.value})},[['7','Últimos 7 dias'],['15','Últimos 15 dias'],['30','Últimos 30 dias'],['custom','Período personalizado']].map(([value,text])=>h('option',{key:value,value},text)))),period==='custom'&&h('div',{className:'daily-chart-dates'},h('label',null,'De',h('input',{type:'date','aria-label':'Início do gráfico',min:'1900-01-01',max:to,value:from,onChange:e=>change({from:e.target.value})})),h('label',null,'Até',h('input',{type:'date','aria-label':'Fim do gráfico',min:from,max:today,value:to,onChange:e=>change({to:e.target.value})})))),
   !valid?h('p',{className:'error',role:'alert'},'Escolha datas válidas até hoje, com início anterior ou igual ao fim.'):!plan?h('div',{className:'empty'},'Nenhuma atividade no escopo selecionado.'):h(TableViewport,{label:'Gráfico de produção diária',hint:'Deslize o gráfico para ver todo o período.'},h('div',{className:'chart-container',style:{minWidth:points.length>7?points.length*30+65:undefined}},
    h('div',{className:'chart-y'},[1,.75,.5,.25,0].map(v=>h('span',{key:v},new Intl.NumberFormat('pt-BR',{maximumFractionDigits:0}).format(max*v)))),
    h('div',{className:'bar-chart'},h('div',{className:'grid-lines'},[0,1,2,3,4].map(i=>h('i',{key:i}))),points.map(p=>h('button',{type:'button',key:p.date,className:'bar-group daily-chart-day','data-date':p.date,'data-quantity':p.quantity,'data-target':p.target===null?'unknown':p.target,onClick:()=>onDetails('Produção em '+p.date.split('-').reverse().join('/'),current.entries.filter(e=>e.work_id===work.id&&p.entryIds.includes(e.id))),title:`${p.date.split('-').reverse().join('/')}: ${format(p.quantity)} realizado · ${p.target===null?'Sem meta datada':format(p.target)+' meta'}`},
     h('div',{className:'bar-pair'},h('i',{className:'bar target',style:{height:((p.target||0)/max*100)+'%'}}),h('i',{className:'bar actual',style:{height:(p.quantity/max*100)+'%'}})),
     h('span',null,p.date.slice(8),h('small',null,'/'+p.date.slice(5,7)))))))),
   error&&h('p',{className:'daily-chart-note',role:'status'},error),
   h('div',{className:'chart-foot'},h('span',{title:'Meta do planejamento vigente na data; sem histórico, usa a meta registrada nos lançamentos. Sem informação datada, nenhuma meta é inventada.'},h('span',{className:'gold-dot'}),'Metas conforme o planejamento da data.'),h('button',{type:'button',onClick:()=>onNavigate('placas')},'Ver produção ',h(ArrowRight,{size:14}))));
 };
}
