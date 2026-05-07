# Architecture du projet

## Serveur

- Controlleurs gérant l'état du jeu à présenter
- Routes, états du jeu :
  - `LOBBY` : lorsque les joueurs rejoignent la partie, partie non démarée, en attente du début
  - `QUESTION` : lorsque les questions sont diffusées
  - `RESULT` : lorsqu'il faut afficher les résultats
  - `FINISHED` : lorsque la partie est terminée

## Evenements 

### Clients

Actions possible d'un client :
- `create_game` : créer une partie | `create`
- `join_game` : rejoindre une partie existante | `join`
- `start_game` : lancer une partie | `HOST : start` 
- `submit_answer` : envoie d'une réponse | `CLIENT submit`
- `request_next_question` : passer à la question suivante | `HOST : request`

### Serveur

Annonces possibles du serveur :
- `game_created` : création room de jeu | `created`
- `player_joined` : ajout du joueur dans la room associée au code | `joined`
- `game_started` : début de la partie | `started`
- `new_question` : envoie la nouvelle question | `question`
- `show_results` : afficher les résultats à la fin du jeu | `results`
- `game_over` : retirer les joueurs de la room | `over`

---

1. host crée partie
2. joueurs rejoignent
3. host lance
4. serveur envoie question
5. joueurs répondent
6. serveur calcule
7. boucle
8. serveur envoie résultats
9. fin

--- 

Points à améliorer :
- `room` multiples
- `LOCKED` routes

--- 

### Communication 

Client → IOController → Game → IOController → Client

