FROM node:22.2.0-alpine

LABEL maintainer="rubenag83@gmail.com"
LABEL aaplication="selft-assesment-charts"

WORKDIR /app

COPY package.json .

RUN npm install

COPY public /app/public
COPY src /app/src
COPY tsconfig.* .
COPY index.html .
COPY vite.config.ts .

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "preview"]