# JobNager
Simplifiez votre recherche d'emploi avec une solution tout-en-un soutenu par IA qui vous aide à rester organisé, préparé et proactif.

---
## 🎯 Objectifs
Clarifier, faciliter et améliorer l'efficacité des chercheurs d'emploi en réduisant le temps de gestion dans le contexte actuel du marché de l'emploi.

### 👥 Public cible
> - Diplomé avec peu d'expérience recherchant des opportunités adaptés à leur profil.
> - Professionnels en reconversion recherchant:
>   - des options dans de nouveaux domaines, 
>   - des conseils,
>   - des outils pour la transition.
> - Professionnels en poste recherchant des opportunités tout en étant en emploi, besoin de discrétion et d'efficacité.

### 💓 Attentes du public
> - Centraliser les offres d'emploi de différentes plateformes,
> - Trouver des opportunités adaptés aux profils qui ont peu d'expérience,
> - Améliorer le suivi, l'état des candidatures et les préparations aux entretien (RH, technique).

---
## 👨🏼‍💻 Fonctionnalités 

### MVP
- Landing Page
- Connexion/déconnexion
- Agrégation d'offre d'emploi et de recruteurs
- Tableau de bord intuitif de gestion des candidatures et préparation aux entretiens
>- Mentions Légales
>- Sitemap
>- Support par email

### Evolutions potentiels
- Suggestion personnalisées d'offres d'emploi
>- Recherche, trier et filter les candidatures (métier, lieu, entreprise, envoi, contrat, statut)
>- Archivage des curriculum vitae et des lettres de motivations
>- CRUD du profil utilisateur avec notifications d'alerte et rappels de relance
>- Lister les compétences de l'utilisateur
>- Analyse des candidatures
>- Assistance par IA pour la génération de la préparation aux entretiens
>- Automatisation et personnalisation des relances
>- Intégration des plateformes de recrutement (LinkedIn, Indeed, Monster...)
>- FAQ, processus types et méthodologies
>- Chat en direct avec IA & développeurs
>- Créer ses CV & lettres de motivations

---
## 🌐 Technologies et Plateformes
| Frontend | Backend   | BDD       | API externe      | Gestion de projet | Gestion de version | Déploiement   |
| -------- | --------- | --------- | ---------------- | ----------------- | ------------------ | ------------- |
| ViteJS   | NodeJS    | MongoDB   | GéoAPI           | Notion            | Git                | GitHub Action |
| ReactJS  | ExpressJS | PosgreSQL?| IA générative ?  | Discord           | GitHub             | Vercel        |

### 🏛️ Plateforme et Architecture
- Single Page Application Responsive
- Possibilité d'une application mobile à long terme
- MVC
- API RESTful

### 🚢 Navigateur compatible
- Mobile, Tablette et Ordinateur grand publique
- Chrome, Safari

### 🇺🇳 Convention
- CamelCase (variables et fonctions)
- Naming des fichiers (context.folder.js)
- Git
  - Branches : prefix/feature
  - Commit : prefix: description

### 🦺 Mesure de Sécurité majeures
- Chiffrement des données sensibles
- Authentification sécurisée (OAuth, JWT)
- Politique de confidentialité claire pour les utilisateurs

---
## 🔏 Charte graphique et Typographie
Epuré, moderne, attrayant et accessible.
---
## 🎋 L'arborescence de l'application
### MVP
    Landing-page
        |--Emploi
        |--Mentions légales
        |--Sitemap
        |--Contact
        |--Tableau-de-bord-candidatures
        |--Profil
        |--Assistance

### Evolutions
    Landing-page
        |--FAQ
        |--Process-&-Methodologie
        |--Talk-with-developer
        |--Make-CV
        |--Make-motivation-letter

