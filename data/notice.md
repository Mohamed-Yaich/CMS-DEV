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