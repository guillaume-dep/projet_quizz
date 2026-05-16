## Gestion du projet

### Installation des dépendances, lancement du serveur et de vite pour dev

```bash
npm install
nodemon server/main.js
npm run dev -- --host 
```

- `npm run dev -- --host` : transmettre les arguments et exposer sur le réseau

### Mode production du projet :

```bash
npm run build
nodemon server/main.js
ngrok http 8080
```

### Formatter les fichiers

```bash
npx prettier --write .
```

### Verifier le code

```bash
npx eslint .
```
