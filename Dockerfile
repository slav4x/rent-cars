# syntax=docker/dockerfile:1
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app ./

# Timeweb обычно прокидывает PORT, нам важно слушать его и на 0.0.0.0
EXPOSE 3000
CMD ["sh", "-c", "npm run start -- -p ${PORT:-3000} -H 0.0.0.0"]