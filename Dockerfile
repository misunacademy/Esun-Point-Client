FROM node:20-alpine AS base

RUN corepack enable
WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY misun-academy-server/package.json ./misun-academy-server/package.json
COPY misun-academy-client/package.json ./misun-academy-client/package.json
COPY Esun-Point-Client/package.json ./Esun-Point-Client/package.json
RUN pnpm install --frozen-lockfile --filter @misun/esun-point-client...

FROM base AS builder
COPY . .
RUN pnpm --filter @misun/esun-point-client build

FROM base AS dev
ENV NODE_ENV=development
COPY . .
EXPOSE 3001
CMD ["pnpm", "--filter", "@misun/esun-point-client", "run", "dev"]

FROM node:20-alpine AS production
RUN corepack enable
WORKDIR /app
COPY --from=builder /app ./
ENV NODE_ENV=production
EXPOSE 3001
CMD ["pnpm", "--filter", "@misun/esun-point-client", "start"]
