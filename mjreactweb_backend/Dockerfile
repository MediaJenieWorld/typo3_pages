# Use the official Node.js image
FROM node:20.10.0

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that Next.js uses
EXPOSE 5055

# Run the development server
CMD ["npm", "run", "dev"]

