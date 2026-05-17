# Recentramento editorial, didático e visual-cirúrgico

## 1. Resumo da intervenção

Intervenção realizada sobre a plataforma existente `01-Infecto`, sem reconstrução, sem troca de template global e sem alteração de rotas. O objetivo foi recentrar cada página principal como aula médica premium: texto clínico robusto primeiro, raciocínio explícito, diagnóstico diferencial, laboratório/conduta quando aplicável e interatividade como complemento cognitivo.

O render comum das páginas foi ampliado para transformar os dados já existentes em uma leitura clínica mais substancial, com seção `Raciocínio clínico guiado`, ponto de virada, armadilha de prova, consequência prática e preservação explícita dos marcadores do roteiro. SVGs, hotspots, quizzes, flashcards, simuladores e links cruzados foram preservados.

## 2. Arquivos alterados

| Arquivo | Tipo de intervenção |
|---|---|
| `js/pages.js` | Recentramento textual do render das páginas; ampliação da leitura guiada; redução de metalinguagem de widget; escaping em tabelas/listas; reforço da função pedagógica de SVGs/interações. |
| `js/data.js` | Incorporação de minúcias dos roteiros em pontos específicos: prova do laço, hidratação oral, pulmão-rim/leptospirose, antibiótico tardio, amastigota/promastigota e QT no tratamento do calazar. |
| `css/components.css` | Estilo da nova seção clínica: kicker, subtítulos, ponto de virada e foco visível dos hotspots. |
| `docs/recentramento-editorial-didatico.md` | Documentação formal da intervenção, matriz página a página e validação. |

## 3. Páginas revisadas

Foram revisadas as 40 páginas principais:

- Dengue: `den-01` a `den-14`.
- Febre Amarela x Leptospirose: `feb-01` a `feb-13`.
- Leishmaniose Visceral / Calazar: `lei-01` a `lei-13`.

Também foram validadas as 5 rotas globais: `home`, `mapa-global`, `simulador-global`, `revisao-global`, `matriz-global`.

## 4. Páginas com texto ampliado

Todas as páginas principais receberam leitura clínica ampliada por render:

- abertura contextual por módulo;
- orientação cognitiva própria conforme ritmo da página;
- parágrafos contínuos derivados dos marcadores centrais;
- ponto de virada explícito;
- consequência prática;
- narrativa de tabela quando existir;
- diagnóstico diferencial a partir do bloco `Não confunda`;
- seção recolhível com conteúdo do roteiro preservado.

## 5. Conteúdos dos roteiros incorporados

### Dengue

Foram preservados e reforçados: febre sem foco, caso-guia do paciente jovem, falso conforto do bom estado geral, dor retro-orbital, dor ao movimento ocular, mialgia, prostração, anorexia, cefaleia, prurido, rash tardio, petéquias, leucopenia, linfocitose relativa, plaquetopenia, diferença entre plaquetopenia e gravidade, hematócrito progressivo, extravasamento plasmático, defervescência, sinais de alarme, classificação A/B/C/D, prova do laço, hidratação oral/venosa, AAS crônico, chikungunya, zika, Aedes aegypti, Flavivírus, DENV-1 a DENV-4, sorotipo 5 como detalhe, imunofacilitação e teoria de Halstead.

Minúcias incorporadas nesta rodada: média aritmética simples da prova do laço `(PAS + PAD) / 2`, hidratação oral executável com alerta de que álcool não conta e reforço da frase mental sobre plaqueta baixa versus hematócrito subindo.

### Febre Amarela x Leptospirose

Foram preservados e reforçados: síndrome febril ictérica como gaveta sindrômica, caso de limpeza urbana/lixo/esgoto/água contaminada, sufusão conjuntival, icterícia, diurese reduzida, hemoptise, UTI, leucocitose com desvio, plaquetopenia, creatinina elevada, potássio baixo/inapropriadamente normal, tubulopatia, bilirrubina direta, FA/GGT elevadas, transaminases não muito altas na leptospirose, febre amarela hepatocelular grave com AST/ALT muito elevadas, AST > ALT, ciclos silvestre/urbano, macacos como sentinelas, sinal de Faget, Leptospira como espiroqueta, rato/urina/enchente, síndrome de Weil, síndrome pulmão-rim, hemorragia alveolar, microaglutinação, penicilina cristalina EV, suporte intensivo e diálise precoce quando indicada.

