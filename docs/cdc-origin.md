https://www.linkedin.com/posts/christian-humbert-developpeur-web_gestion-de-courrier-activity-7074323241107902465-XXiA?utm_source=share&utm_medium=member_desktop

https://chrstn67.github.io/Mail-Search-Job-Manager/

# Cahier des Charges

#### Ligne directrice

- Mono-page
- Responsive
- SEO
- Sécurité
- Technos : ViteJS, NodeJS, Express
- Afficher les mentions légales (éventuellement sur autre page, ou sur le côté)
- Style épuré, moderne, attrayant, accessible

## FRONT (ViteJS)

### Formulaire de soumission de candidature

- Métier recherché 
- Nom de l'entreprise
- Lieu de l'entreprise (Utilisation de **GeoAPI** : Ville, Département (N° + Nom))
- Lien web de l'offre
- Jour de l'envoi de candidature
- Type de Contrat (Alternance, Stage, CDD, CDI, Intérim, Autre)
- Checkbox (Sur site, Remote partiel, FullRemote)
- Taux Horaire (Plein temps, Mi-Temps, Temps partiel)
- Bouton de soumission 

### Liste des candidatures

Libre choix :
- Sous forme de tableau (🔴Responsive compliqué)
- Sous forme de cartes
- Autre idée

Il doit y apparaitre :

- Nom du métier
- Lieu de l'entreprise
- Nom de l'entreprise
- Lien de l'annonce
- Date d'envoi
- Type de contrat
- Taux horaire
- Statut de la candidature (*En attente*, *Acceptée*, *Refusée*)
	- En fonction du statut, changer l'élément de couleur :
		- *En attente* : GRIS
		- *Acceptée* : VERT
		- *Refusée* : ROUGE
- Actions : _Modifier_ et _Supprimer_
	- Quand on clique sur _Modifier_, Actions : _Enregistrer_ et _Annuler_

>Il serait intéressant de pouvoir ranger/trier alphabétiquement en fonction du : _métier_, du _lieu_, du _nom de l'entreprise_, de la _date d'envoi_, du _type de contrat_, du _taux horaire_, du _statut de la candidature_ 
### Notes

Il s'agit d'une modale où l'on peut retrouver des notes.
La modale doit pouvoir s'ouvrir et se fermer.
Pour chaque note, on doit pouvoir _Écrire_, l'_Enregistrer_, la _Modifier_, la _Supprimer_.

Présentation visuelle de la modale : LIBRE

### Autre

Bouton d'Inscription/Connexion 

Modale de Création de Compte :
- Prénom - Nom
- Email
- Mot de passe (🔴Sécurité)
- Confirmation Mot de passe
- Checkbox 'Rester connecter' (Oui ou Non)

Si possible : 
- Se connecter avec Google
- Se connecter avec LinkedIn

## BACK

### MCD

![[Pasted image 20240314133832.png]]

### Dictionnaire de données


| Table       | Colonne               | Type de données | Longueur | Contrainte de nullité | Contrainte de clé | Référence                   |
|-------------|------------------------|-----------------|----------|----------------------|-------------------|-----------------------------|
| _User_      | Id__User_              | INT             |          | NOT NULL             | PRIMARY KEY       |                             |
|             | fullName               | VARCHAR         | 50       | NOT NULL             |                   |                             |
|             | password               | VARCHAR         | 50       | NOT NULL             |                   |                             |
|             | confirm_password       | VARCHAR         | 50       | NOT NULL             |                   |                             |
|             | stay_LogIn             | INT             |          | NOT NULL             |                   |                             |
|             | logIn_with             | INT             |          |                      |                   |                             |
| Candidature | Id_Candidature         | INT             |          | NOT NULL             | PRIMARY KEY       |                             |
|             | job                    | VARCHAR         | 50       | NOT NULL             |                   |                             |
|             | company_name           | VARCHAR         | 50       | NOT NULL             |                   |                             |
|             | location_job           | VARCHAR         | 50       | NOT NULL             |                   |                             |
|             | candidacy_link         | VARCHAR         | 500      | NOT NULL             |                   |                             |
|             | contract_type          | INT             |          | NOT NULL             |                   |                             |
|             | remote                 | INT             |          | NOT NULL             |                   |                             |
|             | hourly_rate            | INT             |          | NOT NULL             |                   |                             |
|             | calendar               | DATE            |          | NOT NULL             |                   |                             |
| Notes       | Id_Notes               | INT             |          | NOT NULL             | PRIMARY KEY       |                             |
|             | text_note              | VARCHAR         | 240      |                      |                   |                             |
| Apply       | Id__User_              | INT             |          | NOT NULL             | PRIMARY KEY       | FOREIGN KEY REFERENCES _User_(Id__User_)      |
|             | Id_Candidature         | INT             |          | NOT NULL             | PRIMARY KEY       | FOREIGN KEY REFERENCES Candidature(Id_Candidature) |
| Note        | Id__User_              | INT             |          | NOT NULL             | PRIMARY KEY       | FOREIGN KEY REFERENCES _User_(Id__User_)      |
|             | Id_Notes               | INT             |          | NOT NULL             | PRIMARY KEY       | FOREIGN KEY REFERENCES Notes(Id_Notes)        |

