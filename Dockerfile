# Use Node.js LTS base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other files
COPY . .

# Run the bot
CMD ["node", "index.js"]
