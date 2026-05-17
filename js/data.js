/* =========================================
   SINDROMES FEBRIS — DADOS GLOBAIS
   ========================================= */

const GO_PAGES = [
  { id: 'home', block: 'entrada', icon: '⌂', label: 'Mapa das Síndromes Febris', grad: 'revisao' },
  { id: 'mapa-global', block: 'integracao', icon: '◇', label: 'Mapa Mental Global', grad: 'revisao' },
  { id: 'simulador-global', block: 'integracao', icon: '▣', label: 'Simulador Febre em Decisão', grad: 'revisao' },
  { id: 'revisao-global', block: 'integracao', icon: '✓', label: 'Revisão Global', grad: 'revisao' },
  { id: 'matriz-global', block: 'integracao', icon: '≋', label: 'Matriz Comparativa Global', grad: 'revisao' },
  { id: 'instalar-app', block: 'integracao', icon: '⇩', label: 'Como instalar o app', grad: 'revisao' },

  { id: 'den-01', block: 'dengue', icon: '1', label: 'Febre sem foco e caso-guia', grad: 'dengue' },
  { id: 'den-02', block: 'dengue', icon: '2', label: 'Arboviroses e Aedes aegypti', grad: 'dengue' },
  { id: 'den-03', block: 'dengue', icon: '3', label: 'Sorotipos e imunofacilitação', grad: 'dengue' },
  { id: 'den-04', block: 'dengue', icon: '4', label: 'Extravasamento plasmático', grad: 'dengue' },
  { id: 'den-05', block: 'dengue', icon: '5', label: 'Quadro clínico e cronologia', grad: 'dengue' },
  { id: 'den-06', block: 'dengue', icon: '6', label: 'Sinais de alarme', grad: 'dengue' },
  { id: 'den-07', block: 'dengue', icon: '7', label: 'Pegadinhas dos alarmes', grad: 'dengue' },
  { id: 'den-08', block: 'dengue', icon: '8', label: 'Dengue grave: grupo D', grad: 'dengue' },
  { id: 'den-09', block: 'dengue', icon: '9', label: 'NS1, IgM e IgG', grad: 'dengue' },
  { id: 'den-10', block: 'dengue', icon: '10', label: 'Prova do laço', grad: 'dengue' },
  { id: 'den-11', block: 'dengue', icon: '11', label: 'Classificação A/B/C/D', grad: 'dengue' },
  { id: 'den-12', block: 'dengue', icon: '12', label: 'Hidratação e medicamentos', grad: 'dengue' },
  { id: 'den-13', block: 'dengue', icon: '13', label: 'Dengue × Chikungunya × Zika', grad: 'dengue' },
  { id: 'den-14', block: 'dengue', icon: '14', label: 'Simulador final da dengue', grad: 'dengue' },

  { id: 'feb-01', block: 'icterica', icon: '1', label: 'Caso-guia ictérico', grad: 'icterica' },
  { id: 'feb-02', block: 'icterica', icon: '2', label: 'Síndrome febril ictérica', grad: 'icterica' },
  { id: 'feb-03', block: 'icterica', icon: '3', label: 'Febre amarela e Flavivírus', grad: 'icterica' },
  { id: 'feb-04', block: 'icterica', icon: '4', label: 'Ciclos silvestre e urbano', grad: 'icterica' },
  { id: 'feb-05', block: 'icterica', icon: '5', label: 'Formas clínicas e Faget', grad: 'icterica' },
  { id: 'feb-06', block: 'icterica', icon: '6', label: 'Febre amarela grave', grad: 'icterica' },
  { id: 'feb-07', block: 'icterica', icon: '7', label: 'Por que não fecha febre amarela', grad: 'icterica' },
  { id: 'feb-08', block: 'icterica', icon: '8', label: 'Leptospirose: transmissão', grad: 'icterica' },
  { id: 'feb-09', block: 'icterica', icon: '9', label: 'Forma anictérica', grad: 'icterica' },
  { id: 'feb-10', block: 'icterica', icon: '10', label: 'Síndrome de Weil', grad: 'icterica' },
  { id: 'feb-11', block: 'icterica', icon: '11', label: 'Laboratório da leptospirose', grad: 'icterica' },
  { id: 'feb-12', block: 'icterica', icon: '12', label: 'Diagnóstico e tratamento', grad: 'icterica' },
  { id: 'feb-13', block: 'icterica', icon: '13', label: 'Simulador ictérico final', grad: 'icterica' },

  { id: 'lei-01', block: 'leish', icon: '1', label: 'Caso-guia: baço gigante', grad: 'leish' },
  { id: 'lei-02', block: 'leish', icon: '2', label: 'Febre arrastada', grad: 'leish' },
  { id: 'lei-03', block: 'leish', icon: '3', label: 'Armadilha hematológica', grad: 'leish' },
  { id: 'lei-04', block: 'leish', icon: '4', label: 'Epidemiologia: Crato/Ceará', grad: 'leish' },
  { id: 'lei-05', block: 'leish', icon: '5', label: 'Nome, agente e espécies', grad: 'leish' },
  { id: 'lei-06', block: 'leish', icon: '6', label: 'Vetor e reservatórios', grad: 'leish' },
  { id: 'lei-07', block: 'leish', icon: '7', label: 'Doença do macrófago', grad: 'leish' },
  { id: 'lei-08', block: 'leish', icon: '8', label: 'Celular × humoral', grad: 'leish' },
  { id: 'lei-09', block: 'leish', icon: '9', label: 'Montenegro', grad: 'leish' },
  { id: 'lei-10', block: 'leish', icon: '10', label: 'Amastigotas, medula e baço', grad: 'leish' },
  { id: 'lei-11', block: 'leish', icon: '11', label: 'Sorologias e imunossupressão', grad: 'leish' },
  { id: 'lei-12', block: 'leish', icon: '12', label: 'Tratamento e Gs/Is', grad: 'leish' },
  { id: 'lei-13', block: 'leish', icon: '13', label: 'Simulador final do calazar', grad: 'leish' },
];

const GO_BLOCKS = {
  entrada: { label: 'Dashboard', color: '#0f766e', pages: [] },
  integracao: { label: 'Integração Global', color: '#0f766e', pages: [] },
  dengue: { label: 'Dengue', color: '#dc2626', pages: [] },
  icterica: { label: 'Febre Ictérica', color: '#d97706', pages: [] },
  leish: { label: 'Leishmaniose', color: '#7c3aed', pages: [] },
};

GO_PAGES.forEach((p, i) => {
  p.index = i;
  if (GO_BLOCKS[p.block]) GO_BLOCKS[p.block].pages.push(p);
});

const GRAD_MAP = {
  dengue: 'var(--grad-dengue)',
  icterica: 'var(--grad-icterica)',
  leish: 'var(--grad-leish)',
  revisao: 'var(--grad-revisao)',
};

const GLOBAL_BRIDGES = [
  {
    title: 'Plaquetopenia não fecha dengue',
    contrast: 'A mesma queda de plaquetas aparece em dengue, febre amarela grave, leptospirose grave e calazar.',
    detail: 'Tempo de evolução, leucócitos, hematócrito, icterícia, baço e epidemiologia mudam o diagnóstico.',
    target: 'matriz-global'
  },
  {
    title: 'Ht subindo não é o mesmo que canalicular',
    contrast: 'Na dengue, hematócrito progressivo aponta extravasamento. Na leptospirose, BD + FA/GGT + creatinina alta + K baixo mudam o eixo.',
    detail: 'Compare dengue com o módulo febril ictérico antes de fechar a hipótese pela plaqueta.',
    target: 'feb-11'
  },
  {
    title: 'Febre aguda não é febre arrastada',
    contrast: 'Dias de febre orientam arbovirose ou síndrome ictérica; meses com baço gigante e pancitopenia abrem a gaveta do calazar.',
    detail: 'A cronologia é a primeira triagem cognitiva da plataforma.',
    target: 'lei-02'
  },
  {
    title: 'Macaco sentinela × cão reservatório',
    contrast: 'Na febre amarela, macacos sinalizam circulação viral. No calazar, cães entram como reservatório urbano-periurbano.',
    detail: 'Sentinela, reservatório e vetor não são sinônimos.',
    target: 'mapa-global'
  },
];

