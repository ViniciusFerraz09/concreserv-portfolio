# CONCRESERV · Gestão de obras

**Estudo de caso e demonstração interativa · Portfólio de Vinícius Ferraz**

Uma aplicação web para acompanhar a fabricação de pré-moldados e a montagem em campo: planejamento, produção diária, qualidade, estoque, efetivo e produtividade.

> **Esta é uma versão pública de portfólio.** Todos os números, obras, equipes e registros da demonstração são fictícios. O pacote não contém banco operacional, contas de usuários, configurações de e-mail ou credenciais da empresa.

![Dashboard com dados fictícios](public/screenshots/dashboard.png)

## Experimente

- **Apresentação pública:** https://concreserv-portfolio.vercel.app
- **Demonstração sem login:** https://concreserv-portfolio.vercel.app/demo/dashboard

A página inicial apresenta o projeto. Em `/demo/dashboard`, você pode navegar sem cadastro, filtrar consultas, comparar metas e realizado, simular lançamentos completos com duas imagens, consultar usuários fictícios e exportar Excel e PDF. As simulações ficam apenas na memória da página e são descartadas ao recarregar.

- **Perfil:** [github.com/ViniciusFerraz09](https://github.com/ViniciusFerraz09)
- **Código:** [ViniciusFerraz09/concreserv-portfolio](https://github.com/ViniciusFerraz09/concreserv-portfolio). Este repositório contém a demonstração e a apresentação pública, com histórico próprio.

## O problema e a proposta

Quantidade produzida e quantidade liberada para montagem representam etapas diferentes. O sistema organiza essas informações por obra, atividade, tipo de peça, data e equipe. Placas de 6 m e 3 m e pilares convencionais e especiais mantêm indicadores próprios; unidades distintas não são somadas como um único indicador de produção.

O objetivo é permitir comparar o planejamento com a execução e consultar os registros que explicam o resultado. Não são divulgadas métricas de impacto comercial ou resultados reais de obras neste portfólio.

## Fluxos demonstrados

| Área | O que explorar |
| --- | --- |
| Dashboard | Meta × realizado, evolução diária, avanço, alertas e detalhes por data |
| Produção | Placas e pilares, armação, concretagem e desforma |
| Campo | Escavação, instalação, fixação, grauteamento e montagem |
| Peças e estoque | Qualidade, estoque e movimentações em telas separadas |
| Controle | Cards de obras, criação e exclusão simuladas, usuários e acessos fictícios |
| Planejamento | Meta diária, quantidade prevista, acumulado e saldo por atividade |
| Equipes | Homem-hora e produtividade por atividade |
| Relatórios | Exportação de consultas em um Excel com cinco abas |

## Interface

![Produção demonstrativa](public/screenshots/production.png)

![Qualidade e estoque demonstrativos](public/screenshots/stock.png)

## Tecnologias e limites desta versão

| Camada | Sistema original | Demonstração pública |
| --- | --- | --- |
| Interface | React, TypeScript, Vite e Lucide | React, TypeScript, Vite e Lucide |
| Dados | PostgreSQL e Supabase | Dados fictícios gerados localmente |
| Acesso | Autenticação e permissões por obra | Sem login e sem acesso ao banco original |
| E-mails | Supabase Auth com SMTP Brevo | Nenhum envio de e-mail |
| Imagens | Armazenamento de anexos no sistema original | Duas imagens por lançamento, câmera/anexos e galeria apenas em memória |
| Publicação | Vercel | Aplicação estática em projeto separado |
| Excel | SheetJS | SheetJS, com exemplos fictícios |

A interface foi alinhada ao snapshot publicado do sistema original, incluindo as seis categorias do menu, suas abas e os formulários completos. A demonstração usa uma conta administrativa fictícia e simula vínculos de usuários e mudanças de perfil localmente. Cadastro real, confirmação e recuperação por e-mail não são executados. Fotos escolhidas pelo visitante ficam em memória, sem upload para a empresa. Há duas ilustrações identificadas como exemplos para testar a galeria.

## Regras de produção diária

O gráfico usa a **data de execução** do lançamento, agrupa por obra e atividade e soma lançamentos do mesmo dia. Inclui dias sem produção nos períodos de 7, 15, 30 dias ou em datas personalizadas. Metas usam o histórico datado do planejamento; quando necessário, a meta registrada nos lançamentos. Ausência de informação não vira uma meta inventada.

A navegação e as tabelas se adaptam a computadores e celulares. Períodos longos e tabelas largas têm rolagem dentro do componente, com indicação acessível.

## Minha participação

**Vinícius Ferraz:** concepção do produto, levantamento das necessidades da operação, organização dos fluxos, definição e revisão da interface, acompanhamento da evolução e validação funcional.

A implementação contou com apoio de inteligência artificial na programação e nas revisões técnicas. Este portfólio explicita essa colaboração, sem atribuir autoria individual a todo o código ou apresentar a demonstração como um produto independente do sistema Concreserv.

## Executar localmente

Requer Node.js 22 ou 24 e npm.

```sh
npm ci
npm run dev
```

Abra o endereço informado pelo Vite. A apresentação está em `/` e a demonstração em `/demo/dashboard`.

```sh
npm test
npm run check:public
npm run build
npm run preview
```

Não é necessário arquivo `.env`, conta Supabase ou chave de API. O `vercel.json` inclui o redirecionamento das rotas da demonstração e cabeçalhos para a hospedagem estática.

## Estrutura

```text
src/Landing.tsx                Apresentação do estudo de caso
src/demoBootstrap.mjs          Inicialização da interface atual
src/recovered/                Snapshot público da interface, adaptado para a demo
src/localStore.mjs             Consultas e operações somente em memória
src/localClient.mjs            Conta, exemplos e fotos locais
src/demoData.ts                Geração dos dados fictícios e leitor local
src/Dashboard.tsx              Componentes de acompanhamento
src/dailyProduction.mjs        Agrupamento e metas por data
src/DailyProductionChart.mjs   Gráfico com períodos e atualização
src/reporting.ts              Exportação Excel em cinco abas
public/screenshots/           Capturas apenas da demonstração
scripts/check-public.mjs       Checagem de padrões de dados privados
```

A aplicação pública não importa o cliente Supabase e não se conecta a serviços de autenticação. O banco e o histórico operacional de produção não fazem parte deste repositório. O módulo `src/recovered/` preserva a interface JavaScript publicada; não representa a recuperação de todos os fontes originais em TypeScript. Os componentes TypeScript legíveis e as funções de cálculo são mantidos como referência, enquanto o bootstrap da demo usa o snapshot da interface atual.

A identidade visual Concreserv é utilizada na apresentação deste projeto. A publicação do código não concede direitos sobre a marca ou os arquivos institucionais.

## Fidelidade ao sistema publicado

A demo usa como referência a interface do deployment `dpl_6sr59xbzzAPS7Wfk2pofuv4mQYAH` do projeto Concreserv. Não recria as páginas por aproximação. Os módulos públicos de interface e seus estilos foram importados com as seguintes adaptações limitadas:

- Cliente de dados substituído por `localStore.mjs`, sem credenciais ou conexão ao banco.
- Rotas movidas para `/demo/`.
- Conta e usuários fictícios, com aviso permanente de demonstração.
- URLs e valores da conexão original removidos.
- Imagens de exemplo opcionais e identificadas como ilustrações.
- Fontes hospedadas localmente, com suas licenças em `public/fonts/`.

O utilitário `scripts/import-production-ui.py --source CAMINHO_DOS_ASSETS` documenta a adaptação. Não é necessário executá-lo para instalar ou compilar este repositório.
