# Auditoria e correcao de hotspots em SVG

Data: 2026-05-17  
Escopo: correcao cirurgica de alinhamento, clique e responsividade dos hotspots dos SVGs da plataforma 01-Infecto.

## 1. Resumo do problema

Os SVGs estavam presentes e funcionais, mas os hotspots eram renderizados como uma camada HTML posicionada por porcentagem. Em varias telas, o ponto clicavel nao ficava exatamente sobre o elemento visual que explicava, especialmente em diagramas densos, mobile e SVGs com familias visuais diferentes.

O problema afetava a leitura visual: o aluno podia ver um hotspot em area vazia, perto de outro conceito ou deslocado em relacao ao vaso, corpo, orgao, ciclo, fluxo, laboratorio, vetor, rim, figado, baco, macrofago ou prova do laco.

## 2. Causa raiz encontrada

1. A camada `.hotspot-layer` estava acoplada ao wrapper geral do card, que tambem continha o feedback textual. Assim, as coordenadas em porcentagem eram calculadas contra uma area maior que o SVG.
2. O SVG usava escala responsiva com `min-height`, o que podia criar diferenca entre o retangulo visual e a camada de clique.
3. O gerador `layoutPoints()` reaproveitava coordenadas por indice para familias visuais diferentes, sem ancorar semanticamente labels como `rim`, `figado`, `macrofago`, `Aedes`, `hemoconcentracao`, `tubulopatia`, `manguito` ou `grupo C`.
4. Algumas familias visuais nao tinham cena propria e caiam em visual generico, o que ampliava a sensacao de hotspot solto.
5. Em mobile, o tamanho do ponto interativo era grande para SVGs densos, aumentando risco de sobreposicao.

## 3. Arquivos alterados

| Arquivo | Alteracao |
| --- | --- |
| `js/pages.js` | Reancoragem semantica de hotspots por familia visual, novas cenas SVG especificas, stage unico para SVG + layer, deconflito responsivo de pontos e metadados de label/zone. |
| `css/components.css` | Stage responsivo 1120x520, SVG absoluto dentro do stage, camada de hotspot presa ao stage, ajuste de tamanho/touch dos pontos em desktop/mobile. |
| `docs/auditoria-hotspots-svg.md` | Documentacao formal da auditoria, correcao e validacao. |

Nenhum arquivo de conteudo medico, rota, PWA, service worker, manifest, cache ou deploy foi alterado nesta correcao.

## 4. Estrategia de correcao

- A camada de hotspots passou a ficar dentro de `.svg-stage`, que representa somente o retangulo real do SVG.
- O SVG passou a ocupar `100%` do stage com `preserveAspectRatio="xMidYMid meet"` e proporcao fixa `1120 / 520`.
- As coordenadas deixaram de depender apenas do indice e passaram por mapeamento semantico conforme familia visual e label.
- Foram revisadas familias como arvore diagnostica, ciclo, imunidade, vaso/extravasamento, linha do tempo, corpo/sistemas, ladder, choque, laboratorio, prova do laco, fluxo, orgaos, balanca diagnostica, mapa epidemiologico, macrofago e mapa mental.
- Hotspots proximos dentro do mesmo alvo receberam espalhamento local e deconflito para evitar sobreposicao, mantendo o ponto ancorado no conceito.
- O tamanho visual dos pontos foi ajustado para preservar click/touch sem cobrir conceitos vizinhos no mobile.

## 5. Familias de SVG revisadas

| Familia | Exemplo de ancoragem revisada |
| --- | --- |
| `tree` | bifurcacoes diagnosticas, erro de alta, grupo C, ramos visceral/tegumentar |
| `cycle` | vetor, reservatorio, humano, ambiente, Aedes, mosquito-palha, agua/lixo/urina |
| `immune` | virus, sorotipo, anticorpo, imunofacilitacao, celula T, macrofago |
| `vessel` | vaso, hemacias, plasma fora do vaso, hemoconcentracao, choque |
| `timeline` | dia/fase, rash, prurido, defervescencia, febre arrastada |
| `body` | dor abdominal, mucosa, letargia, hipotensao, hepatomegalia, sufusao |
| `ladder` | hierarquia de alarme, grupo B/C/D, Faget, gravidade |
| `shock` | pressao, pulso, TEC, sangramento, disfuncao organica |
| `lab` | NS1/IgM/IgG, AST/ALT, FA/GGT, BD/BI, creatinina + K, CPK |
| `arm` | manguito, quadrado, tempo e petequias da prova do laco |
| `flow` | etapas de classificacao, hidratacao, tratamento e conduta |
| `organ` | figado, rim, pulmao, baco, medula, tecido alvo |
| `balance` | comparacao de hipoteses e diferenciais |
| `map` | Crato/Ceara, endemia, urbanizacao e risco epidemiologico |
| `macrophage` | macrofago, amastigota, sistema reticuloendotelial, medula, baco |
| `mental`/`radar` | revisao integradora, simuladores finais e mapa global |

