# Docker - ThirdShop Landing

## 🚀 Build et lancement en production

### Option 1: Docker simple

```bash
# Build de l'image
docker build -f docker/Dockerfile -t thirdshop-landing .

# Lancer le container
docker run -d -p 3000:80 --name thirdshop-landing thirdshop-landing
```

### Option 2: Docker Compose (recommandé)

```bash
# Lancer l'application
docker-compose -f docker/docker-compose.yml up -d

# Voir les logs
docker-compose -f docker/docker-compose.yml logs -f

# Arrêter l'application
docker-compose -f docker/docker-compose.yml down
```

## 📦 Structure

- **Dockerfile** : Configuration multi-stage pour optimiser la taille de l'image
  - Stage 1: Build de l'application Astro avec Node.js
  - Stage 2: Servir les fichiers statiques avec Nginx
  
- **nginx.conf** : Configuration Nginx optimisée avec:
  - Compression gzip
  - Cache des assets statiques
  - Support de l'i18n
  - Headers de sécurité
  
- **docker-compose.yml** : Orchestration simplifiée du container

- **.dockerignore** : Exclusion des fichiers inutiles pour le build

## 🌐 Accès

Une fois lancé, l'application sera accessible sur:
- http://localhost:3000

## 🔧 Variables d'environnement

Pour ajouter des variables d'environnement, modifiez la section `environment` dans `docker-compose.yml` ou utilisez un fichier `.env`.

## 📝 Notes

- L'image finale est basée sur `nginx:alpine` pour une taille minimale
- Les fichiers statiques sont servis depuis `/usr/share/nginx/html`
- Le port 80 du container est mappé sur le port 3000 de l'hôte (configurable)



