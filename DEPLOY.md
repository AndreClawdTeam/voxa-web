# DEPLOY.md — Voxa Landing Page (voxa-web)

## Informações de Deploy

| Item | Valor |
|------|-------|
| **Porta** | `3001` |
| **URL** | `http://138.197.19.184:3001/` |
| **Método** | Next.js `next start` via systemd |
| **Serviço systemd** | `voxa-web.service` |
| **Working directory** | `/home/clawdbot/.openclaw/workspace/coding/voxa-web` |
| **Usuário** | `clawdbot` |

## Como Atualizar

```bash
cd /home/clawdbot/.openclaw/workspace/coding/voxa-web
git pull
npm ci
npm run build
sudo systemctl restart voxa-web
sudo systemctl status voxa-web
```

## Gerenciar o Serviço

```bash
# Ver status
sudo systemctl status voxa-web

# Ver logs
sudo journalctl -u voxa-web -f

# Reiniciar
sudo systemctl restart voxa-web

# Parar
sudo systemctl stop voxa-web

# Iniciar
sudo systemctl start voxa-web
```

## Stack

- Next.js 16.1.6
- React 19
- TypeScript
- TailwindCSS v4
- Framer Motion

## Notas de Deploy

- App é 100% estática (SSG) — `next build` gera HTML estático para todas as rotas
- Sem variáveis de ambiente necessárias
- Rotas: `/` (home), `/pricing`, `/_not-found`
- O `npm ci` usa `package-lock.json` para installs determinísticos

## ⚠️ O Que Jamais Fazer

- **Nunca** usar a porta 3000 (está em uso por outro serviço)
- **Nunca** parar o PostgreSQL (`postgresql@16-main`) — é compartilhado por todos os projetos
- **Nunca** editar arquivos diretamente em produção sem commitar antes
- **Nunca** rodar `npm run dev` em produção
- **Nunca** rodar `npm audit fix --force` sem testar o build depois
- **Nunca** desabilitar o serviço sem atualizar o VPS.md
