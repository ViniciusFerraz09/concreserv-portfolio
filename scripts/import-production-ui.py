"""Import the public UI snapshot; remove its live connection and adapt routing.
The private application's database, credentials and runtime data are not imported.
"""
from pathlib import Path
import re,shutil,hashlib,json,argparse
parser=argparse.ArgumentParser();parser.add_argument('--source',required=True,help='Directory containing the verified public UI assets');args=parser.parse_args();base=Path(args.source)
root=Path('src/recovered');root.mkdir(exist_ok=True)
for path in base.iterdir():
 if path.suffix not in ['.js','.css']:continue
 text=path.read_text().replace('./app-5b97603910dc.js','./app-chart-original-v2.js')
 if path.name=='app-chart-original-v2.js':
  start=text.index('const Pe = tv(');end=text.index('const si = () =>',start)
  text=text[:start]+"const Pe = createDemoClient();\nfunction S_(){return Pe;}\n"+text[end:]
  text="import {createDemoClient} from '../localClient.mjs';\n"+text
  text=re.sub(r'const __vite__mapDeps=.*?;\n','const __vite__mapDeps=()=>[];\n',text,count=1)
  text=text.replace('/paineladm','/demo').replace('/dashboard','/demo/consulta').replace('/login','/demo/entrar').replace('/cadastro','/demo/cadastro').replace('/redefinir-senha','/demo/redefinir-senha')
  # A global string replacement above also touches the admin dashboard suffix;
  # normalize that path back to /demo/dashboard, preserving the original routing.
  text=text.replace('/demo/demo/consulta','/demo/dashboard')
  text=text.replace('"Dados conectados"','"Dados demonstrativos"')
  text=text.replace('"Gestão e acompanhamento"','"Dados fictícios · simulação local"')
 text=re.sub(r'https://[a-z0-9-]+\.supabase\.co','https://local-demo.invalid',text)
 text=re.sub(r'sb_publishable_[A-Za-z0-9_-]+','local-demo-no-key',text)
 text=re.sub(r'[A-Za-z0-9._%+-]+@gmail\.com','contato@example.invalid',text,flags=re.I)
 if path.name=='daily-photos-chart-original-v2.js':
  marker='children: "Tirar foto",\n          }),\n        ],'
  replacement='children: "Tirar foto",\n          }),\n          ui.jsx("button", {type:"button",className:"button secondary",disabled:blocked||photos.length>0,onClick:async()=>{setBusy(true);onBusy(true);setError("");try{const additions=await Promise.all([1,2].map(async index=>{const response=await fetch(`/demo-photos/example-${index}.png`);if(!response.ok)throw Error();const file=await response.blob(),preview=URL.createObjectURL(file);urls.current.add(preview);return {key:crypto.randomUUID(),file,preview,originalName:`Exemplo fictício ${index}`}}));if(active.current)onChange(additions)}catch{setError("Não foi possível abrir os exemplos.")}finally{setBusy(false);onBusy(false)}},children:"Usar imagens de exemplo"}),\n        ],'
  assert marker in text;text=text.replace(marker,replacement)
 (root/path.name).write_text(text)
# Fonts, layout, navigation, dialogs and photo styles are the same published CSS.
(root/'snapshot.json').write_text(json.dumps({'referenceDeployment':'dpl_6sr59xbzzAPS7Wfk2pofuv4mQYAH','adaptations':['Local data client','Demo routes','Synthetic account','Demo notices','Remove connection values'],'originalUiSha256':hashlib.sha256((base/'app-chart-original-v2.js').read_bytes()).hexdigest()},indent=2)+'\n')
