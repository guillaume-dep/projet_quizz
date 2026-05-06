le quiz type Kahoot avec Vite.

---

# 🧠 1. Objectif du projet

Créer un quiz multijoueur en temps réel :

* joueurs connectés via téléphone/PC
* un hôte contrôle les questions
* réponses en direct
* score + classement

Technos :

* Node.js (backend)
* Socket.IO (temps réel)
* Vite (frontend)

---

# 🏗️ 2. Architecture globale

```text id="qz_arch"
quiz-app/
│
├── server/        → logique + Socket.IO
├── client/        → Vite (UI)
└── shared/        → (optionnel) constantes events
```

---

# 🖥️ 3. Backend (Node + Socket.IO)

## Rôle du serveur

Le serveur est le **cerveau du jeu** :

* crée les rooms (parties)
* accepte/refuse joueurs
* stocke les réponses
* gère les questions
* calcule les scores
* synchronise tout

---

## États du jeu

```text id="states"
LOBBY
QUESTION
LOCKED
RESULT
FINISHED
```

---

## Structure logique serveur

### données principales

* rooms (parties)
* players
* current question
* answers
* scores

---

## Events Socket.IO

### client → server

* `create_game`
* `join_game`
* `start_game`
* `submit_answer`
* `next_question`

### server → client

* `game_created`
* `player_joined`
* `game_start`
* `new_question`
* `lock_answers`
* `show_results`
* `game_over`

---

## règle critique

👉 le serveur :

* décide du timing
* valide les réponses
* calcule les scores

👉 le client :

* affiche uniquement

---

# 🌐 4. Frontend avec Vite

## création projet

```bash id="vite_create"
npm create vite@latest client
cd client
npm install
npm install socket.io-client
```

---

## structure recommandée

```text id="vite_struct"
client/src/
│
├── main.js
├── socket/        → communication serveur
├── pages/
│   ├── Home
│   ├── Lobby
│   ├── Game
│   ├── Host
│   └── Results
├── components/
│   ├── Question
│   ├── AnswerButton
│   └── ScoreBoard
├── state/         → état global simple
└── constants/     → events socket
```

---

# 🎮 5. rôles utilisateurs

## host

* crée le quiz
* lance les questions
* voit les résultats globaux

## player

* rejoint avec code
* répond aux questions
* voit score

👉 rôle envoyé ou attribué par le serveur

---

# 🔁 6. flow du jeu

## 1. connexion

* socket connect

## 2. lobby

* players rejoignent room

## 3. start

* host lance quiz

## 4. question loop

* serveur envoie question
* joueurs répondent
* serveur lock
* résultats

## 5. score final

* classement global
* fin de partie

---

# ⏱️ 7. mécanique clé

### chaque question :

1. serveur envoie question
2. clients affichent
3. joueurs répondent
4. serveur bloque réponses
5. calcul score
6. envoi résultats

---

# 🧩 8. gestion de l’état client

Avec React (option recommandé mais pas obligatoire) ou JS simple :

* currentView
* role (host/player)
* currentQuestion
* score
* gameCode

---

# 📡 9. communication temps réel

Socket.IO gère :

* synchronisation questions
* réponses simultanées
* leaderboard live
* déconnexions

---

# 🚨 10. règles critiques

* serveur = autorité absolue
* client = affichage uniquement
* pas de validation côté client
* timer contrôlé serveur
* 1 room = 1 quiz

---

# ⚙️ 11. build Vite

```bash id="build_vite"
npm run build
```

Output :

```text
client/dist/
```

👉 servi par Node ou hébergé séparément

---

# 🧭 12. ordre de développement conseillé

1. serveur Socket.IO
2. création/join room
3. affichage question simple
4. réponse joueur
5. score
6. multi questions
7. host UI
8. timer
9. polish UI

---

# 📌 13. résumé

* Vite = frontend rapide et simple
* Node = backend logique
* Socket.IO = communication temps réel
* quiz = machine à états côté serveur

---

Si tu veux, je peux te faire la suite utile :

* un **diagramme d’état complet du quiz (ultra important pour éviter les bugs)**
* ou une **liste d’events Socket.IO parfaitement nommés + ordre d’implémentation**
