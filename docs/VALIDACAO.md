# Verificação da demonstração

- TypeScript e build Vite.
- Cinco testes de cálculo diário: soma por data, escopo, metas datadas, edição/exclusão imutáveis e calendário de São Paulo.
- Navegação nas oito páginas em 1440, 390 e 320 pixels.
- Apresentação em 1440, 768, 390 e 320 pixels.
- Criação, edição e exclusão simuladas com atualização do gráfico.
- Excel baixado e lido com as cinco abas esperadas.
- Navegação móvel e rolagem dos componentes.
- Capturas geradas a partir dos dados fictícios.
- Nenhuma requisição externa na navegação e nas simulações da demo.
- Verificação de padrões de credenciais, URLs de produção e e-mails pessoais no pacote público.

Os testes de navegador usam Chromium e Playwright na estação de desenvolvimento. O pacote público disponibiliza os testes de cálculo por `npm test` e a checagem por `npm run check:public`.
