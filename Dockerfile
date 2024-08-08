#Build state
FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install --only=prod

COPY . .

RUN npm run build

# Expose the port the application runs on

#PRODUCTION STATE

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