## 6. Paginas auditadas e corrigidas

Foram auditadas todas as 40 paginas principais, alem dos SVGs globais da `home` e de `mapa-global`. O simulador global, revisao global e matriz global tambem foram navegados; nao possuem SVG com hotspot nesta auditoria.

Hotspots unicos auditados: 318  
Hotspots das paginas principais corrigidos/reancorados: 296  
Hotspots globais auditados/reancorados pelo novo stage: 22  
Renderizacoes validadas: 168  
Cliques reais validados: 1.272

## 7. Exemplos de hotspots corrigidos

- `den-04`: hemoconcentracao, plasma fora do vaso e choque foram ancorados no vaso/terceiro espaco.
- `den-06`: dor abdominal, mucosa, hipotensao e hepatomegalia foram reposicionados sobre regioes corporais correspondentes.
- `den-10`: prova do laco foi ancorada em manguito, quadrado/area de contagem e petequias.
- `feb-04`: vetor, macaco, humano, ciclo silvestre e ciclo urbano foram reposicionados no ciclo epidemiologico.
- `feb-10`: rim, pulmao, hemoptise/Weil e IRA foram ancorados no painel orgao-sistema.
- `feb-11`: creatinina + K baixo, tubulopatia, BD, FA/GGT e CPK foram ancorados no painel laboratorial correto.
- `lei-06`: mosquito-palha, cao, raposa/reservatorio e ambiente foram ancorados no ciclo de transmissao.
- `lei-07`: macrofago, sistema reticuloendotelial, baco e medula foram ancorados no mapa celular/sistemico.
- `lei-10`: amastigotas, medula, baco e aspirado foram ancorados no painel de orgaos/diagnostico.

## 8. Validacao executada

Ambiente local: `http://127.0.0.1:4174`  
Navegador: Chromium via Playwright  
Viewports: desktop `1366x900` e mobile `390x844`  
Temas: light e dark

Validacoes realizadas:

- 45 rotas visitadas em desktop/light, desktop/dark, mobile/light e mobile/dark.
- 42 rotas com SVG/hotspot auditadas.
- 1.272 cliques reais no centro visual dos hotspots.
- Feedback de hotspot validado apos cada clique.
- Ausencia de overflow horizontal relevante.
- Console sem erros relevantes.
- Dashboard, mapa global, simulador global, revisao global e matriz global navegados sem quebra.

## 9. Confirmacoes de escopo

- Conteudo medico: nao alterado.
- Textos/roteiros: nao alterados.
- Rotas: nao alteradas.
- Dashboard: preservado.
- Simulador global: preservado.
- Quizzes/revisao ativa/cards: preservados.
- Identidade visual global: preservada.
- Dark mode: validado.
- PWA/service worker/manifest/cache: nao alterados.
- Deploy/GitHub Pages: nao alterado.

## 10. Pendencias

Sem pendencias tecnicas identificadas na validacao local. O diretorio local nao esta versionado como repositorio Git, portanto a auditoria de diffs foi feita por arquivos inspecionados e testes locais.

## 11. Matriz por pagina

