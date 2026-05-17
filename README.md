# Síndromes Febris — Da Febre Aguda à Febre Arrastada

Plataforma médica educacional interativa sobre:

- Dengue: triagem, classificação A/B/C/D e manejo.
- Febre Amarela × Leptospirose: síndrome febril ictérica, padrões laboratoriais e decisão terapêutica.
- Leishmaniose Visceral / Calazar: febre arrastada, baço gigante, pancitopenia e armadilha hematológica.

Subtítulo conceitual:

> Tempo, laboratório e epidemiologia mudam o diagnóstico.

## Estrutura

- `index.html`: shell do template adaptado.
- `js/data.js`: rotas, módulos, páginas, casos globais e matriz comparativa.
- `js/pages.js`: renderizadores, SVGs com hotspots, simuladores, quizzes, flashcards e páginas globais.
- `js/router.js`: hash-router.
- `js/app.js`: sidebar, progresso, tema e quiz engine.
- `css/*.css`: estilos do template + componentes específicos.
- `docs/`: matriz de conteúdo, QA e fontes textuais extraídas dos RTFs.

## Como rodar

```bash
python3 -m http.server 5174
```

Abrir:

```text
http://127.0.0.1:5174/
```

## Rotas principais

- `#home`
- `#mapa-global`
- `#simulador-global`
- `#revisao-global`
- `#matriz-global`
- `#den-01` até `#den-14`
- `#feb-01` até `#feb-13`
- `#lei-01` até `#lei-13`

## Escopo preservado

Não foi criado backend, autenticação, PWA, service worker, manifest ou cache. A plataforma permanece estática, navegável por hash e compatível com GitHub Pages.
