# QA PWA — 01-Infecto

## Ambiente Validado

Projeto local:

```text
/Users/bauervieiracesarfilhovieira/Documents/WORKING PROJECT/01-Infecto
```

Servidores locais usados:

```text
http://127.0.0.1:4173/
http://127.0.0.1:4174/01-Infecto/
```

O segundo servidor simula o subpath de produção do GitHub Pages.

## Versão do Cache

```text
infecto-pwa-v20260517-2
```

## Testes Técnicos

| Item | Status |
| --- | --- |
| `node --check` em todos os JS principais | OK |
| `node --check sw.js` | OK |
| `manifest.webmanifest` como JSON válido | OK |
| Pre-cache sem arquivos inexistentes | OK |
| Manifest encontrado em localhost | OK |
| Service worker registrado em localhost | OK |
| Cache criado em localhost | OK |
| Offline após primeiro carregamento | OK |
| Página `#instalar-app` acessível pelo menu | OK |
| CTA discreto no dashboard | OK |
| Botão automático de instalação preparado para `beforeinstallprompt` | OK |
| Fallback manual para iOS/Safari | OK |
| Botão `Atualização disponível` aparece com worker em `waiting` | OK |
| Clique envia `SKIP_WAITING` | OK |
| `controllerchange` recarrega uma única vez | OK |
| Cache antigo removido após ativação | OK |
| Subpath `/01-Infecto/` com scope correto | OK |
| Dark mode preservado | OK |
| Mobile sem overflow horizontal | OK |
| Console sem erros relevantes | OK |

## Validação de Rotas

Foram validadas 46 rotas em desktop e mobile:

- 45 rotas já existentes da plataforma;
- 1 rota nova não clínica: `#instalar-app`.

Resultado:

```text
desktopBroken: []
mobileBroken: []
console errors: []
```

## Validação do Manifest

Resultado observado em localhost:

```text
manifest: OK
url: http://127.0.0.1:4173/manifest.webmanifest
start_url: ./
scope: ./
display: standalone
orientation: portrait-primary
```

Resultado observado simulando GitHub Pages:

```text
url: http://127.0.0.1:4174/01-Infecto/manifest.webmanifest
start_url: ./
scope: ./
```

## Validação do Service Worker

Localhost:

```text
scope: http://127.0.0.1:4173/
active: true
cache: infecto-pwa-v20260517-2
```

Simulação GitHub Pages:

```text
scope: http://127.0.0.1:4174/01-Infecto/
active: true
cache: infecto-pwa-v20260517-2
```

Esse resultado confirma compatibilidade com publicação em:

```text
https://bauerfilho.github.io/01-Infecto/
```

## Validação Offline

Fluxo executado:

1. Abrir app online.
2. Aguardar service worker ativo.
3. Confirmar cache `infecto-pwa-v20260517-2`.
4. Ativar modo offline no navegador de teste.
5. Abrir rota hash cacheada.

Resultados:

```text
#feb-11 offline: Laboratório da leptospirose
#simulador-global offline em /01-Infecto/: Simulador Febre em Decisão
```

## Validação de Atualização

Fluxo executado:

1. Carregar app com cache `infecto-pwa-v20260517-1`.
2. Alterar versão para `infecto-pwa-v20260517-2`.
3. Chamar `registration.update()`.
4. Confirmar novo worker em `waiting`.
5. Confirmar botão verde com texto exato `Atualização disponível`.
6. Clicar no botão.
7. Confirmar envio de `SKIP_WAITING`.
8. Aguardar `controllerchange`.
9. Confirmar reload único e cache final.

Resultado:

```text
buttonText: Atualização disponível
waiting: true
cache final: infecto-pwa-v20260517-2
cache antigo removido: sim
reload loop: não observado
console errors: []
```

## Validação de Instalação

`beforeinstallprompt` depende do navegador, do modo de execução e dos critérios internos do Chromium/Chrome. A camada implementada:

- captura `beforeinstallprompt`;
- chama `preventDefault()`;
- guarda `deferredPrompt`;
- exibe CTA automático quando disponível;
- chama `prompt()` no clique;
- trata `accepted` e `dismissed`;
- oculta CTA em standalone;
- mostra instruções manuais quando o evento não existe.

No Playwright headless, o evento não foi exposto, então foi validado o fallback manual e o estado da página.

## Validação Mobile e Safe Area

Viewport testado:

```text
390 x 844
```

Resultado:

```text
overflow horizontal: não
botão de update criado: sim
safe area: CSS com env(safe-area-inset-right/bottom)
```

## Validação de Preservação

| Superfície | Status |
| --- | --- |
| Conteúdo médico | preservado |
| Rotas clínicas | preservadas |
| Dashboard | preservado |
| Módulos | preservados |
| SVGs | preservados |
| Hotspots | preservados |
| Quizzes | preservados |
| Revisão ativa | preservada |
| Simulador global | preservado |
| Dark mode | preservado |

## Limitações

- Não foi executado Lighthouse formal porque não há pipeline configurado no projeto.
- A instalação real em iOS/Safari precisa de validação manual em dispositivo Apple, pois Safari não expõe `beforeinstallprompt`.
- A instalação real em Chrome/Edge depende dos heurísticos do navegador, embora manifest, service worker e ícones estejam presentes e válidos.
