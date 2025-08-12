# QAP Concursos — Landing Page (v2, especialista)

Landing page premium e persuasiva, estática para GitHub Pages. 
Inclui: fundo com gradient mesh + noise, componentes glass, slider, FAQ, CTA sticky, 
modal de **Diagnóstico Tático** que envia as respostas direto para o WhatsApp (sem backend).

## Publicar no GitHub Pages
1) Suba o conteúdo desta pasta na branch `main` do seu repositório.
2) Em **Settings › Pages**, selecione `Deploy from a branch` e `main`.
3) Aguarde alguns minutos para ficar online.

## Editar rapidamente
- **Números do WhatsApp** e mensagens: `assets/js/main.js` (arrays `numbers` e textos).
- **Logo/Favicons**: em `assets/img/` (já gerados a partir da sua marca).
- **Cores**: variáveis CSS em `assets/css/styles.css` (`--qap-red`, etc.).
- **Texto/Seções**: edite `index.html` (sem build).

## Estrutura
```
/
├─ index.html
└─ assets/
   ├─ css/styles.css
   ├─ js/main.js
   └─ img/
      ├─ logo-1024.png, logo-512.png, logo-192.png
      ├─ favicon-64.png, favicon-32.png, favicon-16.png
      └─ og-banner.jpg
```