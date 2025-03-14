# Use official Node.js image as base
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY backend/package.json ./
RUN npm install

# Copy all backend files
COPY backend/ .

# Expose the port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]