# QA — Prompt 3 Refinamento Premium

Atualizado em 2026-05-17.

## Escopo

- Rotas totais preservadas: 45.
- Páginas principais preservadas: 40.
- Módulos preservados: Dengue, Febre Amarela x Leptospirose, Leishmaniose Visceral / Calazar.
- Dashboard global, simulador global, revisão global e matriz global preservados.
- Arquivos PWA/service worker/manifest/cache/deploy: não alterados.

## Arquivos alterados

- js/pages.js: camada Prompt 3 de perfis cognitivos, leitura guiada contínua, SVGs semânticos e hotspots com feedback clínico.
- css/components.css: estilos premium para leitura longa, visualizações, síntese de prova, responsividade e hotspots.
- css/theme-motion.css: travas responsivas para impedir overflow horizontal herdado do layout flex com sidebar fixa.

## Arquivos criados

- docs/matriz-variedade-prompt3.md
- docs/auditoria-svg-hotspots-prompt3.md
- docs/auditoria-editorial-prompt3.md
- docs/qa-prompt3-refinamento-premium.md

## Validações planejadas/finais

| Critério | Status | Evidência |
|---|---|---|
| 45 rotas preservadas | aprovado | Smoke test no navegador: 45/45 rotas carregaram com H1 e sem erro crítico |
| 40 páginas principais preservadas | aprovado | 40/40 páginas `den-*`, `feb-*`, `lei-*` mantêm leitura Prompt 3, SVG e hotspots |
| Conteúdo médico não removido | aprovado | `page.core`, tabelas, interações, quizzes e links continuam consumidos pelo renderizador |
| Leitura guiada substancial | implementado | guidedReadingHtml() cria texto contínuo por página |
| SVG genérico reduzido | implementado | hotspotSvg() usa svgScene() por família visual |
| Hotspots refinados | implementado | layoutPoints() reposiciona hotspots e hotspotTeaching() explica consequência |
| Interatividade estratégica | implementado | interactionHtml() preservado e contextualizado depois da leitura |
| Dashboard preservado | aprovado | Rotas `home`, `mapa-global`, `simulador-global`, `revisao-global`, `matriz-global` carregaram no smoke |
| PWA/SW/manifest/cache intactos | implementado | nenhum arquivo desses foi editado |
| Console sem erro crítico | aprovado | Browser logs `error/warn`: vazio após smoke final |
| Mobile sem overflow | aprovado | Viewport 390 x 844 em `#feb-11`: `docScroll` 382 = `docClient` 382 |
| Metalinguagem proibida na interface | aprovado | Busca em `index.html`, `js/` e `css/`: sem ocorrências |

## Riscos residuais antes do browser final

- O projeto não está versionado em Git, então não há diff formal de commit; a conferência foi feita por arquivos alterados e smoke test local.
- Os documentos internos em `docs/fontes-extraidas` preservam termos como aula/professor/roteiro por serem fontes e QA; a interface do estudante (`index.html`, `js/`, `css/`) ficou limpa.
