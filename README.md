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
- Landing Page (Présentation de l'application + création de compte utilisateur + connexion)
- Connexion/déconnexion
- Agrégation des offres d'emploi et des contacts des candidatures spontannées
- Tableau de bord intuitif de gestion des candidatures et préparation aux entretiens
>- Mentions Légales
>- Sitemap
>- Support par email

### Evolutions potentiels
- Analyse des candidatures (statistiques, taux de réponse)
- Suggestion personnalisées d'offres d'emploi
>- Recherche, trier et filter les candidatures (métier, lieu, entreprise, envoi, contrat, statut)
>- Archivage des curriculum vitae et des lettres de motivations
>- CRUD du profil utilisateur avec notifications d'alerte et rappels de relance
>- Assistance par IA pour la génération de la préparation aux entretiens
>- Automatisation et personnalisation des relances
>- Intégration des plateformes de recrutement (LinkedIn, Indeed, Monster...)
>- FAQ, processus types et méthodologies
>- Chat en direct avec IA & développeurs

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
- Naming des fichiers (objet.dossier.js)

### 🦺 Mesure de Sécurité majeures
- Chiffrement des données sensibles
- Authentification sécurisée (OAuth, JWT)
- Politique de confidentialité claire pour les utilisateurs

---
## 🔏 Charte graphique et Typographie
Epuré, moderne, attrayant et accessible.

## 🎋 L'arborescence de l'application
### MVP
    |--candidatures
    |--Mentions légales
    |--Sitemap
    |--Contact
    |---Login---|--candidature
                |--profil

## ⏯️ Liste des Users stories

---
## 🛣️ Liste des routes prévues

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
