# QA — Integração Global

## Prompt 2D

- Dashboard global: implementado em `#home`.
- Mapa mental global: implementado em `#mapa-global`.
- Simulador global com 9 casos mínimos: implementado em `#simulador-global`.
- Revisão ativa global com flashcards, checklist e quiz: implementada em `#revisao-global`.
- Matriz comparativa global: implementada em `#matriz-global`.
- Links cruzados inteligentes: presentes nas páginas e no dashboard.
- Navegação global por trilhas: dashboard, integração, dengue, febre ictérica, leishmaniose.

## Auditoria de continuidade

- Dengue mantém eixo de febre aguda, sinais de alarme, A/B/C/D e hidratação.
- Febre Amarela × Leptospirose mantém eixo ictérico, laboratorial e terapêutico.
- Leishmaniose mantém eixo de febre arrastada, baço gigante, pancitopenia e armadilha hematológica.
- A integração não funde páginas principais nem reduz módulos.

## Validação renderizada

- Browser/IAB abriu `http://127.0.0.1:5174/`.
- Dashboard renderizou sem erros de console.
- `#den-01`, `#den-12`, `#feb-13`, `#lei-13`, `#simulador-global` e `#matriz-global` foram testadas.
- Hotspot, interação, quiz e simulador global responderam corretamente.
- Viewport mobile 390 × 844 validada.
