FROM node:20.5.0-alpine3.18

RUN addgroup astro && adduser -S -G astro astro

USER astro

WORKDIR /app/

COPY --chown=astro package*.json .

RUN npm i

COPY --chown=astro . .

EXPOSE 4321

CMD ["npm", "run", "dev"]
