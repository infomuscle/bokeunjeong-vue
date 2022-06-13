# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
ADD . .
RUN npm install
COPY . .
CMD ["npm", "run", "serve"]

# production stage
FROM nginx:stable-alpine as production-stage
COPY  ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]