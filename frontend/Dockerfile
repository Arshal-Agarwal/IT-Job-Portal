FROM node:22 AS builder

WORKDIR /app

COPY package*.json /app/

RUN npm i

COPY . .

FROM node:22-alpine 

WORKDIR /app

COPY --from=builder /app/ /app/

EXPOSE 3000

CMD ["npm", "run", "dev"]