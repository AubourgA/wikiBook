# Wikibook

Wikibook est une application web développée en **React** permettant de gérer une bibliothèque en ligne. Les utilisateurs peuvent rechercher des livres, consulter leur disponibilité, et emprunter ou réserver des exemplaires. L'application est connectée à une API Symfony qui gère les données des livres et des utilisateurs.

## Fonctionnalités
  
#### Invité
- Recherche de livres par titre, auteur, genre, éditeur, etc.
- Visualisation des exemplaires disponibles pour chaque livre.
- Création de son espace utilisateur.
- Contacter le gérant.

#### Utilisateurs enregistrés
- Accès à son compte utilisateur.
- Emprunt et réservation de livres pour les utilisateurs inscrits.
- Définir ses préférences de lecture.
- Accéder et modifier son profil.

#### Admin

  - Création des auteurs, genres, éditeur...
  - Gestion des livres et exemplaires.
  - Suivi des emprunts par livres et utilisateurs.
  - Validation des retours des livres.
  - Recherche par champs sur les différentes entités.
  
  
#### Générale

- Modification du statut de l'exemplaire après emprunt
- Impossibilité de retirer un exemplaire s'il est déja emprunté
- Sécurisation des accès et protection par rôles
- Affichage de la disponibilité des livres
  

## Prérequis

- **Node.js** version 16 ou supérieure (recommandé : version 20).
- **npm** (ou **yarn**)

## API Symfony

Le projet utilise une API Symfony pour gérer les données relatives aux livres, aux exemplaires et aux utilisateurs. Vous pouvez consulter la documentation de l'API pour connaître les détails sur les différents endpoints disponibles.

Le repo est disponible : https://github.com/AubourgA/wikibookAPI

Suivez les étapes pour installer l'API en local et générer la base de données.

## Installation locale

1. Clonez ce dépôt Git :

   ```bash
   git clone https://github.com/AubourgA/wikiBook.git
   cd wikibook
   ```

2. Installez les dépendances du projet :

   ```bash
   npm install
   ```


3. Créez un fichier `.env` à la racine du projet avec les variables d'environnement nécessaires :

   ```bash
   VITE_BASE=https://localhost:num_port
   VITE_API=https://localhost:num_port/api
   ```
    avec le numero du port de votre back-end préalablement installé

4. Lancez l'application en mode développement :

   ```bash
   npm run dev
   ```

L'application sera disponible à l'adresse [http://localhost:5173](http://localhost:5173) par défaut.

## Variables d'environnement

Assurez-vous que les variables d'environnement suivantes sont bien définies dans le fichier `.env` :

- `VITE_BASE` : URL de base nécessaire pour l'authentification
- `VITE_API` : URL de l'API pour les endpoints de données (livres, utilisateurs, etc.).

  


## Scripts disponibles

- `npm run dev` : Lance l'application en mode développement.
- `npm run build` : Génère une version optimisée pour la production.
- `npm run preview` : Prévisualise l'application après le build.
- `npm run lint` : Vérifie la qualité du code avec ESLint.

## Déploiement

L'application est déployée sur un hébergement **O2Switch** via GitHub Actions.

## Démo

Disponibilité de l'application à l'adresse suivante : 
https://wikibook.adrienaubourg.fr/


## Contributions

Les contributions sont les bienvenues ! Merci de soumettre des issues et des pull requests pour toute amélioration ou correction.

## Licence

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus d'informations.