const MODULE_DATA = {
  dengue: {
    label: 'Dengue: da febre sem foco à decisão A/B/C/D',
    short: 'Dengue',
    accent: '#dc2626',
    route: 'den-01',
    thesis: 'Suspeitar é fácil. Classificar, hidratar e não errar a alta é o que salva.',
    pages: [
      {
        id: 'den-01',
        svg: 'Febre sem foco → pistas que mudam o rumo',
        title: 'Síndrome febril sem foco e caso-guia',
        question: 'Quando uma febre solta passa a exigir raciocínio de arbovirose e triagem?',
        objective: 'Reconstruir o caso inicial e mostrar que o erro central é acertar dengue e errar a conduta.',
        core: [
          'Febre aguda sem sinal localizatório significa ausência de pistas fortes para pneumonia, ITU/pielonefrite ou meningite.',
          'O paciente jovem, com cerca de 20 anos, procura o pronto-socorro após faltar ao trabalho e pedir atestado, criando falsa impressão de baixa gravidade.',
          'Febre de 24 horas, 39 °C, calafrios, prostração, mialgia, anorexia, cefaleia, dor retro-orbital, prurido discreto e exames com leucopenia, atipia linfocitária e plaquetas perto de 102.000 tornam dengue provável.',
          'A dor abdominal acentuada e persistente é sinal de alarme: bom estado geral não neutraliza esse dado.',
          'Com sinal de alarme, o eixo muda para grupo C, internação e hidratação venosa.'
        ],
        hotspots: ['febre sem foco', 'sem disúria/dor lombar/escarro/rigidez', 'dor retro-orbital', 'plaquetas 102.000', 'dor abdominal persistente', 'erro de alta', 'grupo C'],
        table: {
          title: 'Febre sem foco × quadros localizatórios',
          headers: ['Eixo', 'Pistas', 'Conduta mental'],
          rows: [
            ['Febre sem foco', 'Febre, mialgia, cefaleia sem topografia', 'Abrir arbovirose e triagem'],
            ['Pneumonia', 'Tosse produtiva, alteração pulmonar, infiltrado', 'Topografia respiratória'],
            ['ITU/pielonefrite', 'Disúria, dor lombar, sintomas urinários', 'Topografia urinária'],
            ['Meningite', 'Rigidez de nuca, sinais meníngeos, alteração neurológica', 'Topografia SNC'],
            ['Arbovirose provável', 'Dor retro-orbital, leucopenia, plaquetopenia', 'Classificar risco antes da alta']
          ]
        },
        interaction: {
          type: 'choice',
          title: 'Esse paciente pode ir para casa?',
          options: [
            ['Liberar com orientação simples', false, 'Alto risco de erro: dor abdominal persistente muda a classificação.'],
            ['Pedir só atestado', false, 'A demanda administrativa não reduz risco clínico.'],
            ['Classificar como grupo B', false, 'Grupo B exige hemograma, mas sinal de alarme empurra para grupo C.'],
            ['Classificar como grupo C', true, 'Correto: sinal de alarme pede internação e hidratação venosa.'],
            ['Chamar de dengue grave', false, 'Ainda não há choque, sangramento grave ou disfunção orgânica grave.']
          ]
        },
        notConfuse: ['jovem e funcional não significa baixo risco', 'plaqueta baixa chama atenção, mas não decide sozinha', 'diagnóstico provável não encerra a consulta'],
        trap: 'A banca pode entregar dengue típica para testar conduta; se houver sinal de alarme, não é alta.',
        links: ['feb-01', 'lei-01']
      },
      {
        id: 'den-02',
        svg: 'Ciclo epidemiológico da dengue',
        title: 'Arboviroses, Aedes aegypti e contexto epidemiológico',
        question: 'Quando a febre sem foco vira hipótese de arbovirose?',
        objective: 'Conectar ambiente, vetor, incubação e transmissão ao raciocínio inicial.',
        core: [
          'Arbovirose é infecção viral transmitida por artrópode; dengue é a principal arbovirose de prova no eixo febre aguda sem foco.',
          'A grafia correta é Aedes aegypti, vetor urbano associado a água parada e ciclo humano-vetor-humano.',
          'A incubação de 3 a 15 dias permite interpretar viajante, exposição urbana e início abrupto.',
          'Contexto epidemiológico aumenta a suspeita, mas não substitui classificação de risco.',
          'Vetor e agente não são a mesma coisa: Aedes aegypti transmite; DENV causa.'
        ],
        hotspots: ['arbovirose', 'Aedes aegypti', 'água parada', 'incubação 3–15 dias', 'viajante', 'epidemia local', 'vetor × agente'],
        table: {
          title: 'Arbovirose × vetor × agente × relevância',
          headers: ['Item', 'Dengue', 'Pegadinha'],
          rows: [
            ['Vetor', 'Aedes aegypti', 'Não é agente etiológico'],
            ['Agente', 'DENV, Flavivírus RNA', 'Não confundir com NS1'],
            ['Incubação', '3 a 15 dias', 'Ajuda no caso do viajante'],
            ['Epidemiologia', 'Surto urbano, sazonalidade, água parada', 'Aumenta suspeita, não classifica risco']
          ]
        },
        interaction: {
          type: 'choice',
          title: 'Classifique a pista epidemiológica',
          options: [
            ['Viagem há 7 dias para área com muitos casos', true, 'Compatível com incubação de 3 a 15 dias.'],
            ['Mosquito é o agente da dengue', false, 'O mosquito é vetor; o agente é DENV.'],
            ['Água parada aumenta risco urbano', true, 'Pista coerente com Aedes aegypti.'],
            ['Sem surto local exclui dengue', false, 'Epidemiologia ajuda, mas não exclui isoladamente.']
          ]
        },
        notConfuse: ['vetor × agente etiológico', 'arbovirose × vírus específico', 'epidemiologia × classificação de gravidade'],
        trap: 'O contexto epidemiológico aumenta suspeita, mas o paciente ainda precisa ser classificado A/B/C/D.',
        links: ['feb-04', 'mapa-global']
      },
      {
        id: 'den-03',
        svg: 'Primeira infecção → segunda infecção → imunofacilitação',
        title: 'Vírus da dengue, sorotipos e imunofacilitação',
        question: 'Por que a ideia de dengue oito vezes não fecha como raciocínio central?',
        objective: 'Explicar DENV, sorotipos, imunidade sorotipo-específica e teoria de Halstead.',
        core: [
          'Dengue é causada por Flavivírus RNA, com sorotipos DENV-1, DENV-2, DENV-3 e DENV-4.',
          'Há menção ao sorotipo 5 como detalhe de baixa relevância no Brasil, sem virar eixo de prova.',
          'A imunidade é sorotipo-específica: protege contra o mesmo sorotipo, não contra todos.',
          'Infecção sequencial por sorotipo diferente pode gerar imunofacilitação, associada à teoria de Halstead.',
          'O risco grave não é repetir a palavra dengue; é como anticorpos prévios modulam a resposta.'
        ],
        hotspots: ['Flavivírus RNA', 'DENV-1', 'DENV-2', 'DENV-3', 'DENV-4', 'sorotipo 5', 'Halstead'],
        table: {
          title: 'Sorotipo × imunidade × risco',
          headers: ['Elemento', 'Interpretação', 'Risco'],
          rows: [
            ['Mesmo sorotipo', 'Imunidade protetora específica', 'Reinfecção igual fica improvável'],
            ['Sorotipo diferente', 'Anticorpos prévios podem facilitar entrada viral', 'Imunofacilitação'],
            ['DENV-1 a DENV-4', 'Principais no Brasil', 'Permitem infecções distintas'],
            ['Sorotipo 5', 'Detalhe de baixa relevância prática local', 'Não é eixo decisório']
          ]
        },
        interaction: {
          type: 'choice',
          title: 'Quiz dengue 8 vezes',
          options: [
            ['O paciente pode ter dengue ilimitadamente pelo mesmo sorotipo', false, 'Imunidade específica protege contra o mesmo sorotipo.'],
            ['Quatro sorotipos principais explicam infecções distintas', true, 'DENV-1 a DENV-4 são o eixo útil.'],
            ['Sorotipo 5 é o principal no Brasil', false, 'É detalhe de baixa relevância no Brasil.'],
            ['Halstead ajuda a entender gravidade em infecção sequencial', true, 'Esse é o ponto da imunofacilitação.']
          ]
        },
        notConfuse: ['NS1 × DENV-1', 'sorotipo × teste diagnóstico', 'imunidade parcial × imunidade total'],
        trap: 'A frase dengue oito vezes costuma esconder confusão entre sorotipo, reinfecção e imunidade.'
      },
      {
        id: 'den-04',
        svg: 'O vaso que perde plasma',
        title: 'Extravasamento plasmático: o fenômeno central',
        question: 'Por que hematócrito progressivamente elevado pesa mais que plaqueta isolada?',
        objective: 'Centralizar extravasamento, hemoconcentração e risco de choque.',
        core: [
          'O fenômeno crítico da dengue com alarme é extravasamento plasmático, não a plaquetopenia isolada.',
          'Quando plasma sai do vaso, o hematócrito sobe de modo progressivo por hemoconcentração.',
          'Plaquetas baixas são frequentes, mas não definem alarme sozinhas.',
          'Hematócrito subindo com dor abdominal, vômitos ou sinais de perfusão ruim exige mudança de grupo.',
          'Se o hematócrito cai com paciente pior, pense em sangramento, não em melhora automática.'
        ],
        hotspots: ['endotélio', 'plasma fora do vaso', 'hemoconcentração', 'Ht subindo', 'plaquetas isoladas', 'choque', 'Ht caindo com piora'],
        table: {
          title: 'Plaquetopenia isolada × hematócrito progressivo',
          headers: ['Achado', 'Significado', 'Erro comum'],
          rows: [
            ['Plaquetas baixas', 'Comum na dengue', 'Tratar como alarme isolado'],
            ['Ht subindo', 'Extravasamento plasmático', 'Ignorar tendência seriada'],
            ['Ht caindo + paciente mal', 'Possível sangramento', 'Chamar de melhora'],
            ['Dor abdominal + Ht subindo', 'Grupo C provável', 'Dar alta por bom estado geral']
          ]
        },
        interaction: { type: 'slider', title: 'Slider Ht e extravasamento', min: 35, max: 55, goodAt: 46 },
        notConfuse: ['hematócrito subindo × plaquetas baixas', 'extravasamento × sangramento', 'melhora laboratorial falsa × piora clínica'],
        trap: 'Plaqueta baixa assusta; hematócrito em ascensão decide o risco de extravasamento.'
      },
      {
        id: 'den-05',
        svg: 'Linha do tempo clínica da dengue',
        title: 'Quadro clínico e cronologia',
        question: 'Por que a defervescência pode ser o começo do perigo?',
        objective: 'Organizar febre até 7 dias, sintomas, rash, prurido e janela crítica.',
        core: [
          'Dengue costuma cursar com febre súbita de até 7 dias, mialgia intensa, dor retro-orbital, cefaleia e prostração.',
          'Artralgia tende a ser mais leve que na chikungunya; rash/exantema pode surgir entre o 3º e 6º dia com prurido.',
          'Leucopenia, linfocitose relativa e plaquetopenia apoiam a hipótese, mas não encerram risco.',
          'A defervescência no 3º–4º dia pode coincidir com fase crítica e sinais de alarme.',
          'Vômito isolado não pesa como vômito persistente.'
        ],
        hotspots: ['febre até 7 dias', 'mialgia intensa', 'dor retro-orbital', 'rash 3º–6º', 'prurido', 'defervescência 3º–4º', 'vômitos persistentes'],
        table: {
          title: 'Sintoma comum × pista de dengue × sinal que muda conduta',
          headers: ['Achado', 'Pista', 'Muda conduta?'],
          rows: [
            ['Febre súbita', 'Dengue provável', 'Não sozinha'],
            ['Dor retro-orbital', 'Arbovirose/Dengue', 'Não sozinha'],
            ['Rash com prurido', 'Cronologia compatível', 'Não sozinha'],
            ['Vômitos persistentes', 'Sinal de alarme', 'Sim'],
            ['Defervescência', 'Fase crítica possível', 'Sim se acompanhada de alarme']
          ]
        },
        interaction: { type: 'timeline', title: 'Timeline da dengue' },
        notConfuse: ['defervescência × cura', 'vômito isolado × persistente', 'artralgia dengue × chikungunya'],
        trap: 'Melhora da febre não garante segurança; a virada crítica pode aparecer quando a febre baixa.'
      },
      {
        id: 'den-06',
        svg: 'Mapa anatômico dos sinais de alarme',
        title: 'Sinais de alarme: reconhecimento clínico',
        question: 'Quais sinais impedem alta simples?',
        objective: 'Fixar os sinais de alarme e sua consequência operacional.',
        core: [
          'Dor abdominal intensa e contínua, vômitos persistentes, acúmulo de líquidos e sangramento de mucosa mudam o grupo.',
          'Letargia/irritabilidade, hipotensão postural/lipotimia, hepatomegalia maior que 2 cm e hematócrito em elevação também são alarmes.',
          'Sinal de alarme aponta risco de extravasamento, choque ou evolução grave.',
          'O paciente com alarme entra em grupo C até prova em contrário operacional.',
          'O exame físico deve procurar perfusão, pressão de pulso, dor abdominal e sangramento de mucosa.'
        ],
        hotspots: ['dor abdominal', 'vômitos persistentes', 'líquidos', 'mucosa', 'letargia', 'hipotensão postural', 'hepatomegalia >2 cm', 'Ht subindo'],
        table: {
          title: 'Sinal de alarme × fisiopatologia × consequência',
          headers: ['Sinal', 'Fisiopatologia sugerida', 'Consequência'],
          rows: [
            ['Dor abdominal intensa', 'Extravasamento/irritação visceral', 'Grupo C'],
            ['Vômitos persistentes', 'Risco de desidratação e gravidade', 'Grupo C'],
            ['Sangramento de mucosa', 'Fragilidade hemostática', 'Grupo C'],
            ['Ht subindo', 'Hemoconcentração', 'Hidratação venosa'],
            ['Hepatomegalia >2 cm', 'Comprometimento sistêmico', 'Não liberar']
          ]
        },
        interaction: { type: 'classifier', title: 'Sinal de alarme ou não?' },
        notConfuse: ['pele × mucosa × grave', 'hipotensão postural × choque', 'hepatomegalia >2 cm × hepatite isolada'],
        trap: 'Dor abdominal persistente vale mais que aparência tranquila.'
      },
      {
        id: 'den-07',
        svg: 'Escada de gravidade pele → mucosa → grave',
        title: 'Sinais de alarme: pegadinhas e hierarquia',
        question: 'Como separar sangramento menor, alarme e dengue grave?',
        objective: 'Evitar confusão entre petéquias, mucosa e sangramento grave.',
        core: [
          'Sangramento de pele isolado pode aparecer sem definir dengue grave.',
          'Sangramento de mucosa entra como sinal de alarme e muda manejo.',
          'Sangramento grave é critério de dengue grave e pode exigir suporte intensivo.',
          'Prova do laço positiva ajuda a colocar em grupo B, mas não confirma dengue nem vira grupo C sozinha.',
          'Hipotensão postural/lipotimia é alarme; choque já é grupo D.'
        ],
        hotspots: ['petéquias', 'mucosa', 'sangramento grave', 'prova do laço', 'grupo B', 'grupo C', 'grupo D'],
        table: {
          title: 'Achado × grupo × pegadinha',
          headers: ['Achado', 'Grupo provável', 'Pegadinha'],
          rows: [
            ['Prova do laço positiva sem alarme', 'B', 'Não é confirmação diagnóstica'],
            ['Sangramento de mucosa', 'C', 'Não tratar como pele simples'],
            ['Sangramento grave', 'D', 'Precisa suporte intensivo'],
            ['Hipotensão postural', 'C', 'Não é choque franco'],
            ['Choque', 'D', 'Não é só hidratação domiciliar']
          ]
        },
        interaction: { type: 'choice', title: 'Pele, mucosa ou grave?', options: [['Petéquias isoladas', true, 'Pode orientar grupo B conforme contexto.'], ['Epistaxe importante persistente', false, 'Sangramento de mucosa muda risco.'], ['Hemorragia grave com instabilidade', false, 'Isso é dengue grave/grupo D.']] },
        notConfuse: ['prova do laço positiva × dengue confirmada', 'sangramento de mucosa × petéquias', 'grupo B × grupo C'],
        trap: 'Nem todo sangramento é igual; o local e a repercussão mudam a classificação.'
      },
      {
        id: 'den-08',
        svg: 'Choque e falência orgânica na dengue grave',
        title: 'Dengue grave: grupo D',
        question: 'Quando a dengue deixa de ser alarme e vira gravidade?',
        objective: 'Definir choque, PA convergente, disfunção orgânica e sangramento grave.',
        core: [
          'Grupo D inclui choque, desconforto respiratório por extravasamento, sangramento grave ou disfunção orgânica grave.',
          'PA convergente, como 100 × 90, indica pressão de pulso estreita e pode sinalizar choque.',
          'Extremidades frias, pulso fino, TEC aumentado e hipotensão franca são dados de perfusão ruim.',
          'Disfunção orgânica grave e sangramento grave tiram o paciente da lógica de enfermaria simples.',
          'Grupo D pede UTI, hidratação rápida e reavaliação frequente, com cuidado para sobrecarga.'
        ],
        hotspots: ['choque', 'PA convergente', '100 × 90', 'pulso fino', 'TEC aumentado', 'sangramento grave', 'disfunção orgânica'],
        table: {
          title: 'Sinais de alarme × dengue grave',
          headers: ['Critério', 'Grupo', 'Resposta'],
          rows: [
            ['Dor abdominal persistente', 'C', 'Internar/hidratar EV'],
            ['PA convergente', 'D', 'Reanimação e UTI'],
            ['Extremidades frias', 'D', 'Avaliar choque'],
            ['Sangramento grave', 'D', 'Suporte intensivo'],
            ['Disfunção orgânica grave', 'D', 'Manejo crítico']
          ]
        },
        interaction: { type: 'choice', title: 'Grupo C ou D?', options: [['Dor abdominal isolada persistente', false, 'Grupo C.'], ['PA 100 × 90 com extremidades frias', true, 'Grupo D por choque/pressão convergente.'], ['Prova do laço positiva', false, 'Grupo B se sem alarme.']] },
        notConfuse: ['grupo C × grupo D', 'hipotensão postural × choque', 'PA normal isolada × pressão de pulso estreita'],
        trap: 'PA 100 × 90 pode parecer aceitável; a pressão de pulso é o alerta.'
      },
      {
        id: 'den-09',
        svg: 'Curvas temporais de NS1, IgM e IgG',
        title: 'Diagnóstico temporal: NS1, IgM e IgG',
        question: 'Qual teste faz sentido pelo dia de doença?',
        objective: 'Ensinar janela diagnóstica sem confundir NS1 com DENV-1.',
        core: [
          'NS1 é antígeno útil no começo: melhor até o 3º dia e possível até o 5º.',
          'IgM tende a ser mais útil a partir do 6º dia.',
          'IgG indica exposição prévia ou resposta secundária, dependendo do contexto.',
          'Isolamento viral/PCR entram em janelas iniciais e contextos específicos.',
          'NS1 não significa sorotipo 1.'
        ],
        hotspots: ['dia 1–3', 'até 5º dia', 'NS1', 'IgM 6º dia', 'IgG', 'isolamento/PCR', 'NS1 × DENV-1'],
        table: {
          title: 'NS1 × isolamento viral × IgM × IgG',
          headers: ['Teste', 'Janela útil', 'Pegadinha'],
          rows: [
            ['NS1', 'Melhor até 3º; possível até 5º', 'Não é sorotipo 1'],
            ['IgM', 'A partir do 6º dia', 'Pode ser negativo cedo'],
            ['IgG', 'Exposição/resposta secundária', 'Precisa contexto'],
            ['Isolamento/PCR', 'Fase inicial em locais adequados', 'Não substitui manejo de risco']
          ]
        },
        interaction: { type: 'choice', title: 'Seletor de exame por dia', options: [['Dia 2: NS1', true, 'Janela inicial favorável.'], ['Dia 2: IgM isolada', false, 'Pode ser cedo demais.'], ['Dia 7: IgM', true, 'Janela sorológica coerente.'], ['NS1 = DENV-1', false, 'NS1 é antígeno, não sorotipo.']] },
        notConfuse: ['NS1 × DENV-1', 'IgM precoce × falso negativo', 'diagnóstico × classificação de risco'],
        trap: 'O teste correto não autoriza ignorar sinal de alarme.'
      },
      {
        id: 'den-10',
        svg: 'Prova do laço passo a passo',
        title: 'Prova do laço',
        question: 'Quando a prova do laço muda o grupo e quando ela só confunde?',
        objective: 'Fixar técnica, valores e interpretação operacional.',
        core: [
          'A prova do laço usa quadrado de 2,5 cm e tempo de até 5 minutos no adulto ou até 3 minutos na criança.',
          'A pressão insuflada é calculada pela média aritmética simples entre PAS e PAD; não é a PAM usada em UTI.',
          'Adulto: positiva com 20 ou mais petéquias; criança: 10 ou mais.',
          'Prova positiva pode colocar paciente sem alarme em grupo B.',
          'Prova positiva não confirma dengue e não transforma automaticamente em grupo C.',
          'A técnica precisa respeitar tempo e contagem para não gerar decisão errada.'
        ],
        hotspots: ['quadrado 2,5 cm', 'média PAS/PAD', 'adulto 5 min', 'criança 3 min', 'adulto ≥20', 'criança ≥10', 'grupo B', 'não confirma'],
        table: {
          title: 'Prova do laço: adulto × criança',
          headers: ['Paciente', 'Tempo', 'Positiva se'],
          rows: [
            ['Pressão do manguito', '(PAS + PAD) / 2', 'Não usar PAM de UTI'],
            ['Adulto', 'Até 5 min', '≥20 petéquias em 2,5 cm'],
            ['Criança', 'Até 3 min', '≥10 petéquias em 2,5 cm'],
            ['Sem alarme + positiva', 'Interpretação de risco', 'Grupo B'],
            ['Com alarme', 'A prova não reduz risco', 'Grupo C']
          ]
        },
        interaction: { type: 'laco', title: 'Calculadora didática da prova do laço' },
        notConfuse: ['prova positiva × confirmação de dengue', 'grupo B × grupo C', 'técnica correta × contagem casual'],
        trap: 'Prova do laço positiva sem alarme é grupo B; dor abdominal persistente continua sendo grupo C.'
      },
      {
        id: 'den-11',
        svg: 'Árvore de decisão A/B/C/D',
        title: 'Classificação A/B/C/D',
        question: 'Como decidir A, B, C ou D sem reduzir a dengue a plaquetas?',
        objective: 'Organizar grupos, critérios e destino.',
        core: [
          'Grupo A: sem alarme, sem condições especiais, manejo ambulatorial e hidratação oral.',
          'Grupo B: condições especiais, risco social, comorbidades ou prova do laço positiva; pede hemograma e observação.',
          'Grupo C: qualquer sinal de alarme; internação e hidratação venosa.',
          'Grupo D: choque, sangramento grave ou disfunção orgânica; UTI e resposta rápida.',
          'Extremos de idade menores que 2 anos e maiores que 65 anos aumentam atenção.'
        ],
        hotspots: ['A', 'B', 'C', 'D', 'sinal de alarme', 'choque', '<2 e >65'],
        table: {
          title: 'Grupo A × B × C × D',
          headers: ['Grupo', 'Critério', 'Destino'],
          rows: [
            ['A', 'Sem alarme e sem risco especial', 'Casa + hidratação oral + retorno'],
            ['B', 'Risco especial/prova do laço positiva', 'Hemograma e observação'],
            ['C', 'Sinal de alarme', 'Internação + hidratação venosa'],
            ['D', 'Choque/gravidade', 'UTI + reanimação']
          ]
        },
        interaction: { type: 'abcd', title: 'Simulador A/B/C/D com pacientes' },
        notConfuse: ['grupo B × grupo C', 'grupo C × grupo D', 'plaqueta isolada × grupo'],
        trap: 'O grupo nasce da combinação clínica, não de um número isolado.'
      },
      {
        id: 'den-12',
        svg: 'Fluxograma de manejo por grupo',
        title: 'Hidratação, manejo e medicamentos',
        question: 'Como hidratar sem transformar manejo em fórmula cega?',
        objective: 'Preservar volumes-chave, medicamentos e raciocínio do AAS crônico.',
        core: [
          'Grupo A: 60 ml/kg/dia; 1/3 como SRO e 2/3 como outros líquidos.',
          'A orientação precisa ser executável: solução de reidratação, água, sucos e alimentos líquidos contam; álcool não conta como hidratação.',
          'Pediatria: até 10 kg = 130 ml/kg/dia; 10–20 kg = 100 ml/kg/dia; acima de 20 kg = 80 ml/kg/dia; 13 anos ou mais = 60 ml/kg/dia.',
          'Grupo C: 20 ml/kg em 2 horas, repetir até 3 vezes; depois manutenção 25 ml/kg em 6–8 horas.',
          'Grupo D: 20 ml/kg em 20 minutos, repetir até 3 vezes, monitorando sobrecarga; noradrenalina/albumina podem entrar conforme resposta crítica.',
          'Dipirona/paracetamol são opções sintomáticas; AINE/AAS são contraindicados na suspeita aguda. AAS crônico exige decisão por plaquetas: >50.000, 30.000–50.000, <30.000.'
        ],
        hotspots: ['60 ml/kg/dia', '1/3 SRO', 'álcool não conta', 'pediatria', 'C 20 ml/kg 2h', 'D 20 ml/kg 20min', 'AINE/AAS', 'AAS crônico'],
        table: {
          title: 'Hidratação e medicamentos',
          headers: ['Situação', 'Conduta didática', 'Alerta'],
          rows: [
            ['Grupo A', '60 ml/kg/dia', 'Orientar retorno'],
            ['Hidratação oral', '1/3 SRO + 2/3 outros líquidos', 'Álcool não conta'],
            ['Grupo C', '20 ml/kg em 2h, até 3 vezes', 'Internação'],
            ['Grupo D', '20 ml/kg em 20min, até 3 vezes', 'UTI e sobrecarga'],
            ['Dor/febre', 'Dipirona ou paracetamol', 'Evitar AINE/AAS agudo'],
            ['AAS crônico', 'Raciocinar por plaquetas', '>50k / 30–50k / <30k']
          ]
        },
        interaction: { type: 'hydration', title: 'Calculadora didática de hidratação' },
        notConfuse: ['AAS agudo contraindicado × AAS crônico raciocinado', 'grupo C × grupo D', 'hidratação necessária × sobrecarga'],
        trap: 'O volume certo depende do grupo; velocidade errada pode matar por falta ou excesso.'
      },
      {
        id: 'den-13',
        svg: 'Radar das arboviroses',
        title: 'Dengue × Chikungunya × Zika',
        question: 'Quando dor articular ou exantema desloca o diagnóstico?',
        objective: 'Comparar arboviroses sem apagar o eixo de triagem da dengue.',
        core: [
          'Dengue: febre aguda, dor retro-orbital, mialgia, leucopenia/plaquetopenia e risco por extravasamento.',
          'Chikungunya pesa por artralgia intensa; exantema pode ocorrer no 2º–5º dia e febre por mais de 5 dias preocupa.',
          'Zika tende a quadro mais brando, exantema/prurido e conjuntivite; o marco epidemiológico de microcefalia foi 2016.',
          'Guillain-Barré pode entrar como complicação neurológica em arboviroses.',
          'AINE pode ter lugar em chikungunya subaguda, mas é erro no início de dengue suspeita.'
        ],
        hotspots: ['dengue', 'chikungunya', 'zika', 'artralgia intensa', 'exantema 2º–5º', 'microcefalia 2016', 'AINE'],
        table: {
          title: 'Dengue × Chikungunya × Zika',
          headers: ['Doença', 'Pista forte', 'Pegadinha'],
          rows: [
            ['Dengue', 'Dor retro-orbital, mialgia, Ht subindo se grave', 'Plaqueta isolada não classifica'],
            ['Chikungunya', 'Artralgia intensa e prolongada', 'Não confundir com dor leve da dengue'],
            ['Zika', 'Exantema/prurido/conjuntivite, microcefalia 2016', 'Pode parecer dengue leve'],
            ['AINE', 'Evitar na dengue suspeita inicial', 'Pode ser discutido em fase subaguda de chikungunya']
          ]
        },
        interaction: { type: 'choice', title: 'Comparador de arboviroses', options: [['Artralgia incapacitante e persistente', false, 'Puxa chikungunya.'], ['Ht progressivamente alto', true, 'Puxa dengue com extravasamento.'], ['Exantema/prurido com conjuntivite leve', false, 'Puxa zika.']] },
        notConfuse: ['chikungunya × dengue com dor articular', 'zika × dengue leve', 'AINE na chikungunya subaguda × dengue suspeita'],
        trap: 'Nem toda arbovirose com febre e dor é dengue; a consequência prática muda.'
      },
      {
        id: 'den-14',
        svg: 'Mapa mental final da dengue',
        title: 'Simulador final e revisão ativa da dengue',
        question: 'Você atende o paciente ou apenas reconhece a palavra dengue?',
        objective: 'Integrar suspeita, sinal de alarme, grupo, exame, hidratação, medicação e diferencial.',
        core: [
          'O algoritmo mental começa em febre sem foco e termina em classificação operacional.',
          'A pergunta final não é “tem dengue?”; é “qual grupo, qual hidratação, qual retorno e qual risco?”.',
          'O caso-guia retorna: dor abdominal persistente com bom estado geral não recebe alta.',
          'A revisão ativa inclui flashcards, checklist e matriz de pegadinhas.',
          'O módulo preserva o eixo A/B/C/D como decisão central.'
        ],
        hotspots: ['suspeita', 'alarme', 'grupo', 'exame por dia', 'hidratação', 'medicamentos', 'diferenciais', 'retorno'],
        table: {
          title: 'Mapa de fidelidade da dengue',
          headers: ['Bloco', 'Página', 'Componente'],
          rows: [
            ['Caso-guia', 'Página 1 e final', 'Simulador de alta'],
            ['Sorotipos/Halstead', 'Página 3', 'Quiz dengue 8 vezes'],
            ['Extravasamento/Ht', 'Página 4', 'Slider Ht'],
            ['A/B/C/D', 'Página 11', 'Simulador de grupos'],
            ['Hidratação/medicamentos', 'Página 12', 'Calculadora didática'],
            ['Arboviroses', 'Página 13', 'Comparador']
          ]
        },
        interaction: { type: 'final-dengue', title: 'Atenda o paciente' },
        notConfuse: ['diagnóstico × manejo', 'boa aparência × alarme', 'exame positivo × segurança clínica'],
        trap: 'A falha clássica é acertar a doença e errar o destino.'
      }
    ]
  },
  icterica: {
    label: 'Febre Amarela × Leptospirose: a síndrome febril ictérica que muda a conduta',
    short: 'Febre ictérica',
    accent: '#d97706',
    route: 'feb-01',
    thesis: 'Febre + icterícia não fecha diagnóstico. O padrão clínico-laboratorial decide o rumo.',
    pages: [
      {
        id: 'feb-01',
        svg: 'Febre sem foco → febre ictérica → pistas que mudam a hipótese',
        title: 'Caso-guia e entrada na síndrome febril ictérica',
        question: 'Quando a febre sem foco deixa de parecer dengue típica?',
        objective: 'Mostrar a virada do caso para leptospirose grave por padrão clínico-laboratorial.',
        core: [
          'Paciente com febre sem foco inicial, morador de área litorânea e trabalhador de limpeza urbana.',
          'Dez dias de evolução, febre de 39 °C, PA 120 × 70, FC 106, FR 20, icterícia, sufusão conjuntival, diurese reduzida e piora.',
          'Hemoptise e transferência para UTI apontam gravidade; hematócrito não é o centro.',
          'Leucocitose com desvio, plaquetas perto de 80.000, creatinina 2,5, potássio 3,1, BD, FA/GGT elevadas e transaminases não tão altas formam padrão canalicular/tubular.',
          'O conjunto fecha melhor com leptospirose grave/síndrome de Weil; tratamento lembrado: penicilina cristalina EV, suporte intensivo e diálise precoce quando indicada.'
        ],
        hotspots: ['icterícia', 'sufusão conjuntival', 'limpeza urbana', 'leucocitose', 'plaquetas 80.000', 'creatinina 2,5 + K 3,1', 'FA/GGT', 'hemoptise', 'UTI'],
        table: {
          title: 'Dado do caso × interpretação × hipótese que sobe',
          headers: ['Dado', 'Interpretação', 'Hipótese'],
          rows: [
            ['Plaquetopenia', 'Não fecha dengue sozinha', 'Diferencial amplo'],
            ['Sufusão conjuntival', 'Pista corporal forte', 'Leptospirose'],
            ['Limpeza urbana', 'Exposição ocupacional', 'Leptospirose'],
            ['Creatinina alta + K baixo', 'Tubulopatia', 'Leptospirose'],
            ['Hemoptise', 'Síndrome pulmão-rim', 'Leptospirose grave']
          ]
        },
        interaction: { type: 'case-clues', title: 'Qual dado muda o rumo?' },
        notConfuse: ['febre + plaquetopenia não é dengue obrigatória', 'febre + icterícia não é febre amarela automática', 'hemoptise não é detalhe menor'],
        trap: 'Sufusão conjuntival + exposição + rim com K baixo + hemoptise deslocam o caso para leptospirose grave.',
        links: ['den-01', 'lei-01']
      },
      {
        id: 'feb-02',
        svg: 'Febre + icterícia → qual padrão?',
        title: 'Síndrome febril ictérica e diferencial inicial',
        question: 'A icterícia é hepatocelular, canalicular ou hemolítica?',
        objective: 'Diferenciar febre amarela, leptospirose, hepatite viral, malária e dengue grave.',
        core: [
          'Icterícia abre uma gaveta diferente da dengue típica: síndrome febril ictérica.',
          'Padrão hepatocelular usa AST/ALT como eixo; padrão canalicular usa BD, FA/GGT; padrão hemolítico usa BI.',
          'Febre amarela e hepatite viral puxam hepatocelular, mas gravidade e epidemiologia separam.',
          'Leptospirose grave puxa canalicular/tubular: BD, FA/GGT, creatinina alta e K baixo.',
          'Malária entra quando hemólise e bilirrubina indireta dominam.'
        ],
        hotspots: ['hepatocelular', 'canalicular', 'hemolítico', 'BD', 'BI', 'AST/ALT', 'FA/GGT', 'diferencial'],
        table: {
          title: 'Febre amarela × leptospirose × hepatite × malária × dengue grave',
          headers: ['Hipótese', 'Padrão forte', 'Dado que ajuda'],
          rows: [
            ['Febre amarela', 'Hepatocelular grave', 'Mata/não vacinado, Faget, AST/ALT muito altas'],
            ['Leptospirose', 'Canalicular + renal', 'Sufusão, enchente/esgoto, K baixo'],
            ['Hepatite viral', 'Hepatocelular', 'Contexto viral/hepatite'],
            ['Malária', 'Hemolítico', 'BI/hemólise e exposição'],
            ['Dengue grave', 'Extravasamento/choque', 'Ht subindo e sinais de alarme']
          ]
        },
        interaction: { type: 'lab-pattern', title: 'Hepatocelular, canalicular ou hemolítico?' },
        notConfuse: ['bilirrubina direta × indireta', 'padrão laboratorial × nome da doença', 'icterícia × diagnóstico fechado'],
        trap: 'Febre + icterícia é síndrome; o padrão decide a hipótese.'
      },
      {
        id: 'feb-03',
        svg: 'Flavivírus: a febre amarela dá nome ao grupo',
        title: 'Febre amarela: agente, Flavivírus e epidemiologia',
        question: 'Por que febre amarela conversa com dengue, mas não se comporta igual?',
        objective: 'Preservar Flavivírus RNA, flavi = amarelo, praga amarela e vínculo com dengue.',
        core: [
          'Febre amarela é causada por Flavivírus RNA; flavi remete ao amarelo e à história da praga amarela.',
          'Dengue também é Flavivírus, mas a síndrome dominante é outra.',
          'Febre amarela grave tem eixo hepatorrenal e ictérico, não extravasamento plasmático como centro.',
          'A vacinação e a expansão do mapa vacinal entram no raciocínio epidemiológico.',
          'O medo operacional é reurbanização, ainda que o ciclo urbano não ocorra no Brasil desde 1942.'
        ],
        hotspots: ['Flavivírus RNA', 'flavi', 'praga amarela', 'dengue', 'vacina', 'reurbanização', '1942'],
        table: {
          title: 'Flavivírus citados × doença × pista',
          headers: ['Flavivírus', 'Doença', 'Pista'],
          rows: [
            ['DENV', 'Dengue', 'Extravasamento e A/B/C/D'],
            ['Febre amarela', 'Síndrome febril ictérica', 'Fígado/rim, Faget, exposição mata'],
            ['Família comum', 'Ambas RNA', 'Não significa mesma clínica']
          ]
        },
        interaction: { type: 'choice', title: 'Quiz conceitual de Flavivírus', options: [['Febre amarela é bactéria', false, 'É Flavivírus RNA.'], ['Dengue e febre amarela são Flavivírus', true, 'Compartilham família, não síndrome central.'], ['Flavi remete ao amarelo', true, 'Esse é o marco etimológico útil.']] },
        notConfuse: ['febre amarela bactéria × Flavivírus RNA', 'família viral × mesmo manejo', 'reurbanização × ciclo urbano atual'],
        trap: 'Ser Flavivírus não transforma febre amarela em dengue ictérica.'
      },
      {
        id: 'feb-04',
        svg: 'Ciclo silvestre × ciclo urbano da febre amarela',
        title: 'Ciclos da febre amarela: silvestre versus urbano',
        question: 'Quem transmite, quem sinaliza e quem ocupa o centro do ciclo?',
        objective: 'Separar Haemagogus/Sabethes, Aedes aegypti, macacos sentinelas e humano acidental.',
        core: [
          'No ciclo silvestre, Haemagogus e Sabethes transmitem; humanos entram como hospedeiros acidentais.',
          'Macacos são hospedeiros/sentinelas e não devem ser tratados como transmissores diretos para humanos.',
          'Epizootia em macacos sinaliza circulação viral e risco ambiental.',
          'No ciclo urbano, Aedes aegypti poderia sustentar transmissão humano-mosquito-humano.',
          'O Brasil não registra casos urbanos desde 1942, mantendo medo de reurbanização como alerta epidemiológico.'
        ],
        hotspots: ['Haemagogus', 'Sabethes', 'macaco sentinela', 'epizootia', 'humano acidental', 'Aedes aegypti', '1942'],
        table: {
          title: 'Ciclo silvestre × urbano',
          headers: ['Ciclo', 'Vetor', 'Humano'],
          rows: [
            ['Silvestre', 'Haemagogus/Sabethes', 'Acidental'],
            ['Urbano', 'Aedes aegypti', 'Central'],
            ['Sentinela', 'Macaco adoece/morre', 'Sinaliza circulação, não transmite direto'],
            ['Brasil desde 1942', 'Sem casos urbanos', 'Risco é reurbanização']
          ]
        },
        interaction: { type: 'choice', title: 'Culpa do macaco?', options: [['Macaco transmite diretamente para humanos', false, 'Erro: o vetor transmite.'], ['Macaco pode ser sentinela de epizootia', true, 'Correto.'], ['Haemagogus/Sabethes são vetores silvestres', true, 'Correto.'], ['Aedes aegypti é vetor urbano potencial', true, 'Correto.']] },
        notConfuse: ['macaco transmissor direto × sentinela', 'Haemagogus/Sabethes × Aedes', 'ciclo urbano histórico × atualidade'],
        trap: 'Culpar macaco é erro sanitário e conceitual.'
      },
      {
        id: 'feb-05',
        svg: 'Escada de gravidade da febre amarela',
        title: 'Febre amarela: formas clínicas e sinal de Faget',
        question: 'Como reconhecer gravidade sem transformar Faget em sinal exclusivo?',
        objective: 'Organizar leve, moderada, grave e sinal de Faget.',
        core: [
          'Sinal de Faget é dissociação pulso-temperatura: febre alta sem taquicardia proporcional; referência didática 1 °C ≈ 8 bpm.',
          'Faget não é exclusivo: pode aparecer em febre tifoide, legionella e brucelose.',
          'Forma leve pode ser inespecífica; forma moderada tende a AST/ALT geralmente ≥500.',
          'Forma grave combina icterícia, sangramento, oligúria, AST/ALT muito elevadas, rim e coagulopatia.',
          'Faget ajuda, mas a gravidade depende do conjunto.'
        ],
        hotspots: ['Faget', '1 °C ≈ 8 bpm', 'forma leve', 'moderada ≥500', 'grave', 'tifoide/legionella/brucelose', 'oligúria'],
        table: {
          title: 'Febre amarela leve × moderada × grave',
          headers: ['Forma', 'Pista', 'Risco'],
          rows: [
            ['Leve', 'Febre e sintomas inespecíficos', 'Pode passar despercebida'],
            ['Moderada', 'AST/ALT geralmente ≥500', 'Hepatite mais evidente'],
            ['Grave', 'Icterícia + sangramento + oligúria', 'Alta letalidade'],
            ['Faget', 'Pulso menor que esperado pela febre', 'Não é específico']
          ]
        },
        interaction: { type: 'faget', title: 'Simulador pulso-temperatura' },
        notConfuse: ['Faget × diagnóstico específico', 'febre alta × taquicardia proporcional', 'forma moderada × grave'],
        trap: 'Faget sugere, mas não fecha; o padrão hepatorrenal decide gravidade.'
      },
      {
        id: 'feb-06',
        svg: 'Painel hepatorrenal da febre amarela grave',
        title: 'Febre amarela grave: laboratório, diagnóstico e suporte',
        question: 'Quando o padrão vira hepatorrenal grave?',
        objective: 'Fixar AST/ALT ≥2.000, AST > ALT, creatinina ≥2, coagulopatia e suporte.',
        core: [
          'Forma grave costuma ter AST/ALT ≥2.000, muitas vezes AST > ALT, sem significar automaticamente álcool.',
          'Icterícia, sangramento, oligúria, creatinina ≥2, plaquetopenia e coagulopatia formam padrão crítico.',
          'Letalidade pode ficar entre 20% e 50% na forma grave.',
          'Diagnóstico temporal: viremia até o 5º dia; IgM ELISA a partir do 6º; investigação viral inicial em centro de referência quando aplicável.',
          'Tratamento estabelecido é suporte; sofosbuvir é estudado/promissor, mas inconclusivo.'
        ],
        hotspots: ['AST/ALT ≥2.000', 'AST > ALT', 'creatinina ≥2', 'coagulopatia', 'letalidade 20–50%', 'viremia 5º dia', 'IgM 6º dia', 'suporte'],
        table: {
          title: 'Padrão laboratorial da febre amarela grave',
          headers: ['Achado', 'Interpretação', 'Conduta'],
          rows: [
            ['AST/ALT ≥2.000', 'Hepatocelular grave', 'Suporte intensivo'],
            ['AST > ALT', 'Padrão descrito na forma grave', 'Não chamar de álcool automaticamente'],
            ['Creatinina ≥2', 'Eixo renal', 'Monitorar suporte/diálise se necessário'],
            ['Viremia até 5º dia', 'Janela inicial', 'Centro de referência'],
            ['IgM após 6º dia', 'Janela sorológica', 'ELISA']
          ]
        },
        interaction: { type: 'choice', title: 'Aproxima febre amarela grave?', options: [['AST/ALT ≥2.000 + oligúria', true, 'Aproxima forma grave.'], ['FA/GGT + K baixo + limpeza urbana', false, 'Puxa leptospirose.'], ['Sofosbuvir como conduta garantida', false, 'É inconclusivo, não conduta estabelecida.']] },
        notConfuse: ['AST > ALT × álcool automático', 'suporte × antiviral estabelecido', 'viremia × IgM'],
        trap: 'Sofosbuvir não deve virar tratamento estabelecido.'
      },
      {
        id: 'feb-07',
        svg: 'Balança diagnóstica: febre amarela versus leptospirose',
        title: 'Por que o caso não fecha bem com febre amarela',
        question: 'Quais dados puxam o caso para leptospirose?',
        objective: 'Comparar achados que aproximam e afastam febre amarela no caso-guia.',
        core: [
          'O caso tem icterícia, mas não basta para febre amarela.',
          'Limpeza urbana, sufusão conjuntival, leucocitose com desvio e padrão canalicular pesam contra dengue típica e contra febre amarela isolada.',
          'Creatinina alta com potássio baixo sugere tubulopatia típica da leptospirose.',
          'Hemoptise desloca para síndrome pulmão-rim e gravidade leptospirótica.',
          'A hipótese final progressiva é leptospirose grave/síndrome de Weil.'
        ],
        hotspots: ['icterícia insuficiente', 'limpeza urbana', 'sufusão', 'leucocitose', 'canalicular', 'K baixo', 'hemoptise'],
        table: {
          title: 'Dados que aproximam e afastam febre amarela',
          headers: ['Dado', 'Aproxima', 'Afasta'],
          rows: [
            ['Icterícia', 'Febre amarela possível', 'Não específica'],
            ['Limpeza urbana', 'Exposição ambiental', 'Afasta eixo mata/ecoturismo'],
            ['Sufusão conjuntival', 'Pista de leptospirose', 'Não típica de febre amarela'],
            ['Creatinina alta + K baixo', 'Tubulopatia', 'Puxa leptospirose'],
            ['Hemoptise', 'Pulmão-rim', 'Puxa Weil']
          ]
        },
        interaction: { type: 'choice', title: 'Aproxima ou afasta?', options: [['Sufusão conjuntival', true, 'Aproxima leptospirose.'], ['Macaco sentinela em mata', false, 'Aproximaria febre amarela.'], ['Creatinina 2,5 + K 3,1', true, 'Aproxima leptospirose.']] },
        notConfuse: ['febre amarela × leptospirose como doenças parecidas', 'icterícia × diagnóstico', 'canalicular × hepatocelular grave'],
        trap: 'A pergunta não é qual doença tem icterícia; é qual padrão explica todos os dados.'
      },
      {
        id: 'feb-08',
        svg: 'Ciclo epidemiológico da leptospirose',
        title: 'Leptospirose: agente, reservatório e transmissão',
        question: 'Por que limpeza urbana, enchente e esgoto pesam tanto?',
        objective: 'Fixar Leptospira interrogans, espiroqueta, rato/camundongo e urina contaminada.',
        core: [
          'Leptospirose é causada por Leptospira interrogans, bactéria espiroqueta.',
          'Ratos/camundongos atuam como reservatórios; a transmissão ocorre por urina e água/solo contaminados.',
          'Enchente, esgoto, limpeza urbana e construção civil são exposições de risco.',
          'Não é arbovirose e não depende de mosquito.',
          'A epidemiologia pesa antes mesmo da confirmação específica.'
        ],
        hotspots: ['Leptospira interrogans', 'espiroqueta', 'rato/camundongo', 'urina', 'enchente', 'esgoto', 'limpeza urbana'],
        table: {
          title: 'Agente × reservatório × transmissão × exposição',
          headers: ['Item', 'Leptospirose', 'Erro comum'],
          rows: [
            ['Agente', 'Leptospira interrogans', 'Chamar de vírus/arbovirose'],
            ['Reservatório', 'Rato/camundongo', 'Confundir com vetor'],
            ['Transmissão', 'Urina/água contaminada', 'Procurar mosquito'],
            ['Exposição', 'Enchente, esgoto, limpeza urbana', 'Ignorar ocupação']
          ]
        },
        interaction: { type: 'choice', title: 'Simulador epidemiológico', options: [['Limpeza urbana + esgoto', true, 'Pista forte.'], ['Aedes aegypti', false, 'Não é leptospirose.'], ['Urina de rato em água contaminada', true, 'Pista central.']] },
        notConfuse: ['leptospirose arbovirose × bactéria espiroqueta', 'vetor × reservatório', 'rato × transmissão direta simplista'],
        trap: 'A exposição ocupacional não é detalhe; ela reorganiza a hipótese.'
      },
      {
        id: 'feb-09',
        svg: 'Assinatura corporal da leptospirose anictérica',
        title: 'Leptospirose anictérica: sufusão e panturrilha',
        question: 'Quais sinais corporais não devem ser chamados de conjuntivite comum?',
        objective: 'Diferenciar forma anictérica, sufusão conjuntival e mialgia de panturrilha.',
        core: [
          'Forma anictérica pode ter febre, cefaleia, mialgia e curso menos dramático.',
          'Sufusão conjuntival é vermelhidão ocular sem secreção purulenta típica de conjuntivite bacteriana.',
          'Mialgia de panturrilha é pista clássica e deve ser procurada ativamente.',
          'Vasculite infecciosa explica parte da assinatura corporal.',
          'Meningite asséptica pode aparecer e confundir.'
        ],
        hotspots: ['forma anictérica', 'sufusão conjuntival', 'sem secreção', 'panturrilha', 'vasculite', 'meningite asséptica'],
        table: {
          title: 'Leptospirose anictérica × síndrome de Weil',
          headers: ['Forma', 'Pista', 'Risco'],
          rows: [
            ['Anictérica', 'Febre, mialgia, sufusão', 'Pode evoluir ou resolver'],
            ['Weil', 'Icterícia, rim, hemorragia', 'Grave'],
            ['Sufusão', 'Olho vermelho sem secreção típica', 'Não é conjuntivite simples'],
            ['Panturrilha', 'Mialgia característica', 'Ajuda no diagnóstico']
          ]
        },
        interaction: { type: 'choice', title: 'Dengue, conjuntivite ou leptospirose?', options: [['Olho vermelho sem secreção + panturrilha', true, 'Puxa leptospirose.'], ['Exantema pruriginoso leve', false, 'Pode puxar zika/dengue conforme contexto.'], ['Secreção purulenta isolada', false, 'Pensa conjuntivite comum.']] },
        notConfuse: ['sufusão conjuntival × conjuntivite simples', 'panturrilha × mialgia inespecífica', 'anictérica × leve sempre inofensiva'],
        trap: 'Sufusão não é enfeite semiológico; é pista forte.'
      },
      {
        id: 'feb-10',
        svg: 'Síndrome pulmão-rim da leptospirose grave',
        title: 'Síndrome de Weil: leptospirose ictero-hemorrágica',
        question: 'Quando a leptospirose vira emergência sistêmica?',
        objective: 'Fixar icterícia rubínica, pulmão-rim, hemoptise e gravidade.',
        core: [
          'Síndrome de Weil é forma grave, cerca de 10% dos casos conforme o conteúdo-base.',
          'Icterícia rubínica, insuficiência renal, hemorragia e alterações pulmonares compõem a gravidade.',
          'Síndrome pulmão-rim aparece quando hemoptise/hemorragia alveolar e IRA coexistem.',
          'Goodpasture e granulomatose com poliangiite entram como diferenciais conceituais de pulmão-rim, mas o caso com esgoto, sufusão e tubulopatia puxa leptospirose.',
          'Plaquetopenia pode ocorrer, mas o eixo é vasculite, rim, pulmão e padrão canalicular.',
          'A conduta passa a lembrar antibiótico EV, suporte intensivo e diálise precoce quando indicada.'
        ],
        hotspots: ['Weil 10%', 'icterícia rubínica', 'IRA', 'hemoptise', 'hemorragia alveolar', 'pulmão-rim', 'Goodpasture/GPA', 'suporte intensivo'],
        table: {
          title: 'Febre amarela grave × leptospirose grave',
          headers: ['Eixo', 'Febre amarela', 'Leptospirose'],
          rows: [
            ['Fígado', 'AST/ALT muito altas', 'Padrão mais canalicular'],
            ['Rim', 'Creatinina alta na grave', 'Tubulopatia com K baixo'],
            ['Pulmão', 'Menos central', 'Hemoptise/hemorragia alveolar'],
            ['Tratamento', 'Suporte', 'Penicilina cristalina EV + suporte']
          ]
        },
        interaction: { type: 'choice', title: 'Anictérica ou Weil?', options: [['Sufusão + panturrilha sem icterícia', false, 'Forma anictérica.'], ['Icterícia rubínica + IRA + hemoptise', true, 'Síndrome de Weil.'], ['AST/ALT 2.000 + mata/não vacinado', false, 'Puxa febre amarela grave.']] },
        notConfuse: ['síndrome de Weil × forma leve', 'icterícia rubínica × icterícia comum', 'hemoptise × detalhe menor'],
        trap: 'Hemoptise em leptospirose grave muda a urgência.'
      },
      {
        id: 'feb-11',
        svg: 'Painel laboratorial da leptospirose',
        title: 'Laboratório da leptospirose: colestase, tubulopatia e CPK',
        question: 'Por que creatinina alta com K baixo é tão útil?',
        objective: 'Explicar padrão canalicular, BD, FA/GGT, CPK e tubulopatia.',
        core: [
          'Leptospirose grave pode ter bilirrubina direta elevada com FA/GGT elevadas, sugerindo padrão colestático/canalicular.',
          'Creatinina alta com potássio baixo ou inapropriadamente normal sugere tubulopatia.',
          'CPK pode subir por lesão muscular e conversa com mialgia de panturrilha.',
          'Leucocitose com desvio afasta dengue típica e ajuda no caso-guia.',
          'Microaglutinação é teste específico lembrado para confirmação.'
        ],
        hotspots: ['BD', 'FA/GGT', 'creatinina', 'K baixo', 'tubulopatia', 'CPK', 'leucocitose', 'microaglutinação'],
        table: {
          title: 'Achado laboratorial × mecanismo × pegadinha',
          headers: ['Achado', 'Mecanismo', 'Pegadinha'],
          rows: [
            ['BD + FA/GGT', 'Canalicular/colestático', 'Chamar de hepatocelular puro'],
            ['Creatinina alta + K baixo', 'Tubulopatia', 'Esperar hipercalemia obrigatória'],
            ['CPK elevada', 'Lesão muscular', 'Ignorar panturrilha'],
            ['Leucocitose', 'Resposta bacteriana/inflamatória', 'Forçar dengue típica'],
            ['Microaglutinação', 'Confirmação específica', 'Trocar por cultura rotineira']
          ]
        },
        interaction: { type: 'lab-lepto', title: 'Jogo laboratorial da leptospirose' },
        notConfuse: ['creatinina alta + K baixo × IRA comum', 'BD × BI', 'microaglutinação × cultura de rotina'],
        trap: 'Rim ruim com potássio baixo é pista, não contradição.'
      },
      {
        id: 'feb-12',
        svg: 'Suspeita de leptospirose → diagnóstico → tratamento',
        title: 'Diagnóstico, microaglutinação, tratamento e fechamento do caso',
        question: 'Qual tratamento muda conduta agora?',
        objective: 'Separar tratamento leve, grave, alternativas e erro da benzatina.',
        core: [
          'Na forma leve, doxiciclina ou amoxicilina entram como opções lembradas.',
          'Na forma grave, o tratamento central é penicilina cristalina EV; ceftriaxona pode ser alternativa.',
          'Penicilina benzatina é erro para leptospirose grave.',
          'O antibiótico é idealmente precoce, mas suspeita tardia com gravidade ainda exige tratamento e suporte.',
          'Diálise precoce deve ser lembrada quando indicada no contexto de IRA grave.',
          'O caso fecha como leptospirose grave/síndrome de Weil pelo conjunto clínico-laboratorial.'
        ],
        hotspots: ['doxiciclina', 'amoxicilina', 'penicilina cristalina EV', 'benzatina erro', 'ceftriaxona', 'diálise precoce', 'fechamento'],
        table: {
          title: 'Tratamento: febre amarela × leptospirose leve × grave',
          headers: ['Situação', 'Tratamento', 'Pegadinha'],
          rows: [
            ['Febre amarela', 'Suporte', 'Não inventar antiviral estabelecido'],
            ['Leptospirose leve', 'Doxiciclina ou amoxicilina', 'Não tratar como arbovirose'],
            ['Leptospirose grave', 'Penicilina cristalina EV', 'Não usar benzatina'],
            ['Alternativa', 'Ceftriaxona', 'Contexto clínico'],
            ['IRA grave', 'Diálise precoce se indicada', 'Não atrasar suporte']
          ]
        },
        interaction: { type: 'choice', title: 'Feche o caso e escolha tratamento', options: [['Febre amarela: sofosbuvir obrigatório', false, 'Inconclusivo.'], ['Leptospirose grave: penicilina cristalina EV', true, 'Correto.'], ['Leptospirose grave: benzatina', false, 'Erro clássico.'], ['Suporte intensivo e diálise se indicada', true, 'Correto.']] },
        notConfuse: ['penicilina cristalina × benzatina', 'antibiótico tardio × não tratar', 'suporte × tratamento específico'],
        trap: 'Benzatina aparece como armadilha de nome, não como escolha grave.'
      },
      {
        id: 'feb-13',
        svg: 'Mapa mental final: síndrome febril ictérica',
        title: 'Comparador final, simulador integrador e revisão ativa',
        question: 'Você diferencia icterícia por padrão ou por palpite?',
        objective: 'Consolidar febre amarela, leptospirose, hepatite, malária e dengue grave.',
        core: [
          'A síndrome febril ictérica exige separar hepatocelular, canalicular e hemolítico.',
          'Febre amarela grave: mata/não vacinado, Faget, AST/ALT muito altas, AST > ALT, rim e suporte.',
          'Leptospirose grave: exposição, sufusão, BD/FA/GGT, creatinina alta + K baixo, hemoptise e antibiótico EV.',
          'Hepatite viral e malária continuam no diferencial por padrões próprios.',
          'A revisão ativa compara doenças em vez de testar fatos isolados.'
        ],
        hotspots: ['hepatocelular', 'canalicular', 'hemolítico', 'febre amarela', 'leptospirose', 'hepatite', 'malária', 'dengue grave'],
        table: {
          title: 'Mapa de fidelidade febril ictérico',
          headers: ['Bloco', 'Página', 'Componente'],
          rows: [
            ['Caso-guia', 'Página 1', 'Simulador de pistas'],
            ['Padrões laboratoriais', 'Página 2 e 11', 'Classificador lab'],
            ['Febre amarela', 'Páginas 3–7', 'Ciclos, Faget e suporte'],
            ['Leptospirose', 'Páginas 8–12', 'Exposição, Weil e tratamento'],
            ['Integração', 'Página 13', 'Simulador final']
          ]
        },
        interaction: { type: 'final-icterica', title: 'Simulador ictérico final' },
        notConfuse: ['febre + icterícia × diagnóstico', 'febre amarela grave × leptospirose grave', 'hepatocelular × canalicular × hemolítico'],
        trap: 'A comparação final só funciona se o aluno não usar icterícia como atalho.'
      }
    ]
  },
  leish: {
    label: 'Leishmaniose Visceral / Calazar: quando febre arrastada parece hematologia',
    short: 'Leishmaniose',
    accent: '#7c3aed',
    route: 'lei-01',
    thesis: 'Febre há meses + baço gigante + pancitopenia + Crato/Ceará não é virose prolongada: é calazar até prova em contrário.',
    pages: [
      {
        id: 'lei-01',
        svg: 'Mapa inicial do caso: do consumo ao calazar',
        title: 'Caso-guia: febre arrastada, baço gigante e pancitopenia',
        question: 'Febre há meses, baço gigante e pancitopenia: hematologia ou calazar?',
        objective: 'Fazer o estudante sair da febre aguda e reconhecer infiltração do sistema reticuloendotelial.',
        core: [
          'Paciente de Crato, Ceará, com febre há meses, mal-estar, anorexia, perda ponderal e aspecto consumido.',
          'Aumento abdominal progressivo, possível icterícia, fígado a 4 cm do rebordo costal direito e baço a 10 cm do rebordo costal esquerdo.',
          'Anemia, leucopenia e plaquetopenia formam pancitopenia.',
          'Albumina 2,1 e globulina 5,5 indicam inversão albumina-globulina e hipergamaglobulinemia.',
          'O padrão policlonal, a epidemiologia e o baço de grande monta reposicionam o caso para leishmaniose visceral/calazar.'
        ],
        hotspots: ['Crato/Ceará', 'febre há meses', 'baço 10 cm', 'fígado 4 cm', 'pancitopenia', 'albumina 2,1', 'globulina 5,5', 'policlonal', 'armadilha hematológica'],
        table: {
          title: 'Achados do caso × interpretação × contribuição para calazar',
          headers: ['Achado', 'Interpretação', 'Peso'],
          rows: [
            ['Meses de febre', 'Febre arrastada', 'Sai da dengue'],
            ['Baço a 10 cm', 'Esplenomegalia de grande monta', 'Sistema reticuloendotelial'],
            ['Pancitopenia', 'Medula envolvida', 'Armadilha hematológica'],
            ['Albumina baixa + globulina alta', 'Inversão A/G', 'Resposta crônica'],
            ['Crato/Ceará', 'Área endêmica', 'Calazar sobe']
          ]
        },
        interaction: { type: 'case-leish', title: 'Qual dado muda o rumo?' },
        notConfuse: ['febre arrastada não é dengue prolongada', 'plaquetopenia não significa dengue', 'Crato/Ceará não é detalhe narrativo'],
        trap: 'A hipótese hematológica é plausível, mas não pode apagar calazar em área endêmica.'
      },
      {
        id: 'lei-02',
        svg: 'Relógio clínico: febre aguda de dias × febre arrastada de meses',
        title: 'Síndrome febril arrastada com esplenomegalia',
        question: 'Como o tempo muda a gaveta diagnóstica?',
        objective: 'Diferenciar febre aguda de febre crônica/arrastada e conectar baço/pancitopenia.',
        core: [
          'Febre de dias orienta dengue, febre amarela, leptospirose, hepatites e malária conforme padrão.',
          'Febre de semanas ou meses com consumo muda o eixo para infecção crônica, hematologia e doenças sistêmicas.',
          'Baço gigante com pancitopenia sugere acometimento do sistema reticuloendotelial ou doença hematológica.',
          'Calazar entra forte quando epidemiologia e padrão policlonal completam o quadro.',
          'O raciocínio começa pelo tempo antes de escolher exame.'
        ],
        hotspots: ['dias', 'meses', 'consumo', 'baço gigante', 'pancitopenia', 'infecção crônica', 'hematologia'],
        table: {
          title: 'Febre aguda × febre arrastada',
          headers: ['Eixo', 'Aguda', 'Arrastada'],
          rows: [
            ['Tempo', 'Dias', 'Semanas/meses'],
            ['Exemplo', 'Dengue/leptospirose/febre amarela', 'Calazar/hematologia'],
            ['Laboratório', 'Plaquetopenia ou padrão ictérico', 'Pancitopenia e policlonal'],
            ['Exame físico', 'Perfusão/icterícia', 'Baço gigante e consumo']
          ]
        },
        interaction: { type: 'choice', title: 'Aguda ou arrastada?', options: [['Febre há 3 dias + dor retro-orbital', false, 'Eixo agudo.'], ['Febre há meses + baço a 10 cm', true, 'Eixo arrastado.'], ['Febre há 10 dias + icterícia', false, 'Eixo ictérico agudo/subagudo.']] },
        notConfuse: ['febre aguda × febre arrastada', 'dengue pela plaqueta × calazar por pancitopenia', 'meses × virose prolongada'],
        trap: 'Meses de febre exigem outra arquitetura mental.'
      },
      {
        id: 'lei-03',
        svg: 'Balança diagnóstica: hematologia × gamopatia × calazar',
        title: 'A armadilha hematológica: câncer, mieloma ou infecção crônica?',
        question: 'Por que o caso parece hematologia e ainda assim pode ser calazar?',
        objective: 'Comparar neoplasia hematológica, mieloma/gamopatia, esquistossomose/hipertensão portal, Chagas aguda e calazar.',
        core: [
          'Febre, perda ponderal, baço grande e pancitopenia fazem neoplasia hematológica subir.',
          'Globulina alta pode puxar mieloma/gamopatia, mas o detalhe é policlonal versus monoclonal.',
          'Calazar explica febre arrastada, baço de grande monta, pancitopenia e hipergamaglobulinemia policlonal.',
          'Esquistossomose/hipertensão portal e Chagas aguda entram em diferenciais, mas precisam de eixo próprio.',
          'A chave é não fechar prematuramente por aparência hematológica.'
        ],
        hotspots: ['neoplasia hematológica', 'mieloma', 'policlonal', 'monoclonal', 'baço gigante', 'pancitopenia', 'calazar'],
        table: {
          title: 'Leishmaniose visceral × hematologia × gamopatia × outros',
          headers: ['Hipótese', 'A favor', 'Contra/alerta'],
          rows: [
            ['Calazar', 'Endemia + policlonal + baço + pancitopenia', 'Confirmar parasitológico/sorologias'],
            ['Neoplasia hematológica', 'Consumo + baço + citopenias', 'Epidemiologia pode mudar rumo'],
            ['Mieloma/gamopatia', 'Globulina elevada', 'Monoclonal, não policlonal'],
            ['Esquistossomose/hipertensão portal', 'Baço aumentado', 'Outro padrão epidemiológico'],
            ['Chagas aguda', 'Febre e hepatoespleno', 'Outro vetor/contexto']
          ]
        },
        interaction: { type: 'polyclonal', title: 'Policlonal × monoclonal' },
        notConfuse: ['baço grande + pancitopenia × câncer obrigatório', 'hipergamaglobulinemia × mieloma obrigatório', 'policlonal × monoclonal'],
        trap: 'Globulina alta não é sinônimo de mieloma; o padrão policlonal muda tudo.'
      },
      {
        id: 'lei-04',
        svg: 'Mapa epidemiológico do calazar no Brasil',
        title: 'Epidemiologia: por que Crato/Ceará importa?',
        question: 'Quando o endereço clínico vira pista diagnóstica?',
        objective: 'Valorizar área endêmica, Ceará, Bahia, Minas Gerais, urbanização e periurbanização.',
        core: [
          'Crato, Ceará, é pista forte para área endêmica de leishmaniose visceral.',
          'Ceará, Bahia e Minas Gerais entram como áreas importantes no mapa mental do calazar.',
          'A doença sofreu urbanização/periurbanização, aproximando cão, vetor e humano.',
          'Epidemiologia sozinha não fecha, mas completa o conjunto febre arrastada + baço + pancitopenia.',
          'A pista geográfica evita tratar meses de febre como arbovirose prolongada.'
        ],
        hotspots: ['Crato', 'Ceará', 'Bahia', 'Minas Gerais', 'endemia', 'urbanização', 'periurbanização'],
        table: {
          title: 'Dado epidemiológico × interpretação × peso',
          headers: ['Dado', 'Interpretação', 'Peso no raciocínio'],
          rows: [
            ['Crato/Ceará', 'Área endêmica', 'Muito forte'],
            ['Bahia/Minas Gerais', 'Mapa de risco relevante', 'Contextual'],
            ['Cão em área urbana/periurbana', 'Reservatório próximo', 'Aumenta suspeita'],
            ['Sem dado endêmico', 'Não exclui', 'Exige mais confirmação']
          ]
        },
        interaction: { type: 'choice', title: 'Quiz geográfico', options: [['Crato/Ceará com quadro compatível', true, 'Pista forte.'], ['Localidade é irrelevante', false, 'Endemia pesa.'], ['Endemia fecha sem clínica', false, 'Não fecha isoladamente.']] },
        notConfuse: ['epidemiologia × diagnóstico final', 'área endêmica × coincidência narrativa', 'urbano/periurbano × doença só rural'],
        trap: 'A cidade não é cenário; é dado diagnóstico.'
      },
      {
        id: 'lei-05',
        svg: 'Leishmaniose visceral × tegumentar: territórios diferentes',
        title: 'Nome, agente etiológico e diferença entre espécies',
        question: 'Por que visceral não é tegumentar com baço?',
        objective: 'Diferenciar calazar, Leishmania chagasi/infantum e Leishmania braziliensis.',
        core: [
          'Calazar é o nome clássico da leishmaniose visceral.',
          'Leishmania chagasi/infantum é o eixo da visceral no conteúdo-base.',
          'Leishmania braziliensis se relaciona mais à tegumentar, outro território clínico.',
          'Leishmaniose visceral acomete fígado, baço e medula; tegumentar envolve pele/mucosa.',
          'O agente é protozoário, não bactéria nem vírus.'
        ],
        hotspots: ['calazar', 'visceral', 'chagasi/infantum', 'braziliensis', 'tegumentar', 'protozoário', 'fígado/baço/medula'],
        table: {
          title: 'Visceral/calazar × tegumentar',
          headers: ['Eixo', 'Visceral', 'Tegumentar'],
          rows: [
            ['Nome clássico', 'Calazar', 'Tegumentar'],
            ['Espécie-chave', 'chagasi/infantum', 'braziliensis'],
            ['Território', 'Fígado, baço, medula', 'Pele/mucosa'],
            ['Síndrome', 'Febre arrastada + baço + pancitopenia', 'Lesões cutâneas/mucosas']
          ]
        },
        interaction: { type: 'choice', title: 'Classificador espécie/quadro', options: [['chagasi/infantum + baço/medula', true, 'Visceral.'], ['braziliensis + lesão cutânea', false, 'Tegumentar.'], ['Calazar = bactéria', false, 'É protozoário.']] },
        notConfuse: ['visceral × tegumentar', 'chagasi/infantum × braziliensis', 'protozoário × bactéria × vírus'],
        trap: 'Leishmaniose não é uma entidade única no exame: o território muda o raciocínio.'
      },
      {
        id: 'lei-06',
        svg: 'Ciclo epidemiológico do calazar',
        title: 'Vetor e reservatórios: mosquito-palha, raposa e cão',
        question: 'Quem pica, quem mantém e quem sinaliza?',
        objective: 'Separar Lutzomyia longipalpis, flebotomíneo/mosquito-palha, raposa, cão e humano.',
        core: [
          'Lutzomyia longipalpis é o flebotomíneo, popularmente mosquito-palha, envolvido no ciclo.',
          'Raposa e cão são reservatórios relevantes; o cão também funciona como sentinela/reservatório urbano-periurbano.',
          'O vetor pica; o reservatório mantém o ciclo.',
          'Urbanização/periurbanização aproxima humanos, cães e flebotomíneos.',
          'Não confundir Lutzomyia com Aedes.'
        ],
        hotspots: ['Lutzomyia longipalpis', 'flebotomíneo', 'mosquito-palha', 'raposa', 'cão', 'sentinela', 'Aedes não'],
        table: {
          title: 'Agente × vetor × reservatórios × transmissão',
          headers: ['Elemento', 'Calazar', 'Função'],
          rows: [
            ['Agente', 'Leishmania chagasi/infantum', 'Protozoário'],
            ['Vetor', 'Lutzomyia longipalpis', 'Transmissão pela picada'],
            ['Nome popular', 'Mosquito-palha', 'Flebotomíneo'],
            ['Reservatórios', 'Raposa e cão', 'Mantêm ciclo'],
            ['Humano', 'Hospedeiro acometido', 'Quadro visceral']
          ]
        },
        interaction: { type: 'choice', title: 'Vetor × reservatório', options: [['Lutzomyia pica', true, 'Vetor.'], ['Cão é vetor principal', false, 'Cão é reservatório/sentinela.'], ['Raposa é reservatório', true, 'Correto.'], ['Aedes transmite calazar', false, 'Erro.']] },
        notConfuse: ['vetor × reservatório', 'Lutzomyia × Aedes', 'cão sentinela/reservatório × vetor'],
        trap: 'Cão não é mosquito; o ciclo precisa de papéis separados.'
      },
      {
        id: 'lei-07',
        svg: 'Leishmania → macrófago infectado → fígado/baço/medula → clínica',
        title: 'Fisiopatologia: a doença do macrófago',
        question: 'Como um protozoário explica baço, medula e citopenias?',
        objective: 'Conectar macrófagos infectados, sistema reticuloendotelial, fígado, baço e medula.',
        core: [
          'Leishmaniose visceral é doença de macrófagos infectados.',
          'O sistema reticuloendotelial envolve fígado, baço e medula óssea, justamente os órgãos do caso.',
          'Infiltração de baço e fígado explica hepatoesplenomegalia.',
          'Envolvimento de medula e hiperesplenismo ajudam a explicar pancitopenia.',
          'A fisiopatologia dá unidade ao quadro: febre arrastada, consumo, baço gigante e citopenias.'
        ],
        hotspots: ['macrófago', 'sistema reticuloendotelial', 'fígado', 'baço', 'medula', 'pancitopenia', 'consumo'],
        table: {
          title: 'Manifestação × mecanismo fisiopatológico',
          headers: ['Manifestação', 'Mecanismo', 'Conexão'],
          rows: [
            ['Febre arrastada', 'Infecção crônica', 'Inflamação persistente'],
            ['Baço gigante', 'Infiltração/reticuloendotelial', 'Esplenomegalia'],
            ['Pancitopenia', 'Medula + hiperesplenismo', 'Três linhagens baixas'],
            ['Fígado aumentado', 'Sistema reticuloendotelial', 'Hepatomegalia'],
            ['Consumo', 'Doença crônica sistêmica', 'Perda ponderal']
          ]
        },
        interaction: { type: 'organ', title: 'Clique no órgão e veja a manifestação' },
        notConfuse: ['muito baço × doença só hematológica', 'macrófago × neutrófilo como eixo', 'medula × plaqueta isolada'],
        trap: 'Pancitopenia não é detalhe; é consequência anatômico-funcional do quadro.'
      },
      {
        id: 'lei-08',
        svg: 'Resposta celular falha × resposta humoral exagerada',
        title: 'Imunidade celular versus humoral',
        question: 'Por que muita globulina não significa boa proteção?',
        objective: 'Explicar falha celular, resposta humoral exagerada, policlonal e inversão albumina-globulina.',
        core: [
          'Controle da leishmaniose depende de imunidade celular efetiva contra parasitas em macrófagos.',
          'Na visceral ativa, a resposta celular falha e a resposta humoral fica exagerada.',
          'Isso gera hipergamaglobulinemia policlonal, globulina alta e inversão albumina-globulina.',
          'Muitos anticorpos não resolvem a doença quando o problema central é celular/macrofágico.',
          'Policlonal difere de monoclonal, que puxa gamopatia/mieloma.'
        ],
        hotspots: ['imunidade celular', 'humoral', 'globulina alta', 'policlonal', 'monoclonal', 'inversão A/G', 'anticorpos não protegem'],
        table: {
          title: 'Imunidade celular × humoral',
          headers: ['Eixo', 'Na leishmaniose visceral', 'Pegadinha'],
          rows: [
            ['Celular', 'Falha no controle em macrófagos', 'É o eixo protetor'],
            ['Humoral', 'Exagerada', 'Não resolve sozinha'],
            ['Policlonal', 'Resposta ampla/inflamatória', 'Não é mieloma típico'],
            ['Monoclonal', 'Clone único', 'Sugere gamopatia']
          ]
        },
        interaction: { type: 'polyclonal', title: 'Eletroforese policlonal × monoclonal' },
        notConfuse: ['imunidade celular × humoral', 'muito anticorpo × proteção eficaz', 'policlonal × mieloma'],
        trap: 'Globulina alta precisa de padrão; sem isso, o aluno cai na armadilha do mieloma.'
      },
      {
        id: 'lei-09',
        svg: 'Montenegro: negativo na visceral ativa, positivo após recuperação',
        title: 'Reação de Montenegro e paradoxos da imunidade celular',
        question: 'Por que Montenegro negativo não exclui calazar?',
        objective: 'Ensinar Montenegro na visceral ativa, pós-tratamento e tegumentar.',
        core: [
          'Montenegro avalia resposta celular tardia.',
          'Na leishmaniose visceral ativa, pode ser negativo pela falha de imunidade celular.',
          'Após recuperação/tratamento, pode positivar com retorno da resposta celular.',
          'Na tegumentar, tende a ter interpretação diferente pela resposta celular presente.',
          'Montenegro negativo não exclui calazar ativo.'
        ],
        hotspots: ['Montenegro', 'visceral ativa negativa', 'pós-tratamento', 'tegumentar', 'imunidade celular', 'não exclui'],
        table: {
          title: 'Reação de Montenegro',
          headers: ['Contexto', 'Resultado esperado', 'Interpretação'],
          rows: [
            ['Visceral ativa', 'Frequentemente negativo', 'Falha celular'],
            ['Pós-tratamento', 'Pode positivar', 'Recuperação celular'],
            ['Tegumentar', 'Tende a positivo', 'Resposta celular presente'],
            ['Sem contato', 'Negativo', 'Sem sensibilização']
          ]
        },
        interaction: { type: 'choice', title: 'Quiz Montenegro', options: [['Negativo exclui calazar ativo', false, 'Não exclui.'], ['Pode negativar na visceral ativa', true, 'Correto.'], ['Pode positivar após recuperação', true, 'Correto.']] },
        notConfuse: ['Montenegro × sorologia', 'Montenegro negativo × exclusão de calazar', 'visceral ativa × tegumentar'],
        trap: 'O teste que mede imunidade celular pode falhar justamente quando a imunidade celular falha.'
      },
      {
        id: 'lei-10',
        svg: 'Macrófago com amastigotas + medula versus baço',
        title: 'Diagnóstico parasitológico: amastigotas, medula e baço',
        question: 'Onde procurar o parasita e qual risco aceitar?',
        objective: 'Separar amastigotas, aspirado de medula, punção esplênica e sensibilidade.',
        core: [
          'A forma procurada em tecido é amastigota dentro de macrófagos.',
          'Promastigota é a forma flagelada lembrada no vetor/cultura; amastigota é a forma intracelular que o aluno deve procurar no tecido.',
          'Aspirado de medula é método preferencial por equilíbrio entre utilidade e segurança; sensibilidade em torno de 70% se esse número for usado.',
          'Punção esplênica é mais sensível, mas tem risco de sangramento.',
          'Método preferencial e método mais sensível não são a mesma coisa.',
          'O diagnóstico deve respeitar risco, recurso e probabilidade pré-teste.'
        ],
        hotspots: ['amastigotas', 'promastigota', 'macrófago', 'aspirado de medula', 'preferencial', 'punção esplênica', 'mais sensível', 'sangramento'],
        table: {
          title: 'Aspirado de medula × punção esplênica × sorologia',
          headers: ['Método', 'Vantagem', 'Limite'],
          rows: [
            ['Amastigota', 'Forma intracelular em tecido', 'Não confundir com promastigota'],
            ['Aspirado de medula', 'Preferencial e mais seguro', 'Sensibilidade menor que baço'],
            ['Punção esplênica', 'Mais sensível', 'Risco de sangramento'],
            ['Sorologias', 'Apoio diagnóstico', 'Cautela em imunossuprimido'],
            ['Amastigotas', 'Confirma parasita', 'Depende de coleta/leitura']
          ]
        },
        interaction: { type: 'choice', title: 'Preferencial ou mais sensível?', options: [['Medula = preferencial', true, 'Correto.'], ['Baço = mais sensível e sem risco', false, 'Mais sensível, mas arriscado.'], ['Sorologia sempre confirma em qualquer contexto', false, 'Cautela em imunossuprimidos.']] },
        notConfuse: ['método preferencial × mais sensível', 'aspirado de medula × punção esplênica', 'amastigota × promastigota'],
        trap: 'Mais sensível não significa automaticamente melhor para todo paciente.'
      },
      {
        id: 'lei-11',
        svg: 'Fluxo diagnóstico: suspeita → parasitológico → sorologias → cautela',
        title: 'Sorologias, imunofluorescência, rK39 e imunossupressão',
        question: 'Quando a sorologia ajuda e quando ela pode enganar?',
        objective: 'Organizar imunofluorescência, rK39, parasitológico e perda de acurácia em HIV/imunossupressão.',
        core: [
          'Imunofluorescência e rK39 são testes sorológicos úteis, mas precisam de contexto.',
          'Parasitológico confirma ao demonstrar o parasita.',
          'Em HIV/imunossupressão, testes sorológicos podem perder acurácia.',
          'Montenegro também exige ressalvas e não substitui o raciocínio principal.',
          'Diagnóstico em camadas reduz erro entre calazar, hematologia e gamopatias.'
        ],
        hotspots: ['imunofluorescência', 'rK39', 'parasitológico', 'HIV', 'imunossupressão', 'perda de acurácia', 'camadas'],
        table: {
          title: 'Imunofluorescência × rK39 × parasitológico × Montenegro',
          headers: ['Teste', 'Papel', 'Cautela'],
          rows: [
            ['Imunofluorescência', 'Sorologia de apoio', 'Contexto e imunidade'],
            ['rK39', 'Teste sorológico útil', 'Pode perder desempenho'],
            ['Parasitológico', 'Confirma parasita', 'Coleta invasiva'],
            ['Montenegro', 'Resposta celular', 'Pode ser negativo na visceral ativa'],
            ['Imunossupressão/HIV', 'Altera testes', 'Cautela diagnóstica']
          ]
        },
        interaction: { type: 'choice', title: 'Cautela no imunossuprimido', options: [['Sorologia negativa exclui em HIV', false, 'Não exclui com segurança.'], ['Parasitológico demonstra parasita', true, 'Confirma quando positivo.'], ['rK39 deve ser contextualizado', true, 'Correto.']] },
        notConfuse: ['sorologia positiva × confirmação parasitológica', 'rK39/imunofluorescência × imunossupressão', 'Montenegro × sorologia'],
        trap: 'No imunossuprimido, teste negativo pode ser armadilha.'
      },
      {
        id: 'lei-12',
        svg: 'Antimonial pentavalente × anfotericina B lipossomal',
        title: 'Tratamento: antimonial pentavalente versus anfotericina B lipossomal',
        question: 'Quando a melhor escolha individual supera custo-efetividade populacional?',
        objective: 'Preservar Glucantime, QT/torsades, anfotericina lipossomal e Gs/Is.',
        core: [
          'Antimonial pentavalente/Glucantime é custo-efetivo em cenário populacional, mas exige atenção a toxicidade.',
          'Cardiotoxicidade com QT prolongado pode evoluir para torsades de pointes e fibrilação ventricular; ECG seriado é cautela didática.',
          'Macrolídeos, hidroxicloroquina e distúrbios eletrolíticos também podem pesar no QT e devem ser lembrados na decisão de segurança.',
          'Anfotericina B lipossomal ganha preferência em grupos de maior risco.',
          'Gs e Is: grave, gestante; imunossupressão/HIV/imunossupressores, idade <1 ano, idade >50 anos, insuficiência hepática, cardíaca ou renal, intolerância, insucesso/falha ou efeitos adversos.',
          'Não inventar dose: o eixo é indicação e segurança.'
        ],
        hotspots: ['Glucantime', 'QT prolongado', 'torsades', 'ECG', 'macrolídeos/hidroxicloroquina', 'lipossomal', 'grave', 'gestante', '<1 e >50', 'insuficiências'],
        table: {
          title: 'Antimonial × anfotericina lipossomal',
          headers: ['Opção', 'Quando pesa', 'Alerta'],
          rows: [
            ['Antimonial/Glucantime', 'Custo-efetividade populacional', 'QT/torsades/ECG'],
            ['Lipossomal', 'Grave, gestante, imunossuprimido/HIV', 'Melhor em grupos de risco'],
            ['Idade extrema', '<1 ano ou >50 anos', 'Indica lipossomal'],
            ['Insuficiências', 'Hepática, cardíaca, renal', 'Evitar toxicidade'],
            ['Falha/intolerância', 'Troca terapêutica', 'Individualizar']
          ]
        },
        interaction: { type: 'treatment-leish', title: 'Antimonial ou lipossomal?' },
        notConfuse: ['antimonial custo-efetivo × melhor para todos', 'QT prolongado × efeito menor', 'lipossomal × apenas resgate'],
        trap: 'Custo-efetivo para muitos não significa melhor para cada paciente de alto risco.'
      },
      {
        id: 'lei-13',
        svg: 'Mapa mental final: calazar como infecção crônica reticuloendotelial',
        title: 'Fechamento integrador, simulador final e revisão ativa',
        question: 'Hematologia ou calazar?',
        objective: 'Integrar tempo, epidemiologia, baço, pancitopenia, policlonal, diagnóstico e tratamento.',
        core: [
          'Febre arrastada, consumo, baço gigante, pancitopenia, inversão A/G e Crato/Ceará formam o padrão do calazar.',
          'A armadilha hematológica é real, mas a epidemiologia e o padrão policlonal mudam o rumo.',
          'A fisiopatologia por macrófagos une fígado, baço e medula.',
          'Diagnóstico deve equilibrar medula, baço, sorologias e cautela no imunossuprimido.',
          'Tratamento diferencia antimonial e anfotericina lipossomal pelos Gs e Is.'
        ],
        hotspots: ['febre arrastada', 'baço gigante', 'pancitopenia', 'policlonal', 'macrófago', 'medula', 'Gs e Is', 'fechamento'],
        table: {
          title: 'Leishmaniose visceral: eixo clínico × mecanismo × diagnóstico × tratamento',
          headers: ['Eixo', 'Dado-chave', 'Decisão'],
          rows: [
            ['Clínico', 'Meses + baço + consumo', 'Suspeitar calazar'],
            ['Laboratorial', 'Pancitopenia + policlonal', 'Evitar mieloma automático'],
            ['Mecanismo', 'Macrófagos no reticuloendotelial', 'Explica órgãos'],
            ['Diagnóstico', 'Medula/sorologias/rK39', 'Cautela em imunossuprimido'],
            ['Tratamento', 'Antimonial × lipossomal', 'Gs e Is']
          ]
        },
        interaction: { type: 'final-leish', title: 'Hematologia ou calazar?' },
        notConfuse: ['calazar × neoplasia hematológica', 'pancitopenia × plaquetopenia isolada', 'policlonal × monoclonal'],
        trap: 'Calazar precisa saltar aos olhos quando tempo, baço, medula e endemia se alinham.'
      }
    ]
  }
};

