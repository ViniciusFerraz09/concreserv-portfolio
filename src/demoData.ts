import {makeDemo,today,type Dataset,type Row} from './model';
import {shiftDay} from './dailyProduction.mjs';
export function demoData():Dataset{
 const d=makeDemo();
 const delta=Math.round((Date.parse(today()+'T12:00:00Z')-Date.parse('2026-11-13T12:00:00Z'))/86400000);
 const day=(date:string)=>shiftDay(date,delta);
 for(const e of d.entries)e.date=day(e.date);
 for(const l of d.lots)l.cast_date=day(l.cast_date);
 for(const m of d.movements){m.date=day(m.date);m.created_at=m.date+'T15:00:00Z';m.responsible='Equipe demonstrativa';}
 d.works[0]={...d.works[0],name:'Obra Horizonte · demonstração',client:'Cliente fictício',location:'São Paulo, SP · exemplo',start_date:day('2026-08-03'),end_date:day('2027-02-26')};
 d.teams.forEach((t,i)=>t.leader=['Responsável A','Responsável B','Responsável C'][i]);
 d.audit=d.plans.map(p=>({id:'audit-demo-'+p.id,work_id:'demo',table_name:'cc_plans',record_id:p.id,action:'INSERT',at:day('2026-10-01')+'T15:00:00Z',after_data:{...p}}));
 return d;
}
/** Local read adapter. No network, credentials, authentication or database writes. */
export function demoReader(getData:()=>Dataset){return {from(table:string){let workId='demo';const query={select(){return query},eq(_key:string,value:string){workId=value;return query},order(){return query},async range(from:number,to:number){const key=table.replace(/^cc_/,'') as keyof Dataset;return {data:(getData()[key]||[]).filter((r:Row)=>r.work_id===workId).slice(from,to+1),error:null}}};return query}}}
