FROM nginx:1.28.0-alpine-slim

RUN rm -rf /usr/share/nginx/html/*
COPY dist/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]