const GLOBAL_CASES = [
  {
    title: 'Dengue com sinal de alarme',
    clues: ['febre aguda', 'dor retro-orbital', 'mialgia', 'plaquetopenia', 'dor abdominal intensa e contínua', 'bom estado geral'],
    answer: 'Dengue com sinal de alarme — grupo C',
    feedback: 'Bom estado geral não apaga sinal de alarme; internar e hidratar por via venosa.',
    target: 'den-06'
  },
  {
    title: 'Dengue grave',
    clues: ['suspeita de dengue', 'extremidades frias', 'TEC aumentado', 'PA convergente', 'pulso fino', 'choque'],
    answer: 'Dengue grave — grupo D',
    feedback: 'Pressão de pulso estreita, como 100 × 90, pode ser choque.',
    target: 'den-08'
  },
  {
    title: 'Leptospirose grave / síndrome de Weil',
    clues: ['10 dias', 'limpeza urbana', 'icterícia', 'sufusão conjuntival', 'creatinina alta', 'K baixo', 'hemoptise'],
    answer: 'Leptospirose grave',
    feedback: 'Febre + icterícia não é febre amarela automática; penicilina cristalina EV e suporte entram no raciocínio.',
    target: 'feb-12'
  },
  {
    title: 'Febre amarela grave',
    clues: ['mata/ecoturismo', 'não vacinado', 'icterícia', 'sangramento', 'oligúria', 'AST/ALT ≥2.000', 'AST > ALT'],
    answer: 'Febre amarela grave',
    feedback: 'O eixo é hepatorrenal grave; tratamento estabelecido é suporte.',
    target: 'feb-06'
  },
  {
    title: 'Leishmaniose visceral / calazar',
    clues: ['febre há meses', 'Crato/Ceará', 'baço 10 cm', 'pancitopenia', 'albumina baixa', 'globulina alta', 'policlonal'],
    answer: 'Leishmaniose visceral / calazar',
    feedback: 'Parece hematologia, mas endemia + policlonal + baço gigante mudam o rumo.',
    target: 'lei-01'
  },
  {
    title: 'Armadilha hematológica',
    clues: ['febre arrastada', 'perda ponderal', 'baço grande', 'pancitopenia', 'sem epidemiologia clara'],
    answer: 'Diferencial hematológico mantido',
    feedback: 'Nem todo baço grande é calazar; o padrão completo decide.',
    target: 'lei-03'
  },
  {
    title: 'Armadilha de mieloma/gamopatia',
    clues: ['globulina elevada', 'hipergamaglobulinemia', 'monoclonal versus policlonal', 'consumo'],
    answer: 'Depende do padrão: monoclonal sobe gamopatia; policlonal + endemia sobe calazar',
    feedback: 'Globulina alta isolada não é sinônimo de mieloma.',
    target: 'lei-08'
  },
  {
    title: 'Armadilha de hepatite viral',
    clues: ['febre + icterícia', 'transaminases elevadas', 'padrão hepatocelular', 'sem sufusão', 'sem K baixo'],
    answer: 'Hepatite viral entra forte no diferencial',
    feedback: 'Febre + icterícia é síndrome, não diagnóstico fechado.',
    target: 'feb-02'
  },
  {
    title: 'Armadilha de malária',
    clues: ['febre + icterícia', 'bilirrubina indireta', 'hemólise', 'exposição compatível'],
    answer: 'Malária como hipótese',
    feedback: 'BI/hemólise deslocam o eixo para padrão hemolítico.',
    target: 'matriz-global'
  }
];