Minúcias incorporadas nesta rodada: diferenciais conceituais de pulmão-rim, reforço de antibiótico mesmo em suspeita tardia grave e separação de penicilina cristalina versus benzatina.

### Leishmaniose Visceral / Calazar

Foram preservados e reforçados: febre arrastada, caso de Crato/Ceará, meses de evolução, mal-estar, anorexia, perda ponderal, baço de grande monta, fígado palpável, pancitopenia, sistema reticuloendotelial, macrófagos infectados, fígado/baço/medula como órgãos-alvo, albumina baixa, globulina alta, inversão A/G, hipergamaglobulinemia policlonal, diferencial com neoplasia hematológica, mieloma/gamopatia monoclonal, Leishmania chagasi/infantum, Lutzomyia longipalpis, mosquito-palha, raposa, cão, urbanização/periurbanização, amastigotas, aspirado de medula, punção esplênica, Montenegro, sorologias, antimonial, anfotericina B lipossomal e Gs/Is.

Minúcias incorporadas nesta rodada: distinção promastigota versus amastigota e reforço de QT com macrolídeos, hidroxicloroquina e distúrbios eletrolíticos no raciocínio de segurança do Glucantime.

## 6. SVGs, hotspots e interatividade

| Item | Status |
|---|---|
| SVGs autorais existentes | Preservados. |
| SVGs substituídos | Nenhum. |
| Hotspots existentes | Preservados e validados em amostras críticas. |
| Hotspots corrigidos/ampliados | `den-10`, `den-12`, `feb-10`, `lei-10`, `lei-12` receberam hotspots mais fiéis às minúcias do roteiro. |
| Componentes interativos | Preservados: quizzes, simuladores locais, simulador global, flashcards, revisão ativa, links cruzados. |
| Reposicionamento cognitivo | A leitura clínica agora antecede SVGs/interações; os recursos visuais ficam como reforço, comparação, teste ou sedimentação. |
| Metalinguagem indevida | Reduzida nos textos de apoio, trocando frases sobre "componente interativo" por consequência clínica e de prova. |

## 7. Arquivos sensíveis preservados

Não foram alterados:

- service worker;
- manifest;
- cache;
- configuração de PWA;
- configuração de GitHub Pages/deploy.

Na cópia local revisada não há `sw.js`, `manifest.webmanifest`, `package.json` ou arquivo de cache editável no diretório raiz. Nenhum arquivo PWA foi criado ou modificado.

## 8. Preservações confirmadas

| Elemento | Status |
|---|---|
| Template global | Preservado. |
| Identidade visual global | Preservada. |
| Dark mode | Preservado e validado. |
| Navegação/sidebar/header | Preservados. |
| Rotas | 45 rotas preservadas. |
| Dashboard | Preservado. |
| Simulador global | Preservado e validado. |
| Quizzes | Preservados. |
| Pegadinhas | Preservadas e reforçadas. |
| Revisão ativa | Preservada. |
| Links cruzados | Preservados. |
| Flashcards | Preservados. |
| Hotspots | Preservados. |

## 9. Validação realizada

### Sintaxe

Executado:

```bash
node --check js/pages.js
node --check js/data.js
node --check js/app.js
node --check js/router.js
```

Resultado: sem erros.

### Navegação e browser

Servidor local usado:

```bash
python3 -m http.server 4173
```

Validação Playwright com Chromium:

