FROM node:22 AS builder

WORKDIR /app

COPY package*.json /app/

RUN npm i

COPY . .

COPY .env.docker /app/.env

FROM node:22-alpine 

WORKDIR /app

COPY --from=builder /app/ /app/

EXPOSE 5000

CMD ["npm", "start"]