# Implantação PWA Premium Offline-First — 01-Infecto

## Resumo

Foi adicionada uma camada PWA incremental, instalável, offline-first, versionada e compatível com GitHub Pages no subpath `/01-Infecto/`.

A implantação não reconstrói a plataforma e não altera conteúdo médico, módulos clínicos, SVGs, hotspots, quizzes, revisão ativa ou simulador global.

## Arquivos criados

- `manifest.webmanifest`
- `sw.js`
- `offline.html`
- `css/pwa.css`
- `js/pwa.js`
- `assets/icons/apple-touch-icon.png`
- `assets/icons/icon-72.png`
- `assets/icons/icon-96.png`
- `assets/icons/icon-128.png`
- `assets/icons/icon-144.png`
- `assets/icons/icon-152.png`
- `assets/icons/icon-180.png`
- `assets/icons/icon-192.png`
- `assets/icons/icon-384.png`
- `assets/icons/icon-512.png`
- `assets/icons/maskable-192.png`
- `assets/icons/maskable-512.png`
- `docs/pwa-implantacao.md`
- `docs/pwa-qa.md`

## Arquivos alterados

- `index.html`: metatags PWA/iOS, link do manifest, apple touch icon, CSS/JS da camada PWA.
- `js/data.js`: rota não clínica `#instalar-app` no bloco Integração Global.
- `js/pages.js`: card discreto no dashboard para a página `Como instalar o app` e atualização do contador de rotas para 46.

## Manifest

Arquivo: `manifest.webmanifest`

Campos principais:

- `name`: `Síndromes Febris`
- `short_name`: `Infecto`
- `description`: `Plataforma médica interativa sobre síndromes febris.`
- `start_url`: `./`
- `scope`: `./`
- `display`: `standalone`
- `orientation`: `portrait-primary`
- `background_color`: `#07090f`
- `theme_color`: `#0f766e`
- `categories`: `education`, `medical`, `productivity`

O uso de `./` em `start_url` e `scope` foi escolhido para funcionar tanto em localhost quanto em GitHub Pages sob `/01-Infecto/`.

## Ícones

Foram criados ícones locais em PNG, sem dependência externa. O manifest inclui tamanhos padrão e ícones maskable.

Ícones principais:

- `icon-192.png`
- `icon-512.png`
- `maskable-192.png`
- `maskable-512.png`
- `apple-touch-icon.png`

## Service Worker

Arquivo: `sw.js`

Versão atual do cache:

```text
infecto-pwa-v20260517-2
```

Estratégia:

- pre-cache do app shell e arquivos essenciais;
- cache versionado;
- remoção de caches antigos no `activate`;
- fallback de navegação para `index.html`;
- fallback offline para `offline.html` quando necessário;
- cache-first para assets do app shell;
- stale-while-revalidate para demais assets locais;
- suporte a `SKIP_WAITING`;
- `clients.claim()` após ativação.

O pre-cache possui 30 itens e foi validado sem arquivos inexistentes.

## Como forçar nova versão

1. Altere `CACHE_NAME` em `sw.js`.
2. Altere `CACHE_VERSION` em `js/pwa.js` para manter a página de instalação coerente.
3. Publique a nova versão.
4. Abra o app já visitado anteriormente.
5. O botão verde `Atualização disponível` deve aparecer quando o novo worker ficar em `waiting`.

## Página de Instalação

Rota:

```text
#instalar-app
```

Título:

```text
Como instalar o app
```

Conteúdo incluído:

- benefícios do app;
- instruções para iPhone/iPad Safari;
- instruções para Android/Chrome;
- instruções para desktop Chrome/Edge;
- observação segura para Safari/macOS;
- fallback quando `beforeinstallprompt` não estiver disponível;
- estado do service worker e do cache;
- explicação do botão `Atualização disponível`.

## CTA de Instalação

Foram adicionados:

- link/rota no menu lateral;
- card discreto no dashboard;
- botão discreto no header apenas quando `beforeinstallprompt` estiver disponível.

Se o navegador não expuser `beforeinstallprompt`, a página orienta o fluxo manual, especialmente iOS/Safari.

## Botão de Atualização

Texto exato:

```text
Atualização disponível
```

Comportamento:

1. Aparece apenas quando há service worker novo em `waiting`.
2. Envia `{ type: 'SKIP_WAITING' }` ao worker.
3. O service worker chama `self.skipWaiting()`.
4. O cliente escuta `controllerchange`.
5. A página recarrega uma única vez.
6. O botão é escondido após o início do fluxo.

O botão respeita `safe-area-inset` em mobile/iOS.

## Offline

Arquivo:

```text
offline.html
```

Mensagens obrigatórias presentes:

- `Você está offline.`
- `Parte da plataforma pode continuar disponível.`
- `Reconecte-se para atualizar o conteúdo.`

Após o primeiro carregamento online, a plataforma usa o `index.html` cacheado como fallback para rotas hash.

## GitHub Pages

A implantação foi pensada para:

```text
https://bauerfilho.github.io/01-Infecto/
```

Pontos críticos:

- `manifest.webmanifest` é referenciado de forma relativa;
- `sw.js` é registrado com `./sw.js`;
- `scope` do registro é `./`;
- `start_url` e `scope` do manifest são `./`;
- rotas hash continuam funcionando em reload e offline.

## Confirmações de preservação

- Conteúdo médico: preservado.
- Rotas clínicas: preservadas.
- Dashboard: preservado, com card PWA discreto adicionado.
- SVGs e hotspots: preservados.
- Quizzes: preservados.
- Revisão ativa: preservada.
- Simulador global: preservado.
- Dark mode: preservado.
- Template e navegação global: preservados, com uma rota não clínica adicionada.
