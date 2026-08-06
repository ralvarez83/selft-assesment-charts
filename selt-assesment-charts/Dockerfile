FROM node:22-alpine AS build

LABEL maintainer="rubenag83@gmail.com"
LABEL application="selft-assesment-charts"

RUN corepack enable

WORKDIR /app

# El lockfile entra en la imagen para que el build sea reproducible: sin él se
# instalaba lo último de cada rango y la imagen cambiaba en cada reconstrucción.
COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY tsconfig.* ./
COPY vite.config.ts ./
COPY index.html ./
COPY public /app/public
COPY src /app/src

RUN pnpm run build

FROM nginxinc/nginx-unprivileged:stable-bookworm-perl

EXPOSE 8080

COPY --from=build /app/dist /usr/share/nginx/html