- 45 rotas verificadas em desktop `1440x1100`;
- 45 rotas verificadas em mobile `390x844`;
- sem console errors;
- sem page errors;
- sem overflow horizontal detectado;
- conteúdo principal presente;
- título principal presente;
- leitura textual robusta nas 40 páginas principais;
- hotspots presentes nas páginas principais;
- clique de hotspot validado em `den-06`, `feb-11`, `lei-10`;
- interações críticas clicadas em amostra;
- dark mode validado em `den-06`;
- screenshots gerados em desktop/mobile para `den-06`, `feb-11`, `lei-10`.

Resultado: aprovado, sem erros e sem warnings na rodada final.

## 10. Pendências

Não há pendência técnica bloqueante identificada nesta rodada.

Pendência opcional futura: se o V1 desejar fidelidade ainda mais literal por frase de transcrição, pode ser feita uma segunda rodada editorial manual página por página, expandindo `core` de cada página com trechos adicionais dos roteiros. A arquitetura atual já permite essa expansão sem mexer no template.

## 11. Matriz página a página

| Página | Módulo | Conceito central | Pergunta clínica | Didática dominante | Raciocínio clínico dominante | Erro diagnóstico prevenido | Texto explicativo adicionado/melhorado | Recurso visual | Interação complementar | Hotspot corrigido/validado | Conteúdo do roteiro representado | Validação realizada |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `den-01` | Dengue | Febre sem foco e caso-guia | Quando febre solta exige arbovirose e triagem? | Caso clínico progressivo | Suspeita + classificação de risco | Alta por bom estado geral | Raciocínio guiado com grupo C e dor abdominal | Árvore febre sem foco | Decisão de alta | Validado | Caso jovem, dor retro-orbital, plaquetas, dor abdominal | Desktop/mobile/console |
| `den-02` | Dengue | Arbovirose e Aedes aegypti | Quando febre sem foco vira arbovirose? | Mapa epidemiológico | Vetor, agente, incubação | Confundir vetor com agente | Contexto epidemiológico como probabilidade, não gravidade | Ciclo urbano | Classificador epidemiológico | Validado | Aedes aegypti, incubação, viajante | Desktop/mobile/console |
| `den-03` | Dengue | Sorotipos e imunofacilitação | Por que dengue oito vezes não fecha? | Mapa imunológico | Sorotipo e resposta imune | Confundir sorotipo com teste | Halstead e infecção sequencial explicadas | Mapa DENV | Quiz conceitual | Validado | DENV-1 a DENV-4, sorotipo 5, Halstead | Desktop/mobile/console |
| `den-04` | Dengue | Extravasamento plasmático | Por que Ht progressivo pesa mais? | Fisiopatologia guiada | Plasma sai do vaso e Ht sobe | Plaqueta isolada como alarme | Hemoconcentração e terceiro espaço reforçados | Vaso/terceiro espaço | Slider Ht | Validado | Extravasamento, Ht, plaquetas | Desktop/mobile/console |
| `den-05` | Dengue | Cronologia e defervescência | Por que queda da febre pode ser perigo? | Linha do tempo | Dia de doença muda risco | Defervescência como cura | Fase crítica pós-defervescência reforçada | Timeline | Linha temporal | Validado | Rash 3-6 dias, vômitos, febre até 7 dias | Desktop/mobile/console |
| `den-06` | Dengue | Sinais de alarme | Quais sinais impedem alta? | Checklist de gravidade | Sinal de alarme reclassifica | Bom estado geral apagando alarme | Explicação textual robusta antes do corpo/SVG | Corpo/sistemas | Classificador | Validado com clique | Dor abdominal, vômitos, mucosa, Ht, hepatomegalia | Desktop/mobile/console/hotspot |
| `den-07` | Dengue | Hierarquia de sangramento | Como separar pele, mucosa e grave? | Escada comparativa | Local/repercussão do sangramento | Petéquias = mucosa = grave | Sangramento cutâneo x mucoso x grave reforçado | Escada pele-mucosa-grave | Mini decisão | Validado | Prova do laço, mucosa, grupo B/C/D | Desktop/mobile/console |
| `den-08` | Dengue | Grupo D | Quando alarme vira gravidade? | Decisão crítica | Perfusão e choque | PA 100x90 como aceitável | Pressão convergente e hipoperfusão explicitadas | Mapa de choque | Grupo C ou D | Validado | Choque, PA convergente, TEC, pulso fino | Desktop/mobile/console |
| `den-09` | Dengue | Janela diagnóstica | Qual teste pelo dia de doença? | Painel laboratorial temporal | Dia de doença define exame | NS1 = DENV-1 | NS1/IgM/IgG explicados sem substituir manejo | Curvas temporais | Seletor de exame | Validado | NS1, IgM, IgG, PCR | Desktop/mobile/console |
| `den-10` | Dengue | Prova do laço | Quando muda grupo e quando confunde? | Procedimento interpretado | Técnica + interpretação | Usar como confirmação | Fórmula PAS/PAD e limites reforçados | Antebraço/manguito | Calculadora | Corrigido/ampliado | Quadrado 2,5 cm, adulto/criança, grupo B | Desktop/mobile/console |
| `den-11` | Dengue | Classificação A/B/C/D | Como decidir sem plaqueta isolada? | Árvore de decisão | Critério define destino | Parar no diagnóstico | Diferença A/B/C/D textualizada | Árvore A/B/C/D | Simulador A/B/C/D | Validado | Grupo A/B/C/D, risco especial | Desktop/mobile/console |
| `den-12` | Dengue | Hidratação e medicamentos | Como hidratar sem fórmula cega? | Fluxo de conduta | Grupo + reavaliação + velocidade | Hidratação sem reavaliar | Hidratação executável e álcool não conta | Fluxo de manejo | Calculadora | Corrigido/ampliado | Oral/EV, C/D, AAS crônico | Desktop/mobile/console |
| `den-13` | Dengue | Diferenciais arbovirais | Quando dor articular/exantema desloca? | Matriz comparativa | Padrões entre arboviroses | Toda arbovirose = dengue | Dengue x chikungunya x zika reforçado | Radar | Comparador | Validado | Chikungunya, zika, AINE, microcefalia | Desktop/mobile/console |
| `den-14` | Dengue | Fechamento integrador | Atende paciente ou reconhece palavra? | Simulação final | Suspeita + grupo + conduta | Errar grupo final | Síntese de prova e plantão reforçada | Mapa mental | Simulador final | Validado | Classificação, exame, hidratação, retorno | Desktop/mobile/console |
| `feb-01` | Febre ictérica | Caso-guia ictérico | Quando febre deixa de parecer dengue? | Caso clínico progressivo | Exposição + icterícia + rim/pulmão | Ancorar em dengue/febre amarela | Caso de limpeza urbana mais explícito | Árvore febre-icterícia | Pistas progressivas | Validado | Limpeza urbana, icterícia, UTI, hemoptise | Desktop/mobile/console |
| `feb-02` | Febre ictérica | Padrões de icterícia | Hepatocelular, canalicular ou hemolítico? | Painel laboratorial | Frações/enzimas definem eixo | Toda icterícia = febre amarela | Gaveta sindrômica reforçada | Painel lab | Classificador | Validado | BD/BI, FA/GGT, AST/ALT | Desktop/mobile/console |
| `feb-03` | Febre ictérica | Febre amarela e Flavivírus | Por que conversa com dengue? | Conceito viral | Família viral + órgão-alvo | Família viral fecha diagnóstico | Flavivírus sem perder clínica | Mapa imune | Quiz conceitual | Validado | Flavivírus RNA, praga amarela | Desktop/mobile/console |
| `feb-04` | Febre ictérica | Ciclos da febre amarela | Quem transmite e quem sinaliza? | Ciclo epidemiológico | Silvestre x urbano | Culpar macacos | Macaco como sentinela reforçado | Ciclo silvestre/urbano | Hotspots | Validado | Haemagogus/Sabethes, Aedes, ciclo urbano | Desktop/mobile/console |
| `feb-05` | Febre ictérica | Formas clínicas e Faget | Como reconhecer gravidade? | Escada de gravidade | Pulso relativo + intensidade | Faget exclusivo | Faget contextualizado | Escada | Simulador pulso-temperatura | Validado | Faget, leve/moderada/grave | Desktop/mobile/console |
| `feb-06` | Febre ictérica | Febre amarela grave | Quando vira hepatorrenal grave? | Painel fisiopatológico | Lesão hepática + rim + coagulação | Subestimar disfunção | AST/ALT muito altas, AST>ALT e suporte | Fígado-rim | Classificador | Validado | AST/ALT >=2000, oligúria, suporte | Desktop/mobile/console |
| `feb-07` | Febre ictérica | Não fecha febre amarela | Quais dados puxam lepto? | Balança diagnóstica | Sufusão, rim, K baixo | Ancoragem em febre amarela | Leptospirose sobe por conjunto | Balança | Aproxima/afasta | Validado | Sufusão, K baixo, leucocitose | Desktop/mobile/console |
| `feb-08` | Febre ictérica | Transmissão da leptospirose | Por que esgoto pesa? | Mapa epidemiológico | Exposição ocupacional | Procurar mosquito | Rato/urina/enchente como eixo | Ciclo rato-água-humano | Simulador epidemiológico | Validado | Leptospira, roedores, enchente | Desktop/mobile/console |
| `feb-09` | Febre ictérica | Forma anictérica | Que sinais não são conjuntivite? | Leitura corporal | Sufusão + panturrilha | Exigir icterícia | Forma anictérica e meningite asséptica | Corpo | Diferencial | Validado | Sufusão, panturrilha, vasculite | Desktop/mobile/console |
| `feb-10` | Febre ictérica | Síndrome de Weil | Quando vira emergência? | Pulmão-rim | Icterícia + IRA + hemoptise | Hemoptise como detalhe | Diferenciais pulmão-rim acrescentados | Pulmão-rim | Anictérica ou Weil | Corrigido/ampliado | Weil, hemorragia alveolar, UTI | Desktop/mobile/console |
| `feb-11` | Febre ictérica | Laboratório da leptospirose | Por que Cr alta com K baixo? | Painel laboratorial | Tubulopatia + colestase | Esperar hipercalemia | Creatinina/K, BD/FA/GGT e CPK reforçados | Painel lab | Jogo laboratorial | Validado com clique | Tubulopatia, CPK, microaglutinação | Desktop/mobile/console/hotspot |
| `feb-12` | Febre ictérica | Diagnóstico e tratamento | Qual tratamento muda agora? | Fluxo terapêutico | Gravidade define antibiótico/suporte | Benzatina para grave | Antibiótico tardio grave e cristalina reforçados | Fluxo | Escolha terapêutica | Validado | Penicilina cristalina EV, diálise | Desktop/mobile/console |
| `feb-13` | Febre ictérica | Comparador final | Diferencia por padrão ou palpite? | Simulação final | Hepatocelular x canalicular x hemolítico | Icterícia como atalho | Matriz final reforçada | Mapa mental | Simulador final | Validado | FA x lepto x hepatite x malária x dengue | Desktop/mobile/console |
| `lei-01` | Leishmaniose | Caso Crato/Ceará | Hematologia ou calazar? | Caso progressivo | Tempo + baço + pancitopenia | Virose prolongada | Caso e padrão reticuloendotelial reforçados | Órgãos | Pistas progressivas | Validado | Crato, meses, baço 10 cm, pancitopenia | Desktop/mobile/console |
| `lei-02` | Leishmaniose | Febre arrastada | Como o tempo muda a gaveta? | Linha do tempo | Dias x meses | Tratar como dengue prolongada | Tempo como dado semiológico reforçado | Timeline | Classificador | Validado | Febre arrastada, perda ponderal | Desktop/mobile/console |
| `lei-03` | Leishmaniose | Armadilha hematológica | Por que parece câncer? | Balança comparativa | PoliclonaI + endemia | Fechar mieloma por globulina | PoliclonaI x monoclonal reforçado | Balança | PoliclonaI/monoclonal | Validado | Neoplasia, mieloma, gamopatia | Desktop/mobile/console |
| `lei-04` | Leishmaniose | Epidemiologia | Quando endereço vira pista? | Mapa epidemiológico | Probabilidade pré-teste | Ignorar geografia | Crato/Ceará e endemia explicitados | Mapa | Quiz geográfico | Validado | Área endêmica, urbanização | Desktop/mobile/console |
| `lei-05` | Leishmaniose | Espécies e formas | Por que visceral não é tegumentar? | Árvore comparativa | Espécie + tropismo | Confundir chagasi com braziliensis | Agente/formas reforçados | Árvore | Classificador | Validado | chagasi/infantum, braziliensis | Desktop/mobile/console |
| `lei-06` | Leishmaniose | Vetor/reservatórios | Quem pica e quem mantém? | Ciclo epidemiológico | Vetor x reservatório | Trocar por Aedes | Lutzomyia, cão e raposa reforçados | Ciclo | Vetor/reservatório | Validado | Mosquito-palha, cão, raposa | Desktop/mobile/console |
| `lei-07` | Leishmaniose | Doença do macrófago | Como explica órgãos/citopenias? | Fisiopatologia guiada | Macrófago infectado | Decorar órgão sem mecanismo | Sistema reticuloendotelial reforçado | Macrófago/órgãos | Hotspots em órgãos | Validado | Macrófagos, fígado, baço, medula | Desktop/mobile/console |
| `lei-08` | Leishmaniose | Celular x humoral | Por que muita globulina não protege? | Mapa imunológico | Falha celular + humoral exagerada | Anticorpo resolve parasita | Hipergamaglobulinemia explicada | Imune | Eletroforese | Validado | PoliclonaI, A/G, imunidade celular | Desktop/mobile/console |
| `lei-09` | Leishmaniose | Montenegro | Por que negativo não exclui? | Diagnóstico interpretado | Anergias/resposta celular | Montenegro negativo exclui | Paradoxo imunológico reforçado | Painel teste | Quiz Montenegro | Validado | Visceral ativa, pós-tratamento, tegumentar | Desktop/mobile/console |
| `lei-10` | Leishmaniose | Amastigotas, medula e baço | Onde procurar e qual risco aceitar? | Procedimento diagnóstico | Preferencial x sensível | Mais sensível = melhor para todos | Promastigota/amastigota acrescentado | Medula/baço | Preferencial ou sensível | Corrigido e validado com clique | Amastigotas, medula, punção esplênica | Desktop/mobile/console/hotspot |
| `lei-11` | Leishmaniose | Sorologias/imunossupressão | Quando sorologia engana? | Fluxo diagnóstico | Teste em camadas | Sorologia negativa exclui | Cautela em HIV/imunossupressão | Fluxo | Cautela diagnóstica | Validado | IFI, rK39, parasitológico | Desktop/mobile/console |
| `lei-12` | Leishmaniose | Tratamento e Gs/Is | Quando lipossomal supera custo? | Decisão terapêutica | Risco individual muda droga | Glucantime para todos | QT, macrolídeos/hidroxicloroquina reforçados | Fluxo terapêutico | Antimonial ou lipossomal | Corrigido/ampliado | Glucantime, lipossomal, Gs/Is | Desktop/mobile/console |
| `lei-13` | Leishmaniose | Fechamento integrador | Hematologia ou calazar? | Simulação final | Tempo + baço + policlonal + endemia | Perder infecção crônica | Síntese integradora reforçada | Mapa mental | Simulador final | Validado | Diagnóstico, tratamento e diferenciais | Desktop/mobile/console |

## 12. Critério de aceite final

A plataforma permanece visual, interativa e premium, mas o centro cognitivo foi deslocado para leitura médica robusta. O aluno consegue estudar cada página lendo a explicação antes de clicar nos recursos, e os recursos visuais/interativos passam a funcionar como reforço, comparação, treino e sedimentação.

