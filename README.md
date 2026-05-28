## Gestion du projet

- Le projet est une reproduction du jeu `Kahoot` dans les grandes lignes :
    - Creer une partie et la contrôler (`host`)
    - Rejoindre une partie (`player`)
    - Répondre à des questions de culture générale selon un mode de difficulté 
    - Classement final

- Réalisé en 60 heures de développement pendant 14 jours, le projet avait pour but d'apprendre les communications en temps réel avec WebSocket et d'utiliser React.
- Le projet m'a permis de comprendre :
    - les communications bidirectionnelles persistantes.
    - la gestion et vérifications d'états côté serveur sans faire confiance au client. 
    - J'ai également appris à utiliser ce système de communication avec React.

- L'app est installable en tant que PWA grâce à l'utilisation d'un tunnel HTTPS via ngrok pour les contraintes de sécurité. Le manifest et le service worker sont gérés avec VitePWA.

### Points forts 

- Découpage des communications entre client et serveur modulaire et propice à des extensions (musique, leaderboard...)
- Le serveur est le seul à décider ce que voit le joueur, la machine à état du jeu au lieu de routes permet d'empêcher le joueur de contrôler sa vue et donc d'empêcher de faire des actions indésirables.
- Mise en place d'une connexion Websocket côté client (`socket.js`) et un serveur Socket.IO côté backend (`main.js`) qui accepte et gère ces connexions. Ainsi le client et le serveur peuvent maintenant communiquer sur cette connexion.
- Traitement des déconnexions `host`/`player`

- Moteur de jeu `gameManager` gérant la logique du jeu, le serveur utilise le `gameManager` et envoie une réponse au client.

- Maquettage des écrans (voir screenshots)
- Variables globales pour le CSS (espacements, couleurs, polices...)
- CSS avec module pour ne pas mélanger les styles.

- UI/UX propice pour être joué que ce soit sur téléphone ou ordinateur tout en restant intuitive.
- Utilisation de librairies/frameworks modernes (React, Socket.IO, Node.js).
- Gestion du projet avec Git, commits réguliers et cohérents.
- Variable d'environnements pour le déquveloppement et la production
- Analyse du code avec Eslint
- Formatage automatique du code avec Prettier

### Points à améliorer

- La documentation du code du projet est partielle
- Découpage nécessaire du code dans certaines fonctions
- Clean global du code à faire

### Points faibles

- Des parties du code sont assez lourdes
- Manque de vision globale sur le projet au départ ayant entraîné des choix problématiques
- Le découpage entre `host` et `player` mal défini
- Gestion d'événements react parfois complexe
- Absence de tests du code

### IA - projet

- Aide à la génération du process d'installation de la PWA
- Génération de certaines parties du CSS
- Assistances sur certaines structures de composants React

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
