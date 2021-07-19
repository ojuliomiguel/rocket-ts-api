FROM node:14.14.0-alpine3.12 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:14.14.0-alpine3.12 AS server
WORKDIR /app
COPY package* ./
RUN npm install --production
COPY --from=builder ./app/public ./public
COPY --from=builder ./app/build ./build
EXPOSE 8000
CMD ["npm", "start"]