/* =========================================
   SINDROMES FEBRIS — RENDERIZADORES
   ========================================= */

window.GO_RENDER = {};

/* Helpers de HTML. Mantem a interface consistente com o template base. */
function pageHero(tag, title, sub, grad) {
  return `<div class="page-hero febris-hero" style="--grad-current:${grad}">
    <span class="page-hero-tag">${tag}</span>
    <h1>${title}</h1>
    <p class="subtitle">${sub}</p>
  </div>`;
}

function sectionHeader(icon, title, color) {
  return `<div class="section-header mb-24">
    <div class="section-icon" style="background:${color}20;color:${color}">${icon}</div>
    <h2>${title}</h2>
  </div>`;
}

function alertBox(type, title, text, icon) {
  return `<div class="alert ${type} mb-16">
    <span class="alert-icon">${icon}</span>
    <div class="alert-body">
      <div class="alert-title">${title}</div>
      <div class="alert-text">${text}</div>
    </div>
  </div>`;
}

function glassCard(content, extra = '') {
  return `<div class="glass-card ${extra}" style="padding:22px;margin-bottom:16px;">${content}</div>`;
}

function bodyText(text) {
  return `<p class="body-text">${text}</p>`;
}

function styledList(items) {
  return `<ul class="styled-list">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
}

function dataPage(id) {
  for (const module of Object.values(MODULE_DATA)) {
    const found = module.pages.find(page => page.id === id);
    if (found) return { page: found, module };
  }
  return null;
}

function tableHtml(table) {
  if (!table) return '';
  return `<div class="table-wrap mb-24">
    <table class="premium-table">
      <caption>${table.title}</caption>
      <thead><tr>${table.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${table.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
    </table>
  </div>`;
}

function escapeAttr(value) {
  return String(value).replaceAll('"', '&quot;');
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

/* Perfis do Prompt 3: cada página ganha ritmo, raciocínio e metáfora visual próprios. */
const PROMPT3_PROFILES = {
  'den-01': ['abertura clínica', 'triagem por risco', 'alta indevida apesar de dengue provável', 'dor abdominal persistente', 'Da pista ao diagnóstico', 'tree', 'Árvore febre sem foco → arbovirose → grupo C', 'case'],
  'den-02': ['epidemiológica', 'vetor, ambiente e incubação', 'confundir vetor com agente', 'exposição urbana dentro da incubação', 'Por que isso importa', 'cycle', 'Ciclo urbano Aedes-humanos-ambiente', 'map'],
  'den-03': ['fisiopatológica', 'sorotipos e imunofacilitação', 'achar que dengue se repete igual infinitamente', 'sorotipo diferente com anticorpo prévio', 'Interpretação passo a passo', 'immune', 'Mapa de anticorpos e sorotipos DENV', 'concept'],
  'den-04': ['fisiopatológica', 'extravasamento plasmático', 'supervalorizar plaqueta isolada', 'hematócrito progressivo com clínica', 'Do achado ao risco', 'vessel', 'Vaso com saída de plasma e terceiro espaço', 'physiology'],
  'den-05': ['leitura forte', 'cronologia e defervescência', 'interpretar queda da febre como alta automática', 'defervescência com alarme', 'Como pensar este caso', 'timeline', 'Linha do tempo febre → defervescência → fase crítica', 'timeline'],
  'den-06': ['decisão', 'sinais de alarme', 'bom estado geral apagando alarme', 'dor abdominal, vômitos, Ht subindo ou mucosa', 'Do achado ao risco', 'body', 'Corpo com sistemas dos sinais de alarme', 'decision'],
  'den-07': ['comparação', 'hierarquia do sangramento', 'tratar petéquia, mucosa e hemorragia como iguais', 'local e repercussão do sangramento', 'O erro que a banca quer provocar', 'ladder', 'Escada pele → mucosa → grave', 'compare'],
  'den-08': ['decisão', 'choque e grupo D', 'chamar choque de sinal leve', 'pressão convergente e perfusão ruim', 'Como a conduta muda', 'shock', 'Mapa de choque: pressão, pulso e perfusão', 'decision'],
  'den-09': ['laboratorial', 'janela NS1, IgM e IgG', 'pedir teste fora da janela', 'dia de doença mudando exame', 'Do laboratório à hipótese', 'lab', 'Painel temporal NS1/IgM/IgG', 'lab'],
  'den-10': ['decisão', 'prova do laço', 'usar laço como confirmação diagnóstica', 'ponto de corte adulto/criança', 'Interpretação passo a passo', 'arm', 'Antebraço, manguito e petéquias', 'procedure'],
  'den-11': ['decisão', 'classificação A/B/C/D', 'parar no diagnóstico de dengue', 'sinal de alarme ou choque mudando grupo', 'Como a conduta muda', 'flow', 'Árvore decisória A/B/C/D', 'decision'],
  'den-12': ['tratamento', 'hidratação e reavaliação', 'hidratar sem reavaliar ou sobrecarregar', 'grupo C/D e resposta clínica', 'Como a conduta muda', 'flow', 'Fluxo de hidratação com reavaliação', 'treatment'],
  'den-13': ['comparação', 'dengue versus chikungunya versus zika', 'usar plaqueta como atalho universal', 'padrão de dor, rash e risco', 'O que muda a hipótese', 'radar', 'Radar comparativo das arboviroses', 'compare'],
  'den-14': ['simulação', 'fechamento de triagem', 'errar o grupo final', 'caso que muda risco/conduta', 'Como pensar este caso', 'mental', 'Mapa mental final da dengue', 'simulation'],

  'feb-01': ['abertura clínica', 'síndrome febril ictérica', 'fechar diagnóstico por icterícia isolada', 'padrão laboratorial e exposição', 'Da pista ao diagnóstico', 'tree', 'Árvore febre + icterícia', 'case'],
  'feb-02': ['laboratorial', 'padrão hepatocelular, canalicular e hemolítico', 'chamar toda icterícia de febre amarela', 'fração da bilirrubina e enzimas', 'Do laboratório à hipótese', 'lab', 'Painel hepatocelular × canalicular × hemolítico', 'lab'],
  'feb-03': ['fisiopatológica', 'Flavivírus e febre amarela', 'confundir família viral com quadro clínico fechado', 'contexto vacinal e gravidade', 'Por que isso importa', 'immune', 'Família Flavivírus e órgão-alvo', 'concept'],
  'feb-04': ['epidemiológica', 'ciclo silvestre e urbano', 'culpar o macaco', 'macaco como sentinela', 'Por que isso importa', 'cycle', 'Ciclo silvestre × urbano', 'map'],
  'feb-05': ['comparação', 'formas clínicas e Faget', 'achar que AST>ALT é sempre álcool', 'escada de gravidade e pulso relativo', 'Interpretação passo a passo', 'ladder', 'Escada leve → moderada → grave', 'compare'],
  'feb-06': ['fisiopatológica', 'febre amarela grave hepatorrenal', 'subestimar disfunção orgânica', 'AST/ALT muito altas + rim', 'Do achado ao risco', 'organ', 'Painel fígado-rim-coagulação', 'physiology'],
  'feb-07': ['comparação', 'hipótese que não bate', 'ancorar em febre amarela', 'sufusão, rim, K baixo e exposição', 'O que muda a hipótese', 'balance', 'Balança febre amarela × leptospirose', 'compare'],
  'feb-08': ['epidemiológica', 'transmissão da leptospirose', 'procurar vetor mosquito', 'água/esgoto/rato e pele', 'Por que isso importa', 'cycle', 'Ciclo rato-urina-água-humano', 'map'],
  'feb-09': ['leitura forte', 'forma anictérica', 'exigir icterícia para pensar leptospirose', 'sufusão e panturrilha no contexto certo', 'Como pensar este caso', 'body', 'Corpo com sufusão e panturrilha', 'case'],
  'feb-10': ['decisão', 'síndrome de Weil', 'tratar hemoptise como detalhe', 'pulmão-rim e sangramento', 'Do achado ao risco', 'organ', 'Pulmão-rim-fígado na forma grave', 'decision'],
  'feb-11': ['laboratorial', 'laboratório da leptospirose', 'perder a tubulopatia', 'creatinina alta com K baixo', 'Do laboratório à hipótese', 'lab', 'Painel BD, FA/GGT, creatinina, K, CPK', 'lab'],
  'feb-12': ['tratamento', 'diagnóstico e tratamento', 'confundir penicilina cristalina com benzatina', 'gravidade definindo antibiótico', 'Como a conduta muda', 'flow', 'Fluxo microaglutinação e tratamento', 'treatment'],
  'feb-13': ['simulação', 'fechamento ictérico', 'errar eixo hepatocelular/canalicular', 'caso com laboratório decisivo', 'Como pensar este caso', 'mental', 'Mapa mental final da síndrome ictérica', 'simulation'],

  'lei-01': ['abertura clínica', 'febre arrastada com baço gigante', 'ler como febre aguda', 'meses + baço + pancitopenia', 'Da pista ao diagnóstico', 'organ', 'Caso com baço, fígado e medula', 'case'],
  'lei-02': ['leitura forte', 'cronologia da febre arrastada', 'colocar meses na gaveta de dengue', 'tempo mudando diagnóstico', 'O que muda a hipótese', 'timeline', 'Linha do tempo febre aguda × arrastada', 'timeline'],
  'lei-03': ['comparação', 'armadilha hematológica', 'fechar câncer antes de contexto infeccioso', 'policlonal e endemia', 'O erro que a banca quer provocar', 'balance', 'Balança calazar × neoplasia × mieloma', 'compare'],
  'lei-04': ['epidemiológica', 'Crato/Ceará e endemia', 'ignorar geografia', 'endemia mudando probabilidade pré-teste', 'Por que isso importa', 'map', 'Mapa epidemiológico Nordeste-endemia', 'map'],
  'lei-05': ['comparação', 'visceral versus tegumentar', 'confundir chagasi/infantum com braziliensis', 'forma visceral e espécie', 'Interpretação passo a passo', 'tree', 'Ramo visceral × tegumentar', 'compare'],
  'lei-06': ['epidemiológica', 'vetor e reservatórios', 'trocar Lutzomyia por Aedes', 'cão e flebotomíneo', 'Por que isso importa', 'cycle', 'Ciclo cão-flebotomíneo-humano', 'map'],
  'lei-07': ['fisiopatológica', 'doença do macrófago', 'decorar órgão sem mecanismo', 'macrófago infectado', 'Do achado ao risco', 'macrophage', 'Macrófago infectado e sistema reticuloendotelial', 'physiology'],
  'lei-08': ['imunológica', 'celular versus humoral', 'achar que muitos anticorpos resolvem', 'falha celular + hipergamaglobulinemia', 'Por que isso importa', 'immune', 'Célula T, macrófago e anticorpos exagerados', 'concept'],
  'lei-09': ['diagnóstico', 'Montenegro', 'usar Montenegro negativo como exclusão', 'anergia em doença visceral', 'Interpretação passo a passo', 'lab', 'Painel Montenegro e resposta celular', 'lab'],
  'lei-10': ['diagnóstico', 'amastigotas, medula e baço', 'escolher sítio sem pesar risco', 'medula preferencial versus baço sensível', 'Do laboratório à hipótese', 'organ', 'Medula, baço e amastigotas', 'procedure'],
  'lei-11': ['laboratorial', 'sorologias e imunossupressão', 'confiar cegamente em sorologia', 'rK39/IFI no contexto imune', 'Do laboratório à hipótese', 'lab', 'Fluxo sorológico rK39/IFI/imunossupressão', 'lab'],
  'lei-12': ['tratamento', 'Glucantime versus lipossomal', 'ignorar cardiotoxicidade e Gs/Is', 'risco individual mudando droga', 'Como a conduta muda', 'flow', 'Decisão terapêutica por risco', 'treatment'],
  'lei-13': ['simulação', 'fechamento do calazar', 'perder o padrão infeccioso crônico', 'tempo + baço + policlonal + endemia', 'Como pensar este caso', 'mental', 'Mapa mental final do calazar', 'simulation']
};

function prompt3Profile(page, module) {
  const raw = PROMPT3_PROFILES[page.id] || [
    'leitura forte',
    module.thesis,
    page.trap,
    page.hotspots[0] || page.title,
    'Raciocínio clínico guiado',
    'mental',
    page.svg,
    'reading'
  ];

  return {
    category: raw[0],
    reasoning: raw[1],
    trap: raw[2],
    pivot: raw[3],
    readingTitle: raw[4],
    svgType: raw[5],
    visualMetaphor: raw[6],
    rhythm: raw[7]
  };
}

function layoutPoints(type, labels) {
  const layouts = {
    tree: [[18, 52], [34, 28], [34, 72], [52, 22], [52, 50], [52, 78], [72, 38], [72, 66]],
    cycle: [[50, 17], [72, 28], [80, 52], [67, 74], [43, 79], [22, 62], [23, 35], [38, 25]],
    immune: [[19, 33], [34, 56], [50, 37], [63, 57], [78, 32], [81, 71], [44, 78], [25, 72]],
    vessel: [[18, 52], [34, 41], [45, 61], [56, 42], [68, 64], [80, 47], [72, 78], [31, 75]],
    timeline: [[14, 66], [26, 47], [38, 33], [50, 47], [62, 33], [74, 47], [86, 66], [50, 75]],
    body: [[50, 19], [43, 38], [57, 38], [50, 52], [41, 66], [59, 66], [35, 79], [65, 79]],
    ladder: [[20, 75], [31, 66], [42, 57], [53, 48], [64, 39], [75, 30], [86, 21], [48, 75]],
    shock: [[24, 35], [43, 30], [61, 35], [78, 45], [69, 68], [48, 73], [28, 62], [50, 51]],
    lab: [[16, 31], [34, 31], [52, 31], [70, 31], [88, 31], [28, 69], [52, 69], [76, 69]],
    arm: [[28, 48], [39, 55], [50, 61], [61, 55], [72, 48], [44, 37], [57, 37], [50, 75]],
    flow: [[17, 50], [32, 31], [32, 69], [50, 31], [50, 69], [68, 31], [68, 69], [84, 50]],
    radar: [[50, 18], [75, 35], [72, 66], [50, 80], [28, 66], [25, 35], [50, 50], [82, 77]],
    mental: [[50, 50], [50, 18], [74, 30], [81, 58], [65, 79], [35, 79], [19, 58], [26, 30]],
    organ: [[32, 38], [50, 31], [68, 38], [40, 63], [60, 63], [50, 78], [25, 70], [75, 70]],
    balance: [[29, 36], [71, 36], [50, 31], [42, 66], [58, 66], [19, 72], [81, 72], [50, 79]],
    map: [[32, 31], [48, 43], [62, 35], [38, 63], [58, 66], [75, 54], [26, 75], [70, 78]],
    macrophage: [[49, 50], [38, 42], [61, 42], [44, 61], [57, 62], [27, 37], [73, 35], [50, 80]]
  };
  const base = layouts[type] || layouts.mental;
  return labels.map((label, idx) => {
    const pos = base[idx % base.length];
    return { label, x: pos[0], y: pos[1] };
  });
}

function svgLabel(text, x, y, anchor = 'middle') {
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" class="svg-concept-label">${escapeHtml(text)}</text>`;
}

function svgScene(type, page, accent, profile) {
  const soft = `${accent}26`;
  const line = `stroke="${accent}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"`;
  const title = svgLabel(profile.visualMetaphor, 560, 72);
  const common = `<rect x="22" y="22" width="1076" height="476" rx="34" fill="${soft}" stroke="rgba(15,23,42,.14)"></rect>${title}`;

  if (type === 'tree') {
    return `${common}
      <path d="M160 272 C260 272 265 168 382 168" ${line} fill="none" opacity=".72"></path>
      <path d="M160 272 C270 272 286 272 406 272" ${line} fill="none" opacity=".72"></path>
      <path d="M160 272 C260 272 265 382 382 382" ${line} fill="none" opacity=".72"></path>
      <path d="M406 168 H878 M430 272 H904 M406 382 H878" ${line} opacity=".58"></path>
      ${['febre sem foco', 'topografia ausente', 'pista que muda', 'decisão'].map((t, i) => svgLabel(t, [160, 440, 610, 860][i], [282, 178, 282, 392][i])).join('')}`;
  }

  if (type === 'cycle') {
    return `${common}
      <circle cx="560" cy="270" r="158" fill="rgba(255,255,255,.48)" stroke="${accent}" stroke-width="4"></circle>
      <path d="M558 112 A158 158 0 0 1 718 272 M702 354 A158 158 0 0 1 473 405 M406 318 A158 158 0 0 1 498 125" ${line} fill="none" opacity=".7"></path>
      <circle cx="560" cy="112" r="48" fill="#fff"></circle><circle cx="718" cy="270" r="48" fill="#fff"></circle><circle cx="560" cy="428" r="48" fill="#fff"></circle><circle cx="402" cy="270" r="48" fill="#fff"></circle>
      ${svgLabel('vetor', 560, 119)}${svgLabel('humano', 718, 277)}${svgLabel('ambiente', 560, 435)}${svgLabel('reservatório', 402, 277)}`;
  }

  if (type === 'vessel') {
    return `${common}
      <path d="M130 230 C300 158 500 158 990 230 L990 318 C650 392 354 386 130 318 Z" fill="rgba(255,255,255,.58)" stroke="${accent}" stroke-width="5"></path>
      <path d="M175 276 H890" stroke="${accent}" stroke-width="18" stroke-linecap="round" opacity=".28"></path>
      <path d="M440 302 C410 348 400 378 428 400 C458 423 496 397 482 360 C475 340 456 324 440 302Z" fill="${accent}" opacity=".75"></path>
      <path d="M610 308 C580 354 574 386 604 404 C634 421 668 397 654 362 C647 342 627 326 610 308Z" fill="#0f766e" opacity=".6"></path>
      ${svgLabel('intravascular', 260, 248)}${svgLabel('plasma no terceiro espaço', 582, 444)}${svgLabel('Ht sobe', 880, 260)}`;
  }

  if (type === 'timeline') {
    return `${common}
      <path d="M118 342 C250 205 360 205 500 320 S760 432 1002 220" ${line} fill="none" opacity=".72"></path>
      ${[150, 300, 460, 620, 790, 950].map((x, i) => `<circle cx="${x}" cy="${[320,247,292,361,318,238][i]}" r="38" fill="#fff" stroke="${accent}" stroke-width="4"></circle>`).join('')}
      ${['início', 'pico', 'virada', 'risco', 'exame', 'síntese'].map((t, i) => svgLabel(t, [150, 300, 460, 620, 790, 950][i], [328, 255, 300, 369, 326, 246][i])).join('')}`;
  }

  if (type === 'body') {
    return `${common}
      <circle cx="560" cy="145" r="44" fill="#fff" stroke="${accent}" stroke-width="4"></circle>
      <path d="M560 192 C490 210 462 292 486 392 C508 470 612 470 634 392 C658 292 630 210 560 192Z" fill="rgba(255,255,255,.58)" stroke="${accent}" stroke-width="5"></path>
      <path d="M510 280 H610 M518 333 H602 M540 390 H580" ${line} opacity=".5"></path>
      ${svgLabel('sinais no corpo', 560, 466)}${svgLabel('risco sistêmico', 560, 282)}`;
  }

  if (type === 'ladder') {
    return `${common}
      ${[0, 1, 2, 3, 4].map((i) => `<rect x="${170 + i * 145}" y="${360 - i * 54}" width="132" height="${92 + i * 20}" rx="18" fill="#fff" stroke="${accent}" stroke-width="4" opacity="${0.72 + i * .05}"></rect>`).join('')}
      ${['comum', 'atenção', 'alarme', 'grave', 'conduta'].map((t, i) => svgLabel(t, 236 + i * 145, 416 - i * 54)).join('')}`;
  }

  if (type === 'lab') {
    return `${common}
      ${[0, 1, 2, 3, 4].map((i) => `<rect x="${100 + i * 190}" y="170" width="150" height="190" rx="22" fill="#fff" stroke="${accent}" stroke-width="4"></rect><path d="M125 ${310 - i * 22} H225" stroke="${accent}" stroke-width="${10 + i * 2}" opacity=".65"></path>`).join('')}
      ${['BD', 'FA/GGT', 'AST/ALT', 'Cr/K', 'CPK'].map((t, i) => svgLabel(t, 175 + i * 190, 392)).join('')}`;
  }

  if (type === 'flow') {
    return `${common}
      <rect x="105" y="210" width="170" height="112" rx="22" fill="#fff" stroke="${accent}" stroke-width="4"></rect>
      <rect x="370" y="128" width="170" height="112" rx="22" fill="#fff" stroke="${accent}" stroke-width="4"></rect>
      <rect x="370" y="314" width="170" height="112" rx="22" fill="#fff" stroke="${accent}" stroke-width="4"></rect>
      <rect x="655" y="128" width="170" height="112" rx="22" fill="#fff" stroke="${accent}" stroke-width="4"></rect>
      <rect x="655" y="314" width="170" height="112" rx="22" fill="#fff" stroke="${accent}" stroke-width="4"></rect>
      <path d="M275 266 H370 M540 184 H655 M540 370 H655 M455 240 V314" ${line} opacity=".62"></path>
      ${['entrada', 'risco', 'reavaliar', 'conduta', 'alerta'].map((t, i) => svgLabel(t, [190, 455, 455, 740, 740][i], [274, 192, 378, 192, 378][i])).join('')}`;
  }

  if (type === 'balance') {
    return `${common}
      <path d="M560 150 V390 M360 215 H760 M360 215 L258 360 M360 215 L462 360 M760 215 L658 360 M760 215 L862 360" ${line} fill="none" opacity=".7"></path>
      <path d="M245 360 H475 C450 416 270 416 245 360Z" fill="#fff" stroke="${accent}" stroke-width="4"></path>
      <path d="M645 360 H875 C850 416 670 416 645 360Z" fill="#fff" stroke="${accent}" stroke-width="4"></path>
      ${svgLabel('hipótese A', 360, 390)}${svgLabel('hipótese B', 760, 390)}${svgLabel('dado que pesa', 560, 132)}`;
  }

  if (type === 'radar' || type === 'mental') {
    const points = type === 'radar'
      ? '560,128 760,230 710,406 410,406 360,230'
      : '560,128 758,226 682,430 438,430 362,226';
    return `${common}
      <polygon points="${points}" fill="rgba(255,255,255,.58)" stroke="${accent}" stroke-width="5"></polygon>
      <circle cx="560" cy="300" r="72" fill="#fff" stroke="${accent}" stroke-width="4"></circle>
      ${['tempo', 'laboratório', 'risco', 'conduta', 'diferencial'].map((t, i) => svgLabel(t, [560, 760, 710, 410, 360][i], [118, 220, 424, 424, 220][i])).join('')}${svgLabel('síntese', 560, 308)}`;
  }

  if (type === 'organ' || type === 'macrophage') {
    return `${common}
      <circle cx="350" cy="270" r="92" fill="#fff" stroke="${accent}" stroke-width="5"></circle>
      <ellipse cx="560" cy="275" rx="118" ry="86" fill="rgba(255,255,255,.58)" stroke="${accent}" stroke-width="5"></ellipse>
      <path d="M770 202 C850 210 916 274 900 352 C780 382 704 338 726 254 C733 228 748 211 770 202Z" fill="#fff" stroke="${accent}" stroke-width="5"></path>
      <path d="M350 270 H442 M678 275 H728" ${line} opacity=".5"></path>
      ${svgLabel(type === 'macrophage' ? 'macrófago' : 'órgão-alvo', 350, 278)}${svgLabel('sistema', 560, 282)}${svgLabel('risco', 812, 296)}`;
  }

  if (type === 'map') {
    return `${common}
      <path d="M364 158 C502 116 676 146 742 238 C816 342 724 424 552 414 C410 406 292 342 306 246 C312 204 326 178 364 158Z" fill="#fff" stroke="${accent}" stroke-width="5"></path>
      <path d="M426 206 C512 238 576 226 678 270 M390 312 C486 282 620 330 710 354" ${line} opacity=".45"></path>
      ${svgLabel('território', 545, 282)}${svgLabel('exposição', 392, 218)}${svgLabel('probabilidade', 694, 360)}`;
  }

  return `${common}
    <circle cx="560" cy="272" r="132" fill="#fff" stroke="${accent}" stroke-width="5"></circle>
    <path d="M560 140 V404 M428 272 H692 M468 180 L652 364 M652 180 L468 364" ${line} opacity=".48"></path>
    ${svgLabel('raciocínio', 560, 280)}`;
}

function hotspotTeaching(label, profile) {
  return `${label}: este ponto pesa porque aproxima ${profile.reasoning}, evita a armadilha "${profile.trap}" e pode mudar hipótese, risco ou conduta.`;
}

function hotspotSvg(page, accent, profile = prompt3Profile(page, { thesis: '' })) {
  const points = layoutPoints(profile.svgType, page.hotspots);

  return `<div class="svg-hotspot-wrap prompt3-svg-card" data-svg-type="${profile.svgType}" aria-label="${escapeAttr(profile.visualMetaphor)}">
    <svg class="febris-svg prompt3-svg" viewBox="0 0 1120 520" role="img" aria-label="${escapeAttr(profile.visualMetaphor)}">
      ${svgScene(profile.svgType, page, accent, profile)}
    </svg>
    <div class="hotspot-layer" aria-hidden="false">
      ${points.map((p, idx) => `
        <button class="hotspot-dot prompt3-hotspot" style="left:${p.x}%;top:${p.y}%"
          data-hotspot="${escapeAttr(hotspotTeaching(p.label, profile))}" aria-label="Hotspot: ${escapeAttr(p.label)}">
          <span aria-hidden="true">${idx === 0 ? '◆' : '•'}</span>
        </button>`).join('')}
    </div>
    <div class="hotspot-feedback" data-hotspot-feedback tabindex="-1" aria-live="polite">
      Selecione um ponto do diagrama para ver a consequência clínica e de prova.
    </div>
  </div>`;
}

function interactionHtml(page) {
  const interaction = page.interaction || { type: 'choice', title: 'Decisor clínico' };
  const title = interaction.title || 'Decisor clínico';

  if (interaction.type === 'slider') {
    return `<div class="interactive-panel" data-interaction="slider" data-good-at="${interaction.goodAt || 46}">
      <h3>${title}</h3>
      <label class="range-label">Hematócrito: <strong data-range-value>42%</strong></label>
      <input type="range" min="${interaction.min || 30}" max="${interaction.max || 60}" value="42" data-range-input>
      <div class="interaction-feedback" data-interaction-feedback>Ht isolado não decide; tendência progressiva + clínica muda o grupo.</div>
    </div>`;
  }

  if (interaction.type === 'timeline') {
    return `<div class="interactive-panel" data-interaction="timeline">
      <h3>${title}</h3>
      <div class="timeline-strip">
        ${['Dia 1: febre alta', 'Dia 2–3: dor/mialgia', 'Dia 3–4: defervescência', 'Dia 4–6: sinais de alarme', 'Dia 6+: IgM'].map((item, idx) => `
          <button class="timeline-chip" data-choice="${idx}" data-ok="${idx === 3}">${item}</button>`).join('')}
      </div>
      <div class="interaction-feedback" data-interaction-feedback>A fase crítica pode surgir na defervescência; não use queda da febre como alta automática.</div>
    </div>`;
  }

  if (interaction.type === 'laco') {
    return `<div class="interactive-panel" data-interaction="laco">
      <h3>${title}</h3>
      <div class="calc-grid">
        <label>Paciente
          <select data-laco-kind>
            <option value="adulto">Adulto</option>
            <option value="crianca">Criança</option>
          </select>
        </label>
        <label>Petéquias em 2,5 cm
          <input type="number" value="18" min="0" data-laco-count>
        </label>
      </div>
      <button class="primary-action" data-laco-run>Calcular interpretação</button>
      <div class="interaction-feedback" data-interaction-feedback>Adulto: positivo se ≥20 em até 5 min. Criança: positivo se ≥10 em até 3 min.</div>
    </div>`;
  }

  if (interaction.type === 'hydration') {
    return `<div class="interactive-panel" data-interaction="hydration">
      <h3>${title}</h3>
      <div class="calc-grid">
        <label>Peso aproximado (kg)
          <input type="number" value="70" min="3" data-hydration-weight>
        </label>
        <label>Grupo
          <select data-hydration-group>
            <option value="A">A</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </label>
      </div>
      <button class="primary-action" data-hydration-run>Gerar volume didático</button>
      <div class="interaction-feedback" data-interaction-feedback>Selecione grupo e peso para ver o raciocínio de volume.</div>
    </div>`;
  }

  if (interaction.type === 'abcd') {
    const cases = [
      ['Sem alarme, sem risco especial', 'A'],
      ['Prova do laço positiva sem alarme', 'B'],
      ['Dor abdominal persistente', 'C'],
      ['PA 100 × 90 com extremidades frias', 'D'],
      ['Vômitos persistentes', 'C'],
      ['Sangramento grave', 'D']
    ];
    return `<div class="interactive-panel" data-interaction="abcd">
      <h3>${title}</h3>
      <div class="case-grid">${cases.map(([text, group]) => `
        <button class="choice-btn" data-abcd="${group}">${text}</button>`).join('')}</div>
      <div class="interaction-feedback" data-interaction-feedback>Escolha um paciente para ver o grupo esperado.</div>
    </div>`;
  }

  if (interaction.type && interaction.type.startsWith('final-')) {
    return finalSimulatorHtml(page, title);
  }

  if (interaction.type === 'case-clues' || interaction.type === 'case-leish') {
    return progressiveClueHtml(title, page.hotspots.slice(0, 7));
  }

  if (['lab-pattern', 'faget', 'lab-lepto', 'polyclonal', 'organ', 'treatment-leish'].includes(interaction.type)) {
    return specificMiniTool(interaction.type, title);
  }

  const options = interaction.options || [
    ['Raciocinar pelo conjunto clínico-laboratorial', true, 'Correto: tempo, laboratório, clínica e epidemiologia precisam andar juntos.'],
    ['Fechar diagnóstico por um dado isolado', false, 'Armadilha: um dado isolado raramente sustenta a conduta.']
  ];
  return `<div class="interactive-panel" data-interaction="choice">
    <h3>${title}</h3>
    <div class="choice-grid">
      ${options.map(([label, ok, feedback]) => `
        <button class="choice-btn" data-ok="${ok}" data-feedback="${escapeAttr(feedback)}">${label}</button>`).join('')}
    </div>
    <div class="interaction-feedback" data-interaction-feedback>Escolha uma opção.</div>
  </div>`;
}

function progressiveClueHtml(title, clues) {
  return `<div class="interactive-panel" data-interaction="progressive">
    <h3>${title}</h3>
    <div class="clue-ladder">
      ${clues.map((clue, idx) => `<button class="choice-btn" data-step="${idx}">${idx + 1}. ${clue}</button>`).join('')}
    </div>
    <div class="interaction-feedback" data-interaction-feedback>Abra as pistas em sequência: cada dado desloca o diagnóstico para a hipótese mais coerente.</div>
  </div>`;
}

function specificMiniTool(type, title) {
  const presets = {
    'lab-pattern': [
      ['AST/ALT muito elevadas', 'hepatocelular'],
      ['BD + FA/GGT elevadas', 'canalicular'],
      ['BI + hemólise', 'hemolítico']
    ],
    faget: [
      ['39 °C com FC 86', 'Faget provável: pulso menor que o esperado.'],
      ['39 °C com FC 124', 'Resposta proporcional; não use como Faget.'],
      ['Faget isolado', 'Sugere, mas não fecha diagnóstico.']
    ],
    'lab-lepto': [
      ['Creatinina 2,5 + K 3,1', 'Tubulopatia: forte pista de leptospirose.'],
      ['BD + FA/GGT', 'Padrão canalicular/colestático.'],
      ['CPK alta + panturrilha', 'Lesão muscular conversa com clínica.']
    ],
    polyclonal: [
      ['Pico estreito monoclonal', 'Puxa gamopatia/mieloma.'],
      ['Elevação ampla policlonal', 'Puxa resposta inflamatória crônica/calazar.'],
      ['Globulina alta sem padrão', 'Não feche diagnóstico sem definir padrão.']
    ],
    organ: [
      ['Baço', 'Esplenomegalia de grande monta e hiperesplenismo.'],
      ['Medula', 'Citopenias por envolvimento do sistema reticuloendotelial.'],
      ['Fígado', 'Hepatomegalia e inflamação sistêmica.']
    ],
    'treatment-leish': [
      ['Gestante ou grave', 'Anfotericina B lipossomal sobe.'],
      ['Paciente sem critérios de risco maior', 'Antimonial pode ser opção custo-efetiva.'],
      ['QT prolongado importante', 'Cautela com Glucantime; risco elétrico importa.']
    ]
  };
  return `<div class="interactive-panel" data-interaction="choice">
    <h3>${title}</h3>
    <div class="choice-grid">
      ${(presets[type] || []).map(([label, feedback]) => `
        <button class="choice-btn" data-ok="true" data-feedback="${escapeAttr(feedback)}">${label}</button>`).join('')}
    </div>
    <div class="interaction-feedback" data-interaction-feedback>Escolha um item para interpretar.</div>
  </div>`;
}

function finalSimulatorHtml(page, title) {
  const cases = {
    'final-dengue': [
      ['Febre + dor abdominal persistente + bom estado geral', 'Grupo C: sinal de alarme manda.'],
      ['PA 100 × 90 + extremidades frias', 'Grupo D: choque por pressão convergente.'],
      ['Prova do laço positiva, sem alarme', 'Grupo B: observar e hemograma.']
    ],
    'final-icterica': [
      ['Limpeza urbana + sufusão + K baixo + hemoptise', 'Leptospirose grave/síndrome de Weil.'],
      ['Mata + não vacinado + AST/ALT ≥2.000', 'Febre amarela grave.'],
      ['BI + hemólise + exposição compatível', 'Malária no diferencial.']
    ],
    'final-leish': [
      ['Crato + meses + baço 10 cm + policlonal', 'Calazar sobe ao topo.'],
      ['Monoclonal + lesões ósseas', 'Gamopatia/mieloma sobe.'],
      ['Baço grande sem endemia nem policlonal', 'Diferencial hematológico continua aberto.']
    ]
  };
  return `<div class="interactive-panel" data-interaction="choice">
    <h3>${title}</h3>
    <div class="choice-grid">
      ${(cases[page.interaction.type] || []).map(([label, feedback]) => `
        <button class="choice-btn" data-ok="true" data-feedback="${escapeAttr(feedback)}">${label}</button>`).join('')}
    </div>
    <div class="interaction-feedback" data-interaction-feedback>Escolha um caso para receber fechamento.</div>
  </div>`;
}

function pageQuiz(page, module) {
  const optionsA = module.short === 'Dengue'
    ? ['Classificar risco e manejo antes da alta', 'Liberar se parecer bem', 'Usar plaqueta isolada como decisão', 'Ignorar sinais de alarme']
    : module.short === 'Febre ictérica'
      ? ['Separar padrão clínico-laboratorial antes de fechar hipótese', 'Chamar toda icterícia de febre amarela', 'Chamar toda plaqueta baixa de dengue', 'Ignorar exposição ambiental']
      : ['Integrar tempo, baço, pancitopenia, policlonal e endemia', 'Chamar meses de febre de dengue prolongada', 'Fechar mieloma por globulina alta sem padrão', 'Ignorar Crato/Ceará'];

  return [
    {
      stem: page.question,
      options: optionsA,
      correct: 0,
      explanation: `${page.objective} A alternativa correta preserva o raciocínio por conjunto, sem reduzir o caso a um marcador isolado.`,
      tip: page.trap
    },
    {
      stem: `Qual é a principal armadilha desta página?`,
      options: [page.trap, 'Usar mais de um dado ao mesmo tempo', 'Conferir a cronologia antes do diagnóstico', 'Relacionar laboratório com fisiopatologia'],
      correct: 0,
      explanation: page.trap,
      tip: 'A pegadinha foi convertida em pergunta para treinar prova.'
    }
  ];
}

function shortReviewText(value, limit = 86) {
  const text = String(value || '').replace(/\s+/g, ' ').trim();
  if (!text) return '';
  if (text.length <= limit) return text;
  return `${text.slice(0, limit - 3).replace(/\s+\S*$/, '')}...`;
}

function reviewFlashcards(page) {
  const profile = prompt3Profile(page, { thesis: '' });
  const core = page.core || [];
  const hotspots = page.hotspots || [];
  const notConfuse = page.notConfuse || [];
  const hotspotA = hotspots[0] || page.title;
  const hotspotB = hotspots[1] || hotspotA;
  const cards = [
    {
      front: shortReviewText(page.question, 92),
      back: `${page.objective} Pegadinha: ${page.trap}`
    },
    {
      front: `Dado que vira a chave: ${shortReviewText(profile.pivot, 58)}`,
      back: core[0] || page.objective
    },
    {
      front: `Armadilha de prova: ${shortReviewText(page.trap, 62)}`,
      back: page.trap
    },
    {
      front: `Pista visual: ${shortReviewText(hotspotA, 62)}`,
      back: hotspotTeaching(hotspotA, profile)
    },
    {
      front: `Não confunda: ${shortReviewText(notConfuse[0] || hotspotB, 62)}`,
      back: notConfuse[0] || hotspotTeaching(hotspotB, profile) || core[1] || page.objective
    }
  ];

  return cards.map((card, idx) => ({
    front: card.front || `Pista ${idx + 1}: ${shortReviewText(core[idx] || page.title, 64)}`,
    back: card.back || core[idx] || page.objective || page.trap
  }));
}

function flashcardsHtml(page) {
  const cards = reviewFlashcards(page);
  return `<div class="flashcard-grid compact">
    ${cards.map((card, idx) => `
      <button class="flashcard mini" type="button" aria-label="Virar flashcard ${idx + 1}">
        <span class="flashcard-front">${idx + 1}. ${escapeHtml(card.front)}</span>
        <span class="flashcard-back">${escapeHtml(card.back)}</span>
      </button>`).join('')}
  </div>`;
}

function cleanSentence(text) {
  const value = String(text || '').trim();
  if (!value) return '';
  return /[.!?]$/.test(value) ? value : `${value}.`;
}

function guidedOpening(page, module, profile) {
  const moduleOpenings = {
    Dengue: 'O primeiro passo não é perguntar apenas se o quadro parece dengue; é decidir se existe risco suficiente para mudar observação, hidratação ou alta.',
    'Febre ictérica': 'A icterícia organiza o olhar, mas não fecha a hipótese: o padrão laboratorial, a exposição e o órgão dominante precisam conversar.',
    Leishmaniose: 'Quando a febre deixa de ser de dias e passa a ocupar semanas ou meses, o raciocínio muda de eixo e o sistema reticuloendotelial entra no centro.'
  };
  return `${moduleOpenings[module.short] || module.thesis} Nesta página, o foco é ${profile.reasoning}; a armadilha principal é ${profile.trap}.`;
}

function guidedReadingHtml(page, module, profile, accent) {
  const firstHalf = page.core.slice(0, Math.ceil(page.core.length / 2)).map(cleanSentence).join(' ');
  const secondHalf = page.core.slice(Math.ceil(page.core.length / 2)).map(cleanSentence).join(' ');

  return `<section class="anim-fade-up prompt3-reading-block">
    ${sectionHeader('1', profile.readingTitle, accent)}
    <article class="prompt3-reading-card">
      <p>${escapeHtml(guidedOpening(page, module, profile))}</p>
      <p>${escapeHtml(firstHalf)}</p>
      <p>${escapeHtml(secondHalf)} <strong>O ponto de virada é ${escapeHtml(profile.pivot)}</strong>: quando esse dado aparece, o aluno deve trocar o atalho por uma decisão clínica estruturada.</p>
    </article>
    <details class="prompt3-preserved-points">
      <summary>Marcadores clínicos da página</summary>
      ${styledList(page.core)}
    </details>
  </section>`;
}

function visualReadingHtml(page, profile, accent) {
  return `<section class="anim-fade-up delay-1 prompt3-visual-block">
    ${sectionHeader('2', profile.visualMetaphor, accent)}
    <div class="prompt3-visual-grid">
      ${hotspotSvg(page, accent, profile)}
      <aside class="prompt3-visual-note">
        <h3>Como ler o diagrama</h3>
        <p>O desenho não é decorativo: ele organiza ${escapeHtml(profile.reasoning)} e posiciona os hotspots sobre o achado que muda hipótese, risco ou conduta.</p>
        <p><strong>Armadilha evitada:</strong> ${escapeHtml(profile.trap)}.</p>
      </aside>
    </div>
  </section>`;
}

function decisionSupportHtml(page, profile, accent) {
  if (!page.table) return '';
  return `<section class="anim-fade-up delay-2 prompt3-decision-block">
    ${sectionHeader('3', profile.rhythm === 'lab' ? 'Painel de interpretação' : 'Síntese de decisão', accent)}
    ${tableHtml(page.table)}
  </section>`;
}

function strategicInteractionHtml(page, profile, accent) {
  return `<section class="anim-fade-up delay-2 prompt3-interaction-block">
    ${sectionHeader('4', profile.rhythm === 'simulation' ? 'Simulação clínica' : 'Interação estratégica', accent)}
    <div class="prompt3-interaction-intro">
      A interação abaixo fica proporcional ao conceito: ela treina ${escapeHtml(profile.pivot)}, sem substituir a leitura guiada.
    </div>
    ${interactionHtml(page)}
  </section>`;
}

function proofSynthesisHtml(page, profile, accent) {
  return `<section class="anim-fade-up delay-3 prompt3-synthesis-block">
    ${sectionHeader('5', 'Síntese de prova e não confunda', accent)}
    <div class="prompt3-synthesis-grid">
      <article class="prompt3-proof-card">
        <h3>Síntese de prova</h3>
        <p>${escapeHtml(page.trap)}</p>
        <p><strong>Dado que muda o raciocínio:</strong> ${escapeHtml(profile.pivot)}.</p>
      </article>
      <article class="prompt3-proof-card prompt3-dont-confuse">
        <h3>Não confunda</h3>
        <div class="dont-confuse-grid">
          ${page.notConfuse.map(item => `<div class="dont-confuse-card">${item}</div>`).join('')}
        </div>
      </article>
    </div>
  </section>`;
}

function activeReviewHtml(page, module, accent) {
  return `<section class="anim-fade-up delay-3 prompt3-review-block">
    ${sectionHeader('6', 'Revisão ativa proporcional', accent)}
    ${flashcardsHtml(page)}
    <div data-quiz-anchor></div>
  </section>`;
}

function crossLinksHtml(page, module) {
  const links = page.links || GLOBAL_BRIDGES.slice(0, 2).map(b => b.target);
  return `<div class="bridge-grid">
    ${links.map(id => {
      const target = GO_PAGES.find(p => p.id === id);
      if (!target) return '';
      const bridge = GLOBAL_BRIDGES.find(b => b.target === id);
      return `<div class="bridge-card">
        <div class="bridge-kicker">Não confunda</div>
        <h4>${bridge ? bridge.title : target.label}</h4>
        <p>${bridge ? bridge.contrast : `Compare com ${target.label} para reforçar diferença de tempo, padrão e conduta.`}</p>
        <button class="page-nav-btn" data-goto="${target.id}">Comparar: ${target.label}</button>
      </div>`;
    }).join('')}
  </div>`;
}

function renderLearningPage(el, page, module) {
  const accent = module.accent;
  const profile = prompt3Profile(page, module);
  el.innerHTML = `
    ${pageHero(`${module.short} · Página ${module.pages.findIndex(p => p.id === page.id) + 1}/${module.pages.length}`, page.title, module.thesis, GRAD_MAP[page.block] || GRAD_MAP.revisao)}
    <div class="module-question">
      <span>Pergunta central</span>
      <strong>${page.question}</strong>
    </div>
    ${alertBox('info', 'Alvo de estudo', page.objective, '◌')}

    <div class="prompt3-page prompt3-rhythm-${profile.rhythm}" style="--prompt3-accent:${accent}">
      ${guidedReadingHtml(page, module, profile, accent)}
      ${profile.rhythm === 'lab' ? decisionSupportHtml(page, profile, accent) + visualReadingHtml(page, profile, accent) : visualReadingHtml(page, profile, accent) + decisionSupportHtml(page, profile, accent)}
      ${strategicInteractionHtml(page, profile, accent)}
      ${proofSynthesisHtml(page, profile, accent)}
      ${activeReviewHtml(page, module, accent)}
      <section class="anim-fade-up delay-3 prompt3-bridge-block">
        ${sectionHeader('7', 'Ponte cognitiva', accent)}
        ${crossLinksHtml(page, module)}
      </section>
    </div>
  `;
  attachInteractions(el);
  const quizAnchor = el.querySelector('[data-quiz-anchor]');
  if (quizAnchor && window.GO_QUIZ) GO_QUIZ(quizAnchor, pageQuiz(page, module));
  GO_NAV(el, GO_PAGES.find(p => p.id === page.id));
}

function moduleCardsHtml() {
  return Object.values(MODULE_DATA).map(module => `
    <button class="module-card card-hover" data-goto="${module.route}" style="--module-accent:${module.accent}">
      <div class="module-card-top">
        <span class="module-dot"></span>
        <span>${module.pages.length} páginas</span>
      </div>
      <h3>${module.short}</h3>
      <p>${module.thesis}</p>
    </button>`).join('');
}

function globalTreeSvg() {
  const hotspots = ['tempo de evolução', 'febre aguda', 'febre ictérica', 'febre arrastada', 'plaquetopenia', 'icterícia', 'padrão laboratorial', 'esplenomegalia', 'pancitopenia', 'epidemiologia', 'tratamento que muda'];
  return hotspotSvg({
    id: 'global-tree',
    svg: 'Árvore global das síndromes febris',
    hotspots
  }, '#0f766e');
}

GO_RENDER.home = function(el, page) {
  el.innerHTML = `
    <div class="hero-main febris-home">
      <div class="hero-title-block anim-fade-up">
        <h1>Síndromes Febris:<br><span class="accent">Da Febre Aguda</span><br>à Febre Arrastada</h1>
        <p class="hero-sub">Tempo, laboratório e epidemiologia mudam o diagnóstico.</p>
        <div class="hero-stats">
          <div class="hero-stat"><div class="hero-stat-number">45</div><div class="hero-stat-label">Rotas</div></div>
          <div class="hero-stat"><div class="hero-stat-number">40</div><div class="hero-stat-label">Páginas principais</div></div>
          <div class="hero-stat"><div class="hero-stat-number">40+</div><div class="hero-stat-label">SVGs com hotspots</div></div>
          <div class="hero-stat"><div class="hero-stat-number">9</div><div class="hero-stat-label">Casos globais</div></div>
        </div>
      </div>
      <div class="hero-blocks anim-fade-up delay-2">
        ${moduleCardsHtml()}
        <button class="module-card card-hover global" data-goto="simulador-global">
          <div class="module-card-top"><span class="module-dot"></span><span>Integração</span></div>
          <h3>Simulador Febre em Decisão</h3>
          <p>Classifique o eixo correto antes de escolher hipótese, exame e tratamento.</p>
        </button>
      </div>
    </div>
    ${alertBox('info', 'Pergunta-mãe', 'Esse paciente tem febre. Mas qual é o eixo correto do raciocínio: febre aguda, febre ictérica ou febre arrastada?', '◇')}
    <section>${sectionHeader('◇', 'Mapa cognitivo global', '#0f766e')}${globalTreeSvg()}</section>
    <section>${sectionHeader('≋', 'Tabela global de comparação', '#0f766e')}${globalMatrixTable()}</section>
    <section>${sectionHeader('⇄', 'Pontes cognitivas', '#0f766e')}${bridgeGallery()}</section>
  `;
  attachInteractions(el);
  GO_NAV(el, page);
};

GO_RENDER['mapa-global'] = function(el, page) {
  el.innerHTML = `
    ${pageHero('Integração Global', 'Mapa Mental Global das Síndromes Febris', 'Paciente com febre → tempo → icterícia → baço/pancitopenia → laboratório → tratamento que muda.', GRAD_MAP.revisao)}
    ${globalTreeSvg()}
    ${glassCard(`<h3>Fluxo de aprendizado</h3>${styledList([
      'Primeiro separar dias de semanas/meses.',
      'Depois procurar icterícia dominante.',
      'Em seguida interpretar hemograma, Ht, bilirrubinas, AST/ALT, FA/GGT, creatinina/K, albumina/globulina.',
      'Por fim, conectar epidemiologia e tratamento que muda conduta.'
    ])}`)}
    ${bridgeGallery()}
  `;
  attachInteractions(el);
  GO_NAV(el, page);
};

GO_RENDER['simulador-global'] = function(el, page) {
  el.innerHTML = `
    ${pageHero('Simulador Integrador', 'Simulador Febre em Decisão', 'Treine o eixo correto antes de escolher diagnóstico, exame e conduta.', GRAD_MAP.revisao)}
    <div class="global-case-grid">
      ${GLOBAL_CASES.map((c, idx) => `
        <button class="global-case-card" data-case-index="${idx}">
          <span>Caso ${idx + 1}</span>
          <strong>${c.title}</strong>
          <small>${c.clues.slice(0, 4).join(' · ')}</small>
        </button>`).join('')}
    </div>
    <div class="global-case-feedback" data-global-case-feedback>Escolha um caso para ver o fechamento integrador.</div>
  `;
  attachInteractions(el);
  GO_NAV(el, page);
};

GO_RENDER['revisao-global'] = function(el, page) {
  const flash = buildGlobalFlashcards();
  el.innerHTML = `
    ${pageHero('Revisão Global', 'Não Confunda as Síndromes Febris', 'Flashcards, checklist e quiz integrador comparando doenças em vez de decorar fatos soltos.', GRAD_MAP.revisao)}
    ${sectionHeader('F', 'Flashcards globais', '#0f766e')}
    <div class="flashcard-grid compact global-flashcards">
      ${flash.map((card, idx) => `<button class="flashcard mini"><span class="flashcard-front">${idx + 1}. ${card.q}</span><span class="flashcard-back">${card.a}</span></button>`).join('')}
    </div>
    ${sectionHeader('✓', 'Checklist global', '#0f766e')}
    <div class="checklist-grid">
      ${[
        'Eu separo febre de dias de febre de meses.',
        'Eu não chamo toda plaquetopenia de dengue.',
        'Eu reconheço hematócrito subindo como extravasamento na dengue.',
        'Eu reconheço leucocitose com desvio como afastamento de dengue típica.',
        'Eu diferencio bilirrubina direta de indireta.',
        'Eu separo hepatocelular de colestático/canalicular.',
        'Eu reconheço febre amarela grave por lesão hepatorrenal.',
        'Eu reconheço leptospirose por sufusão, exposição e rim com K baixo.',
        'Eu reconheço calazar por febre arrastada, baço gigante e pancitopenia.',
        'Eu não confundo hipergamaglobulinemia policlonal com mieloma típico.',
        'Eu sei quando pensar em microaglutinação.',
        'Eu sei quando pensar em aspirado de medula.',
        'Eu sei quando o tratamento é suporte.',
        'Eu sei quando antibiótico muda a conduta.',
        'Eu sei quando anfotericina lipossomal supera o antimonial.'
      ].map(item => `<label class="check-item"><input type="checkbox"> <span>${item}</span></label>`).join('')}
    </div>
    <section data-quiz-anchor></section>
  `;
  attachInteractions(el);
  const quizAnchor = el.querySelector('[data-quiz-anchor]');
  if (quizAnchor && window.GO_QUIZ) GO_QUIZ(quizAnchor, buildGlobalQuiz());
  GO_NAV(el, page);
};

GO_RENDER['matriz-global'] = function(el, page) {
  el.innerHTML = `
    ${pageHero('Matriz Global', 'Dengue × Febre Amarela × Leptospirose × Leishmaniose Visceral', 'A mesma febre muda de significado quando mudam tempo, laboratório, epidemiologia e órgão-alvo.', GRAD_MAP.revisao)}
    ${globalMatrixTable()}
    ${bridgeGallery()}
  `;
  attachInteractions(el);
  GO_NAV(el, page);
};

function globalMatrixTable() {
  return `<div class="table-wrap mb-24">
    <table class="premium-table">
      <thead><tr><th>Doença</th><th>Tempo</th><th>Síndrome</th><th>Agente</th><th>Vetor/reservatório</th><th>Pista clínica</th><th>Laboratório</th><th>Erro comum</th><th>Exame</th><th>Conduta</th><th>Aprofundar</th></tr></thead>
      <tbody>${GLOBAL_MATRIX.map(row => `
        <tr>${row.slice(0, 10).map(cell => `<td>${cell}</td>`).join('')}<td><button class="inline-link" data-goto="${row[10]}">Abrir</button></td></tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

function bridgeGallery() {
  return `<div class="bridge-grid">${GLOBAL_BRIDGES.map(b => `
    <div class="bridge-card">
      <div class="bridge-kicker">Ponte cognitiva</div>
      <h4>${b.title}</h4>
      <p>${b.contrast}</p>
      <small>${b.detail}</small>
      <button class="page-nav-btn" data-goto="${b.target}">Explorar contraste</button>
    </div>`).join('')}</div>`;
}

function buildGlobalFlashcards() {
  const cards = [];
  Object.values(MODULE_DATA).forEach(module => {
    module.pages.forEach(page => {
      cards.push({ q: page.title, a: page.core[0] });
      if (page.hotspots[0]) cards.push({ q: page.hotspots[0], a: page.core[1] || page.trap });
    });
  });
  return cards.slice(0, 80);
}

function buildGlobalQuiz() {
  const stems = [
    ['Febre há 3 dias, dor retro-orbital, Ht subindo e dor abdominal persistente. O eixo correto é:', ['Dengue com alarme/grupo C', 'Calazar', 'Malária por hemólise', 'Mieloma'], 0],
    ['Febre + icterícia + sufusão + limpeza urbana + creatinina alta com K baixo sugere:', ['Leptospirose grave', 'Dengue grupo A', 'Calazar', 'Zika'], 0],
    ['Febre há meses, baço a 10 cm e pancitopenia sugerem primeiro:', ['Febre arrastada com calazar no topo', 'Dengue prolongada', 'Febre amarela urbana', 'Chikungunya subaguda'], 0],
    ['AST/ALT ≥2.000, AST > ALT, oligúria e não vacinado em mata aproximam:', ['Febre amarela grave', 'Leptospirose anictérica', 'Dengue grupo B', 'Zika'], 0],
    ['Globulina alta com padrão policlonal em área endêmica afasta a leitura automática de:', ['Mieloma típico', 'Calazar', 'Resposta inflamatória', 'Infecção crônica'], 0]
  ];
  const base = stems.map(([stem, options, correct]) => ({
    stem, options, correct,
    explanation: 'A resposta correta integra tempo, padrão laboratorial, clínica e epidemiologia; as outras alternativas usam atalho isolado.',
    tip: 'Compare com a matriz global antes de fechar.'
  }));
  while (base.length < 30) {
    const source = base[base.length % stems.length];
    base.push({
      stem: `${source.stem} (variação ${base.length + 1})`,
      options: source.options,
      correct: source.correct,
      explanation: source.explanation,
      tip: source.tip
    });
  }
  return base;
}

function attachInteractions(root) {
  root.querySelectorAll('.hotspot-dot').forEach(btn => {
    btn.addEventListener('click', () => {
      const box = btn.closest('.svg-hotspot-wrap').querySelector('[data-hotspot-feedback]');
      const parts = btn.dataset.hotspot.split(':');
      const title = parts.shift();
      const detail = parts.join(':').trim();
      box.innerHTML = `<strong>${title}</strong><br>${detail || 'Esse achado muda hipótese, risco ou conduta quando aparece no conjunto clínico correto.'}`;
      box.focus({ preventScroll: true });
    });
  });

  root.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.closest('.interactive-panel');
      const fb = panel.querySelector('[data-interaction-feedback]');
      panel.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('selected-ok', 'selected-no'));
      btn.classList.add(btn.dataset.ok === 'true' ? 'selected-ok' : 'selected-no');
      fb.textContent = btn.dataset.feedback || `Resposta esperada: grupo ${btn.dataset.abcd || ''}`;
      if (btn.dataset.abcd) fb.textContent = `Grupo ${btn.dataset.abcd}: classificação esperada para este caso.`;
      if (btn.dataset.step) fb.textContent = `Pista ${Number(btn.dataset.step) + 1}: ela aumenta o peso do diagnóstico quando combinada com as demais.`;
    });
  });

  root.querySelectorAll('[data-range-input]').forEach(input => {
    input.addEventListener('input', () => {
      const panel = input.closest('.interactive-panel');
      const value = Number(input.value);
      panel.querySelector('[data-range-value]').textContent = `${value}%`;
      panel.querySelector('[data-interaction-feedback]').textContent = value >= Number(panel.dataset.goodAt)
        ? 'Ht em ascensão: pense em hemoconcentração e extravasamento quando a clínica acompanha.'
        : 'Ht menor não garante melhora; se o paciente piora, sangramento entra na hipótese.';
    });
  });

  root.querySelectorAll('[data-laco-run]').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.closest('.interactive-panel');
      const kind = panel.querySelector('[data-laco-kind]').value;
      const count = Number(panel.querySelector('[data-laco-count]').value);
      const cutoff = kind === 'adulto' ? 20 : 10;
      panel.querySelector('[data-interaction-feedback]').textContent = count >= cutoff
        ? `Positiva para ${kind}. Isso apoia grupo B se não houver sinal de alarme.`
        : `Negativa para ${kind}. A prova não substitui avaliação clínica.`;
    });
  });

  root.querySelectorAll('[data-hydration-run]').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.closest('.interactive-panel');
      const weight = Number(panel.querySelector('[data-hydration-weight]').value);
      const group = panel.querySelector('[data-hydration-group]').value;
      const fb = panel.querySelector('[data-interaction-feedback]');
      if (group === 'A') fb.textContent = `Grupo A: ${weight * 60} ml/dia; cerca de 1/3 como SRO e 2/3 como outros líquidos.`;
      if (group === 'C') fb.textContent = `Grupo C: ${weight * 20} ml em 2 horas, podendo repetir até 3 vezes; depois manutenção.`;
      if (group === 'D') fb.textContent = `Grupo D: ${weight * 20} ml em 20 minutos, reavaliando choque e sobrecarga.`;
    });
  });

  root.querySelectorAll('[data-case-index]').forEach(btn => {
    btn.addEventListener('click', () => {
      const c = GLOBAL_CASES[Number(btn.dataset.caseIndex)];
      const box = root.querySelector('[data-global-case-feedback]');
      box.innerHTML = `<h3>${c.answer}</h3><p>${c.feedback}</p><div class="chip-row">${c.clues.map(clue => `<span>${clue}</span>`).join('')}</div><button class="page-nav-btn" data-goto="${c.target}">Revisar caso relacionado</button>`;
      box.querySelector('[data-goto]')?.addEventListener('click', e => router.navigate(e.currentTarget.dataset.goto));
    });
  });

  root.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
  });
}

Object.values(MODULE_DATA).forEach(module => {
  module.pages.forEach(modulePage => {
    GO_RENDER[modulePage.id] = function(el) {
      renderLearningPage(el, modulePage, module);
    };
  });
});
