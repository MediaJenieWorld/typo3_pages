# Use an official Node runtime as the base image
FROM node:20.16

# Set the working directory in the container
WORKDIR /app

# # Copy package.json and yarn.lock to the working directory
# COPY package.json ./


# Copy the entire project to the working directory
COPY . .

# Install the 'serve' package globally
RUN yarn global add serve && yarn install

# Build the React app
RUN yarn build

# Expose port 5000 (assuming your app runs on this port)
EXPOSE 5000

# Command to run the React app with Vite
CMD ["serve", "-s", "dist", "-l", "5000"]