## ⏯️ Users stories
### MVP 
|                | En tant que... | Je veux...                                                      | Afin de ...                                               |
| -------------- | -------------- | --------------------------------------------------------------- | --------------------------------------------------------- |
| **MVP**        | Visiteur       | Voir la présentation de l'app                                   | Savoir je peux faire avec l'application                   |
|                |                | Créer un compte utilisateur                                     | Sécuriser mes données                                     |
|                |                | Rechercher une offre d'emploi                                   | Trouver une offre qui m'intéresse                         |
|                |                | Consulter l'intitulé de l'offre                                 | Identifier l'offre                                        |
|                |                | Consulter le type de contrat proposé                            | Identifier la proposition de contrat de l'employeur       |
|                |                | Consulter l'entreprise employeur                                | Identifier quel est l'entreprise employeuse               |
|                |                | Consulter la localisation de l'entreprise                       | Identifier la localité de l'entreprise                    |
|                |                | Être inviter à créer un profil                                  | Enregistrer mes conditions de recherche                   |
|                |                | Filtrer les offres                                              | Cibler les offres qui me concerne                         |
|                |                | Lire le plan de l'application                                   | M'orienter efficament dans l'application                  |
|                |                | Consulter les mentions légales                                  | Rassurer et identifier l'équipe de développement          |
|                |                | Contacter l'équipe de développement                             | Faire un retour par un mail à l'équipe de développement   |
| **Evolutions** |                |                                                                 |                                                           |
|                | Visiteur       | Me localiser grâce au device                                    | Gagner du temps dans la saisie du filtre                  |
| **MVP**        | Membre         | Me connecter                                                    | Consulter/Modifier mes données                            |
|                |                | Se souvenir de mon identifiant                                  | Saisir uniquement le mot de passe                         |
|                |                | Pouvoir réinitialiser identifiant/mot de passe                  | Connecter en cas d'oubli                                  |
|                |                | Me déconnecter                                                  | Etre discret                                              |
|                |                | Sélectionner une/des offres                                     | Choisir des offres à postuler                             |
|                |                | Enregistrer la/les offres sélectionnées                         | Retenir la/les offres ciblées                             |
|                |                | Consulter les offres enregistrées                               | Lire la/les offres ciblées                                |
|                |                | Contacter un recruteur (mail, téléphone, réseaux)               | Echanger au sujet d'une entreprise/offre                  |
|                |                | Modifier l'état de la candidature                               | Ajuster le statut de la candidature                       |
|                |                | Retenir les mots clés d'un offre                                | Connaître les attentes du recruteur                       |
|                |                | Retenir les compétences recherchées                             | Positionner par rapport à l'offre d'emploi                |
|                |                | Ajouter des notes à une candidature                             | Ajuster les mots clés de l'offre                          |
| **Evolutions** | Membre         | Définir mon taux de compétences visavis de l'offre              | Démarquer des autres candidats                            |
|                |                | Recevoir des suggestions d'offres                               | Postuler rapidement                                       |
|                |                | Identifier la compatibilité en l'offre et le profil utilisateur | Orienter le discours lors de l'entretien                  | 
|                |                | Archiver les fichiers des candidatures                          | Prendre rapidement connaissance des modifications         | 
|                |                | Configurer les alertes emplois que je souhaite                  | Prévenu rapidement des nouvelles opportunités             |
|                |                | Définir la période de rappel par défaut                         | Modifier les rappels (annulation, retardement)            |
|                |                | Lister les hards kills et soft skills                           | Préciser le profil utilisateur                            |
|                |                | Analyse l'historique de candidature                             | Connaitre le taux de réponse et le taux de correspondace  |
|                |                | Identifier les mots clés de l'offre                             | Orienter le profil utilisateur                            |
|                |                | Pré-remplir la note de préparation à l'entretien                | Pouvoir se focaliser sur les axes majeurs de négociations |
|                |                | Pré-remplir la relance à l'aide de la préparation d'entretien   | Prép arer le mail à envoyer                               |
|                |                | Définir la fréquence de relance que me convient                 | Préciser la fréquence des relances                        |
|                |                | Ajuster la fréquence des relances pour cette offre              | Ajuster cette relance à le planning                       |
|                |                | Enregistrer le compte à l'aide d'un compte google et linkedin   | Gagner du temps à la connexion                            |
|                |                | Consulter la FAQ                                                | Trouver une réponse à une question                        |
|                |                | Poser ma question à un chatbot                                  | Récupérer la réponse à ma question rapidement             |
|                |                | Consulter les conseils en méthodologie, processus               | Optimiser la recherche d'emploi                           |
|                |                | Envoyer un message instantanné au staff de l'application        | Faire un feedback                                         |
|                |                | Créer/modifier un curriculum vitae                              | Créer/retravailler mon curriculum vitae                   |
|                |                | Créer/modifier ma lettre de motivation                          | Créer/modifier ma lettre de motivation                    |


