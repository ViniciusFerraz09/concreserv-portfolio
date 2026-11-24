import {demoData} from './demoData.ts';
import {createLocalStore} from './localStore.mjs';
const seed=demoData();
// These are labelled illustrations, never photographs of an operational work.
seed.entry_photos=seed.entries.filter(e=>e.date===seed.entries.map(x=>x.date).sort().at(-1)).slice(0,3).flatMap(e=>[1,2].map(position=>({id:e.id+'-photo-'+position,work_id:e.work_id,entry_id:e.id,position,object_path:'illustration-'+position})));
const client=createLocalStore(seed);
client.seedPhoto('illustration-1','/demo-photos/example-1.png');client.seedPhoto('illustration-2','/demo-photos/example-2.png');
export const createDemoClient=()=>client;
