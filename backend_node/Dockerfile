
# FROM --platform=linux/amd64 node:18-alpine as deps
# WORKDIR /usr/src/app

# COPY package*.json ./
# COPY prisma ./prisma
# RUN npm install
# RUN npx prisma generate

# FROM --platform=linux/amd64 node:18-alpine as builder
# WORKDIR /usr/src/app

# COPY --from=deps /usr/src/app/node_modules ./node_modules
# COPY . .
# RUN npm run build


# FROM --platform=linux/amd64 node:18-alpine as runner
# WORKDIR /usr/src/app

# COPY package*.json ./
# RUN npm ci --omit=dev

# COPY --from=builder /usr/src/app/dist ./dist
# COPY --from=base /usr/src/app/prisma ./prisma
# COPY --from=base /usr/src/app/node_modules/.prisma ./node_modules/.prisma

# CMD ["node", "dist/app"]

# Etapa base: instalar dependencias y generar Prisma
# FROM node:18-alpine AS base
# WORKDIR /usr/src/app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY prisma ./prisma
# COPY tsconfig.json ./
# COPY src ./src

# RUN npx prisma generate
# RUN npx tsc

# Etapa final para producción
# FROM node:18-alpine AS runner
# WORKDIR /usr/src/app
# COPY package.json package-lock.json ./
# RUN npm install --omit=dev
# COPY --from=base /usr/src/app/dist ./dist
# COPY --from=base /usr/src/app/prisma ./prisma
# COPY --from=base /usr/src/app/node_modules/.prisma ./node_modules/.prisma
# EXPOSE 3000
# CMD ["node", "dist/app.js"]

FROM node:18-alpine

WORKDIR /usr/src/app

# Copiar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar esquema Prisma
COPY prisma ./prisma/

# Generar cliente Prisma
RUN npx prisma generate

# Copiar código fuente
COPY . .

# Compilar TypeScript
RUN npm run build

# Exponer puerto
EXPOSE 3000

# Iniciar aplicación
CMD ["npm", "start"]