const GLOBAL_MATRIX = [
  ['Dengue', 'Agudo', 'Febre sem foco/arbovirose', 'Flavivírus RNA', 'Aedes aegypti', 'Mialgia, dor retro-orbital, sinais de alarme', 'Leucopenia, plaquetopenia, Ht subindo se extravasamento', 'Plaquetopenia isolada como alarme', 'NS1/IgM conforme dia', 'A/B/C/D e hidratação', 'den-01'],
  ['Febre amarela', 'Agudo', 'Febril ictérica', 'Flavivírus RNA', 'Haemagogus/Sabethes; Aedes no urbano', 'Faget, icterícia, sangramento/oligúria', 'AST/ALT ≥2.000, AST > ALT, creatinina ≥2', 'AST > ALT = álcool automático', 'IgM ELISA/centro conforme tempo', 'Suporte', 'feb-03'],
  ['Leptospirose', 'Dias a cerca de 10 dias', 'Febril ictérica / Weil / pulmão-rim', 'Leptospira interrogans', 'Rato; urina/água contaminada', 'Sufusão, panturrilha, hemoptise', 'Leucocitose, BD, FA/GGT, creatinina alta + K baixo', 'Febre + icterícia = febre amarela', 'Microaglutinação', 'Penicilina cristalina EV na grave', 'feb-08'],
  ['Leishmaniose visceral', 'Meses', 'Febre arrastada com esplenomegalia', 'Leishmania chagasi/infantum', 'Lutzomyia; raposa/cão', 'Baço gigante, consumo, pancitopenia', 'Albumina baixa, globulina alta, policlonal', 'Neoplasia/mieloma automático', 'Aspirado de medula; sorologias complementares', 'Antimonial ou anfotericina lipossomal', 'lei-01']
];