| Modulo | Pagina | Titulo | Tipo de SVG | Hotspots | Problema encontrado | Correcao aplicada | Desktop | Mobile | Final |
| --- | --- | --- | --- | ---: | --- | --- | --- | --- | --- |
| Global | home | Mapa das Sindromes Febris | mental/global | 11 | Layer dependia do wrapper e podia deslocar com escala | Stage SVG unico + deconflito responsivo | OK | OK | OK |
| Global | mapa-global | Mapa Mental Global | mental/global | 11 | Layer dependia do wrapper e podia deslocar com escala | Stage SVG unico + deconflito responsivo | OK | OK | OK |
| Dengue | den-01 | Sindrome febril sem foco e caso-guia | tree | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Dengue | den-02 | Arboviroses, Aedes aegypti e contexto epidemiologico | cycle | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Dengue | den-03 | Virus da dengue, sorotipos e imunofacilitacao | immune | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Dengue | den-04 | Extravasamento plasmatico: o fenomeno central | vessel | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Dengue | den-05 | Quadro clinico e cronologia | timeline | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Dengue | den-06 | Sinais de alarme: reconhecimento clinico | body | 8 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Dengue | den-07 | Sinais de alarme: pegadinhas e hierarquia | ladder | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Dengue | den-08 | Dengue grave: grupo D | shock | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Dengue | den-09 | Diagnostico temporal: NS1, IgM e IgG | lab | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Dengue | den-10 | Prova do laco | arm | 8 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Dengue | den-11 | Classificacao A/B/C/D | flow | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Dengue | den-12 | Hidratacao, manejo e medicamentos | flow | 8 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Dengue | den-13 | Dengue x Chikungunya x Zika | radar | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Dengue | den-14 | Simulador final e revisao ativa da dengue | mental | 8 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Febre icterica | feb-01 | Caso-guia e entrada na sindrome febril icterica | tree | 9 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Febre icterica | feb-02 | Sindrome febril icterica e diferencial inicial | lab | 8 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Febre icterica | feb-03 | Febre amarela: agente, Flavivirus e epidemiologia | immune | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Febre icterica | feb-04 | Ciclos da febre amarela: silvestre versus urbano | cycle | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Febre icterica | feb-05 | Febre amarela: formas clinicas e sinal de Faget | ladder | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Febre icterica | feb-06 | Febre amarela grave: laboratorio, diagnostico e suporte | organ | 8 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Febre icterica | feb-07 | Por que o caso nao fecha bem com febre amarela | balance | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Febre icterica | feb-08 | Leptospirose: agente, reservatorio e transmissao | cycle | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Febre icterica | feb-09 | Leptospirose anicterica: sufusao e panturrilha | body | 6 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Febre icterica | feb-10 | Sindrome de Weil: leptospirose ictero-hemorragica | organ | 8 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Febre icterica | feb-11 | Laboratorio da leptospirose: colestase, tubulopatia e CPK | lab | 8 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Febre icterica | feb-12 | Diagnostico, microaglutinacao, tratamento e fechamento do caso | flow | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Febre icterica | feb-13 | Comparador final, simulador integrador e revisao ativa | mental | 8 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Leishmaniose | lei-01 | Caso-guia: febre arrastada, baco gigante e pancitopenia | organ | 9 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Leishmaniose | lei-02 | Sindrome febril arrastada com esplenomegalia | timeline | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Leishmaniose | lei-03 | A armadilha hematologica: cancer, mieloma ou infeccao cronica? | balance | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Leishmaniose | lei-04 | Epidemiologia: por que Crato/Ceara importa? | map | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Leishmaniose | lei-05 | Nome, agente etiologico e diferenca entre especies | tree | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Leishmaniose | lei-06 | Vetor e reservatorios: mosquito-palha, raposa e cao | cycle | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Leishmaniose | lei-07 | Fisiopatologia: a doenca do macrofago | macrophage | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Leishmaniose | lei-08 | Imunidade celular versus humoral | immune | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Leishmaniose | lei-09 | Reacao de Montenegro e paradoxos da imunidade celular | lab | 6 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Leishmaniose | lei-10 | Diagnostico parasitologico: amastigotas, medula e baco | organ | 8 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Leishmaniose | lei-11 | Sorologias, imunofluorescencia, rK39 e imunossupressao | lab | 7 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Leishmaniose | lei-12 | Tratamento: antimonial pentavalente versus anfotericina B lipossomal | flow | 10 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
| Leishmaniose | lei-13 | Fechamento integrador, simulador final e revisao ativa | mental | 8 | Overlay/desenho e coordenada semantica antes pouco aderentes ao alvo | Reancoragem semantica no stage SVG + deconflito responsivo | OK | OK | OK |
