FROM node:18-alpine as runner
RUN npm i -g next
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY next.config.js ./
COPY public ./public
COPY next ./.next
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