###### Remarques :

1. **Table 'User'**
*stay_login* est un ***Integer*** : 1 = Non; 2 = Oui
logIn_with est un ***Integer*** : 1 = Pas de connexion avec ; 2 = Google; 3 = LinkedIn

2. **Table 'Candidature'**
*location_job* est gérée en front avec **GeoAPI**, mais il faut enregistrer le choix de ville dans la BDD
*contract_type* est un ***Integer*** : 1 = Alternance; 2 = CDI; 3 = CDD; 4 = Intérim; 5 = Stage
_remote_ est un ***Integer*** : 1 = Sur site; 2 = Remote partiel; 3 = FullRemote
*hourly_rate* est un ***Integer*** : 1 = Mi-temps; 2 = Temps partiel; 3 = Temps-plein


### MLD 

_User_ = (Id__User_ INT, fullName VARCHAR(50), password VARCHAR(50), confirm_password VARCHAR(50), stay_LogIn INT, logIn_with INT);
Candidature = (Id_Candidature INT, job VARCHAR(50), company_name VARCHAR(50), location_job VARCHAR(50), candidacy_link VARCHAR(500), contract_type INT, remote INT, hourly_rate INT, calendar DATE);
Notes = (Id_Notes INT, text_note VARCHAR(240));
Apply = (#Id__User_, #Id_Candidature);
Note = (#Id__User_, #Id_Notes);



### User Stories

| User Story           | Description                                                                                                                                                                                                       |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| En tant que candidat | Je souhaite pouvoir soumettre ma candidature pour un métier spécifique                                                                                                                                            |
| En tant que candidat | Je souhaite indiquer le nom de l'entreprise pour laquelle je postule                                                                                                                                              |
| En tant que candidat | Je souhaite indiquer le lieu de l'entreprise                                                                                                                                                                      |
| En tant que candidat | Je souhaite fournir le lien web de l'offre d'emploi                                                                                                                                                               |
| En tant que candidat | Je souhaite enregistrer la date d'envoi de ma candidature                                                                                                                                                         |
| En tant que candidat | Je souhaite spécifier le type de contrat (Alternance, Stage, CDD, CDI, Intérim, Autre)                                                                                                                            |
| En tant que candidat | Je souhaite indiquer si le poste est sur site, en remote partiel ou full remote                                                                                                                                   |
| En tant que candidat | Je souhaite spécifier mon taux horaire (Plein temps, Mi-Temps, Temps partiel)                                                                                                                                     |
| En tant que candidat | Je souhaite pouvoir soumettre ma candidature via un bouton                                                                                                                                                        |
| En tant que candidat | Je souhaite voir la liste de mes candidatures sous forme de tableau ou de cartes                                                                                                                                  |
| En tant que candidat | Je souhaite voir le nom du métier, le lieu, le nom de l'entreprise, le lien de l'annonce, la date d'envoi, le type de contrat, le taux horaire et le statut de la candidature dans la liste des candidatures      |
| En tant que candidat | Je souhaite pouvoir modifier ou supprimer une candidature                                                                                                                                                         |
| En tant que candidat | Je souhaite pouvoir enregistrer ou annuler les modifications apportées à une candidature                                                                                                                          |
| En tant que candidat | Je souhaite pouvoir trier la liste des candidatures alphabétiquement en fonction du métier, du lieu, du nom de l'entreprise, de la date d'envoi, du type de contrat, du taux horaire, du statut de la candidature |
| En tant que candidat | Je souhaite pouvoir ouvrir et fermer une modale pour prendre des notes                                                                                                                                            |
| En tant que candidat | Je souhaite pouvoir écrire, enregistrer, modifier et supprimer des notes                                                                                                                                          |
| En tant que candidat | Je souhaite pouvoir m'inscrire ou me connecter à mon compte                                                                                                                                                       |
| En tant que candidat | Je souhaite pouvoir créer un compte en fournissant mon prénom, mon nom, mon email et mon mot de passe                                                                                                             |
| En tant que candidat | Je souhaite pouvoir confirmer mon mot de passe lors de la création de mon compte                                                                                                                                  |
| En tant que candidat | Je souhaite pouvoir choisir de rester connecté ou non                                                                                                                                                             |
| En tant que candidat | Je souhaite pouvoir me connecter avec mon compte Google ou LinkedIn                                                                                                                                               |
