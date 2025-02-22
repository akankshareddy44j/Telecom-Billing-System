# Use official Node.js image for building the Angular app
FROM node:14 as build

WORKDIR /app

# Copy package.json and install dependencies
COPY frontend/package.json ./
RUN npm install

# Copy all frontend files
COPY frontend/ .

# Build the Angular app
RUN npm run build --prod

# Use nginx to serve the Angular app
FROM nginx:alpine
COPY --from=build /app/dist/ /usr/share/nginx/html
EXPOSE 80