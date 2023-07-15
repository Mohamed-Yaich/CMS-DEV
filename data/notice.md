# Enregistrer ce repo dans vos repo github

1. Sur GitHub, créez un nouveau dépôt vide.
2. Une fois le dépôt créé, copiez l'URL du dépôt
4. Sur votre machine locale, accédez au dossier du dépôt cloné que vous souhaitez transformer en votre propre dépôt.
5. Dans ce dossier, ouvrez un terminal ou une invite de commande.
6. Exécutez les commandes suivantes pour dissocier le dépôt cloné de l'ancien dépôt distant et configurer un nouveau dépôt distant vers votre dépôt nouvellement créé :

```Shell
    git remote remove origin
    git remote add origin <URL_DU_DEPOT_DISTANT>
```
Assurez-vous de remplacer <URL_DU_DEPOT_DISTANT> par l'URL du dépôt que vous avez copiée précédemment.

7. Vérifiez que vous êtes bien dans le répertoire racine du dépôt en exécutant la commande git remote -v. Vous devriez voir l'URL du nouveau dépôt distant que vous avez configuré.

8. Maintenant, vous pouvez pousser le code du dépôt cloné vers votre nouveau dépôt distant en exécutant la commande suivante :

```Shell
    git push -u origin main (ou master)
```

# Créer un template du repo

# API

## Mise en place de la BDD

Se connecter à PostgreSQL :

```bash
sudo -u postgres psql
```
Créer un utilisateur :

```sql
CREATE USER dev WITH PASSWORD 'dev';
```

Créer une base de données :

```sql
CREATE DATABASE dev WITH OWNER dev;
```

Quitter PostgreSQL : 

```sql
\q
```

exécuter le fichier SQL :

```shell
psql -U dev -d dev -a -f ./data/user.sql
```