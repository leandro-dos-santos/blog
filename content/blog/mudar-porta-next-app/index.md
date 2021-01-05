---
title: Como alterar porta de aplicação Next.js
date: "2021-01-05T03:38:03.284Z"
description: "Como default a porta de uma aplicação React/Next.js é 3000. Nesse tutorial eu ensino como você pode alterá-la"
categories: [next.js]
---

Por padrão toda aplicação next.js/react.js é executada na porta 3000. Mas se você executar duas aplicações em seu computador você terá problemas. Como então alterar a porta de uma das suas aplicações?

A resposta em no package.json de sua aplicação. Normalmente ele vem configurado dessa forma:

```json
{
  "name": "learn-starter",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "10.0.1",
    "react": "16.13.1",
    "react-dom": "16.13.1"
  }
}
```

Mude a linha:

```json
"dev": "next dev",
```

Para:

```json
"dev": "next dev -p 3001",
```

Agora execute o comando ```npm run dev``` e acesse ```localhost:3001```