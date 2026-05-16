## Gestion du projet

### Installation des dépendances, lancement du serveur et de vite

```bash
npm install
nodemon server/main.js
npm run dev -- --host 
```

- `npm run dev -- --host` : transmettre les arguments et exposer sur le réseau

### Exposer le front avec `ngrok`:

```bash
ngrok http 5173
```

### Formatter les fichiers

```bash
npx prettier --write .
```

### Verifier le code

```bash
npx eslint .
```
