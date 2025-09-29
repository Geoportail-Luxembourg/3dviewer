FROM node:20-alpine AS build

WORKDIR /app
COPY ./plugins/package*.json ./plugins/
RUN cd plugins && npm install

COPY ./build ./build/
COPY package*.json ./
RUN npm install
COPY . .
# builds the app into the dist/ directory
RUN npm run build
# adds the built plugins and configs to the dist/ directory
RUN npm run build-preview 

FROM nginx:1.28.0-alpine-slim

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]