---
## 🛣️ Routes prévues
| URL                | Méthode HTTP | Code Succes          | Code Erreur                                      |
| ------------------ | ------------ | -------------------- | ------------------------------------------------ |
| /                  | GET          | 200 ok               | 404 Not Found, 500 Error server                  |
| /login             | POST         | 200 ok               | 400 Bad request, 404 Not Found, 500 Error server |
| /signin            | POST         | 200 ok, 201 Created  | 400 Bad request, 404 Not Found, 500 Error server |
| /offres            | GET          | 200 ok               | 404 Not Found, 500 Error server                  |
|                    | POST         | 200 ok, 201 Created  | 400 Bad request, 404 Not Found, 500 Error server |
|                    | DELETE       | 200 ok, 202 Accepted | 400 Bad request, 404 Not Found, 500 Error server |
| /mentions-legales  | GET          | 200 ok               | 404 Not Found, 500 Error server                  | 
| /plan-site         | GET          | 200 ok               | 404 Not Found, 500 Error server                  |
| /contact           | GET          | 200 ok               | 404 Not Found, 500 Error server                  |
|                    | POST         | 200 ok, 201 Created  | 400 Bad request, 404 Not Found, 500 Error server |
| /candidatures      | GET          | 200 ok               | 404 Not Found, 500 Error server                  |
|                    | POST         | 200 ok, 201 Created  | 400 Bad request, 404 Not Found, 500 Error server |
| /profil            | GET          | 200 ok               | 404 Not Found, 500 Error server                  |
|                    | POST         | 200 ok, 201 Created  | 400 Bad request, 404 Not Found, 500 Error server |
| /sav               | GET          | 200 ok               | 404 Not Found, 500 Error server                  |
|                    | POST         | 200 ok, 201 Created  | 400 Bad request, 404 Not Found, 500 Error server |
| /faq               | GET          | 200 ok               | 404 Not Found, 500 Error server                  |
| /methodologie      | GET          | 200 ok               | 404 Not Found, 500 Error server                  |
| /curriculum-vitae  | GET          | 200 ok               | 404 Not Found, 500 Error server                  |
|                    | POST         | 200 ok, 201 Created  | 400 Bad request, 404 Not Found, 500 Error server |
| /lettre-motivation | GET          | 200 ok               | 404 Not Found, 500 Error server                  |
|                    | POST         | 200 ok, 201 Created  | 400 Bad request, 404 Not Found, 500 Error server |
| *                  | GET          |                      | 404 Not Found, 500 Error server                  |
---
## 👨🏼‍🤝‍👨🏽 Rôles
- Christian - Initiative du projet
- Fabien - Développeur Fondateur de JobNager

---
## Document relatifs à la BDD

### Dictionnaire de données
```
{
        id_user: {
            name,
            password,
            confirm_password,
        },
        document: {
            base_curriculum_vitae,
            base_lettre_motivation
        }
        candidatures: {
            id_candidature: {
                poste,
                contrat,
                company,
                location,
                status [1-ciblé, 2-postulé, 3-relancé, 4-entretien],
                note,
                conseils,
                rappels,
                lien_offre,
                curriculum_vitae,
                lettre_motivation,
                contact_telephonique,
                contact_mail
            }
        }
    }
```

---
## Wireframes

---
## Suivi et Evaluation

### Mesure de succès
- Nombre d'utilisateur actif,
- Satisfaction utilisateurs (enquêtes, feedback),
- Taux de conversion.

## Voir aussi
> - https://www.linkedin.com/posts/christian-humbert-developpeur-web_gestion-de-courrier-activity-7074323241107902465-XXiA?utm_source=share&utm_medium=member_desktop
> - https://chrstn67.github.io/Mail-Search-Job-Manager/
