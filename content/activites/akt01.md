---
sidebar: auto
lastUpdated: 'Mis à jour le '
---

# Gestion des comptes utilisateurs

## Objectifs poursuivis

Gestion des comptes utilisateurs. Les utilisateurs de l'application doivent s'identifier pour utiliser l'application. La méthode d'authentification repose sur la connaissance des paramètres suivants:
* Une adresse mail
* Un mot de passe

## Catégorie des personnes concernées

* Utilisateurs de l'application (internautes pour un usage gratuit et clients pour un usage payant)

## Catégorie des données collectées

* Données d'identification:
  * <b>adresse mail</b> utilisée pour s'identifier sur l'application
  * <b>mot de passe</b> utilisé pour sécudriser l'accés à l'application
  * <b>numéro d'identification du périphérique mobile</b> avec lequel l'utilisateur se connecte à l'application

## Durée de conservation des données

Les données sont conservées tant que l'utilisateur est enregistré sur le système. Dès lors que l'utilisateur
supprime son compte, les données d'identification sont supprimées.

## Catégorie de destinataires des données

* Destinataires internes (support et maintenance de l'application)

## Moyens informatiques

Les données sont stockées dans une base de données MongoDB. La base de données est hébergée chez un fournisseur de solutions "Cloud":
* Scaleway pour les tests (région Paris)
* Amazon pour la production (région Paris)

## Mesures de sécurité

### Contrôle d'accès des utilisateurs

Seule l'équipe de maintenance peut accéder aux bases de données. L'accès à la base de données est sécurisé par:
* Un identifiant
* Un mot de passe

### Mesures de traçabilité

### Mesure de protection des logiciels

L'accès à la base de données est sécurisé de part l'architecture 'cloud' de l'application. Elle peut être effectué que depuis le réseau privé de Kalisio.

### Sauvegarde des données

La base de données est sauvegardée de façon quotidienne sur l'infrastructure de Kalisio (service S3).

### Chiffrement des données

Les mots de passe entrés par les utilisateurs sont stockées de façon encrypté. De cette façon, les membres de Kalisio ne peuvent pas connaitre et utiliser les mots de passes saisis par les utilisateurs.

### Contrôle des sous-traitants

Sans-objet