# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm ci --only=production=false

# Copier le code source
COPY . .

# Build de l'application Astro
RUN npm run build

# Stage 2: Production
FROM node:22-alpine

WORKDIR /app

# Copier les fichiers de dépendances pour la production
COPY package*.json ./

# Installer uniquement les dépendances de production
RUN npm ci --only=production

# Copier le build depuis le stage précédent
COPY --from=builder /app/dist ./dist

# Exposer le port 4321 (port par défaut d'Astro)
EXPOSE 4321

# Variables d'environnement
ENV HOST=0.0.0.0
ENV PORT=4321

# Démarrer le serveur Node.js
CMD ["node", "./dist/server/entry.mjs"]



