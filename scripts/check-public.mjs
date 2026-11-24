import fs from 'node:fs/promises';
import path from 'node:path';
const ignored=new Set(['node_modules','.git','dist','work']);
const checks=[[/https?:\/\/[\w-]+\.supabase\.co/g,'production database URL'],[/sb_(?:publishable|secret)_[A-Za-z0-9_-]+/g,'database credential'],[/gh[pousr]_[A-Za-z0-9_]{20,}/g,'GitHub credential'],[/xkeysib-[A-Za-z0-9-]+/g,'email credential'],[/[A-Za-z0-9._%+-]+@gmail\.com/gi,'personal email'],[/-----BEGIN (?:RSA |EC )?PRIVATE KEY-----/g,'private key']];
let count=0;const failures=[];
async function scan(dir){for(const e of await fs.readdir(dir,{withFileTypes:true})){if(ignored.has(e.name))continue;const p=path.join(dir,e.name);if(e.isDirectory())await scan(p);else if(e.isFile()&&/\.(?:tsx?|mjs|mts|css|html|json|md|ya?ml|svg)$/.test(e.name)&&!p.endsWith('check-public.mjs')){count++;const text=await fs.readFile(p,'utf8');for(const [pattern,label]of checks){pattern.lastIndex=0;if(pattern.test(text))failures.push(`${p}: ${label}`)}}}}
await scan('.');if(failures.length)throw Error('Public package check failed:\n'+failures.join('\n'));console.log(`${count} public text files checked; no production URLs, credentials or personal emails matched.`);
