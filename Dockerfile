# Use the official Node.js image as the base image
FROM node:18


# Set the working directory inside the container
WORKDIR /app


# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./


# Install dependencies
RUN npm install


# Copy the rest of the application code to the working directory
COPY . .


# Expose the port that the app will run on
EXPOSE 5000


# Start the Node.js application
CMD ["npm", "start"]



